class Form{
    constructor(){
        this. title=createElement("h1")
        this. input=createInput("Enter Your Name To Proceed")
        this. button=createButton("Start")
        this. greeting=createElement("h4")
    }
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        //dom-document object module
        //var title=createElement("h1")
        this. title.html("car racing game")
        this. title.position(450,200)
        this. title.style("color","white")
      //  var input=createInput("Enter Your Name To Proceed")
      this.input.position(450,300)
      this. input.size(250,50)
        //var button=createButton("Start")
        this.button.position(450,400)
        this. button.size(250,50)
        this. button.mousePressed(()=>{
            this. input.hide()
            this.button.hide()
            player. name=  this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            //var greeting=createElement("h4")
            this. greeting.html("Welcome to the game,  "+player.name)
            this.greeting .position(450,400)
            this.greeting.style("font-size","40px")
        })
    }
}