// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_fixture', 'mod_box2d_math', 'mod_box2d_settings'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.b2Body');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.b2Body === 'undefined')
    box2d.b2Body = {}


// -removed- goog.require('box2d.b2Settings');
// -removed- goog.require('box2d.b2Math');
// -removed- goog.require('box2d.b2Fixture');

/**
 * The body type.
 * static: zero mass, zero velocity, may be manually moved
 * kinematic: zero mass, non-zero velocity set by user, moved by solver
 * dynamic: positive mass, non-zero velocity determined by forces, moved by solver
 * @export
 * @enum
 */
box2d.b2BodyType =
{
	b2_unknown			: -1,
	b2_staticBody		: 0,
	b2_kinematicBody	: 1,
	b2_dynamicBody		: 2,
	b2_bulletBody		: 3 // TODO_ERIN
};
goog.exportProperty(box2d.b2BodyType, 'b2_unknown'      , box2d.b2BodyType.b2_unknown      );
goog.exportProperty(box2d.b2BodyType, 'b2_staticBody'   , box2d.b2BodyType.b2_staticBody   );
goog.exportProperty(box2d.b2BodyType, 'b2_kinematicBody', box2d.b2BodyType.b2_kinematicBody);
goog.exportProperty(box2d.b2BodyType, 'b2_dynamicBody'  , box2d.b2BodyType.b2_dynamicBody  );
goog.exportProperty(box2d.b2BodyType, 'b2_bulletBody'   , box2d.b2BodyType.b2_bulletBody   );

/**
 * A body definition holds all the data needed to construct a
 * rigid body.
 * You can safely re-use body definitions. Shapes are added to a
 * body after construction.
 * @export
 * @constructor
 */
box2d.b2BodyDef = function ()
{
	this.position = new box2d.b2Vec2(0, 0);
	this.linearVelocity = new box2d.b2Vec2(0, 0);
}

/**
 * The body type: static, kinematic, or dynamic.
 * Note: if a dynamic body would have zero mass, the mass is set
 * to one.
 * @export
 * @type {box2d.b2BodyType}
 */
box2d.b2BodyDef.prototype.type = box2d.b2BodyType.b2_staticBody;

/**
 * The world position of the body. Avoid creating bodies at the
 * origin since this can lead to many overlapping shapes.
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.b2BodyDef.prototype.position = null;

/**
 * The world angle of the body in radians.
 * @export
 * @type {number}
 */
box2d.b2BodyDef.prototype.angle = 0;

/**
 * The linear velocity of the body's origin in world
 * co-ordinates.
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.b2BodyDef.prototype.linearVelocity = null;

/**
 * The angular velocity of the body.
 * @export
 * @type {number}
 */
box2d.b2BodyDef.prototype.angularVelocity = 0;

/**
 * Linear damping is use to reduce the linear velocity. The
 * damping parameter can be larger than 1.0f but the damping
 * effect becomes sensitive to the time step when the damping
 * parameter is large.
 * @export
 * @type {number}
 */
box2d.b2BodyDef.prototype.linearDamping = 0;

/**
 * Angular damping is use to reduce the angular velocity. The
 * damping parameter can be larger than 1.0f but the damping
 * effect becomes sensitive to the time step when the damping
 * parameter is large.
 * @export
 * @type {number}
 */
box2d.b2BodyDef.prototype.angularDamping = 0;

/**
 * Set this flag to false if this body should never fall asleep.
 * Note that this increases CPU usage.
 * @export
 * @type {boolean}
 */
box2d.b2BodyDef.prototype.allowSleep = true;

/**
 * Is this body initially awake or sleeping?
 * @export
 * @type {boolean}
 */
box2d.b2BodyDef.prototype.awake = true;

/**
 * Should this body be prevented from rotating? Useful for
 * characters.
 * @export
 * @type {boolean}
 */
box2d.b2BodyDef.prototype.fixedRotation = false;

/**
 * Is this a fast moving body that should be prevented from
 * tunneling through other moving bodies? Note that all bodies
 * are prevented from tunneling through kinematic and static
 * bodies. This setting is only considered on dynamic bodies.
 * warning You should use this flag sparingly since it increases
 * processing time.
 * @export
 * @type {boolean}
 */
box2d.b2BodyDef.prototype.bullet = false;

/**
 * Does this body start out active?
 * @export
 * @type {boolean}
 */
box2d.b2BodyDef.prototype.active = true;

/**
 * Use this to store application specific body data.
 * @export
 * @type {*}
 */
box2d.b2BodyDef.prototype.userData = null;

/**
 * Scale the gravity applied to this body.
 * @export
 * @type {number}
 */
box2d.b2BodyDef.prototype.gravityScale = 1;

/**
 * @enum
 */
box2d.b2BodyFlag =
{
	e_none				: 0,
	e_islandFlag		: 0x0001,
	e_awakeFlag			: 0x0002,
	e_autoSleepFlag		: 0x0004,
	e_bulletFlag		: 0x0008,
	e_fixedRotationFlag	: 0x0010,
	e_activeFlag		: 0x0020,
	e_toiFlag			: 0x0040
};
goog.exportProperty(box2d.b2BodyFlag, 'e_none'             , box2d.b2BodyFlag.e_none             );
goog.exportProperty(box2d.b2BodyFlag, 'e_islandFlag'       , box2d.b2BodyFlag.e_islandFlag       );
goog.exportProperty(box2d.b2BodyFlag, 'e_awakeFlag'        , box2d.b2BodyFlag.e_awakeFlag        );
goog.exportProperty(box2d.b2BodyFlag, 'e_autoSleepFlag'    , box2d.b2BodyFlag.e_autoSleepFlag    );
goog.exportProperty(box2d.b2BodyFlag, 'e_bulletFlag'       , box2d.b2BodyFlag.e_bulletFlag       );
goog.exportProperty(box2d.b2BodyFlag, 'e_fixedRotationFlag', box2d.b2BodyFlag.e_fixedRotationFlag);
goog.exportProperty(box2d.b2BodyFlag, 'e_activeFlag'       , box2d.b2BodyFlag.e_activeFlag       );
goog.exportProperty(box2d.b2BodyFlag, 'e_toiFlag'          , box2d.b2BodyFlag.e_toiFlag          );

