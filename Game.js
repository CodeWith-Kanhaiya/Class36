class Game {
    constructor() {}

    //write into the gameState value in the database
    //ball-position-x ,y
    //gameState, playerCount
    updateGameState(state){
    mydatabase.ref('/').update(  
        {
            gameState : state  
        }
    )
    }


    //read gameState value from database
    getGameState() {
        var gameStateref = mydatabase.ref('gameState')//polling
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }
    
    Start() {

        if(gameState === 0){

            form = new Form();
            form.display();



        }
    }
}