import {roads} from './roads.js';


//--------- COMMON LOGIC ---------//

function buildGraph(edges) {
    let graph = Object.create({});
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
        }
        for (let [from, to] of edges.map(r => r.split("-"))) {
            addEdge(from, to);
            addEdge(to, from);
           

    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
        console.log('PARCELS & PLACE',parcels, place)
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            console.log('------INSIDE IF-------')
            return this;
        } else {
            console.log('-------INSIDE ELSE---------')
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                console.log('DESTINATION & address',destination,p.address)
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            console.log('PARCELS 2', parcels)
            return new VillageState(destination, parcels);
        }
    }
};



function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

//--------- RANDOM ROBOT ---------//

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);
    