/**
 * A rigid body. These are created via
 * box2d.b2World::CreateBody.
 * @export
 * @constructor
 * @param {box2d.b2BodyDef} bd
 * @param {box2d.b2World} world
 */
box2d.b2Body = function (bd, world)
{
	this.m_xf = new box2d.b2Transform();
	this.m_out_xf = new box2d.b2Transform();
	this.m_sweep = new box2d.b2Sweep();
	this.m_out_sweep = new box2d.b2Sweep();
	this.m_linearVelocity = new box2d.b2Vec2();
	this.m_out_linearVelocity = new box2d.b2Vec2();
	this.m_force = new box2d.b2Vec2();

	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(bd.position.IsValid()); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(bd.linearVelocity.IsValid()); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2IsValid(bd.angle)); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2IsValid(bd.angularVelocity)); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2IsValid(bd.gravityScale) && bd.gravityScale >= 0); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2IsValid(bd.angularDamping) && bd.angularDamping >= 0); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(box2d.b2IsValid(bd.linearDamping) && bd.linearDamping >= 0); }

	this.m_flags = box2d.b2BodyFlag.e_none;

	if (bd.bullet)
	{
		this.m_flags |= box2d.b2BodyFlag.e_bulletFlag;
	}
	if (bd.fixedRotation)
	{
		this.m_flags |= box2d.b2BodyFlag.e_fixedRotationFlag;
	}
	if (bd.allowSleep)
	{
		this.m_flags |= box2d.b2BodyFlag.e_autoSleepFlag;
	}
	if (bd.awake)
	{
		this.m_flags |= box2d.b2BodyFlag.e_awakeFlag;
	}
	if (bd.active)
	{
		this.m_flags |= box2d.b2BodyFlag.e_activeFlag;
	}

	this.m_world = world;

	this.m_xf.p.Copy(bd.position);
	this.m_xf.q.SetAngleRadians(bd.angle);

	this.m_sweep.localCenter.SetZero();
	this.m_sweep.c0.Copy(this.m_xf.p);
	this.m_sweep.c.Copy(this.m_xf.p);
	this.m_sweep.a0 = bd.angle;
	this.m_sweep.a = bd.angle;
	this.m_sweep.alpha0 = 0;

	this.m_linearVelocity.Copy(bd.linearVelocity);
	this.m_angularVelocity = bd.angularVelocity;

	this.m_linearDamping = bd.linearDamping;
	this.m_angularDamping = bd.angularDamping;
	this.m_gravityScale = bd.gravityScale;

	this.m_force.SetZero();
	this.m_torque = 0;

	this.m_sleepTime = 0;

	this.m_type = bd.type;

	if (bd.type == box2d.b2BodyType.b2_dynamicBody)
	{
		this.m_mass = 1;
		this.m_invMass = 1;
	}
	else
	{
		this.m_mass = 0;
		this.m_invMass = 0;
	}

	this.m_I = 0;
	this.m_invI = 0;

	this.m_userData = bd.userData;

	this.m_fixtureList = null;
	this.m_fixtureCount = 0;

	this.m_controllerList = null;
	this.m_controllerCount = 0;
}

/**
 * @export
 * @type {box2d.b2BodyFlag}
 */
box2d.b2Body.prototype.m_flags = box2d.b2BodyFlag.e_none;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_islandIndex = 0;
/**
 * @export
 * @type {box2d.b2World}
 */
box2d.b2Body.prototype.m_world = null;
/**
 * @export
 * @type {box2d.b2Transform}
 */
box2d.b2Body.prototype.m_xf = null; // the body origin transform
/**
 * @export
 * @type {box2d.b2Transform}
 */
box2d.b2Body.prototype.m_out_xf = null;
/**
 * @export
 * @type {box2d.b2Sweep}
 */
box2d.b2Body.prototype.m_sweep = null; // the swept motion for CCD
/**
 * @export
 * @type {box2d.b2Sweep}
 */
box2d.b2Body.prototype.m_out_sweep = null;
/**
 * @export
 * @type {box2d.b2JointEdge}
 */
box2d.b2Body.prototype.m_jointList = null;
/**
 * @export
 * @type {box2d.b2ContactEdge}
 */
box2d.b2Body.prototype.m_contactList = null;
/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.b2Body.prototype.m_prev = null;
/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.b2Body.prototype.m_next = null;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.b2Body.prototype.m_linearVelocity = null;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.b2Body.prototype.m_out_linearVelocity = null;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_angularVelocity = 0;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_linearDamping = 0;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_angularDamping = 0;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_gravityScale = 1;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.b2Body.prototype.m_force = null;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_torque = 0;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_sleepTime = 0;
/**
 * @export
 * @type {box2d.b2BodyType}
 */
box2d.b2Body.prototype.m_type = box2d.b2BodyType.b2_staticBody;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_mass = 1;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_invMass = 1;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_I = 0; // Rotational inertia about the center of mass.
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_invI = 0;
/**
 * @export
 * @type {*}
 */
box2d.b2Body.prototype.m_userData = null;
/**
 * @export
 * @type {box2d.b2Fixture}
 */
box2d.b2Body.prototype.m_fixtureList = null;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_fixtureCount = 0;
/**
 * @see box2d.b2Controller list
 * @export
 * @type {box2d.b2ControllerEdge}
 */
box2d.b2Body.prototype.m_controllerList = null;
/**
 * @export
 * @type {number}
 */
box2d.b2Body.prototype.m_controllerCount = 0;

/**
 * Creates a fixture and attach it to this body. Use this
 * function if you need to set some fixture parameters, like
 * friction. Otherwise you can create the fixture directly from
 * a shape.
 * If the density is non-zero, this function automatically
 * updates the mass of the body. Contacts are not created until
 * the next time step.
 * warning This function is locked during callbacks.
 * @export
 * @return {box2d.b2Fixture}
 * @param {box2d.b2FixtureDef} def the fixture definition.
 */
