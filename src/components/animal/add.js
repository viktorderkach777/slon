import React, { Component } from 'react';
import axios from 'axios';

class AnimalCreate extends Component {

    constructor(props) {
        super(props);
        var name = props.name;
        var nameIsValid = this.validateName(name);
        var image = props.image;
        var imageIsValid = this.validateImage(image);

        this.state = {name: "", image: "", nameValid: nameIsValid, imageValid: imageIsValid};   

        
        this.onNameChange = this.onNameChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }    

    validateImage(image){
        return image!==undefined && image.length >=2;
    }
    validateName(name){
        return name!==undefined && name.length>=2;
    }
    onImageChange(e) {
        var val = e.target.value;
        var valid = this.validateImage(val);
        this.setState({image: val, imageValid: valid});
    }
    onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateName(val);
        this.setState({name: val, nameValid: valid});
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log('----submit form---');        

        const model = {
            name: this.state.name,
            image: this.state.image
        };

        if(this.state.nameValid ===true && this.state.imageValid===true){          

            axios.post('https://localhost:44303/api/animal/add', model)
            .then(
                (resp) => {
                    console.log('--success post--', resp.data);
                    this.props.history.push('/animal');
                },
                (err) => {
                    //console.log('--err problem---', err);
                    alert("Problems: " + err);
                }
            );
        }        
    }

    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);
    }
    

    render() {
          // цвет границы для поля для ввода имени
          var nameColor = this.state.nameValid===true?"green":"red";
          // цвет границы для поля для ввода возраста
          var imageColor = this.state.imageValid===true?"green":"red";

        console.log('---AnimalCreate state----', this.state);
        const { name, image } = this.state;
        return (
            <React.Fragment>
                <h1>Додати тварину</h1>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="name">Назва тварини:</label>
                        <input type="text" className="form-control" name="name"
                            id="name" value={name} onChange={this.onNameChange} style={{borderColor:nameColor}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Фото:</label>
                        <input type="text" className="form-control" name="image"
                            id="image" value={image} onChange={this.onImageChange}  style={{borderColor:imageColor}} />
                    </div>
                    <button type="submit" className="btn btn-info">Додати</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AnimalCreate;