// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_testbed_test'], function (goog, box2d) {

/*
* Copyright (c) 2006-2010 Erin Catto http://www.box2d.org
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

// -removed- goog.provide('box2d.Testbed.EdgeShapes');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.EdgeShapes === 'undefined')
    box2d.Testbed.EdgeShapes = {}


// -removed- goog.require('box2d.Testbed.Test');

/**
 * @export
 * @constructor
 * @extends {box2d.b2RayCastCallback}
 */
box2d.Testbed.EdgeShapesCallback = function ()
{
	goog.base(this); // base class constructor

	this.m_point = new box2d.b2Vec2();
	this.m_normal = new box2d.b2Vec2();
}

goog.inherits(box2d.Testbed.EdgeShapesCallback, box2d.b2RayCastCallback);

/**
 * @export
 * @type {box2d.b2Fixture}
 */
box2d.Testbed.EdgeShapesCallback.prototype.m_fixture = null;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.EdgeShapesCallback.prototype.m_point = null;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.EdgeShapesCallback.prototype.m_normal = null;

/**
 * @export
 * @return {number}
 * @param {box2d.b2Fixture} fixture
 * @param {box2d.b2Vec2} point
 * @param {box2d.b2Vec2} normal
 * @param {number} fraction
 */
box2d.Testbed.EdgeShapesCallback.prototype.ReportFixture = function (fixture, point, normal, fraction)
{
	this.m_fixture = fixture;
	this.m_point.Copy(point);
	this.m_normal.Copy(normal);

	return fraction;
}

/**
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.EdgeShapes = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	this.m_bodyIndex = 0;
	this.m_bodies = new Array(box2d.Testbed.EdgeShapes.e_maxBodies);
	this.m_polygons = new Array(4);
	for (var i = 0; i < 4; ++i)
	{
		this.m_polygons[i] = new box2d.b2PolygonShape();
	}
	this.m_circle = new box2d.b2CircleShape();

	this.m_angle = 0.0;

	// Ground body
	if (true)
	{
		var bd = new box2d.b2BodyDef();
		var ground = this.m_world.CreateBody(bd);

		var x1 = -20.0;
		var y1 = 2.0 * box2d.b2Cos(x1 / 10.0 * box2d.b2_pi);
		for (var i = 0; i < 80; ++i)
		{
			var x2 = x1 + 0.5;
			var y2 = 2.0 * box2d.b2Cos(x2 / 10.0 * box2d.b2_pi);

			var shape = new box2d.b2EdgeShape();
			shape.SetAsEdge(new box2d.b2Vec2(x1, y1), new box2d.b2Vec2(x2, y2));
			ground.CreateFixture2(shape, 0.0);

			x1 = x2;
			y1 = y2;
		}
	}

	if (true)
	{
		var vertices = new Array(3);
		vertices[0] = new box2d.b2Vec2(-0.5, 0.0);
		vertices[1] = new box2d.b2Vec2(0.5, 0.0);
		vertices[2] = new box2d.b2Vec2(0.0, 1.5);
		this.m_polygons[0].SetAsArray(vertices, 3);
	}

	if (true)
	{
		var vertices = new Array(3);
		vertices[0] = new box2d.b2Vec2(-0.1, 0.0);
		vertices[1] = new box2d.b2Vec2(0.1, 0.0);
		vertices[2] = new box2d.b2Vec2(0.0, 1.5);
		this.m_polygons[1].SetAsArray(vertices, 3);
	}

	if (true)
	{
		var w = 1.0;
		var b = w / (2.0 + box2d.b2Sqrt(2.0));
		var s = box2d.b2Sqrt(2.0) * b;

		var vertices = new Array(8);
		vertices[0] = new box2d.b2Vec2(0.5 * s, 0.0);
		vertices[1] = new box2d.b2Vec2(0.5 * w, b);
		vertices[2] = new box2d.b2Vec2(0.5 * w, b + s);
		vertices[3] = new box2d.b2Vec2(0.5 * s, w);
		vertices[4] = new box2d.b2Vec2(-0.5 * s, w);
		vertices[5] = new box2d.b2Vec2(-0.5 * w, b + s);
		vertices[6] = new box2d.b2Vec2(-0.5 * w, b);
		vertices[7] = new box2d.b2Vec2(-0.5 * s, 0.0);

		this.m_polygons[2].SetAsArray(vertices, 8);
	}

	if (true)
	{
		this.m_polygons[3].SetAsBox(0.5, 0.5);
	}

	if (true)
	{
		this.m_circle.m_radius = 0.5;
	}

	for (var i = 0; i < box2d.Testbed.EdgeShapes.e_maxBodies; ++i)
	{
		this.m_bodies[i] = null;
	}
}

goog.inherits(box2d.Testbed.EdgeShapes, box2d.Testbed.Test);

/**
 * @export
 * @const
 * @type {number}
 */
box2d.Testbed.EdgeShapes.e_maxBodies = 256;

/**
 * @export
 * @type {number}
 */
box2d.Testbed.EdgeShapes.prototype.m_bodyIndex = 0;
/**
 * @export
 * @type {Array.<box2d.b2Body>}
 */
