export const allRegionNames = `
    select
         r.regionName
        ,r.regionID
    from
        regions r
    order by
        r.regionName asc
`;

////////////////////////////////////////////////////////////////////////////////
// Standard
////////////////////////////////////////////////////////////////////////////////
const edgeDataStandard = `
    with data as (
        select
             j.*
            ,r1.regionName as fromRegionName
            ,r2.regionName as toRegionName
            ,s1.solarSystemName as fromSystemName
            ,s1.x as fromX
            ,s1.y as fromY
            ,s1.z as fromZ
            ,s2.solarSystemName as toSystemName
            ,s2.x as toX
            ,s2.y as toY
            ,s2.z as toZ
            ,row_number() over (partition by max(
                lower(s1.solarSystemName || s2.solarSystemName),
                lower(s2.solarSystemName || s1.solarSystemName)
            ) order by 
                 r1.regionName = $name desc
                ,s1.solarSystemName asc
            ) as rn
        from
            jumps j
        join
            regions r1
        on
            j.fromRegionID = r1.regionID
        join
            regions r2
        on
            j.toRegionID = r2.regionID
        join
            systems s1
        on
            j.fromSolarSystemID = s1.solarSystemID
        join
            systems s2
        on
            j.toSolarSystemID = s2.solarSystemID
        where
            r1.regionName = $name
    )
`;


export const regionConnectionsStandard = `
    ${edgeDataStandard}
    select
         fromX
        ,fromY
        ,fromZ
        ,toX
        ,toY
        ,toZ
        ,fromSolarSystemID
        ,toSolarSystemID
    from
        data
    where
        rn = 1
`;

export const regionCoordinatesAndStatusesStandard = `
    ${edgeDataStandard},
    ids as (
        select distinct
              fromSolarSystemID as solarSystemID
        from
            data
        union
        select distinct
             toSolarSystemID as solarSystemID
        from
            data
    )
    select
         s.solarSystemName
        ,s.x 
        ,s.y
        ,s.z
        ,s.security
        ,s.solarSystemID
        ,s.constellationID
        ,s.regionID
    from
        ids i
    join
        systems s
    on
        i.solarSystemID = s.solarSystemID
`;

export const systemsByConstellationStandard = `
    ${edgeDataStandard},
    ids as (
        select distinct
              fromSolarSystemID as solarSystemID
        from
            data
        union
        select distinct
             toSolarSystemID as solarSystemID
        from
            data
    ),
    final as (
        select
             s.solarSystemName
            ,s.x 
            ,s.y
            ,s.z
            ,s.security
            ,s.solarSystemID
            ,s.constellationID
            ,s.regionID
        from
            ids i
        join
            systems s
        on
            i.solarSystemID = s.solarSystemID
    )
    select 
         constellationID
        ,json_group_array(solarSystemID) as systems
    from
        final
    group by
        constellationID
`;

////////////////////////////////////////////////////////////////////////////////
// Subway
// TODO: These were adapted from the 'regular' version
// and could use some cleaning up to avoid unneded joins
// or unneeded filtering.
// Works for now
////////////////////////////////////////////////////////////////////////////////
const edgeDataSubway = `
    with data as (
        select
             j.*
            ,r1.regionName as fromRegionName
            ,r2.regionName as toRegionName
            ,s1.solarSystemName as fromSystemName
            ,s1.x as fromX
            ,s1.y as fromY
            ,s1.z as fromZ
            ,s2.solarSystemName as toSystemName
            ,s2.x as toX
            ,s2.y as toY
            ,s2.z as toZ
            ,row_number() over (partition by max(
                lower(s1.solarSystemName || s2.solarSystemName),
                lower(s2.solarSystemName || s1.solarSystemName)
            ) order by 
                 r1.regionName = $name desc
                ,s1.solarSystemName asc
            ) as rn
        from
            jumps j
        join
            regions r1
        on
            j.fromRegionID = r1.regionID
        join
            regions r2
        on
            j.toRegionID = r2.regionID
        join
            systemsSubway s1
        on
            j.fromSolarSystemID = s1.solarSystemID
            and
            r1.regionID = s1.subwayInitiatedFromRegionID
        join
            systemsSubway s2
        on
            j.toSolarSystemID = s2.solarSystemID
            and
            r1.regionID = s2.subwayInitiatedFromRegionID
        where
            r1.regionName = $name
    )
`;

export const regionConnectionsSubway = `
    ${edgeDataSubway}
    select
        json_object(
            'fromX', fromX,
            'fromY', fromY,
            'fromZ', fromZ,
            'toX', toX,
            'toY', toY,
            'toZ', toZ
        ) as d
    from
        data
    where
        rn = 1
`;

export const regionCoordinatesAndStatusesSubway = `
    ${edgeDataSubway},
    ids as (
        select distinct
              fromSolarSystemID as solarSystemID
        from
            data
        union
        select distinct
             toSolarSystemID as solarSystemID
        from
            data
    )
    select
        json_object(
            'systemName', s.solarSystemName,
            'security', s.security,
            'x',s.x ,
            'y',s.y,
            'z',s.z
        ) as d
    from
        ids i
    join
        systemsSubway s
    on
        i.solarSystemID = s.solarSystemID
    join
        regions r
    on
        r.regionID = s.subwayInitiatedFromRegionID
    where
        r.regionName = $name
`;

export const systemsByConstellationSubway = `
    ${edgeDataSubway},
    ids as (
        select distinct
              fromSolarSystemID as solarSystemID
        from
            data
        union
        select distinct
             toSolarSystemID as solarSystemID
        from
            data
    ),
    final as (
        select
             s.solarSystemName
            ,s.x 
            ,s.y
            ,s.z
            ,s.security
            ,s.solarSystemID
            ,s.constellationID
            ,s.regionID
        from
            ids i
        join
            systemsSubway s
        on
            i.solarSystemID = s.solarSystemID
    )
    select 
         constellationID
        ,json_group_array(solarSystemID) as systems
    from
        final
    group by
        constellationID
`;