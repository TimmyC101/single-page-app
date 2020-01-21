import React from 'react'
import './Content.css'
import animalsData from './animals'
import Animaltabs from './Animaltabs'
import Rings from './Rings'

class Content extends React.Component {

    constructor() {
        super()
        this.state = {
            animals: animalsData,
            newAnimal: "",
            newImage: "",
            newText: "",
            oldAnimal: "Table Of Contents",
            oldImage: "./images/world.webp",
            oldText: "This book contains scientifically valid facts about Our amazing World, authenticated by nationally renowned ecologists and zoologists.  It is recommended to narrate internally with the voice of David Attenborough."
        }
        this.handleClick = this.handleClick.bind(this);
        this.pageTurner = this.pageTurner.bind(this);
        this.resetState = this.resetState.bind(this);
        this.resetClasses = this.resetClasses.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.pageTurner(e);
        setTimeout(this.resetState, 3000);
        setTimeout(this.resetClasses, 3100);
    }
        

    pageTurner(e) {
        var name = e.target.value;
        this.state.animals.forEach(animal => {
            if (animal.name === name) {
                this.setState({newAnimal: name});
                this.setState({newImage: animal.img});
                this.setState({newText: animal.text});
            }
        })
        document.getElementById("old-page").classList.add("pageturner");
        document.getElementById("new-page").classList.add("pageturner2");
    }

    // After animations play, set old equal to new such that we have 2 identical pairs of divs.
    resetState() {
        this.setState({oldAnimal: this.state.newAnimal});
        this.setState({oldImage: this.state.newImage});
        this.setState({oldText: this.state.newText});
    }

    // After animations play, remove pageturner classes responsible for animation properties
    resetClasses() {
        document.getElementById("old-page").classList.remove("pageturner");
        document.getElementById("new-page").classList.remove("pageturner2");
    }

    render() {
        var names = this.state.animals.map(animal => <Animaltabs 
            key={animal.id}
            id={animal.id}
            name={animal.name}
            handleClick = {this.handleClick}
        />)
        var rings = [];
        for (var i = 26.5; i < 100; i+=5) {
            rings.push( <Rings 
                key={i}
                pos={i}
            />)
        }
        return(
            <div className="container">
                <div className='border'>
                    <div className="content">

                        <div className="tabs">
                            {names}
                        </div>

                        <div>
                            {rings}
                        </div>
                        
    {/* 
    Old image is displayed on top, old text is displayed on bottom
    New Image is hidden and rotated on bottom
    */}
                        <div className="old-image">
                            <img src={this.state.oldImage} alt={this.state.oldAnimal}></img>
                        </div>
                        <div id="old-page" className="old-text">
                            {this.state.oldText}
                        </div>
                        <div id="new-page" className="new-image">
                            <div className="rotate">
                                <img src={this.state.newImage} alt={this.state.newAnimal}></img>
                            </div>
                        </div>
                        <div className="new-text">
                            {this.state.newText}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Content;