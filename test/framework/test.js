// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d', 'mod_box2d_testbed_render'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.Testbed.Test');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.Test === 'undefined')
    box2d.Testbed.Test = {}


// -removed- goog.require('box2d');
// -removed- goog.require('box2d.Testbed.Render');

/**
 * @export
 * @define {number}
 */
box2d.Testbed.DRAW_STRING_NEW_LINE = 25;

/**
 * Test settings. Some can be controlled in the GUI.
 * @export
 * @constructor
 */
box2d.Testbed.Settings = function ()
{
	this.viewCenter = new box2d.b2Vec2(0, 20);
	this.viewRotation = new box2d.b2Rot(box2d.b2DegToRad(0));
}

/**
 * @export
 * @type {number}
 */
box2d.Testbed.Settings.prototype.canvasScale = 10;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Settings.prototype.viewZoom = 1;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.Settings.prototype.viewCenter = null;
/**
 * @export
 * @type {box2d.b2Rot}
 */
box2d.Testbed.Settings.prototype.viewRotation = null;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Settings.prototype.hz = 60;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Settings.prototype.velocityIterations = 8;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Settings.prototype.positionIterations = 3;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawShapes = true;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawJoints = true;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawAABBs = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawContactPoints = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawContactNormals = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawContactImpulse = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawFrictionImpulse = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawCOMs = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawControllers = true;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawStats = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.drawProfile = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.enableWarmStarting = true;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.enableContinuous = true;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.enableSubStepping = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.enableSleep = true;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.pause = false;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Settings.prototype.singleStep = false;

/**
 * @export
 * @constructor
 * @param {string} name
 * @param {function(HTMLCanvasElement, box2d.Testbed.Settings):
 *  	  box2d.Testbed.Test} createFcn
 */
box2d.Testbed.TestEntry = function (name, createFcn)
{
	this.name = name;
	this.createFcn = createFcn;
}

/**
 * @export
 * @type {string}
 */
box2d.Testbed.TestEntry.prototype.name = "unknown";
/**
 * @export
 * @type {function(HTMLCanvasElement, box2d.Testbed.Settings):
 *  	 box2d.Testbed.Test} createFcn
 */
box2d.Testbed.TestEntry.prototype.createFcn = function (canvas, settings) {};

/**
 * This is called when a joint in the world is implicitly
 * destroyed because an attached body is destroyed. This gives
 * us a chance to nullify the mouse joint.
 * @export
 * @constructor
 * @extends box2d.b2DestructionListener
 */
box2d.Testbed.DestructionListener = function (test)
{
	goog.base(this);

	this.test = test;
}

goog.inherits(box2d.Testbed.DestructionListener, box2d.b2DestructionListener);

/**
 * @export
 * @type {box2d.Testbed.Test}
 */
box2d.Testbed.DestructionListener.prototype.test = null;

/**
 * @export
 * @return {void}
 * @param {box2d.b2Joint} joint
 */
box2d.Testbed.DestructionListener.prototype.SayGoodbyeJoint = function (joint)
{
	if (this.test.m_mouseJoint == joint)
	{
		this.test.m_mouseJoint = null;
	}
	else
	{
		this.test.JointDestroyed(joint);
	}
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Fixture} fixture
 */
box2d.Testbed.DestructionListener.prototype.SayGoodbyeFixture = function (fixture)
{
}

/**
 * @export
 * @constructor
 */
box2d.Testbed.ContactPoint = function ()
{
	this.normal = new box2d.b2Vec2();
	this.position = new box2d.b2Vec2();
};

/**
 * @export
 * @type {box2d.b2Fixture}
 */
box2d.Testbed.ContactPoint.prototype.fixtureA = null;
/**
 * @export
 * @type {box2d.b2Fixture}
 */
box2d.Testbed.ContactPoint.prototype.fixtureB = null;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.ContactPoint.prototype.normal = new box2d.b2Vec2();
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.ContactPoint.prototype.position = new box2d.b2Vec2();
/**
 * @export
 * @type {box2d.b2PointState}
 */