box2d.b2Body.prototype.CreateFixture = function (def)
{
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_world.IsLocked() == false); }
	if (this.m_world.IsLocked() == true)
	{
		return null;
	}

	var fixture = new box2d.b2Fixture();
	fixture.Create(this, def);

	if (this.m_flags & box2d.b2BodyFlag.e_activeFlag)
	{
		var broadPhase = this.m_world.m_contactManager.m_broadPhase;
		fixture.CreateProxies(broadPhase, this.m_xf);
	}

	fixture.m_next = this.m_fixtureList;
	this.m_fixtureList = fixture;
	++this.m_fixtureCount;

	fixture.m_body = this;

	// Adjust mass properties if needed.
	if (fixture.m_density > 0)
	{
		this.ResetMassData();
	}

	// Let the world know we have a new fixture. This will cause new contacts
	// to be created at the beginning of the next time step.
	this.m_world.m_flags |= box2d.b2WorldFlag.e_newFixture;

	return fixture;
}

/**
 * Creates a fixture from a shape and attach it to this body.
 * This is a convenience function. Use b2FixtureDef if you need
 * to set parameters like friction, restitution, user data, or
 * filtering.
 * If the density is non-zero, this function automatically
 * updates the mass of the body.
 * warning This function is locked during callbacks.
 * @export
 * @return {box2d.b2Fixture}
 * @param {box2d.b2Shape} shape the shape to be cloned.
 * @param {number} density the shape density (set to zero for static bodies).
 */
box2d.b2Body.prototype.CreateFixture2 = function (shape, density)
{
	if (density === undefined) density = 0;

	var def = box2d.b2Body.prototype.CreateFixture2.s_def;
	def.shape = shape;
	def.density = density;
	return this.CreateFixture(def);
}
box2d.b2Body.prototype.CreateFixture2.s_def = new box2d.b2FixtureDef();

/**
 * Destroy a fixture. This removes the fixture from the
 * broad-phase and destroys all contacts associated with this
 * fixture. This will automatically adjust the mass of the body
 * if the body is dynamic and the fixture has positive density.
 * All fixtures attached to a body are implicitly destroyed when
 * the body is destroyed.
 * warning This function is locked during callbacks.
 * @export
 * @return {void}
 * @param {box2d.b2Fixture} fixture the fixture to be removed.
 */
box2d.b2Body.prototype.DestroyFixture = function (fixture)
{
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_world.IsLocked() == false); }
	if (this.m_world.IsLocked() == true)
	{
		return;
	}

	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(fixture.m_body == this); }

	// Remove the fixture from this body's singly linked list.
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_fixtureCount > 0); }
	var node = this.m_fixtureList;
	var ppF = null;
	var found = false;
	while (node != null)
	{
		if (node == fixture)
		{
			if (ppF)
				ppF.m_next = fixture.m_next;
			else
				this.m_fixtureList = fixture.m_next;
			found = true;
			break;
		}

		ppF = node;
		node = node.m_next;
	}

	// You tried to remove a shape that is not attached to this body.
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(found); }

	// Destroy any contacts associated with the fixture.
	var edge = this.m_contactList;
	while (edge)
	{
		var c = edge.contact;
		edge = edge.next;

		var fixtureA = c.GetFixtureA();
		var fixtureB = c.GetFixtureB();

		if (fixture == fixtureA || fixture == fixtureB)
		{
			// This destroys the contact and removes it from
			// this body's contact list.
			this.m_world.m_contactManager.Destroy(c);
		}
	}

	if (this.m_flags & box2d.b2BodyFlag.e_activeFlag)
	{
		var broadPhase = this.m_world.m_contactManager.m_broadPhase;
		fixture.DestroyProxies(broadPhase);
	}

	fixture.Destroy();
	fixture.m_body = null;
	fixture.m_next = null;

	--this.m_fixtureCount;

	// Reset the mass data.
	this.ResetMassData();
}

/**
 * Set the position of the body's origin and rotation.
 * Manipulating a body's transform may cause non-physical
 * behavior.
 * Note: contacts are updated on the next call to b2World::Step.
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} position the world position of the body's local origin.
 * @param {number} angle the world rotation in radians.
 */
box2d.b2Body.prototype.SetTransformVecRadians = function (position, angle)
{
	this.SetTransformXYRadians(position.x, position.y, angle);
}

/**
 * @export
 * @return {void}
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 */
box2d.b2Body.prototype.SetTransformXYRadians = function (x, y, angle)
{
	if ((this.m_xf.p.x == x) &&
		(this.m_xf.p.y == y) &&
		(this.m_xf.q.GetAngleRadians()) == angle)
	{
		return;
	}

	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_world.IsLocked() == false); }
	if (this.m_world.IsLocked() == true)
	{
		return;
	}

	this.m_xf.q.SetAngleRadians(angle);
	this.m_xf.p.Set(x, y);

	box2d.b2MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
	this.m_sweep.a = angle;

	this.m_sweep.c0.Copy(this.m_sweep.c);
	this.m_sweep.a0 = angle;

	var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	for (var f = this.m_fixtureList; f; f = f.m_next)
	{
		f.Synchronize(broadPhase, this.m_xf, this.m_xf);
	}
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Transform} xf
 */
box2d.b2Body.prototype.SetTransform = function (xf)
{
	this.SetTransformVecRadians(xf.p, xf.GetAngleRadians());
}

/**
 * Get the body transform for the body's origin.
 * @export
 * @return {box2d.b2Transform} the world transform of the body's origin.
 * @param {box2d.b2Transform=} out
 */
box2d.b2Body.prototype.GetTransform = function (out)
{
	out = out || this.m_out_xf;
	return out.Copy(this.m_xf);
}

/**
 * Get the world body origin position.
 * @export
 * @return {box2d.b2Vec2} the world position of the body's origin.
 * @param {box2d.b2Vec2=} out
 */
box2d.b2Body.prototype.GetPosition = function (out)
{
	out = out || this.m_out_xf.p;
	return out.Copy(this.m_xf.p);
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} position
 */
box2d.b2Body.prototype.SetPosition = function (position)
{
	this.SetTransformVecRadians(position, this.GetAngleRadians());
}

/**
 * @export
 * @return {void}
 * @param {number} x
 * @param {number} y
 */
box2d.b2Body.prototype.SetPositionXY = function (x, y)
{
	this.SetTransformXYRadians(x, y, this.GetAngleRadians());
}

/**
 * Get the angle in radians.
 * @export
 * @return {number} the current world rotation angle in radians.
 */
box2d.b2Body.prototype.GetAngleRadians = function ()
{
	return this.m_sweep.a;
}

