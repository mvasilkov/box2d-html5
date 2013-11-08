// This wrapper was auto-generated.
define(['goog', 'box2d.b2AreaJoint', 'box2d.b2Body', 'box2d.b2BroadPhase', 'box2d.b2BuoyancyController', 'box2d.b2ChainShape', 'box2d.b2CircleShape', 'box2d.b2ConstantAccelController', 'box2d.b2ConstantForceController', 'box2d.b2Contact', 'box2d.b2Distance', 'box2d.b2DistanceJoint', 'box2d.b2Draw', 'box2d.b2DynamicTree', 'box2d.b2EdgeShape', 'box2d.b2Fixture', 'box2d.b2FrictionJoint', 'box2d.b2GearJoint', 'box2d.b2GravityController', 'box2d.b2MotorJoint', 'box2d.b2MouseJoint', 'box2d.b2PolygonShape', 'box2d.b2PrismaticJoint', 'box2d.b2PulleyJoint', 'box2d.b2RevoluteJoint', 'box2d.b2Rope', 'box2d.b2RopeJoint', 'box2d.b2Settings', 'box2d.b2TensorDampingController', 'box2d.b2TimeOfImpact', 'box2d.b2TimeStep', 'box2d.b2Timer', 'box2d.b2WeldJoint', 'box2d.b2WheelJoint', 'box2d.b2World', 'box2d.b2WorldCallbacks'], function (goog, box2d) {

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

// -removed- goog.provide('box2d');
if (typeof box2d === 'undefined')
    box2d = {}


/**
\mainpage Box2D API Documentation

\section intro_sec Getting Started

For documentation please see http://box2d.org/documentation.html

For discussion please visit http://box2d.org/forum
*/

// These include files constitute the main Box2D API

// -removed- goog.require('box2d.b2Settings');
if (typeof box2d.b2Settings === 'undefined')
    throw Error('I can haz box2d.b2Settings?')

// -removed- goog.require('box2d.b2Draw');
if (typeof box2d.b2Draw === 'undefined')
    throw Error('I can haz box2d.b2Draw?')

// -removed- goog.require('box2d.b2Timer');
if (typeof box2d.b2Timer === 'undefined')
    throw Error('I can haz box2d.b2Timer?')


// -removed- goog.require('box2d.b2CircleShape');
if (typeof box2d.b2CircleShape === 'undefined')
    throw Error('I can haz box2d.b2CircleShape?')

// -removed- goog.require('box2d.b2EdgeShape');
if (typeof box2d.b2EdgeShape === 'undefined')
    throw Error('I can haz box2d.b2EdgeShape?')

// -removed- goog.require('box2d.b2ChainShape');
if (typeof box2d.b2ChainShape === 'undefined')
    throw Error('I can haz box2d.b2ChainShape?')

// -removed- goog.require('box2d.b2PolygonShape');
if (typeof box2d.b2PolygonShape === 'undefined')
    throw Error('I can haz box2d.b2PolygonShape?')


// -removed- goog.require('box2d.b2BroadPhase');
if (typeof box2d.b2BroadPhase === 'undefined')
    throw Error('I can haz box2d.b2BroadPhase?')

// -removed- goog.require('box2d.b2Distance');
if (typeof box2d.b2Distance === 'undefined')
    throw Error('I can haz box2d.b2Distance?')

// -removed- goog.require('box2d.b2DynamicTree');
if (typeof box2d.b2DynamicTree === 'undefined')
    throw Error('I can haz box2d.b2DynamicTree?')

// -removed- goog.require('box2d.b2TimeOfImpact');
if (typeof box2d.b2TimeOfImpact === 'undefined')
    throw Error('I can haz box2d.b2TimeOfImpact?')


// -removed- goog.require('box2d.b2Body');
if (typeof box2d.b2Body === 'undefined')
    throw Error('I can haz box2d.b2Body?')

// -removed- goog.require('box2d.b2Fixture');
if (typeof box2d.b2Fixture === 'undefined')
    throw Error('I can haz box2d.b2Fixture?')

// -removed- goog.require('box2d.b2WorldCallbacks');
if (typeof box2d.b2WorldCallbacks === 'undefined')
    throw Error('I can haz box2d.b2WorldCallbacks?')

// -removed- goog.require('box2d.b2TimeStep');
if (typeof box2d.b2TimeStep === 'undefined')
    throw Error('I can haz box2d.b2TimeStep?')

// -removed- goog.require('box2d.b2World');
if (typeof box2d.b2World === 'undefined')
    throw Error('I can haz box2d.b2World?')


// -removed- goog.require('box2d.b2Contact');
if (typeof box2d.b2Contact === 'undefined')
    throw Error('I can haz box2d.b2Contact?')


// -removed- goog.require('box2d.b2AreaJoint');
if (typeof box2d.b2AreaJoint === 'undefined')
    throw Error('I can haz box2d.b2AreaJoint?')

// -removed- goog.require('box2d.b2DistanceJoint');
if (typeof box2d.b2DistanceJoint === 'undefined')
    throw Error('I can haz box2d.b2DistanceJoint?')

// -removed- goog.require('box2d.b2FrictionJoint');
if (typeof box2d.b2FrictionJoint === 'undefined')
    throw Error('I can haz box2d.b2FrictionJoint?')

// -removed- goog.require('box2d.b2GearJoint');
if (typeof box2d.b2GearJoint === 'undefined')
    throw Error('I can haz box2d.b2GearJoint?')

// -removed- goog.require('box2d.b2MotorJoint');
if (typeof box2d.b2MotorJoint === 'undefined')
    throw Error('I can haz box2d.b2MotorJoint?')

// -removed- goog.require('box2d.b2MouseJoint');
if (typeof box2d.b2MouseJoint === 'undefined')
    throw Error('I can haz box2d.b2MouseJoint?')

// -removed- goog.require('box2d.b2PrismaticJoint');
if (typeof box2d.b2PrismaticJoint === 'undefined')
    throw Error('I can haz box2d.b2PrismaticJoint?')

// -removed- goog.require('box2d.b2PulleyJoint');
if (typeof box2d.b2PulleyJoint === 'undefined')
    throw Error('I can haz box2d.b2PulleyJoint?')

// -removed- goog.require('box2d.b2RevoluteJoint');
if (typeof box2d.b2RevoluteJoint === 'undefined')
    throw Error('I can haz box2d.b2RevoluteJoint?')

// -removed- goog.require('box2d.b2RopeJoint');
if (typeof box2d.b2RopeJoint === 'undefined')
    throw Error('I can haz box2d.b2RopeJoint?')

// -removed- goog.require('box2d.b2WeldJoint');
if (typeof box2d.b2WeldJoint === 'undefined')
    throw Error('I can haz box2d.b2WeldJoint?')

// -removed- goog.require('box2d.b2WheelJoint');
if (typeof box2d.b2WheelJoint === 'undefined')
    throw Error('I can haz box2d.b2WheelJoint?')


// -removed- goog.require('box2d.b2Rope');
if (typeof box2d.b2Rope === 'undefined')
    throw Error('I can haz box2d.b2Rope?')


// -removed- goog.require('box2d.b2BuoyancyController');
if (typeof box2d.b2BuoyancyController === 'undefined')
    throw Error('I can haz box2d.b2BuoyancyController?')

// -removed- goog.require('box2d.b2ConstantAccelController');
if (typeof box2d.b2ConstantAccelController === 'undefined')
    throw Error('I can haz box2d.b2ConstantAccelController?')

// -removed- goog.require('box2d.b2ConstantForceController');
if (typeof box2d.b2ConstantForceController === 'undefined')
    throw Error('I can haz box2d.b2ConstantForceController?')

// -removed- goog.require('box2d.b2GravityController');
if (typeof box2d.b2GravityController === 'undefined')
    throw Error('I can haz box2d.b2GravityController?')

// -removed- goog.require('box2d.b2TensorDampingController');
if (typeof box2d.b2TensorDampingController === 'undefined')
    throw Error('I can haz box2d.b2TensorDampingController?')


return box2d
})
// End auto-generated code.
