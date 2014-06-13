/**
 * GameController
 *
 * @description :: Server-side logic for managing Games
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var uuid = require('node-uuid');

module.exports = {
	joinLobby: function(req, res) {
        var nick = req.param('nick');

        res.json(200, {nick: nick, token: tokenService.issueToken(uuid.v4())});
    },

    joinGame: function(req, res) {
        var data = {
            Name: 'Awesome game',
            Players: [
                {
                    nick: 'foo',
                    points: 0,
                    state: 0
                },
                {
                    nick: 'bar',
                    points: 0,
                    state: 0
                }
            ],
            Stage: {
                width: 10,
                height: 10
            },
            Ships: [
                {
                    id: 1,
                    name: 'Ruotsin laiva',
                    width: 4
                },
                {
                    id: 2,
                    name: 'Jolla',
                    width: 1
                }
            ]
        };

        res.json(data);
    },

    PlaceShips: function(req, res) {
        var data = {
            foo: 'bar'
        };

        res.json(data);
    }
};