/**
 * @export
 * @return {void}
 * @param {number} angle
 */
box2d.b2Body.prototype.SetAngleRadians = function (angle)
{
	this.SetTransformVecRadians(this.GetPosition(), angle);
}

/**
 * Get the world position of the center of mass.
 * @export
 * @return {box2d.b2Vec2}
 * @param {box2d.b2Vec2=} out
 */
box2d.b2Body.prototype.GetWorldCenter = function (out)
{
	out = out || this.m_out_sweep.c;
	return out.Copy(this.m_sweep.c);
}

/**
 * Get the local position of the center of mass.
 * @export
 * @return {box2d.b2Vec2}
 * @param {box2d.b2Vec2=} out
 */
box2d.b2Body.prototype.GetLocalCenter = function (out)
{
	out = out || this.m_out_sweep.localCenter;
	return out.Copy(this.m_sweep.localCenter);
}

/**
 * Set the linear velocity of the center of mass.
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} v the new linear velocity of the center of mass.
 */
box2d.b2Body.prototype.SetLinearVelocity = function (v)
{
	if (this.m_type == box2d.b2BodyType.b2_staticBody)
	{
		return;
	}

	if (box2d.b2DotVV(v,v) > 0)
	{
		this.SetAwake(true);
	}

	this.m_linearVelocity.Copy(v);
}

/**
 * Get the linear velocity of the center of mass.
 * @export
 * @return {box2d.b2Vec2} the linear velocity of the center of mass.
 * @param {box2d.b2Vec2=} out
 */
box2d.b2Body.prototype.GetLinearVelocity = function (out)
{
	out = out || this.m_out_linearVelocity;
	return out.Copy(this.m_linearVelocity);
}

/**
 * Set the angular velocity.
 * @export
 * @return {void}
 * @param {number} w the new angular velocity in radians/second.
 */
box2d.b2Body.prototype.SetAngularVelocity = function (w)
{
	if (this.m_type == box2d.b2BodyType.b2_staticBody)
	{
		return;
	}

	if (w * w > 0)
	{
		this.SetAwake(true);
	}

	this.m_angularVelocity = w;
}

/**
 * Get the angular velocity.
 * @export
 * @return {number} the angular velocity in radians/second.
 */
box2d.b2Body.prototype.GetAngularVelocity = function ()
{
	return this.m_angularVelocity;
}

/**
 * @export
 * @return {box2d.b2BodyDef}
 * @param {box2d.b2BodyDef} bd
 */
