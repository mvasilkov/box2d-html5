// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_testbed_test', 'mod_goog_events_keycodes'], function (goog, box2d) {

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

// -removed- goog.provide('box2d.Testbed.TestRagdoll');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.TestRagdoll === 'undefined')
    box2d.Testbed.TestRagdoll = {}


// -removed- goog.require('box2d.Testbed.Test');

// -removed- goog.require('goog.events.KeyCodes');

/**
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.TestRagdoll = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	if (true)
	{
		var bd = new box2d.b2BodyDef();
		var ground = this.m_world.CreateBody(bd);

		var vertices = [];
		vertices[0] = new box2d.b2Vec2(-30.0, 0.0);
		vertices[1] = new box2d.b2Vec2( 30.0, 0.0);
		vertices[2] = new box2d.b2Vec2( 30.0, 40.0);
		vertices[3] = new box2d.b2Vec2(-30.0, 40.0);
		var shape = new box2d.b2ChainShape();
		shape.CreateLoop(vertices);
		ground.CreateFixture2(shape, 0.0);
	}

	var bd = new box2d.b2BodyDef();
	var fd = new box2d.b2FixtureDef();
	var jd = new box2d.b2RevoluteJointDef();

	// Add 2 ragdolls along the top
	for (var i = 0; i < 2; ++i)
	{
		var startX = -20.0 + Math.random() * 2.0 + 40.0 * i;
		var startY = 30.0 + Math.random() * 5.0;

		// BODIES
		// Set these to dynamic bodies
		bd.type = box2d.b2BodyType.b2_dynamicBody;

		// Head
		fd.shape = new box2d.b2CircleShape( 1.25 );
		fd.density = 1.0;
		fd.friction = 0.4;
		fd.restitution = 0.3;
		bd.position.Set(startX, startY);
		var head = this.m_world.CreateBody(bd);
		head.CreateFixture(fd);
		//if (i == 0)
		//{
			head.ApplyLinearImpulse(new box2d.b2Vec2(Math.random() * 1000.0 - 500.0, Math.random() * 1000.0 - 500.0), head.GetWorldCenter());
		//}

		// Torso1
		fd.shape = new box2d.b2PolygonShape();
		fd.shape.SetAsBox(1.5, 1.0);
		fd.density = 1.0;
		fd.friction = 0.4;
		fd.restitution = 0.1;
		bd.position.Set(startX, (startY - 2.8));
		var torso1 = this.m_world.CreateBody(bd);
		torso1.CreateFixture(fd);
		// Torso2
		fd.shape.SetAsBox(1.5, 1.0);
		bd.position.Set(startX, (startY - 4.3));
		var torso2 = this.m_world.CreateBody(bd);
		torso2.CreateFixture(fd);
		// Torso3
		fd.shape.SetAsBox(1.5, 1.0);
		bd.position.Set(startX, (startY - 5.8));
		var torso3 = this.m_world.CreateBody(bd);
		torso3.CreateFixture(fd);

		// UpperArm
		fd.density = 1.0;
		fd.friction = 0.4;
		fd.restitution = 0.1;
		// L
		fd.shape.SetAsBox(1.8, 0.65);
		bd.position.Set((startX - 3.0), (startY - 2.0));
		var upperArmL = this.m_world.CreateBody(bd);
		upperArmL.CreateFixture(fd);
		// R
		fd.shape.SetAsBox(1.8, 0.65);
		bd.position.Set((startX + 3.0), (startY - 2.0));
		var upperArmR = this.m_world.CreateBody(bd);
		upperArmR.CreateFixture(fd);

		// LowerArm
		fd.density = 1.0;
		fd.friction = 0.4;
		fd.restitution = 0.1;
		// L
		fd.shape.SetAsBox(1.7, 0.6);
		bd.position.Set((startX - 5.7), (startY - 2.0));
		var lowerArmL = this.m_world.CreateBody(bd);
		lowerArmL.CreateFixture(fd);
		// R
		fd.shape.SetAsBox(1.7, 0.6);
		bd.position.Set((startX + 5.7), (startY - 2.0));
		var lowerArmR = this.m_world.CreateBody(bd);
		lowerArmR.CreateFixture(fd);

		// UpperLeg
		fd.density = 1.0;
		fd.friction = 0.4;
		fd.restitution = 0.1;
		// L
		fd.shape.SetAsBox(0.75, 2.2);
		bd.position.Set((startX - 0.8), (startY - 8.5));
		var upperLegL = this.m_world.CreateBody(bd);
		upperLegL.CreateFixture(fd);
		// R
		fd.shape.SetAsBox(0.75, 2.2);
		bd.position.Set((startX + 0.8), (startY - 8.5));
		var upperLegR = this.m_world.CreateBody(bd);
		upperLegR.CreateFixture(fd);

		// LowerLeg
		fd.density = 1.0;
		fd.friction = 0.4;
		fd.restitution = 0.1;
		// L
		fd.shape.SetAsBox(0.6, 2.0);
		bd.position.Set((startX - 0.8), (startY - 12.0));
		var lowerLegL = this.m_world.CreateBody(bd);
		lowerLegL.CreateFixture(fd);
		// R
		fd.shape.SetAsBox(0.6, 2.0);
		bd.position.Set((startX + 0.8), (startY - 12.0));
		var lowerLegR = this.m_world.CreateBody(bd);
		lowerLegR.CreateFixture(fd);

		// JOINTS
		jd.enableLimit = true;

		// Head to shoulders
		jd.lowerAngle = box2d.b2DegToRad( -40.0);
		jd.upperAngle = box2d.b2DegToRad(  40.0);
		jd.Initialize(torso1, head, new box2d.b2Vec2(startX, (startY - 1.5)));
		this.m_world.CreateJoint(jd);

		// Upper arm to shoulders
		// L
		jd.lowerAngle = box2d.b2DegToRad( -85.0);
		jd.upperAngle = box2d.b2DegToRad( 130.0);
		jd.Initialize(torso1, upperArmL, new box2d.b2Vec2((startX - 1.8), (startY - 2.0)));
		this.m_world.CreateJoint(jd);
		// R
		jd.lowerAngle = box2d.b2DegToRad(-130.0);
		jd.upperAngle = box2d.b2DegToRad(  85.0);
		jd.Initialize(torso1, upperArmR, new box2d.b2Vec2((startX + 1.8), (startY - 2.0)));
		this.m_world.CreateJoint(jd);

		// Lower arm to upper arm
		// L
		jd.lowerAngle = box2d.b2DegToRad(-130.0);
		jd.upperAngle = box2d.b2DegToRad(  10.0);
		jd.Initialize(upperArmL, lowerArmL, new box2d.b2Vec2((startX - 4.5), (startY - 2.0)));
		this.m_world.CreateJoint(jd);
		// R
		jd.lowerAngle = box2d.b2DegToRad( -10.0);
		jd.upperAngle = box2d.b2DegToRad( 130.0);
		jd.Initialize(upperArmR, lowerArmR, new box2d.b2Vec2((startX + 4.5), (startY - 2.0)));
		this.m_world.CreateJoint(jd);

		// Shoulders/stomach
		jd.lowerAngle = box2d.b2DegToRad( -15.0);
		jd.upperAngle = box2d.b2DegToRad(  15.0);
		jd.Initialize(torso1, torso2, new box2d.b2Vec2(startX, (startY - 3.5)));
		this.m_world.CreateJoint(jd);
		// Stomach/hips
		jd.Initialize(torso2, torso3, new box2d.b2Vec2(startX, (startY - 5.0)));
		this.m_world.CreateJoint(jd);

		// Torso to upper leg
		// L
		jd.lowerAngle = box2d.b2DegToRad( -25.0);
		jd.upperAngle = box2d.b2DegToRad(  45.0);
		jd.Initialize(torso3, upperLegL, new box2d.b2Vec2((startX - 0.8), (startY - 7.2)));
		this.m_world.CreateJoint(jd);
		// R
		jd.lowerAngle = box2d.b2DegToRad( -45.0);
		jd.upperAngle = box2d.b2DegToRad(  25.0);
		jd.Initialize(torso3, upperLegR, new box2d.b2Vec2((startX + 0.8), (startY - 7.2)));
		this.m_world.CreateJoint(jd);

		// Upper leg to lower leg
		// L
		jd.lowerAngle = box2d.b2DegToRad( -25.0);
		jd.upperAngle = box2d.b2DegToRad( 115.0);
		jd.Initialize(upperLegL, lowerLegL, new box2d.b2Vec2((startX - 0.8), (startY - 10.5)));
		this.m_world.CreateJoint(jd);
		// R
		jd.lowerAngle = box2d.b2DegToRad(-115.0);
		jd.upperAngle = box2d.b2DegToRad(  25.0);
		jd.Initialize(upperLegR, lowerLegR, new box2d.b2Vec2((startX + 0.8), (startY - 10.5)));
		this.m_world.CreateJoint(jd);
	}

	// these are static bodies so set the type accordingly
	bd.type = box2d.b2BodyType.b2_staticBody;
	fd.shape = new box2d.b2PolygonShape();
	fd.density = 0.0;
	fd.friction = 0.4;
	fd.restitution = 0.3;

	// Add stairs on the left
	for (var j = 1; j <= 10; ++j)
	{
		fd.shape.SetAsBox((1.0*j), 1.0);
		bd.position.Set((1.0*j - 30.0), (21.0 - 2.0*j));
		this.m_world.CreateBody(bd).CreateFixture(fd);
	}

	// Add stairs on the right
	for (var k = 1; k <= 10; ++k)
	{
		fd.shape.SetAsBox((1.0 * k), 1.0);
		bd.position.Set((30.0 - 1.0*k), (21.0 - 2.0*k));
		this.m_world.CreateBody(bd).CreateFixture(fd);
	}

	fd.shape.SetAsBox(3.0, 4.0);
	bd.position.Set(0.0, 4.0);
	this.m_world.CreateBody(bd).CreateFixture(fd);
}

goog.inherits(box2d.Testbed.TestRagdoll, box2d.Testbed.Test);

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.TestRagdoll.Create = function (canvas, settings)
{
	return new box2d.Testbed.TestRagdoll(canvas, settings);
}

return box2d
})
// End auto-generated code.
