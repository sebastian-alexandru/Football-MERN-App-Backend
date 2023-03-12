import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body)

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player)
    });
};

export const getPlayers = (req, res) => {
    Player.find({}, (err, player) => {
        if (err) {
            res.send(err)
        }
        res.json(player)
    })
}

export const getPlayerById = (req, res) => {
    Player.findById(req.params.playerId, (err, player) => {
        if (err) {
            res.send(err)
        }
        res.json(player)
    })
}

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.playerId}, req.body, {new: true}, (err, player) => {
        if (err) {
            res.send(err)
        }
        res.json(player)
    })
}

export const deletePlayer = (req, res) => {
    Player.remove({ _id: req.params.playerId}, (err, player) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'successfully deleted player' })
    })
}
