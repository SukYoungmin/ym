#pragma strict

var power = 500;		// Firing Speed
var ball : GameObject;	// Object to fire

function Start () {
	ball.rigidbody.AddForce(Vector3.forward * power);	// Object Fireing
}

function Update () {

	if (Input.GetButtonDown("Fire1")) {
             ball.rigidbody.AddForce(Vector3.forward * power);
      }
}
	