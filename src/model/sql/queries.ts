export const allRegionNames = `
    select
         r.regionName
        ,r.regionID
    from
        regions r
    order by
        r.regionName asc
`;

export const galaxyCoordinatesAndStatuses = `
    select 
         s.solarSystemName
        ,s.x 
        ,s.y
        ,s.z
        ,s.security
    from
        systems s
`;

const edgeData = `
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

export const regionConnections = `
    ${edgeData}
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

export const regionCoordinatesAndStatuses = `
    ${edgeData},
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

export const systemsByConstellation = `
    ${edgeData},
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
`