# COMMON LOGIC

## Function buildGraph explanation.
 ### once the map is run the first time it would call addEdge, since there is no from value assigned to the object the first call the if statment is run and we create a new key with the 'from' argument and assign a value, the 'to' argument, after this we call again this function but now the values of [from, to] are interchanged, so we create a new key-value pair on the graph object,where the value is 'to' and the key is 'from'.
 ### if graph contains already a key with the same name, it would run the else statment of the addEdge, wich would just push another value inside the array of keys (referenced as 'to')
 
### &nbsp;&nbsp;callstack for first iteration looks like this:

### &nbsp;&nbsp;&nbsp; * MAP RETURNED THIS ARRAY AS [from, to]----->[ "Alice's House", "Bob's House" ]
### &nbsp;&nbsp;&nbsp; * CALLBACK A -----> addEdge(from, to);
### &nbsp;&nbsp;&nbsp; * GRAPH BEFORE addEdge call execution-----> {}
### &nbsp;&nbsp;&nbsp; * GRAPH AFTER addEdge call execution-----> { "Alice's House": [ "Bob's House" ] } 
### &nbsp;&nbsp;&nbsp; * CALLBACK B -----> addEdge(to, from);
### &nbsp;&nbsp;&nbsp; * GRAPH BEFORE addEdge call execution -----> { "Alice's House": [ "Bob's House" ] }
### &nbsp;&nbsp;&nbsp; * GRAPH AFTER addEdge call execution -----> {"Alice's House":[ "Bob's House" ], "Bob's House":[ "Alice's House" ]} 

# VILLAGE STATE

## This class has a constructor function that needs a current starting point (where the robot is at before running any logic) and the array holding all the parcels, this is an array of objects that look like this [ {place : location A, address : location B}, {... } ], the place is where the package has to be picked, the location is where it must be delivered. The class that holds the state of the Village has a method called 'move' that takes in a destination argument, this is where you want to move to, so it would first check if there is a road from the current location (this.place) to the destination, and if not it would not update either the current location or the parcels array.

## The map checks wich parcels are left, taking off from the array the ones that were at the current location (becouse we pick them up) and