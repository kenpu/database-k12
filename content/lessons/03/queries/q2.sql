--
-- Starbucks in Toronto
--

SELECT count(*) as stores_in_toronto
FROM stores
WHERE City = 'Toronto' and State_Province = 'ON';

--
-- Extreme locations
--

.width 6 30 40

WITH toronto AS (
    SELECT Store_Name, Street_Address, Latitude, Longitude
    FROM stores
    WHERE city = 'Toronto'
)
SELECT "EAST" as loc, Store_Name, Street_Address
FROM toronto
WHERE (Latitude = (SELECT max(Latitude) from toronto))
union
SELECT "WEST" as loc, Store_Name, Street_Address
FROM toronto
WHERE (Latitude = (SELECT min(Latitude) from toronto))
union
SELECT "SOUTH" as loc, Store_Name, Street_Address
FROM toronto
WHERE (Longitude = (SELECT min(Longitude) from toronto))
union
SELECT "NORTH" as loc, Store_Name, Street_Address
FROM toronto
WHERE (Longitude = (SELECT max(Longitude) from toronto));

