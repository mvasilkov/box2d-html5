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

// -removed- goog.provide('box2d.Testbed.SphereStack');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.SphereStack === 'undefined')
    box2d.Testbed.SphereStack = {}


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
box2d.Testbed.SphereStack = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	this.m_bodies = new Array(box2d.Testbed.SphereStack.e_count);

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
		var shape = new box2d.b2CircleShape();
		shape.m_radius = 1.0;

		for (var i = 0; i < box2d.Testbed.SphereStack.e_count; ++i)
		{
			var bd = new box2d.b2BodyDef();
			bd.type = box2d.b2BodyType.b2_dynamicBody;
			bd.position.Set(0.0, 4.0 + 3.0 * i);

			this.m_bodies[i] = this.m_world.CreateBody(bd);

			this.m_bodies[i].CreateFixture2(shape, 1.0);

			this.m_bodies[i].SetLinearVelocity(new box2d.b2Vec2(0.0, -50.0));
		}
	}
}

goog.inherits(box2d.Testbed.SphereStack, box2d.Testbed.Test);

/**
 * @export
 * @const
 * @type {number}
 */
box2d.Testbed.SphereStack.e_count = 10;

/**
 * @export
 * @type {Array.<box2d.b2Body>}
 */
box2d.Testbed.SphereStack.prototype.m_bodies = null;

/**
 * @export
 * @return {void}
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.SphereStack.prototype.Step = function (settings)
{
	goog.base(this, 'Step', settings);

	//for (var i = 0; i < box2d.Testbed.SphereStack.e_count; ++i)
	//{
	//	printf("%g ", this.m_bodies[i].GetWorldCenter().y);
	//}

	//for (var i = 0; i < box2d.Testbed.SphereStack.e_count; ++i)
	//{
	//	printf("%g ", this.m_bodies[i].GetLinearVelocity().y);
	//}

	//printf("\n");
}

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.SphereStack.Create = function (canvas, settings)
{
	return new box2d.Testbed.SphereStack(canvas, settings);
}

return box2d
})
// End auto-generated code.
