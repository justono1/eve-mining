/**
Manage And Control The actions Regarding Global Data
**/
export var updateFleetIDReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_FLEET_ID':
      return action.id;
    default:
     return state;
  }
}
export var updateFleetLocationReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_FLEET_LOCATION':
      return action.id;
    default:
      return state;
  }
}
export var toggleFleetStatusReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_FLEET_STATUS':
      return !state;
    default:
      return state;
  }
}
export var udpateBossNameReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_BOSS_NAME':
      return action.name;
    default:
      return state;
  }
}
export var udpateBossIDReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_BOSS_ID':
      return action.id;
    default:
      return state;
  }
}

export var updateInventoryPriceReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_INVENTORY_PRICE':
      return action.value;
    default:
      return state;
  }
}

/**
Manage And Control The actions Regarding Inventory
**/
export var inventoryReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ALL_INVENTORY':
      return [
        ...state,
        ...action.allInventory
      ];
    case 'ADD_INVENTORY':
      return [
        ...state,
        {
          typeID: action.typeID,
          units: 0
        }
      ];
    case 'REMOVE_INVENTORY':
      return state.filter((inventory) => {
        return inventory.typeID !== action.typeID
      });
    case 'UPDATE_INVENTORY':
      return state.map((inventory) => {
        if(inventory.typeID === action.typeID) {
          return {
            ...inventory,
            units: action.units
          }
        } else {
          return inventory;
        }
      });
    default:
      return state;
  }
}

/**
Manage And Control The actions Regarding Members
**/
export var memberReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FIRST_MEMBERS': //use for the first time fleet import starts ONLY
      return action.members.map((member) => {
        return {
          ...member,
          member_name: undefined,
          ship_name: undefined,
          ship_group_id: undefined,
          mining_time: 0,
          mining_now: undefined,
          ship_points: undefined,
          in_payout: true
        }
      });
    case 'ADD_MEMBER':
      return [
        ...state,
        {
          ...action.member,
        }
      ];
    case 'UPDATE_MEMBER':
      return state.map((member) => {
        if(member.character_id === action.character_id) {
          return {
            ...member,
            ...action.member
          }
        } else {
          return member;
        }
      });
    case 'REMOVE_MEMBER':
      return state.filter((member) => {
        return member.id !== action.id;
      });
    default:
      return state;
  }
}

/**
Manage And Control The actions Regarding Members
**/
var defaultSettings = [
  {
    id: 'taxRate',
    value: 5
  },
  {
    id: 'rorqual',
    value: 20
  },
  {
    id: 'orca',
    value: 12
  },
  {
    id: 'porpoise',
    value: 8
  },
  {
    id: 'hulk',
    value: 7
  },
  {
    id: 'mackinaw',
    value: 6
  },
  {
    id: 'skiff',
    value: 6
  },
  {
    id: 'covetor',
    value: 5
  },
  {
    id: 'retriever',
    value: 4
  },
  {
    id: 'procurer',
    value: 4
  },
  {
    id: 'venture',
    value: 2
  },
  {
    id: 'edurance',
    value: 3
  },
  {
    id: 'prospect',
    value: 3
  },
  {
    id: 'superCapital',
    value: 20
  },
  {
    id: 'capital',
    value: 15
  },
  {
    id: 'battleship',
    value: 7
  },
  {
    id: 't2Battlecruiser',
    value: 9
  },
  {
    id: 'battlecruiser',
    value: 5
  },
  {
    id: 't3Cruiser',
    value: 8
  },
  {
    id: 'cruiser',
    value: 3
  },
  {
    id: 'frigate',
    value: 1
  }
];

export var settingsReducer = (state = defaultSettings, action) => {
  switch(action.type) {
    case 'UPDATE_SETTING':
      return state.map((setting) => {
        if(setting.id === action.id) {
          return {
            ...setting,
            value: action.value
          }
        } else {
          return setting
        }
      });
    default:
      return state;
  }
}