box2d.b2Body.prototype.GetDefinition = function (bd)
{
	bd.type = this.GetType();
	bd.allowSleep = (this.m_flags & box2d.b2BodyFlag.e_autoSleepFlag) == box2d.b2BodyFlag.e_autoSleepFlag;
	bd.angle = this.GetAngleRadians();
	bd.angularDamping = this.m_angularDamping;
	bd.gravityScale = this.m_gravityScale;
	bd.angularVelocity = this.m_angularVelocity;
	bd.fixedRotation = (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) == box2d.b2BodyFlag.e_fixedRotationFlag;
	bd.bullet = (this.m_flags & box2d.b2BodyFlag.e_bulletFlag) == box2d.b2BodyFlag.e_bulletFlag;
	bd.awake = (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == box2d.b2BodyFlag.e_awakeFlag;
	bd.linearDamping = this.m_linearDamping;
	bd.linearVelocity.Copy(this.GetLinearVelocity());
	bd.position.Copy(this.GetPosition());
	bd.userData = this.GetUserData();
	return bd;
}

/**
 * Apply a force at a world point. If the force is not applied
 * at the center of mass, it will generate a torque and affect
 * the angular velocity. This wakes up the body.
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} force the world force vector, usually in Newtons (N).
 * @param {box2d.b2Vec2} point the world position of the point of application.
 * @param {boolean=} wake also wake up the body
 */
box2d.b2Body.prototype.ApplyForce = function (force, point, wake)
{
	wake = wake || true;

	if (this.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return;
	}

	if (wake && (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == 0)
	{
		this.SetAwake(true);
	}

	// Don't accumulate a force if the body is sleeping.
	if (this.m_flags & box2d.b2BodyFlag.e_awakeFlag)
	{
		this.m_force.x += force.x;
		this.m_force.y += force.y;
		this.m_torque += ((point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x);
	}
}

/**
 * Apply a force to the center of mass. This wakes up the body.
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} force the world force vector, usually in Newtons (N).
 * @param {boolean=} wake also wake up the body
 */
box2d.b2Body.prototype.ApplyForceToCenter = function (force, wake)
{
	wake = wake || true;

	if (this.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return;
	}

	if (wake && (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == 0)
	{
		this.SetAwake(true);
	}

	// Don't accumulate a force if the body is sleeping.
	if (this.m_flags & box2d.b2BodyFlag.e_awakeFlag)
	{
		this.m_force.x += force.x;
		this.m_force.y += force.y;
	}
}

/**
 * Apply a torque. This affects the angular velocity without
 * affecting the linear velocity of the center of mass. This
 * wakes up the body.
 * @export
 * @return {void}
 * @param {number} torque about the z-axis (out of the screen), usually in N-m.
 * @param {boolean=} wake also wake up the body
 */
box2d.b2Body.prototype.ApplyTorque = function (torque, wake)
{
	wake = wake || true;

	if (this.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return;
	}

	if (wake && (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == 0)
	{
		this.SetAwake(true);
	}

	// Don't accumulate a force if the body is sleeping.
	if (this.m_flags & box2d.b2BodyFlag.e_awakeFlag)
	{
		this.m_torque += torque;
	}
}

/**
 * Apply an impulse at a point. This immediately modifies the
 * velocity. It also modifies the angular velocity if the point
 * of application is not at the center of mass. This wakes up
 * the body.
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} impulse the world impulse vector, usually in N-seconds or kg-m/s.
 * @param {box2d.b2Vec2} point the world position of the point of application.
 * @param {boolean=} wake also wake up the body
 */
box2d.b2Body.prototype.ApplyLinearImpulse = function (impulse, point, wake)
{
	wake = wake || true;

	if (this.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return;
	}

	if (wake && (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == 0)
	{
		this.SetAwake(true);
	}

	// Don't accumulate a force if the body is sleeping.
	if (this.m_flags & box2d.b2BodyFlag.e_awakeFlag)
	{
		this.m_linearVelocity.x += this.m_invMass * impulse.x;
		this.m_linearVelocity.y += this.m_invMass * impulse.y;
		this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
	}
}

/**
 * Apply an angular impulse.
 * @export
 * @return {void}
 * @param {number} impulse the angular impulse in units of kg*m*m/s
 * @param {boolean=} wake also wake up the body
 */
box2d.b2Body.prototype.ApplyAngularImpulse = function (impulse, wake)
{
	wake = wake || true;

	if (this.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return;
	}

	if (wake && (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == 0)
	{
		this.SetAwake(true);
	}

	// Don't accumulate a force if the body is sleeping.
	if (this.m_flags & box2d.b2BodyFlag.e_awakeFlag)
	{
		this.m_angularVelocity += this.m_invI * impulse;
	}
}

/**
 * Get the total mass of the body.
 * @export
 * @return {number} the mass, usually in kilograms (kg).
 */
box2d.b2Body.prototype.GetMass = function ()
{
	return this.m_mass;
}

/**
 * Get the rotational inertia of the body about the local
 * origin.
 * @export
 * @return {number} the rotational inertia, usually in kg-m^2.
 */
box2d.b2Body.prototype.GetInertia = function ()
{
	return this.m_I + this.m_mass * box2d.b2DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
}

/**
 * Get the mass data of the body.
 * @export
 * @return {box2d.b2MassData} a struct containing the mass, inertia and center of the body.
 * @param {box2d.b2MassData} data
 */
box2d.b2Body.prototype.GetMassData = function (data)
{
	data.mass = this.m_mass;
	data.I = this.m_I + this.m_mass * box2d.b2DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
	data.center.Copy(this.m_sweep.localCenter);
	return data;
}

/**
 * Set the mass properties to override the mass properties of
 * the fixtures.
 * Note that this changes the center of mass position.
 * Note that creating or destroying fixtures can also alter the
 * mass.
 * This function has no effect if the body isn't dynamic.
 * @export
 * @return {void}
 * @param {box2d.b2MassData} massData the mass properties.
 */
box2d.b2Body.prototype.SetMassData = function (massData)
{
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_world.IsLocked() == false); }
	if (this.m_world.IsLocked() == true)
	{
		return;
	}

	if (this.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return;
	}

	this.m_invMass = 0;
	this.m_I = 0;
	this.m_invI = 0;

	this.m_mass = massData.mass;
	if (this.m_mass <= 0)
	{
		this.m_mass = 1;
	}

	this.m_invMass = 1 / this.m_mass;

	if (massData.I > 0 && (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) == 0)
	{
		this.m_I = massData.I - this.m_mass * box2d.b2DotVV(massData.center, massData.center);
		if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_I > 0); }
		this.m_invI = 1 / this.m_I;
	}

	// Move center of mass.
	var oldCenter = box2d.b2Body.prototype.SetMassData.s_oldCenter.Copy(this.m_sweep.c);
	this.m_sweep.localCenter.Copy(massData.center);
	box2d.b2MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
	this.m_sweep.c0.Copy(this.m_sweep.c);

	// Update center of mass velocity.
	box2d.b2AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, box2d.b2SubVV(this.m_sweep.c, oldCenter, box2d.b2Vec2.s_t0), this.m_linearVelocity);
}
box2d.b2Body.prototype.SetMassData.s_oldCenter = new box2d.b2Vec2();

/**
 * This resets the mass properties to the sum of the mass
 * properties of the fixtures. This normally does not need to be
 * called unless you called SetMassData to override the mass and
 * you later want to reset the mass.
 * @export
 * @return {void}
 */
box2d.b2Body.prototype.ResetMassData = function ()
{
	// Compute mass data from shapes. Each shape has its own density.
	this.m_mass = 0;
	this.m_invMass = 0;
	this.m_I = 0;
	this.m_invI = 0;
	this.m_sweep.localCenter.SetZero();

	// Static and kinematic bodies have zero mass.
	if (this.m_type == box2d.b2BodyType.b2_staticBody || this.m_type == box2d.b2BodyType.b2_kinematicBody)
	{
		this.m_sweep.c0.Copy(this.m_xf.p);
		this.m_sweep.c.Copy(this.m_xf.p);
		this.m_sweep.a0 = this.m_sweep.a;
		return;
	}

	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_type == box2d.b2BodyType.b2_dynamicBody); }

	// Accumulate mass over all fixtures.
	var localCenter = box2d.b2Body.prototype.ResetMassData.s_localCenter.SetZero();
	for (var f = this.m_fixtureList; f; f = f.m_next)
	{
		if (f.m_density == 0)
		{
			continue;
		}

		var massData = f.GetMassData(box2d.b2Body.prototype.ResetMassData.s_massData);
		this.m_mass += massData.mass;
		localCenter.x += massData.center.x * massData.mass;
		localCenter.y += massData.center.y * massData.mass;
		this.m_I += massData.I;
	}

	// Compute center of mass.
	if (this.m_mass > 0)
	{
		this.m_invMass = 1 / this.m_mass;
		localCenter.x *= this.m_invMass;
		localCenter.y *= this.m_invMass;
	}
	else
	{
		// Force all dynamic bodies to have a positive mass.
		this.m_mass = 1;
		this.m_invMass = 1;
	}

	if (this.m_I > 0 && (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) == 0)
	{
		// Center the inertia about the center of mass.
		this.m_I -= this.m_mass * box2d.b2DotVV(localCenter, localCenter);
		if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_I > 0); }
		this.m_invI = 1 / this.m_I;
	}
	else
	{
		this.m_I = 0;
		this.m_invI = 0;
	}

	// Move center of mass.
	var oldCenter = box2d.b2Body.prototype.ResetMassData.s_oldCenter.Copy(this.m_sweep.c);
	this.m_sweep.localCenter.Copy(localCenter);
	box2d.b2MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
	this.m_sweep.c0.Copy(this.m_sweep.c);

	// Update center of mass velocity.
	box2d.b2AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, box2d.b2SubVV(this.m_sweep.c, oldCenter, box2d.b2Vec2.s_t0), this.m_linearVelocity);
}
box2d.b2Body.prototype.ResetMassData.s_localCenter = new box2d.b2Vec2();
box2d.b2Body.prototype.ResetMassData.s_oldCenter = new box2d.b2Vec2();
box2d.b2Body.prototype.ResetMassData.s_massData = new box2d.b2MassData();