box2d.Testbed.EdgeShapes.prototype.m_bodies = null;
/**
 * @export
 * @type {Array.<box2d.b2PolygonShape>}
 */
box2d.Testbed.EdgeShapes.prototype.m_polygons = null;
/**
 * @export
 * @type {box2d.b2CircleShape}
 */
box2d.Testbed.EdgeShapes.prototype.m_circle = null;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.EdgeShapes.prototype.m_angle = 0.0;

/**
 * @export
 * @return {void}
 * @param {number} index
 */
box2d.Testbed.EdgeShapes.prototype.CreateBody = function (index)
{
	if (this.m_bodies[this.m_bodyIndex] != null)
	{
		this.m_world.DestroyBody(this.m_bodies[this.m_bodyIndex]);
		this.m_bodies[this.m_bodyIndex] = null;
	}

	var bd = new box2d.b2BodyDef();

	var x = box2d.b2RandomRange(-10.0, 10.0);
	var y = box2d.b2RandomRange(10.0, 20.0);
	bd.position.Set(x, y);
	bd.angle = box2d.b2RandomRange(-box2d.b2_pi, box2d.b2_pi);
	bd.type = box2d.b2BodyType.b2_dynamicBody;

	if (index == 4)
	{
		bd.angularDamping = 0.02;
	}

	this.m_bodies[this.m_bodyIndex] = this.m_world.CreateBody(bd);

	if (index < 4)
	{
		var fd = new box2d.b2FixtureDef();
		fd.shape = this.m_polygons[index];
		fd.friction = 0.3;
		fd.density = 20.0;
		this.m_bodies[this.m_bodyIndex].CreateFixture(fd);
	}
	else
	{
		var fd = new box2d.b2FixtureDef();
		fd.shape = this.m_circle;
		fd.friction = 0.3;
		fd.density = 20.0;

		this.m_bodies[this.m_bodyIndex].CreateFixture(fd);
	}

	this.m_bodyIndex = (this.m_bodyIndex + 1) % box2d.Testbed.EdgeShapes.e_maxBodies;
}

/**
 * @export
 * @return {void}
 */
box2d.Testbed.EdgeShapes.prototype.DestroyBody = function ()
{
	for (var i = 0; i < box2d.Testbed.EdgeShapes.e_maxBodies; ++i)
	{
		if (this.m_bodies[i] != null)
		{
			this.m_world.DestroyBody(this.m_bodies[i]);
			this.m_bodies[i] = null;
			return;
		}
	}
}

/**
 * @export
 * @return {void}
 * @param {number} key
 */
box2d.Testbed.EdgeShapes.prototype.Keyboard = function (key)
{
	switch (key)
	{
	case goog.events.KeyCodes.ONE:
	case goog.events.KeyCodes.TWO:
	case goog.events.KeyCodes.THREE:
	case goog.events.KeyCodes.FOUR:
	case goog.events.KeyCodes.FIVE:
		this.CreateBody(key - goog.events.KeyCodes.ONE);
		break;

	case goog.events.KeyCodes.D:
		this.DestroyBody();
		break;
	}
}

/**
 * @export
 * @return {void}
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.EdgeShapes.prototype.Step = function (settings)
{
	var advanceRay = settings.pause == 0 || settings.singleStep;

	goog.base(this, 'Step', settings);
	this.m_debugDraw.DrawString(5, this.m_textLine, "Press 1-5 to drop stuff, m to change the mode");
	this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;

	var L = 25.0;
	var point1 = new box2d.b2Vec2(0.0, 10.0);
	var d = new box2d.b2Vec2(L * box2d.b2Cos(this.m_angle), -L * box2d.b2Abs(box2d.b2Sin(this.m_angle)));
	var point2 = box2d.b2AddVV(point1, d, new box2d.b2Vec2());

	var callback = new box2d.Testbed.EdgeShapesCallback();
	this.m_world.RayCast(callback, point1, point2);

	if (callback.m_fixture)
	{
		this.m_debugDraw.DrawPoint(callback.m_point, 5.0, new box2d.b2Color(0.4, 0.9, 0.4));
		this.m_debugDraw.DrawSegment(point1, callback.m_point, new box2d.b2Color(0.8, 0.8, 0.8));
		var head = box2d.b2AddVV(callback.m_point, box2d.b2MulSV(0.5, callback.m_normal, box2d.b2Vec2.s_t0), new box2d.b2Vec2());
		this.m_debugDraw.DrawSegment(callback.m_point, head, new box2d.b2Color(0.9, 0.9, 0.4));
	}
	else
	{
		this.m_debugDraw.DrawSegment(point1, point2, new box2d.b2Color(0.8, 0.8, 0.8));
	}

	if (advanceRay)
	{
		this.m_angle += 0.25 * box2d.b2_pi / 180.0;
	}
}

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.EdgeShapes.Create = function (canvas, settings)
{
	return new box2d.Testbed.EdgeShapes(canvas, settings);
}

return box2d
})
// End auto-generated code.
