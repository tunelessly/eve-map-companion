export const allRegionNames = `
    select
        r.regionName
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


export const regionConnections = `
    select 
         s1.x
        ,s1.y
        ,s1.z
        ,s2.x
        ,s2.y
        ,s2.z
    from 
        jumpsSingle j
    join
        systems s1
    on
        j.fromSolarSystemID = s1.solarSystemID
    join
        systems s2
    on
        j.toSolarSystemID = s2.solarSystemID
    join
        regions r1
    on
        j.fromRegionID = r1.regionID
    join
        regions r2
    on
        j.toRegionID = r2.regionID
    where
        r1.regionName = $name
        or
        r2.regionName = $name
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

export const regionConnections2 = `
    ${edgeData}
    select
         fromX
        ,fromY
        ,fromZ
        ,toX
        ,toY
        ,toZ
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
    from
        ids i
    join
        systems s
    on
        i.solarSystemID = s.solarSystemID
`;