/**
 * Get the world coordinates of a point given the local
 * coordinates.
 * @export
 * @return {box2d.b2Vec2} the same point expressed in world coordinates.
 * @param {box2d.b2Vec2} localPoint a point on the body measured relative the the body's origin.
 * @param {box2d.b2Vec2} out
 */
box2d.b2Body.prototype.GetWorldPoint = function (localPoint, out)
{
	return box2d.b2MulXV(this.m_xf, localPoint, out);
}

/**
 * Get the world coordinates of a vector given the local
 * coordinates.
 * @export
 * @return {box2d.b2Vec2} the same vector expressed in world coordinates.
 * @param {box2d.b2Vec2} localVector a vector fixed in the body.
 * @param {box2d.b2Vec2} out
 */
box2d.b2Body.prototype.GetWorldVector = function (localVector, out)
{
	return box2d.b2MulRV(this.m_xf.q, localVector, out);
}

/**
 * Gets a local point relative to the body's origin given a
 * world point.
 * @export
 * @return {box2d.b2Vec2} the corresponding local point relative to the body's origin.
 * @param {box2d.b2Vec2} worldPoint a point in world coordinates.
 * @param {box2d.b2Vec2} out
 */
box2d.b2Body.prototype.GetLocalPoint = function (worldPoint, out)
{
	return box2d.b2MulTXV(this.m_xf, worldPoint, out);
}

/**
 * Gets a local vector given a world vector.
 * @export
 * @return {box2d.b2Vec2} the corresponding local vector.
 * @param {box2d.b2Vec2} worldVector a vector in world coordinates.
 * @param {box2d.b2Vec2} out
 */
box2d.b2Body.prototype.GetLocalVector = function (worldVector, out)
{
	return box2d.b2MulTRV(this.m_xf.q, worldVector, out);
}

/**
 * Get the world linear velocity of a world point attached to
 * this body.
 * @export
 * @return {box2d.b2Vec2} the world velocity of a point.
 * @param {box2d.b2Vec2} worldPoint a point in world coordinates.
 * @param {box2d.b2Vec2} out
 */
box2d.b2Body.prototype.GetLinearVelocityFromWorldPoint = function (worldPoint, out)
{
	return box2d.b2AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, box2d.b2SubVV(worldPoint, this.m_sweep.c, box2d.b2Vec2.s_t0), out);
}

/**
 * Get the world velocity of a local point.
 * @export
 * @return {box2d.b2Vec2} the world velocity of a point.
 * @param {box2d.b2Vec2} localPoint a point in local coordinates.
 * @param {box2d.b2Vec2} out
 */
box2d.b2Body.prototype.GetLinearVelocityFromLocalPoint = function (localPoint, out)
{
	return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(localPoint, out), out);
}

/**
 * Get the linear damping of the body.
 * @export
 * @return {number}
 */
box2d.b2Body.prototype.GetLinearDamping = function ()
{
	return this.m_linearDamping;
}

/**
 * Set the linear damping of the body.
 * @export
 * @param {number} linearDamping
 */
box2d.b2Body.prototype.SetLinearDamping = function (linearDamping)
{
	this.m_linearDamping = linearDamping;
}

/**
 * Get the angular damping of the body.
 * @export
 * @return {number}
 */
box2d.b2Body.prototype.GetAngularDamping = function ()
{
	return this.m_angularDamping;
}

/**
 * Set the angular damping of the body.
 * @export
 * @return {void}
 * @param {number} angularDamping
 */
box2d.b2Body.prototype.SetAngularDamping = function (angularDamping)
{
	this.m_angularDamping = angularDamping;
}

/**
 * Get the gravity scale of the body.
 * @export
 * @return {number}
 */
box2d.b2Body.prototype.GetGravityScale = function ()
{
	return this.m_gravityScale;
}

/**
 * Set the gravity scale of the body.
 * @export
 * @return {void}
 * @param {number} scale
 */
box2d.b2Body.prototype.SetGravityScale = function (scale)
{
	this.m_gravityScale = scale;
}

/**
 * Set the type of this body. This may alter the mass and
 * velocity.
 * @export
 * @return {void}
 * @param {box2d.b2BodyType} type
 */
box2d.b2Body.prototype.SetType = function (type)
{
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_world.IsLocked() == false); }
	if (this.m_world.IsLocked() == true)
	{
		return;
	}

	if (this.m_type == type)
	{
		return;
	}

	this.m_type = type;

	this.ResetMassData();

	if (this.m_type == box2d.b2BodyType.b2_staticBody)
	{
		this.m_linearVelocity.SetZero();
		this.m_angularVelocity = 0;
		this.m_sweep.a0 = this.m_sweep.a;
		this.m_sweep.c0.Copy(this.m_sweep.c);
		this.SynchronizeFixtures();
	}

	this.SetAwake(true);

	this.m_force.SetZero();
	this.m_torque = 0;

	// Delete the attached contacts.
	/** @type {box2d.b2ContactEdge} */ var ce = this.m_contactList;
	while (ce)
	{
		/** @type {box2d.b2ContactEdge} */ var ce0 = ce;
		ce = ce.next;
		this.m_world.m_contactManager.Destroy(ce0.contact);
	}
	this.m_contactList = null;

	// Touch the proxies so that new contacts will be created (when appropriate)
	/** @type {box2d.b2BroadPhase} */ var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	for (/** @type {box2d.b2Fixture} */ var f = this.m_fixtureList; f; f = f.m_next)
	{
		var proxyCount = f.m_proxyCount;
		for (var i = 0; i < proxyCount; ++i)
		{
			broadPhase.TouchProxy(f.m_proxies[i].proxy);
		}
	}
}

/**
 * Get the type of this body.
 * @export
 * @return {box2d.b2BodyType}
 */
box2d.b2Body.prototype.GetType = function ()
{
	return this.m_type;
}

/**
 * Should this body be treated like a bullet for continuous
 * collision detection?
 * @export
 * @return {void}
 * @param {boolean} flag
 */
