--
-- Top cities by Starbucks
--

select City, State_Province, Country, count(*) as stores from stores
where City IS NOT ""
group by City, State_Province, Country
order by stores desc
limit 30;

.width 30 20
select c.Common_Name, count(*) as stores 
from stores s join countries c on s.Country = c.Letter_Code
where City IS NOT ""
group by country
order by stores desc
limit 10;
