// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_testbed_test'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.Testbed.BulletTest');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.BulletTest === 'undefined')
    box2d.Testbed.BulletTest = {}


// -removed- goog.require('box2d.Testbed.Test');

/**
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.BulletTest = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		bd.position.Set(0.0, 0.0);
		/*box2d.b2Body*/ var body = this.m_world.CreateBody(bd);

		/*box2d.b2EdgeShape*/ var edge = new box2d.b2EdgeShape();

		edge.SetAsEdge(new box2d.b2Vec2(-10.0, 0.0), new box2d.b2Vec2(10.0, 0.0));
		body.CreateFixture2(edge, 0.0);

		/*box2d.b2PolygonShape*/ var shape = new box2d.b2PolygonShape();
		shape.SetAsOrientedBox(0.2, 1.0, new box2d.b2Vec2(0.5, 1.0), 0.0);
		body.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		bd.type = box2d.b2BodyType.b2_dynamicBody;
		bd.position.Set(0.0, 4.0);

		/*box2d.b2PolygonShape*/ var box = new box2d.b2PolygonShape();
		box.SetAsBox(2.0, 0.1);

		this.m_body = this.m_world.CreateBody(bd);
		this.m_body.CreateFixture2(box, 1.0);

		box.SetAsBox(0.25, 0.25);

		//this.m_x = box2d.b2RandomRange(-1.0, 1.0);
		this.m_x = 0.20352793;
		bd.position.Set(this.m_x, 10.0);
		bd.bullet = true;

		this.m_bullet = this.m_world.CreateBody(bd);
		this.m_bullet.CreateFixture2(box, 100.0);

		this.m_bullet.SetLinearVelocity(new box2d.b2Vec2(0.0, -50.0));
	}
}

goog.inherits(box2d.Testbed.BulletTest, box2d.Testbed.Test);

/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.Testbed.BulletTest.prototype.m_body = null;
/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.Testbed.BulletTest.prototype.m_bullet = null;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.BulletTest.prototype.m_x = 0.0;

/**
 * @export
 * @return {void}
 */
box2d.Testbed.BulletTest.prototype.Launch = function ()
{
	this.m_body.SetTransformVecRadians(new box2d.b2Vec2(0.0, 4.0), 0.0);
	this.m_body.SetLinearVelocity(box2d.b2Vec2_zero);
	this.m_body.SetAngularVelocity(0.0);

	this.m_x = box2d.b2RandomRange(-1.0, 1.0);
	this.m_bullet.SetTransformVecRadians(new box2d.b2Vec2(this.m_x, 10.0), 0.0);
	this.m_bullet.SetLinearVelocity(new box2d.b2Vec2(0.0, -50.0));
	this.m_bullet.SetAngularVelocity(0.0);

//	extern int32 box2d.b2_gjkCalls, box2d.b2_gjkIters, box2d.b2_gjkMaxIters;
//	extern int32 box2d.b2_toiCalls, box2d.b2_toiIters, box2d.b2_toiMaxIters;
//	extern int32 box2d.b2_toiRootIters, box2d.b2_toiMaxRootIters;

	box2d.b2_gjkCalls = 0;
	box2d.b2_gjkIters = 0;
	box2d.b2_gjkMaxIters = 0;

	box2d.b2_toiCalls = 0;
	box2d.b2_toiIters = 0;
	box2d.b2_toiMaxIters = 0;
	box2d.b2_toiRootIters = 0;
	box2d.b2_toiMaxRootIters = 0;
}

/**
 * @export
 * @return {void}
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.BulletTest.prototype.Step = function (settings)
{
	goog.base(this, 'Step', settings);

//	extern int32 box2d.b2_gjkCalls, box2d.b2_gjkIters, box2d.b2_gjkMaxIters;
//	extern int32 box2d.b2_toiCalls, box2d.b2_toiIters;
//	extern int32 box2d.b2_toiRootIters, box2d.b2_toiMaxRootIters;

	if (box2d.b2_gjkCalls > 0)
	{
		this.m_debugDraw.DrawString(5, this.m_textLine, "gjk calls = %d, ave gjk iters = %3.1f, max gjk iters = %d",
			box2d.b2_gjkCalls, box2d.b2_gjkIters / box2d.b2_gjkCalls, box2d.b2_gjkMaxIters);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
	}

	if (box2d.b2_toiCalls > 0)
	{
		this.m_debugDraw.DrawString(5, this.m_textLine, "toi calls = %d, ave toi iters = %3.1f, max toi iters = %d",
			box2d.b2_toiCalls, box2d.b2_toiIters / box2d.b2_toiCalls, box2d.b2_toiMaxRootIters);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;

		this.m_debugDraw.DrawString(5, this.m_textLine, "ave toi root iters = %3.1f, max toi root iters = %d",
			box2d.b2_toiRootIters / box2d.b2_toiCalls, box2d.b2_toiMaxRootIters);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
	}

	if (this.m_stepCount % 60 == 0)
	{
		this.Launch();
	}
}

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.BulletTest.Create = function (canvas, settings)
{
	return new box2d.Testbed.BulletTest(canvas, settings);
}

return box2d
})
// End auto-generated code.
