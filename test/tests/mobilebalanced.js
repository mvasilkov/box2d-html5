// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_testbed_test'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.Testbed.MobileBalanced');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.MobileBalanced === 'undefined')
    box2d.Testbed.MobileBalanced = {}


// -removed- goog.require('box2d.Testbed.Test');

/**
 * @export
 * @constructor
 * @extends {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.MobileBalanced = function (canvas, settings)
{
	goog.base(this, canvas, settings); // base class constructor

	var /*b2Body*/ ground;

	// Create ground body.
	{
		var /*b2BodyDef*/ bodyDef = new box2d.b2BodyDef();
		bodyDef.position.Set(0.0, 20.0);
		ground = this.m_world.CreateBody(bodyDef);
	}

	var /*float32*/ a = 0.5;
	var /*b2Vec2*/ h = new box2d.b2Vec2(0.0, a);

	var /*b2Body*/ root = this.AddNode(ground, box2d.b2Vec2_zero, 0, 3.0, a);

	var /*b2RevoluteJointDef*/ jointDef = new box2d.b2RevoluteJointDef();
	jointDef.bodyA = ground;
	jointDef.bodyB = root;
	jointDef.localAnchorA.SetZero();
	jointDef.localAnchorB.Copy(h);
	this.m_world.CreateJoint(jointDef);
}

goog.inherits(box2d.Testbed.MobileBalanced, box2d.Testbed.Test);

/**
 * @export
 * @const
 * @type {number}
 */
box2d.Testbed.MobileBalanced.e_depth = 4;

/**
 * @param {box2d.b2Body} parent
 * @param {box2d.b2Vec2} localAnchor
 * @param {number} depth
 * @param {number} offset
 * @param {number} a
 * @return {box2d.b2Body}
 */
box2d.Testbed.MobileBalanced.prototype.AddNode = function (parent, localAnchor, depth, offset, a)
{
	var /*float32*/ density = 20.0;
	var /*b2Vec2*/ h = new box2d.b2Vec2(0.0, a);

//	b2Vec2 p = parent->GetPosition() + localAnchor - h;
	var /*b2Vec2*/ p = parent.GetPosition().Clone().SelfAdd(localAnchor).SelfSub(h);

	var /*b2BodyDef*/ bodyDef = new box2d.b2BodyDef();
	bodyDef.type = box2d.b2BodyType.b2_dynamicBody;
	bodyDef.position.Copy(p);
	var /*b2Body*/ body = this.m_world.CreateBody(bodyDef);

	var /*b2PolygonShape*/ shape = new box2d.b2PolygonShape();
	shape.SetAsBox(0.25 * a, a);
	body.CreateFixture2(shape, density);

	if (depth == box2d.Testbed.MobileBalanced.e_depth)
	{
		return body;
	}

	shape.SetAsOrientedBox(offset, 0.25 * a, new box2d.b2Vec2(0, -a), 0.0);
	body.CreateFixture2(shape, density);

	var /*b2Vec2*/ a1 = new box2d.b2Vec2(offset, -a);
	var /*b2Vec2*/ a2 = new box2d.b2Vec2(-offset, -a);
	var /*b2Body*/ body1 = this.AddNode(body, a1, depth + 1, 0.5 * offset, a);
	var /*b2Body*/ body2 = this.AddNode(body, a2, depth + 1, 0.5 * offset, a);

	var /*b2RevoluteJointDef*/ jointDef = new box2d.b2RevoluteJointDef();
	jointDef.bodyA = body;
	jointDef.localAnchorB.Copy(h);

	jointDef.localAnchorA.Copy(a1);
	jointDef.bodyB = body1;
	this.m_world.CreateJoint(jointDef);

	jointDef.localAnchorA.Copy(a2);
	jointDef.bodyB = body2;
	this.m_world.CreateJoint(jointDef);

	return body;
}

/**
 * @export
 * @return {box2d.Testbed.Test}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.MobileBalanced.Create = function (canvas, settings)
{
	return new box2d.Testbed.MobileBalanced(canvas, settings);
}

return box2d
})
// End auto-generated code.
