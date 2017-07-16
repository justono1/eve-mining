/**
Global Action Generators
**/
export var updateFleetID = (id) => {
  return {
    type: 'UPDATE_FLEET_ID',
    id
  }
}
export var updateFleetLocation = (id) => {
  return {
    type: 'UPDATE_FLEET_LOCATION',
    id
  }
}
export var toggleFleetStatus = () => {
  return {
    type: 'TOGGLE_FLEET_STATUS',
  }
}
export var updateBossName = (name) => {
  return {
    type: 'UPDATE_BOSS_NAME',
    name
  }
}
export var updateBossID = (id) => {
  return {
    type: 'UPDATE_BOSS_ID',
    id
  }
}

/**
Inventory Action Generators
**/
export var addAllInventory = (allInventory) => {
  return {
    type: 'ADD_ALL_INVENTORY',
    allInventory
  };
};

export var addInventory = (typeID) => {
  return {
    type: 'ADD_INVENTORY',
    typeID
  };
};

export var removeInventory = (typeID) => {
  return {
    type: 'REMOVE_INVENTORY',
    typeID
  };
};

export var updateInventory = (typeID, units) => {
  return {
    type: 'UPDATE_INVENTORY',
    typeID,
    units
  };
};

export var updateInventoryPrice = (value) => {
  return {
    type: 'UPDATE_INVENTORY_PRICE',
    value
  };
}


/**
Member Action Generators
**/
export var addFirstMembers = (members) => {
  return {
    type: 'ADD_FIRST_MEMBERS',
    members
  };
};
export var addMember = (member) => {
  return {
    type: 'ADD_MEMBER',
    member
  };
}
export var updateMember = (character_id, member) => {
  return {
    type: 'UPDATE_MEMBER',
    character_id,
    member
  };
}
export var removeMember = (id) => {
  return {
    type: 'REMOVE_MEMBER',
    id
  };
}


/**
Setting Action Generators
**/
export var updateSetting = (id, value) => {
  return {
    type: 'UPDATE_SETTING',
    id,
    value
  };
}
