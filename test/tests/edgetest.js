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

// -removed- goog.provide('box2d.Testbed.EdgeTest');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.EdgeTest === 'undefined')
    box2d.Testbed.EdgeTest = {}


// -removed- goog.require('box2d.Testbed.Test');

/**
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.EdgeTest = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		/*box2d.b2Body*/ var ground = this.m_world.CreateBody(bd);

		/*box2d.b2Vec2*/ var v1 = new box2d.b2Vec2(-10.0, 0.0), v2 = new box2d.b2Vec2(-7.0, -2.0), v3 = new box2d.b2Vec2(-4.0, 0.0);
		/*box2d.b2Vec2*/ var v4 = new box2d.b2Vec2(0.0, 0.0), v5 = new box2d.b2Vec2(4.0, 0.0), v6 = new box2d.b2Vec2(7.0, 2.0), v7 = new box2d.b2Vec2(10.0, 0.0);

		/*box2d.b2EdgeShape*/ var shape = new box2d.b2EdgeShape();

		shape.SetAsEdge(v1, v2);
		shape.m_hasVertex3 = true;
		shape.m_vertex3.Copy(v3);
		ground.CreateFixture2(shape, 0.0);

		shape.SetAsEdge(v2, v3);
		shape.m_hasVertex0 = true;
		shape.m_hasVertex3 = true;
		shape.m_vertex0.Copy(v1);
		shape.m_vertex3.Copy(v4);
		ground.CreateFixture2(shape, 0.0);

		shape.SetAsEdge(v3, v4);
		shape.m_hasVertex0 = true;
		shape.m_hasVertex3 = true;
		shape.m_vertex0.Copy(v2);
		shape.m_vertex3.Copy(v5);
		ground.CreateFixture2(shape, 0.0);

		shape.SetAsEdge(v4, v5);
		shape.m_hasVertex0 = true;
		shape.m_hasVertex3 = true;
		shape.m_vertex0.Copy(v3);
		shape.m_vertex3.Copy(v6);
		ground.CreateFixture2(shape, 0.0);

		shape.SetAsEdge(v5, v6);
		shape.m_hasVertex0 = true;
		shape.m_hasVertex3 = true;
		shape.m_vertex0.Copy(v4);
		shape.m_vertex3.Copy(v7);
		ground.CreateFixture2(shape, 0.0);

		shape.SetAsEdge(v6, v7);
		shape.m_hasVertex0 = true;
		shape.m_vertex0.Copy(v5);
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		bd.type = box2d.b2BodyType.b2_dynamicBody;
		bd.position.Set(-0.5, 0.6);
		bd.allowSleep = false;
		/*box2d.b2Body*/ var body = this.m_world.CreateBody(bd);

		/*box2d.b2CircleShape*/ var shape = new box2d.b2CircleShape();
		shape.m_radius = 0.5;

		body.CreateFixture2(shape, 1.0);
	}

	if (true)
	{
		/*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();
		bd.type = box2d.b2BodyType.b2_dynamicBody;
		bd.position.Set(1.0, 0.6);
		bd.allowSleep = false;
		/*box2d.b2Body*/ var body = this.m_world.CreateBody(bd);

		/*box2d.b2PolygonShape*/ var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(0.5, 0.5);

		body.CreateFixture2(shape, 1.0);
	}
}

goog.inherits(box2d.Testbed.EdgeTest, box2d.Testbed.Test);

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.EdgeTest.Create = function (canvas, settings)
{
	return new box2d.Testbed.EdgeTest(canvas, settings);
}

return box2d
})
// End auto-generated code.