box2d.b2Body.prototype.SetBullet = function (flag)
{
	if (flag)
	{
		this.m_flags |= box2d.b2BodyFlag.e_bulletFlag;
	}
	else
	{
		this.m_flags &= ~box2d.b2BodyFlag.e_bulletFlag;
	}
}

/**
 * Is this body treated like a bullet for continuous collision
 * detection?
 * @export
 * @return {boolean}
 */
box2d.b2Body.prototype.IsBullet = function ()
{
	return (this.m_flags & box2d.b2BodyFlag.e_bulletFlag) == box2d.b2BodyFlag.e_bulletFlag;
}

/**
 * You can disable sleeping on this body. If you disable
 * sleeping, the body will be woken.
 * @export
 * @return {void}
 * @param {boolean} flag
 */
box2d.b2Body.prototype.SetSleepingAllowed = function (flag)
{
	if (flag)
	{
		this.m_flags |= box2d.b2BodyFlag.e_autoSleepFlag;
	}
	else
	{
		this.m_flags &= ~box2d.b2BodyFlag.e_autoSleepFlag;
		this.SetAwake(true);
	}
}

/**
 * Is this body allowed to sleep
 * @export
 * @return {boolean}
 */
box2d.b2Body.prototype.IsSleepingAllowed = function ()
{
	return (this.m_flags & box2d.b2BodyFlag.e_autoSleepFlag) == box2d.b2BodyFlag.e_autoSleepFlag;
}

/**
 * Set the sleep state of the body. A sleeping body has very low CPU cost.
 * @export
 * @return {void}
 * @param {boolean} flag set to true to wake the body, false to
 *  	  put it to sleep.
 */
box2d.b2Body.prototype.SetAwake = function (flag)
{
	if (flag)
	{
		if ((this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == 0)
		{
			this.m_flags |= box2d.b2BodyFlag.e_awakeFlag;
			this.m_sleepTime = 0;
		}
	}
	else
	{
		this.m_flags &= ~box2d.b2BodyFlag.e_awakeFlag;
		this.m_sleepTime = 0;
		this.m_linearVelocity.SetZero();
		this.m_angularVelocity = 0;
		this.m_force.SetZero();
		this.m_torque = 0;
	}
}

/**
 * Get the sleeping state of this body.
 * @export
 * @return {boolean} true if the body is awake.
 */
box2d.b2Body.prototype.IsAwake = function ()
{
	return (this.m_flags & box2d.b2BodyFlag.e_awakeFlag) == box2d.b2BodyFlag.e_awakeFlag;
}

/**
 * Set the active state of the body. An inactive body is not
 * simulated and cannot be collided with or woken up.
 * If you pass a flag of true, all fixtures will be added to the
 * broad-phase.
 * If you pass a flag of false, all fixtures will be removed from
 * the broad-phase and all contacts will be destroyed.
 * Fixtures and joints are otherwise unaffected. You may continue
 * to create/destroy fixtures and joints on inactive bodies.
 * Fixtures on an inactive body are implicitly inactive and will
 * not participate in collisions, ray-casts, or queries.
 * Joints connected to an inactive body are implicitly inactive.
 * An inactive body is still owned by a b2World object and remains
 * in the body list.
 * @export
 * @return {void}
 * @param {boolean} flag
 */
box2d.b2Body.prototype.SetActive = function (flag)
{
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(this.m_world.IsLocked() == false); }

	if (flag == this.IsActive())
	{
		return;
	}

	if (flag)
	{
		this.m_flags |= box2d.b2BodyFlag.e_activeFlag;

		// Create all proxies.
		var broadPhase = this.m_world.m_contactManager.m_broadPhase;
		for (var f = this.m_fixtureList; f; f = f.m_next)
		{
			f.CreateProxies(broadPhase, this.m_xf);
		}

		// Contacts are created the next time step.
	}
	else
	{
		this.m_flags &= ~box2d.b2BodyFlag.e_activeFlag;

		// Destroy all proxies.
		var broadPhase = this.m_world.m_contactManager.m_broadPhase;
		for (var f = this.m_fixtureList; f; f = f.m_next)
		{
			f.DestroyProxies(broadPhase);
		}

		// Destroy the attached contacts.
		var ce = this.m_contactList;
		while (ce)
		{
			var ce0 = ce;
			ce = ce.next;
			this.m_world.m_contactManager.Destroy(ce0.contact);
		}
		this.m_contactList = null;
	}
}

/**
 * Get the active state of the body.
 * @export
 * @return {boolean}
 */
box2d.b2Body.prototype.IsActive = function ()
{
	return (this.m_flags & box2d.b2BodyFlag.e_activeFlag) == box2d.b2BodyFlag.e_activeFlag;
}

/**
 * Set this body to have fixed rotation. This causes the mass to
 * be reset.
 * @export
 * @return {void}
 * @param {boolean} flag
 */
box2d.b2Body.prototype.SetFixedRotation = function (flag)
{
	var status = (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) == box2d.b2BodyFlag.e_fixedRotationFlag;
	if (status == flag)
	{
		return;
	}

	if (flag)
	{
		this.m_flags |= box2d.b2BodyFlag.e_fixedRotationFlag;
	}
	else
	{
		this.m_flags &= ~box2d.b2BodyFlag.e_fixedRotationFlag;
	}

	this.m_angularVelocity = 0;

	this.ResetMassData();
}

/**
 * Does this body have fixed rotation?
 * @export
 * @return {boolean}
 */
box2d.b2Body.prototype.IsFixedRotation = function ()
{
	return (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag) == box2d.b2BodyFlag.e_fixedRotationFlag;
}

/**
 * Get the list of all fixtures attached to this body.
 * @export
 * @return {box2d.b2Fixture}
 */
box2d.b2Body.prototype.GetFixtureList = function ()
{
	return this.m_fixtureList;
}

/**
 * Get the list of all joints attached to this body.
 * @export
 * @return {box2d.b2JointEdge}
 */
box2d.b2Body.prototype.GetJointList = function ()
{
	return this.m_jointList;
}

/**
 * Get the list of all contacts attached to this body.
 * warning this list changes during the time step and you may
 * miss some collisions if you don't use b2ContactListener.
 * @export
 * @return {box2d.b2ContactEdge}
 */
