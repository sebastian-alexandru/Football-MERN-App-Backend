import {
    addNewPlayer, 
    getPlayers, 
    getPlayerById,
    updatePlayer,
    deletePlayer
} from "../controllers/playerControllers";

export const routes = (app) => {
    app.route('/players')
    // GET endpoint
        .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer)

    app.route('/players/:playerId')
    // GET specific player
        .get(getPlayerById)

    // UPDATE specific player
        .put(updatePlayer)

    // DELETE specific player
        .delete(deletePlayer)
}