box2d.Testbed.ContactPoint.prototype.state = box2d.b2PointState.b2_nullState;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.ContactPoint.prototype.normalImpulse = 0;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.ContactPoint.prototype.tangentImpulse = 0;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.ContactPoint.prototype.separation = 0;

/**
 * @export
 * @constructor
 * @extends {box2d.b2ContactListener}
 * @param {HTMLCanvasElement} canvas
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.Test = function (canvas, settings)
{
	goog.base(this); // base class constructor

	var gravity = new box2d.b2Vec2(0, -10);
	this.m_world = new box2d.b2World(gravity);
	this.m_bomb = null;
	this.m_textLine = 30;
	this.m_mouseJoint = null;
	this.m_points = new Array(box2d.Testbed.Test.k_maxContactPoints);
	for (var i = 0; i < box2d.Testbed.Test.k_maxContactPoints; ++i)
	{
		this.m_points[i] = new box2d.Testbed.ContactPoint();
	}
	this.m_pointCount = 0;

	this.m_destructionListener = new box2d.Testbed.DestructionListener(this);
	this.m_world.SetDestructionListener(this.m_destructionListener);
	this.m_world.SetContactListener(this);
	this.m_debugDraw = new box2d.Testbed.DebugDraw(canvas, settings);
	this.m_world.SetDebugDraw(this.m_debugDraw);

	this.m_bombSpawnPoint = new box2d.b2Vec2();
	this.m_bombSpawning = false;
	this.m_mouseWorld = new box2d.b2Vec2();

	this.m_stepCount = 0;

	this.m_maxProfile = new box2d.b2Profile();
	this.m_totalProfile = new box2d.b2Profile();

	var bodyDef = new box2d.b2BodyDef();
	this.m_groundBody = this.m_world.CreateBody(bodyDef);
}

goog.inherits(box2d.Testbed.Test, box2d.b2ContactListener);

/**
 * @export
 * @const
 * @type {number}
 */
box2d.Testbed.Test.k_maxContactPoints = 2048;

/**
 * @export
 * @type {box2d.b2World}
 */
box2d.Testbed.Test.prototype.m_world = null;
/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.Testbed.Test.prototype.m_bomb = null;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Test.prototype.m_textLine = 30;
/**
 * @export
 * @type {box2d.b2Joint}
 */
box2d.Testbed.Test.prototype.m_mouseJoint = null;
/**
 * @export
 * @type {Array.<box2d.Testbed.ContactPoint>}
 */
box2d.Testbed.Test.prototype.m_points = null;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Test.prototype.m_pointCount = 0;
/**
 * @export
 * @type {box2d.Testbed.DestructionListener}
 */
box2d.Testbed.Test.prototype.m_destructionListener = null;
/**
 * @export
 * @type {box2d.Testbed.DebugDraw}
 */
box2d.Testbed.Test.prototype.m_debugDraw = null;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.Test.prototype.m_bombSpawnPoint = null;
/**
 * @export
 * @type {boolean}
 */
box2d.Testbed.Test.prototype.m_bombSpawning = false;
/**
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.Testbed.Test.prototype.m_mouseWorld = null;
/**
 * @export
 * @type {number}
 */
box2d.Testbed.Test.prototype.m_stepCount = 0;
/**
 * @export
 * @type {box2d.b2Profile}
 */
box2d.Testbed.Test.prototype.m_maxProfile = null;
/**
 * @export
 * @type {box2d.b2Profile}
 */
box2d.Testbed.Test.prototype.m_totalProfile = null;
/**
 * @export
 * @type {box2d.b2Body}
 */
box2d.Testbed.Test.prototype.m_groundBody = null;

/**
 * Let derived tests know that a joint was destroyed.
 * @export
 * @return {void}
 * @param {box2d.b2Joint} joint
 */
box2d.Testbed.Test.prototype.JointDestroyed = function (joint)
{
}

