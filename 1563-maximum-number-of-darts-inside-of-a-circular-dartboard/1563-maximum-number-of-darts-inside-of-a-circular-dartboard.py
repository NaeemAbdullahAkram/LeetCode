class Solution:
    # initialize with fields as needed 
    def __init__(self) : 
        self.pL = 1 
        self.max_points = 0
        self.distances = [[]]
        self.angles = [] 

    def get_distance(self, p1, p2) : 
        # euclidean distance between two points 
        del_x = p1[0] - p2[0]
        del_y = p1[1] - p2[1]
        return math.sqrt((del_x**2) + (del_y **2))

    def set_up(self, darts) : 
        # number of points is number of darts 
        self.pL = len(darts)
        # for which the distances are the same in sizing 
        self.distances = [[0 for _ in range(self.pL)] for __ in range(self.pL)]
        # for point i in range up to pL - 1 
        for p_i in range(self.pL - 1) : 
            # for point j in range point i + 1 up to pL 
            for p_j in range(p_i + 1, self.pL) : 
                # get each point 
                p1 = darts[p_i]
                p2 = darts[p_j]
                # find distance 
                distance = self.get_distance(p1, p2)
                # set appropriately 
                self.distances[p_i][p_j] = distance 
                self.distances[p_j][p_i] = distance

    # to get angle vectors for a given point with radius and list of points 
    def set_angle_vectors(self, p_i, radius, points) : 
        # reset to build 
        self.angles = [] 
        # for point j in range points L 
        for p_j in range(self.pL) : 
            # on non-match and distance in radius of 2*r 
            if p_i != p_j and self.distances[p_i][p_j] <= 2 * radius : 
                # get beta angle via cosine inverse 
                # beta angle is angle between the distance line measure and the diameter 
                beta = math.acos(self.distances[p_i][p_j] / (2*radius))
                # map in points x and y components 
                pix, piy = points[p_i]
                pjx, pjy = points[p_j]
                # get alpha angle via squared tan inverse 
                # this is the angle between the points that is not the right angle 
                alpha = math.atan2(piy-pjy, pix - pjx)
                # set alpha flag value to result of alpha - beta and beta flag to alpha + beta 
                alpha_flag = alpha - beta 
                beta_flag  = alpha + beta
                # append alpha with False and beta with True 
                self.angles.append((alpha_flag, False))
                self.angles.append((beta_flag, True))
    
    def get_num_points_inside(self) : 
        # sort the angles by their first property then their second 
        # Here the alpha and beta flags are denoted by their differences 
        # So long as all the alphas are less then the beta flags, which is true for positive alpha beta 
        # where alpha is lte alpha, positive alpha and negative beta, negative alpha and positive beta, 
        # and never for both negative we will count the alpha's before the betas 
        # these are points that lie in the best circle placement we could consider for a given point 
        # where we settle ties by having alpha appear before beta using false which evaluates to 0 
        # and true which evaluates to 1
        # We also consider the idea here that as we move the placement there is an order to the maximal placement where some points will be lost as we move it to such a position that the circle is now past the radius (the 2*r being part of the beta angle calculation).
        # our process in simplified terms is to find the number of points such that the point in question with that point has an angle alpha < 90 and beta < 90 with a length of at most 2 * r from our given point 
        self.angles.sort()
        # num points inside is 1 and maximum_num_points_inside is 1 to start 
        # this is because we can always at least capture the current point in question 
        num_points_inside = 1 
        maximum_num_points_inside = 1 
        # for angle in self.angles 
        # these are the points where the distance of points is lte 2 r 
        for angle in self.angles : 
            # update num points and then maximum_num_points_inside
            num_points_inside += 1 if angle[1] == False else -1
            maximum_num_points_inside = max(maximum_num_points_inside, num_points_inside)
        # return maximum found 
        return maximum_num_points_inside

    def numPoints(self, darts: List[List[int]], r: int) -> int :
        # set up 
        self.set_up(darts)
        # for each point index 
        for p_i in range(self.pL) : 
            # set angle vectors accordingly 
            self.set_angle_vectors(p_i, r, darts)
            # get current num points inside based on angle vectors 
            current_num_points_inside = self.get_num_points_inside()
            # update max points appropriately
            self.max_points = max(self.max_points, current_num_points_inside)
        # return valuation 
        return self.max_points