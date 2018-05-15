

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

// ============
// BLOCKS STUFF
// ============

// CURRENT BLOCK
var KEY_A = 'S'.charCodeAt(0);
var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_D = 'S'.charCodeAt(0);

var g_paddle1 = new Paddle({
    cx : 30,
    cy : 100,
    
    GO_UP   : KEY_W,
    GO_DOWN : KEY_S,
    GO_LEFT : KEY_A,
    GO_RIGHT : KEY_D
});


var KEY_I = 'I'.charCodeAt(0);
var KEY_K = 'K'.charCodeAt(0);


function gatherInputs() {
    // The event handlers do everything we need for now.
}


// GAME-SPECIFIC UPDATE LOGIC

function updateSimulation(du) {
        
    g_paddle1.update(du);
}


// GAME-SPECIFIC RENDERING

function renderSimulation(ctx) {    
    g_paddle1.render(ctx);
}

// Kick it off
g_main.init();