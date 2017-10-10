class SignUpPhoneValidation extends Component{
constructor(props){
super(props);
this.cantidad = 3;
this.tope = 10;
this.valorInput = undefined;
this.pinUsuario = undefined;
this.pinCreado = [];
this.t = undefined;
this.state = {
pin : [],
validar : false,
mostrar: false
}
}
generarPin(array){
let valores = Math.floor(Math.random() * this.tope);
if (!array.some(function (e) {
return e === valores
})) {
array.push(valores);
}
}
crearPin(){
while (this.pinCreado.length < this.cantidad && this.cantidad < this.tope) {
this.generarPin(this.pinCreado);
}
this.setState({
pin : this.pinCreado
})
}
mostrarTodo(e){
this.setState({
mostrar: true
});
this.crearPin();
}
inputCambio(e){
let pinIngresado = this.state.pin.toString().replace(/,/g, "");
if(e.target.value === pinIngresado){
this.setState({
validar : true
});
} else {
this.setState({
validar : false 
});
} 
}
validarPin(input){
this.pinUsuario = input;
}
render(){
return(
<div className="text-center">
<header>
<div className="btnVolver">
<NavLink to="/signup">
<i className="material-icons volver">keyboard_arrow_left</i>
</NavLink>
</div>
<h1 className="text-center">Sign Up</h1>
<h4 className="text-center">Join Now for free ride credit.</h4>
<hr/>
</header>
{this.state.mostrar &&
<div>
<div>
<h4 >Tu código Lyft es:</h4>
<h5><strong>LAB-{this.state.pin}</strong></h5>
</div>
<form onSubmit={(e) => {
e.preventDefault();
this.validarPin(this.valorInput);
}}>
<strong>LAB-</strong>
<input type="number" 
value={this.valorInput} 
onChange={(e) => {this.inputCambio(e)}}/>
{

this.state.validar ? 
<NavLink 
to = "/signup-form" 
className="btn btn-lg btnSiguiente " 
>
Next
</NavLink>
:
<button 
className="btn btn-lg btnSiguiente disabled" 
>
Next
</button>

}
</form>
</div>
}
{!this.state.mostrar && 
<div>
<button className="btnSiguiente" onClick={(e) => {this.mostrarTodo(e)}}>Generar Pin</button>
</div> 
} 
</div>
);
}
}

export default SignUpPhoneValidation