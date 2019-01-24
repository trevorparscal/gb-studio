import * as types from "./actionTypes";

export const loadWorld = id => async dispatch => {
  dispatch({ type: types.WORLD_LOAD_REQUEST });
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/worlds/${id}`
    );
    const world = await res.json();
    dispatch({ type: types.WORLD_LOAD_SUCCESS, data: world });
  } catch (e) {
    dispatch({ type: types.WORLD_LOAD_FAILURE });
  }
};

export const saveWorld = () => async (dispatch, getState) => {
  const state = getState();
  if (!state.world.id) {
    alert("NO ID");
  }

  dispatch({ type: types.WORLD_SAVE_REQUEST });
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/worlds/${state.world.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state.world)
      }
    );
    const world = await res.json();
    dispatch({ type: types.WORLD_SAVE_SUCCESS, data: world });
  } catch (e) {
    dispatch({ type: types.WORLD_SAVE_FAILURE });
  }
};

export const setTool = tool => {
  console.log("ACTION", { type: types.SET_TOOL, tool });
  return { type: types.SET_TOOL, tool };
};

export const setSection = section => {
  return { type: types.SET_SECTION, section };
};

export const setNavigationId = id => {
  return { type: types.SET_NAVIGATION_ID, id };
};

export const addMap = (x, y) => {
  return { type: types.ADD_MAP, x, y };
};

export const selectMap = mapId => {
  return { type: types.SELECT_MAP, mapId };
};

export const moveMap = (mapId, moveX, moveY) => {
  return { type: types.MOVE_MAP, mapId, moveX, moveY };
};

export const editMap = (mapId, values) => {
  return { type: types.EDIT_MAP, mapId, values };
};

export const removeMap = mapId => {
  return { type: types.REMOVE_MAP, mapId };
};

export const addActor = (mapId, x, y) => {
  return { type: types.ADD_ACTOR, mapId, x, y };
};

export const moveActor = (mapId, index, moveX, moveY) => {
  return { type: types.MOVE_ACTOR, mapId, index, moveX, moveY };
};

export const selectActor = (mapId, index) => {
  return { type: types.SELECT_ACTOR, mapId, index };
};

export const removeActor = (mapId, index) => {
  return { type: types.REMOVE_ACTOR, mapId, index };
};

export const removeActorAt = (mapId, x, y) => {
  return { type: types.REMOVE_ACTOR_AT, mapId, x, y };
};

export const editActor = (mapId, index, values) => {
  return { type: types.EDIT_ACTOR, mapId, index, values };
};

export const addCollisionTile = (mapId, x, y) => {
  return { type: types.ADD_COLLISION_TILE, mapId, x, y };
};

export const removeCollisionTile = (mapId, x, y) => {
  return { type: types.REMOVE_COLLISION_TILE, mapId, x, y };
};

export const addTrigger = (mapId, x, y) => {
  return { type: types.ADD_TRIGGER, mapId, x, y };
};

export const removeTrigger = (mapId, index) => {
  return { type: types.REMOVE_TRIGGER, mapId, index };
};

export const removeTriggerAt = (mapId, x, y) => {
  return { type: types.REMOVE_TRIGGER_AT, mapId, x, y };
};

export const resizeTrigger = (mapId, index, startX, startY, x, y) => {
  return { type: types.RESIZE_TRIGGER, mapId, index, startX, startY, x, y };
};

export const moveTrigger = (mapId, index, moveX, moveY) => {
  return { type: types.MOVE_TRIGGER, mapId, index, moveX, moveY };
};

export const editTrigger = (mapId, index, values) => {
  return { type: types.EDIT_TRIGGER, mapId, index, values };
};

export const selectTrigger = (mapId, index) => {
  return { type: types.SELECT_TRIGGER, mapId, index };
};

export const renameFlag = (flagId, name) => {
  return { type: types.RENAME_FLAG, flagId, name };
};

export const setStatus = status => {
  return { type: types.SET_STATUS, status };
};

export const selectWorld = () => {
  return { type: types.SELECT_WORLD };
};

export const editWorld = values => {
  return { type: types.EDIT_WORLD, values };
};
