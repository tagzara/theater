const Play = require('../models/Play.js');

async function getAllPlays() {

}

async function getPlayById() {

}

async function createPlay(playData) {
    const play = new Play(playData);

    await play.save();

    return play;
}

async function editPlay(id, playData) {

}

async function deletePlay(id) {

}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay
};