class Solution:
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
      edges_dict=dict() # this gonna be like {1: {3}, 2: {3}, 3: {1, 2}}
      for u,v in edges:
        if u in edges_dict:
          edges_dict[u].add(v)
        else:
          edges_dict[u]={v}
        if v in edges_dict:
          edges_dict[v].add(u)
        else:
          edges_dict[v]={u}

      # initialize queue
      queue=list()
      for v in edges_dict: # all vertexes that exists as start point
        queue.append([v,v,-1]) # vertexes in list means [start, current, previous]

      distance=0
      while(queue):
        queue_next=list()
        path = set()
        for start,current,previous in queue: # cycle search nodes in same distance(depth)
          for next_v in edges_dict[current]:
            if next_v != previous:
              if (start,next_v) not in path:
                if next_v==start:return distance+1 # cycle found!
                queue_next.append((start,next_v,current))
                path.add((next_v,start)) # skips case going reversed path
        queue=queue_next
        distance+=1
      return -1 # no cycle        