class Solution:
    def filterRestaurants(self, restaurants: List[List[int]], vegan: int, max_price: int, max_dist: int) -> List[int]:
        entries = []
        for _id, rating, vegan_friendly, price, dist in restaurants:
            if any((
                vegan and not vegan_friendly,
                price > max_price,
                dist > max_dist,
            )):
                continue
            entries.append((-rating, -_id))
        entries.sort()
        return [-v[1] for v in entries]