box2d.b2Body.prototype.GetContactList = function ()
{
	return this.m_contactList;
}

/**
 * Get the next body in the world's body list.
 * @export
 * @return {box2d.b2Body}
 */
box2d.b2Body.prototype.GetNext = function ()
{
	return this.m_next;
}

/**
 * Get the user data pointer that was provided in the body
 * definition.
 * @export
 * @return {*}
 */
box2d.b2Body.prototype.GetUserData = function ()
{
	return this.m_userData;
}

/**
 * Set the user data. Use this to store your application
 * specific data.
 * @export
 * @return {void}
 * @param {*} data
 */
box2d.b2Body.prototype.SetUserData = function (data)
{
	this.m_userData = data;
}

/**
 * Get the parent world of this body.
 * @export
 * @return {box2d.b2World}
 */
box2d.b2Body.prototype.GetWorld = function ()
{
	return this.m_world;
}

/**
 * @export
 * @return {void}
 */
box2d.b2Body.prototype.SynchronizeFixtures = function ()
{
	var xf1 = box2d.b2Body.prototype.SynchronizeFixtures.s_xf1;
	xf1.q.SetAngleRadians(this.m_sweep.a0);
	box2d.b2MulRV(xf1.q, this.m_sweep.localCenter, xf1.p);
	box2d.b2SubVV(this.m_sweep.c0, xf1.p, xf1.p);

	var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	for (var f = this.m_fixtureList; f; f = f.m_next)
	{
		f.Synchronize(broadPhase, xf1, this.m_xf);
	}
}
box2d.b2Body.prototype.SynchronizeFixtures.s_xf1 = new box2d.b2Transform();

/**
 * @export
 * @return {void}
 */
box2d.b2Body.prototype.SynchronizeTransform = function ()
{
	this.m_xf.q.SetAngleRadians(this.m_sweep.a);
	box2d.b2MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
	box2d.b2SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
}

/**
 * This is used to prevent connected bodies from colliding.
 * It may lie, depending on the collideConnected flag.
 * @export
 * @return {boolean}
 * @param {box2d.b2Body} other
 */
box2d.b2Body.prototype.ShouldCollide = function (other)
{
	// At least one body should be dynamic.
	if (this.m_type != box2d.b2BodyType.b2_dynamicBody && other.m_type != box2d.b2BodyType.b2_dynamicBody)
	{
		return false;
	}

	// Does a joint prevent collision?
	for (var jn = this.m_jointList; jn; jn = jn.next)
	{
		if (jn.other == other)
		{
			if (jn.joint.m_collideConnected == false)
			{
				return false;
			}
		}
	}

	return true;
}

/**
 * @export
 * @return {void}
 * @param {number} alpha
 */
box2d.b2Body.prototype.Advance = function (alpha)
{
	// Advance to the new safe time. This doesn't sync the broad-phase.
	this.m_sweep.Advance(alpha);
	this.m_sweep.c.Copy(this.m_sweep.c0);
	this.m_sweep.a = this.m_sweep.a0;
	this.m_xf.q.SetAngleRadians(this.m_sweep.a);
	box2d.b2MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
	box2d.b2SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
}

/**
 * Dump this body to a log file
 * @export
 * @return {void}
 */
box2d.b2Body.prototype.Dump = function ()
{
	if (box2d.DEBUG)
	{
		var bodyIndex = this.m_islandIndex;

		box2d.b2Log("if (true)\n");
		box2d.b2Log("{\n");
		box2d.b2Log("  /*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();\n");
		var type_str = '';
		switch (this.m_type)
		{
		case box2d.b2BodyType.b2_staticBody:
			type_str = 'box2d.b2BodyType.b2_staticBody';
			break;
		case box2d.b2BodyType.b2_kinematicBody:
			type_str = 'box2d.b2BodyType.b2_kinematicBody';
			break;
		case box2d.b2BodyType.b2_dynamicBody:
			type_str = 'box2d.b2BodyType.b2_dynamicBody';
			break;
		default:
			if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(false); }
			break;
		}
		box2d.b2Log("  bd.type = %s;\n", type_str);
		box2d.b2Log("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y);
		box2d.b2Log("  bd.angle = %.15f;\n", this.m_sweep.a);
		box2d.b2Log("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y);
		box2d.b2Log("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity);
		box2d.b2Log("  bd.linearDamping = %.15f;\n", this.m_linearDamping);
		box2d.b2Log("  bd.angularDamping = %.15f;\n", this.m_angularDamping);
		box2d.b2Log("  bd.allowSleep = %s;\n", (this.m_flags & box2d.b2BodyFlag.e_autoSleepFlag)?('true'):('false'));
		box2d.b2Log("  bd.awake = %s;\n", (this.m_flags & box2d.b2BodyFlag.e_awakeFlag)?('true'):('false'));
		box2d.b2Log("  bd.fixedRotation = %s;\n", (this.m_flags & box2d.b2BodyFlag.e_fixedRotationFlag)?('true'):('false'));
		box2d.b2Log("  bd.bullet = %s;\n", (this.m_flags & box2d.b2BodyFlag.e_bulletFlag)?('true'):('false'));
		box2d.b2Log("  bd.active = %s;\n", (this.m_flags & box2d.b2BodyFlag.e_activeFlag)?('true'):('false'));
		box2d.b2Log("  bd.gravityScale = %.15f;\n", this.m_gravityScale);
		box2d.b2Log("\n");
		box2d.b2Log("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex);
		box2d.b2Log("\n");
		for (/** @type {box2d.b2Fixture} */ var f = this.m_fixtureList; f; f = f.m_next)
		{
			box2d.b2Log("  if (true)\n");
			box2d.b2Log("  {\n");
			f.Dump(bodyIndex);
			box2d.b2Log("  }\n");
		}
		box2d.b2Log("}\n");
	}
}

/**
 * @see box2d.b2Controller list
 * @export
 * @return {box2d.b2ControllerEdge}
 */
box2d.b2Body.prototype.GetControllerList = function ()
{
	return this.m_controllerList;
}

/**
 * @see box2d.b2Controller list
 * @export
 * @return {number}
 */
box2d.b2Body.prototype.GetControllerCount = function ()
{
	return this.m_controllerCount;
}

return box2d
})
// End auto-generated code.