/**
 * Callbacks for derived classes.
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 */
box2d.Testbed.Test.prototype.BeginContact = function (contact)
{
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 */
box2d.Testbed.Test.prototype.EndContact = function (contact)
{
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 * @param {box2d.b2Manifold} oldManifold
 */
box2d.Testbed.Test.prototype.PreSolve = function (contact, oldManifold)
{
	var manifold = contact.GetManifold();

	if (manifold.pointCount == 0)
	{
		return;
	}

	var fixtureA = contact.GetFixtureA();
	var fixtureB = contact.GetFixtureB();

	var state1 = box2d.Testbed.Test.prototype.PreSolve.s_state1;
	var state2 = box2d.Testbed.Test.prototype.PreSolve.s_state2;
	box2d.b2GetPointStates(state1, state2, oldManifold, manifold);

	var worldManifold = box2d.Testbed.Test.prototype.PreSolve.s_worldManifold;
	contact.GetWorldManifold(worldManifold);

	for (var i = 0; i < manifold.pointCount && this.m_pointCount < box2d.Testbed.Test.k_maxContactPoints; ++i)
	{
		var cp = this.m_points[this.m_pointCount];
		cp.fixtureA = fixtureA;
		cp.fixtureB = fixtureB;
		cp.position.Copy(worldManifold.points[i]);
		cp.normal.Copy(worldManifold.normal);
		cp.state = state2[i];
		cp.normalImpulse = manifold.points[i].normalImpulse;
		cp.tangentImpulse = manifold.points[i].tangentImpulse;
		cp.separation = worldManifold.separations[i];
		++this.m_pointCount;
	}
}
box2d.Testbed.Test.prototype.PreSolve.s_state1 = new Array(box2d.b2_maxManifoldPoints);
box2d.Testbed.Test.prototype.PreSolve.s_state2 = new Array(box2d.b2_maxManifoldPoints);
box2d.Testbed.Test.prototype.PreSolve.s_worldManifold = new box2d.b2WorldManifold();

/**
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 * @param {box2d.b2ContactImpulse} impulse
 */
box2d.Testbed.Test.prototype.PostSolve = function (contact, impulse)
{
}

/**
 * @export
 * @return {void}
 * @param {number} key
 */
box2d.Testbed.Test.prototype.Keyboard = function (key)
{
}

/**
 * @export
 * @return {void}
 * @param {number} key
 */
box2d.Testbed.Test.prototype.KeyboardUp = function (key)
{
}

/**
 * @export
 * @return {void}
 * @param {number} line
 */
box2d.Testbed.Test.prototype.SetTextLine = function (line)
{
	this.m_textLine = line;
}

/**
 * @export
 * @return {void}
 * @param {string} string
 */
box2d.Testbed.Test.prototype.DrawTitle = function (string)
{
	this.m_debugDraw.DrawString(5, box2d.Testbed.DRAW_STRING_NEW_LINE, string);
	this.m_textLine = 2 * box2d.Testbed.DRAW_STRING_NEW_LINE;
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} p
 */
box2d.Testbed.Test.prototype.MouseDown = function (p)
{
	this.m_mouseWorld.Copy(p);

	if (this.m_mouseJoint !== null)
	{
		return;
	}

	// Make a small box.
	var aabb = new box2d.b2AABB();
	var d = new box2d.b2Vec2();
	d.Set(0.001, 0.001);
	box2d.b2SubVV(p, d, aabb.lowerBound);
	box2d.b2AddVV(p, d, aabb.upperBound);

	var that = this;
	var hit_fixture = null;

	// Query the world for overlapping shapes.
	var callback = function (fixture)
	{
		var body = fixture.GetBody();
		if (body.GetType() == box2d.b2BodyType.b2_dynamicBody)
		{
			var inside = fixture.TestPoint(that.m_mouseWorld);
			if (inside)
			{
				hit_fixture = fixture;

				// We are done, terminate the query.
				return false;
			}
		}

		// Continue the query.
		return true;
	}

	this.m_world.QueryAABB(callback, aabb);

	if (hit_fixture)
	{
		var body = hit_fixture.GetBody();
		var md = new box2d.b2MouseJointDef();
		md.bodyA = this.m_groundBody;
		md.bodyB = body;
		md.target.Copy(p);
		md.maxForce = 1000 * body.GetMass();
		this.m_mouseJoint = this.m_world.CreateJoint(md);
		body.SetAwake(true);
	}
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} worldPt
 */
box2d.Testbed.Test.prototype.SpawnBomb = function (worldPt)
{
	this.m_bombSpawnPoint.Copy(worldPt);
	this.m_bombSpawning = true;
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} p
 */
box2d.Testbed.Test.prototype.CompleteBombSpawn = function (p)
{
	if (this.m_bombSpawning == false)
	{
		return;
	}

	var multiplier = 30;
	var vel = box2d.b2SubVV(this.m_bombSpawnPoint, p, new box2d.b2Vec2());
	vel.SelfMul(multiplier);
	this.LaunchBombAt(this.m_bombSpawnPoint, vel);
	this.m_bombSpawning = false;
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} p
 */
box2d.Testbed.Test.prototype.ShiftMouseDown = function (p)
{
	this.m_mouseWorld.Copy(p);

	if (this.m_mouseJoint != null)
	{
		return;
	}

	this.SpawnBomb(p);
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} p
 */
box2d.Testbed.Test.prototype.MouseUp = function (p)
{
	if (this.m_mouseJoint)
	{
		this.m_world.DestroyJoint(this.m_mouseJoint);
		this.m_mouseJoint = null;
	}

	if (this.m_bombSpawning)
	{
		this.CompleteBombSpawn(p);
	}
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} p
 */
box2d.Testbed.Test.prototype.MouseMove = function (p)
{
	this.m_mouseWorld.Copy(p);

	if (this.m_mouseJoint)
	{
		this.m_mouseJoint.SetTarget(p);
	}
}

/**
 * @export
 * @return {void}
 */
box2d.Testbed.Test.prototype.LaunchBomb = function ()
{
	var p = new box2d.b2Vec2(box2d.b2RandomRange(-15, 15), 30);
	var v = box2d.b2MulSV(-5, p, new box2d.b2Vec2());
	this.LaunchBombAt(p, v);
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} position
 * @param {box2d.b2Vec2} velocity
 */
box2d.Testbed.Test.prototype.LaunchBombAt = function (position, velocity)
{
	if (this.m_bomb)
	{
		this.m_world.DestroyBody(this.m_bomb);
		this.m_bomb = null;
	}

	var bd = new box2d.b2BodyDef();
	bd.type = box2d.b2BodyType.b2_dynamicBody;
	bd.position.Copy(position);
	bd.bullet = true;
	this.m_bomb = this.m_world.CreateBody(bd);
	this.m_bomb.SetLinearVelocity(velocity);

	var circle = new box2d.b2CircleShape();
	circle.m_radius = 0.3;

	var fd = new box2d.b2FixtureDef();
	fd.shape = circle;
	fd.density = 20;
	fd.restitution = 0;

//	box2d.b2Vec2 minV = position - box2d.b2Vec2(0.3f,0.3f);
//	box2d.b2Vec2 maxV = position + box2d.b2Vec2(0.3f,0.3f);

//	box2d.b2AABB aabb;
//	aabb.lowerBound = minV;
//	aabb.upperBound = maxV;

	this.m_bomb.CreateFixture(fd);
}

/**
 * @export
 * @return {void}
 * @param {box2d.Testbed.Settings} settings
 */
box2d.Testbed.Test.prototype.Step = function (settings)
{
	var timeStep = settings.hz > 0 ? 1 / settings.hz : 0;

	if (settings.pause)
	{
		if (settings.singleStep)
		{
			settings.singleStep = false;
		}
		else
		{
			timeStep = 0;
		}

		this.m_debugDraw.DrawString(5, this.m_textLine, "****PAUSED****");
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
	}

	var flags = box2d.b2DrawFlags.e_none;
	if (settings.drawShapes) { flags |= box2d.b2DrawFlags.e_shapeBit;        }
	if (settings.drawJoints) { flags |= box2d.b2DrawFlags.e_jointBit;        }
	if (settings.drawAABBs ) { flags |= box2d.b2DrawFlags.e_aabbBit;         }
	if (settings.drawCOMs  ) { flags |= box2d.b2DrawFlags.e_centerOfMassBit; }
	if (settings.drawControllers  ) { flags |= box2d.b2DrawFlags.e_controllerBit; }
	this.m_debugDraw.SetFlags(flags);

	this.m_world.SetAllowSleeping(settings.enableSleep);
	this.m_world.SetWarmStarting(settings.enableWarmStarting);
	this.m_world.SetContinuousPhysics(settings.enableContinuous);
	this.m_world.SetSubStepping(settings.enableSubStepping);

	this.m_pointCount = 0;

	this.m_world.Step(timeStep, settings.velocityIterations, settings.positionIterations);

	this.m_world.DrawDebugData();

	if (timeStep > 0)
	{
		++this.m_stepCount;
	}

	if (settings.drawStats)
	{
		var bodyCount = this.m_world.GetBodyCount();
		var contactCount = this.m_world.GetContactCount();
		var jointCount = this.m_world.GetJointCount();
		this.m_debugDraw.DrawString(5, this.m_textLine, "bodies/contacts/joints = %d/%d/%d", bodyCount, contactCount, jointCount);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;

		var proxyCount = this.m_world.GetProxyCount();
		var height = this.m_world.GetTreeHeight();
		var balance = this.m_world.GetTreeBalance();
		var quality = this.m_world.GetTreeQuality();
		this.m_debugDraw.DrawString(5, this.m_textLine, "proxies/height/balance/quality = %d/%d/%d/%4.2f", proxyCount, height, balance, quality);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
	}

	// Track maximum profile times
	if (true)
	{
		var p = this.m_world.GetProfile();
		this.m_maxProfile.step = box2d.b2Max(this.m_maxProfile.step, p.step);
		this.m_maxProfile.collide = box2d.b2Max(this.m_maxProfile.collide, p.collide);
		this.m_maxProfile.solve = box2d.b2Max(this.m_maxProfile.solve, p.solve);
		this.m_maxProfile.solveInit = box2d.b2Max(this.m_maxProfile.solveInit, p.solveInit);
		this.m_maxProfile.solveVelocity = box2d.b2Max(this.m_maxProfile.solveVelocity, p.solveVelocity);
		this.m_maxProfile.solvePosition = box2d.b2Max(this.m_maxProfile.solvePosition, p.solvePosition);
		this.m_maxProfile.solveTOI = box2d.b2Max(this.m_maxProfile.solveTOI, p.solveTOI);
		this.m_maxProfile.broadphase = box2d.b2Max(this.m_maxProfile.broadphase, p.broadphase);

		this.m_totalProfile.step += p.step;
		this.m_totalProfile.collide += p.collide;
		this.m_totalProfile.solve += p.solve;
		this.m_totalProfile.solveInit += p.solveInit;
		this.m_totalProfile.solveVelocity += p.solveVelocity;
		this.m_totalProfile.solvePosition += p.solvePosition;
		this.m_totalProfile.solveTOI += p.solveTOI;
		this.m_totalProfile.broadphase += p.broadphase;
	}

	if (settings.drawProfile)
	{
		var p = this.m_world.GetProfile();

		var aveProfile = new box2d.b2Profile();
		if (this.m_stepCount > 0)
		{
			var scale = 1 / this.m_stepCount;
			aveProfile.step = scale * this.m_totalProfile.step;
			aveProfile.collide = scale * this.m_totalProfile.collide;
			aveProfile.solve = scale * this.m_totalProfile.solve;
			aveProfile.solveInit = scale * this.m_totalProfile.solveInit;
			aveProfile.solveVelocity = scale * this.m_totalProfile.solveVelocity;
			aveProfile.solvePosition = scale * this.m_totalProfile.solvePosition;
			aveProfile.solveTOI = scale * this.m_totalProfile.solveTOI;
			aveProfile.broadphase = scale * this.m_totalProfile.broadphase;
		}

		this.m_debugDraw.DrawString(5, this.m_textLine, "step [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.step, aveProfile.step, this.m_maxProfile.step);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "collide [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.collide, aveProfile.collide, this.m_maxProfile.collide);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "solve [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.solve, aveProfile.solve, this.m_maxProfile.solve);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "solve init [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.solveInit, aveProfile.solveInit, this.m_maxProfile.solveInit);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "solve velocity [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.solveVelocity, aveProfile.solveVelocity, this.m_maxProfile.solveVelocity);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "solve position [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.solvePosition, aveProfile.solvePosition, this.m_maxProfile.solvePosition);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "solveTOI [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.solveTOI, aveProfile.solveTOI, this.m_maxProfile.solveTOI);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
		this.m_debugDraw.DrawString(5, this.m_textLine, "broad-phase [ave] (max) = %5.2f [%6.2f] (%6.2f)", p.broadphase, aveProfile.broadphase, this.m_maxProfile.broadphase);
		this.m_textLine += box2d.Testbed.DRAW_STRING_NEW_LINE;
	}

	if (this.m_mouseJoint)
	{
		var p1 = this.m_mouseJoint.GetAnchorB(new box2d.b2Vec2());
		var p2 = this.m_mouseJoint.GetTarget(new box2d.b2Vec2());

		var c = new box2d.b2Color(0, 1, 0);
		this.m_debugDraw.DrawPoint(p1, 4, c);
		this.m_debugDraw.DrawPoint(p2, 4, c);

		c.SetRGB(0.8, 0.8, 0.8);
		this.m_debugDraw.DrawSegment(p1, p2, c);
	}

	if (this.m_bombSpawning)
	{
		var c = new box2d.b2Color(0, 0, 1);
		this.m_debugDraw.DrawPoint(this.m_bombSpawnPoint, 4, c);

		c.SetRGB(0.8, 0.8, 0.8);
		this.m_debugDraw.DrawSegment(this.m_mouseWorld, this.m_bombSpawnPoint, c);
	}

	if (settings.drawContactPoints)
	{
		var k_impulseScale = 0.1;
		var k_axisScale = 0.3;

		for (var i = 0; i < this.m_pointCount; ++i)
		{
			var point = this.m_points[i];

			if (point.state == box2d.b2PointState.b2_addState)
			{
				// Add
				this.m_debugDraw.DrawPoint(point.position, 10, new box2d.b2Color(0.3, 0.95, 0.3));
			}
			else if (point.state == box2d.b2PointState.b2_persistState)
			{
				// Persist
				this.m_debugDraw.DrawPoint(point.position, 5, new box2d.b2Color(0.3, 0.3, 0.95));
			}

			if (settings.drawContactNormals == 1)
			{
				var p1 = point.position;
				var p2 = box2d.b2AddVV(p1, box2d.b2MulSV(k_axisScale, point.normal, box2d.b2Vec2.s_t0), new box2d.b2Vec2());
				this.m_debugDraw.DrawSegment(p1, p2, new box2d.b2Color(0.9, 0.9, 0.9));
			}
			else if (settings.drawContactImpulse == 1)
			{
				var p1 = point.position;
				var p2 = box2d.b2AddVMulSV(p1, k_impulseScale * point.normalImpulse, point.normal, new box2d.b2Vec2());
				this.m_debugDraw.DrawSegment(p1, p2, new box2d.b2Color(0.9, 0.9, 0.3));
			}

			if (settings.drawFrictionImpulse == 1)
			{
				var tangent = box2d.b2CrossVOne(point.normal, new box2d.b2Vec2());
				var p1 = point.position;
				var p2 = box2d.b2AddVMulSV(p1, k_impulseScale * point.tangentImpulse, tangent, new box2d.b2Vec2());
				this.m_debugDraw.DrawSegment(p1, p2, new box2d.b2Color(0.9, 0.9, 0.3));
			}
		}
	}
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Vec2} newOrigin
 */
box2d.Testbed.Test.prototype.ShiftOrigin = function (newOrigin)
{
	this.m_world.ShiftOrigin(newOrigin);
}

return box2d
})
// End auto-generated code.
