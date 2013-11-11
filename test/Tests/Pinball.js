// This wrapper was auto-generated.
define(['goog', 'box2d.Testbed.Test'], function (goog, box2d) {

/*
* Copyright (c) 2007-2009 Erin Catto http://www.box2d.org
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

// -removed- goog.provide('box2d.Testbed.Pinball');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.Pinball === 'undefined')
    box2d.Testbed.Pinball = {}


// -removed- goog.require('box2d.Testbed.Test');
if (typeof box2d.Testbed.Test === 'undefined')
    throw Error('I can haz box2d.Testbed.Test?')


/**
 * This tests bullet collision and provides an example of a
 * gameplay scenario. This also uses a loop shape.
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.Pinball = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	// Ground body
	/*box2d.b2Body*/ var ground = null;
	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		ground = this.m_world.CreateBody(bd);

		/*box2d.b2Vec2*/ var vs = box2d.b2Vec2.MakeArray(5);
		vs[0].Set(0.0, -2.0);
		vs[1].Set(8.0, 6.0);
		vs[2].Set(8.0, 20.0);
		vs[3].Set(-8.0, 20.0);
		vs[4].Set(-8.0, 6.0);

		/*box2d.b2ChainShape*/ var loop = new box2d.b2ChainShape();
		loop.CreateLoop(vs, 5);
		/*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();
		fd.shape = loop;
		fd.density = 0.0;
		ground.CreateFixture(fd);
	}

	// Flippers
	if (true)
	{
		/*box2d.b2Vec2*/ var p1 = new box2d.b2Vec2(-2.0, 0.0), p2 = new box2d.b2Vec2(2.0, 0.0);

		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		bd.type = box2d.b2BodyType.b2_dynamicBody;

		bd.position = p1;
		/*box2d.b2Body*/ var leftFlipper = this.m_world.CreateBody(bd);

		bd.position = p2;
		/*box2d.b2Body*/ var rightFlipper = this.m_world.CreateBody(bd);

		/*box2d.b2PolygonShape*/ var box = new box2d.b2PolygonShape();
		box.SetAsBox(1.75, 0.1);

		/*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();
		fd.shape = box;
		fd.density = 1.0;

		leftFlipper.CreateFixture(fd);
		rightFlipper.CreateFixture(fd);

		/*box2d.b2RevoluteJointDef*/ var jd = new box2d.b2RevoluteJointDef();
		jd.bodyA = ground;
		jd.localAnchorB.SetZero();
		jd.enableMotor = true;
		jd.maxMotorTorque = 1000.0;
		jd.enableLimit = true;

		jd.motorSpeed = 0.0;
		jd.localAnchorA.Copy(p1);
		jd.bodyB = leftFlipper;
		jd.lowerAngle = -30.0 * box2d.b2_pi / 180.0;
		jd.upperAngle = 5.0 * box2d.b2_pi / 180.0;
		this.m_leftJoint = /** @type {box2d.b2RevoluteJoint} */ (this.m_world.CreateJoint(jd));

		jd.motorSpeed = 0.0;
		jd.localAnchorA.Copy(p2);
		jd.bodyB = rightFlipper;
		jd.lowerAngle = -5.0 * box2d.b2_pi / 180.0;
		jd.upperAngle = 30.0 * box2d.b2_pi / 180.0;
		this.m_rightJoint = /** @type {box2d.b2RevoluteJoint} */ (this.m_world.CreateJoint(jd));
	}

	// Circle character
	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		bd.position.Set(1.0, 15.0);
		bd.type = box2d.b2BodyType.b2_dynamicBody;
		bd.bullet = true;

		this.m_ball = this.m_world.CreateBody(bd);

		/*box2d.b2CircleShape*/ var shape = new box2d.b2CircleShape();
		shape.m_radius = 0.2;

		/*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();
		fd.shape = shape;
		fd.density = 1.0;
		this.m_ball.CreateFixture(fd);
	}

	this.m_button = false;
}

goog.inherits(box2d.Testbed.Pinball, box2d.Testbed.Test);

/**
 * @export
 * @type {box2d.b2RevoluteJoint}
 */
box2d.Testbed.Pinball.prototype.m_leftJoint = null;
/**
 * @export
 * @type {box2d.b2RevoluteJoint}
 */
box2d.Testbed.Pinball.prototype.m_rightJoint = null;
/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.Testbed.Pinball.prototype.m_ball = null;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Pinball.prototype.m_button = false;

/**
 * @export
 * @return {void}
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.Pinball.prototype.Step = function (settings)
{
	if (this.m_button)
	{
		this.m_leftJoint.SetMotorSpeed(20.0);
		this.m_rightJoint.SetMotorSpeed(-20.0);
	}
	else
	{
		this.m_leftJoint.SetMotorSpeed(-10.0);
		this.m_rightJoint.SetMotorSpeed(10.0);
	}

	goog.base(this, 'Step', settings);

	this.m_debugDraw.DrawString(5, this.m_textLine, "Press 'a' to control the flippers");
	this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;

}

/**
 * @export
 * @return {void}
 * @param {number} key
 */
box2d.Testbed.Pinball.prototype.Keyboard = function (key)
{
	switch (key)
	{
	case goog.events.KeyCodes.A:
		this.m_button = true;
		break;
	}
}

/**
 * @export
 * @return {void}
 * @param {number} key
 */
box2d.Testbed.Pinball.prototype.KeyboardUp = function (key)
{
	switch (key)
	{
	case goog.events.KeyCodes.A:
		this.m_button = false;
		break;
	}
}

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.Pinball.Create = function (canvas, settings)
{
	return new box2d.Testbed.Pinball(canvas, settings);
}

return box2d
})
// End auto-generated code.
