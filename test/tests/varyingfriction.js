// This wrapper was auto-generated.
define(['goog', 'box2d.Testbed.Test'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.Testbed.VaryingFriction');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.VaryingFriction === 'undefined')
    box2d.Testbed.VaryingFriction = {}


// -removed- goog.require('box2d.Testbed.Test');
if (typeof box2d.Testbed.Test === 'undefined')
    throw Error('I can haz box2d.Testbed.Test?')


/**
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.VaryingFriction = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	if (true)
	{
		var bd = new box2d.b2BodyDef();
		var ground = this.m_world.CreateBody(bd);

		var shape = new box2d.b2EdgeShape();
		shape.SetAsEdge(new box2d.b2Vec2(-40.0, 0.0), new box2d.b2Vec2(40.0, 0.0));
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(13.0, 0.25);

		var bd = new box2d.b2BodyDef();
		bd.position.Set(-4.0, 22.0);
		bd.angle = -0.25;

		var ground = this.m_world.CreateBody(bd);
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(0.25, 1.0);

		var bd = new box2d.b2BodyDef();
		bd.position.Set(10.5, 19.0);

		var ground = this.m_world.CreateBody(bd);
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(13.0, 0.25);

		var bd = new box2d.b2BodyDef();
		bd.position.Set(4.0, 14.0);
		bd.angle = 0.25;

		var ground = this.m_world.CreateBody(bd);
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(0.25, 1.0);

		var bd = new box2d.b2BodyDef();
		bd.position.Set(-10.5, 11.0);

		var ground = this.m_world.CreateBody(bd);
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(13.0, 0.25);

		var bd = new box2d.b2BodyDef();
		bd.position.Set(-4.0, 6.0);
		bd.angle = -0.25;

		var ground = this.m_world.CreateBody(bd);
		ground.CreateFixture2(shape, 0.0);
	}

	if (true)
	{
		var shape = new box2d.b2PolygonShape();
		shape.SetAsBox(0.5, 0.5);

		var fd = new box2d.b2FixtureDef();
		fd.shape = shape;
		fd.density = 25.0;

		var friction = [ 0.75, 0.5, 0.35, 0.1, 0.0 ];

		for (var i = 0; i < 5; ++i)
		{
			var bd = new box2d.b2BodyDef();
			bd.type = box2d.b2BodyType.b2_dynamicBody;
			bd.position.Set(-15.0 + 4.0 * i, 28.0);
			var body = this.m_world.CreateBody(bd);

			fd.friction = friction[i];
			body.CreateFixture(fd);
		}
	}
}

goog.inherits(box2d.Testbed.VaryingFriction, box2d.Testbed.Test);

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.VaryingFriction.Create = function (canvas, settings)
{
	return new box2d.Testbed.VaryingFriction(canvas, settings);
}

return box2d
})
// End auto-generated code.
