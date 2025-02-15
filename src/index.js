// ES5/ES6 polyfills
import "./polyfill/index.ts";

// class definition
import Color from "./math/color.js";
import Vector2d from "./math/vector2.js";
import Vector3d from "./math/vector3.js";
import ObservableVector2d from "./math/observable_vector2.js";
import ObservableVector3d from "./math/observable_vector3.js";
import Matrix2d from "./math/matrix2.js";
import Matrix3d from "./math/matrix3.js";
import Polygon from "./geometries/poly.js";
import Line from "./geometries/line.js";
import Ellipse from "./geometries/ellipse.js";
import Point from "./geometries/point.js";
import Rect from "./geometries/rectangle.js";
import RoundRect from "./geometries/roundrect.js";
import QuadTree from "./physics/quadtree.js";
import Body from "./physics/body.js";
import Bounds from "./physics/bounds.js";
import Tween from "./tweens/tween.ts";
import GLShader from "./video/webgl/glshader.js";
import Compositor from "./video/webgl/compositors/compositor.js";
import PrimitiveCompositor from "./video/webgl/compositors/primitive_compositor.js";
import QuadCompositor from "./video/webgl/compositors/quad_compositor.js";
import Renderer from "./video/renderer.js";
import WebGLRenderer from "./video/webgl/webgl_renderer.js";
import CanvasRenderer from "./video/canvas/canvas_renderer.js";
import CanvasRenderTarget from "./video/rendertarget/canvasrendertarget.js";
import { TextureAtlas } from "./video/texture/atlas.js";
import Renderable from "./renderable/renderable.js";
import ColorLayer from "./renderable/colorlayer.js";
import ImageLayer from "./renderable/imagelayer.js";
import Sprite from "./renderable/sprite.js";
import NineSliceSprite from "./renderable/nineslicesprite.js";
import UIBaseElement from "./renderable/ui/uibaseelement.js";
import UITextButton from "./renderable/ui/uitextbutton.js";
import UISpriteElement from "./renderable/ui/uispriteelement.js";
import Collectable from "./renderable/collectable.js";
import Trigger from "./renderable/trigger.js";
import Light2d from "./renderable/light2d.js";
import Text from "./renderable/text/text.js";
import BitmapText from "./renderable/text/bitmaptext.js";
import BitmapTextData from "./renderable/text/bitmaptextdata.js";
import { Draggable } from "./renderable/draggable.js";
import { DropTarget } from "./renderable/dragndrop.js";
import TMXRenderer from "./level/tiled/renderer/TMXRenderer.js";
import TMXOrthogonalRenderer from "./level/tiled/renderer/TMXOrthogonalRenderer.js";
import TMXIsometricRenderer from "./level/tiled/renderer/TMXIsometricRenderer.js";
import TMXHexagonalRenderer from "./level/tiled/renderer/TMXHexagonalRenderer.js";
import TMXStaggeredRenderer from "./level/tiled/renderer/TMXStaggeredRenderer.js";
import Tile from "./level/tiled/TMXTile.js";
import TMXTileset from "./level/tiled/TMXTileset.js";
import TMXTilesetGroup from "./level/tiled/TMXTilesetGroup.js";
import TMXTileMap from "./level/tiled/TMXTileMap.js";
import TMXLayer from "./level/tiled/TMXLayer.js";
import * as TMXUtils from "./level/tiled/TMXUtils.js";
import Pointer from "./input/pointer.js";
import Stage from "./state/stage.js";
import Camera2d from "./camera/camera2d.js";
import Container from "./renderable/container.js";
import World from "./physics/world.js";
import ParticleEmitterSettings from "./particles/settings.js";
import ParticleEmitter from "./particles/emitter.js";
import Particle from "./particles/particle.js";
import Entity from "./renderable/entity/entity.js";
import Application from "./application/application.js";

// utility classes
import * as audio from "./audio/audio.js";
import collision from "./physics/collision.js";
import * as event from "./system/event.js";
import * as device from "./system/device.js";
import * as loader from "./loader/loader.js";
import * as math from "./math/math.js";
import * as utils from "./utils/utils.ts";
import * as input from "./input/input.js";
import * as plugin from "./plugin/plugin.js";
import { cache as plugins } from "./plugin/plugin.js";
import * as video from "./video/video.js";
import save from "./system/save.js";
import timer from "./system/timer.ts";
import pool from "./system/pooling.js";
import state from "./state/state.js";
import level from "./level/level.js";
import { version } from "./version.ts";

// export all utility function
export {
	audio,
	collision,
	device,
	event,
	loader,
	level,
	input,
	math,
	plugin,
	plugins,
	utils,
	save,
	timer,
	pool,
	state,
	video,
	version,
};

// export all class definition
export {
	Color,
	Vector2d,
	Vector3d,
	ObservableVector2d,
	ObservableVector3d,
	Matrix2d,
	Matrix3d,
	Polygon,
	Line,
	Ellipse,
	Point,
	Rect,
	RoundRect,
	Tween,
	QuadTree,
	GLShader,
	Compositor,
	PrimitiveCompositor,
	QuadCompositor,
	Renderer,
	WebGLRenderer,
	CanvasRenderer,
	CanvasRenderTarget,
	TextureAtlas,
	Renderable,
	Body,
	Bounds,
	Text,
	BitmapText,
	BitmapTextData,
	ColorLayer,
	ImageLayer,
	Sprite,
	NineSliceSprite,
	UIBaseElement,
	UITextButton,
	UISpriteElement,
	Collectable,
	Trigger,
	Light2d,
	Draggable,
	DropTarget,
	TMXRenderer,
	TMXOrthogonalRenderer,
	TMXIsometricRenderer,
	TMXHexagonalRenderer,
	TMXStaggeredRenderer,
	Tile,
	TMXTileset,
	TMXTilesetGroup,
	TMXTileMap,
	TMXLayer,
	TMXUtils,
	Pointer,
	Stage,
	Camera2d,
	Container,
	World,
	ParticleEmitter,
	ParticleEmitterSettings,
	Particle,
	Entity,
	Application,
};

// Backward compatibility for deprecated method or properties
export * from "./lang/deprecated.js";

// export all public constants
export * from "./const.ts";

/**
 * a flag indicating that melonJS is fully initialized
 * @type {boolean}
 * @default false
 * @readonly
 */
export let initialized = false;

/**
 * disable melonJS auto-initialization
 * @type {boolean}
 * @see {@link boot}
 */
export let skipAutoInit = false;

/**
 * game is a default instance of a melonJS Application and represents your current game,
 * it contains all the objects, tilemap layers, current viewport, collision map, etc...<br>
 * @namespace game
 */
export const game = new Application(0, 0, { legacy: true });

/**
 * initialize the melonJS library.
 * this is automatically called unless me.skipAutoInit is set to true,
 * to allow asynchronous loaders to work.
 * @name boot
 * @see {@link skipAutoInit}
 * @public
 */
export function boot() {
	// don't do anything if already initialized (should not happen anyway)
	if (initialized === true) {
		return;
	}

	// output melonJS version in the console
	if (!("__vitest_browser__" in window)) {
		console.log("melonJS 2 (v" + version + ") | http://melonjs.org");
	}

	// register all built-ins objects into the object pool
	pool.register("me.Entity", Entity);
	pool.register("me.Collectable", Collectable);
	pool.register("me.Trigger", Trigger);
	pool.register("me.Light2d", Light2d);
	pool.register("me.Tween", Tween, true);
	pool.register("me.Color", Color, true);
	pool.register("me.Particle", Particle, true);
	pool.register("me.Sprite", Sprite);
	pool.register("me.NineSliceSprite", NineSliceSprite);
	pool.register("me.Renderable", Renderable);
	pool.register("me.Text", Text, true);
	pool.register("me.BitmapText", BitmapText);
	pool.register("me.BitmapTextData", BitmapTextData, true);
	pool.register("me.ImageLayer", ImageLayer);
	pool.register("me.ColorLayer", ColorLayer, true);
	pool.register("me.Vector2d", Vector2d, true);
	pool.register("me.Vector3d", Vector3d, true);
	pool.register("me.ObservableVector2d", ObservableVector2d, true);
	pool.register("me.ObservableVector3d", ObservableVector3d, true);
	pool.register("me.Matrix2d", Matrix2d, true);
	pool.register("me.Matrix3d", Matrix3d, true);
	pool.register("me.Rect", Rect, true);
	pool.register("me.RoundRect", RoundRect, true);
	pool.register("me.Polygon", Polygon, true);
	pool.register("me.Line", Line, true);
	pool.register("me.Point", Point, true);
	pool.register("me.Ellipse", Ellipse, true);
	pool.register("me.Bounds", Bounds, true);

	// duplicate all entries if use with no namespace (e.g. es6)
	pool.register("Entity", Entity);
	pool.register("Collectable", Collectable);
	pool.register("Trigger", Trigger);
	pool.register("Light2d", Light2d);
	pool.register("Tween", Tween, true);
	pool.register("Color", Color, true);
	pool.register("Particle", Particle, true);
	pool.register("Sprite", Sprite);
	pool.register("NineSliceSprite", NineSliceSprite);
	pool.register("Renderable", Renderable);
	pool.register("Text", Text, true);
	pool.register("BitmapText", BitmapText);
	pool.register("BitmapTextData", BitmapTextData, true);
	pool.register("ImageLayer", ImageLayer);
	pool.register("ColorLayer", ColorLayer, true);
	pool.register("Vector2d", Vector2d, true);
	pool.register("Vector3d", Vector3d, true);
	pool.register("ObservableVector2d", ObservableVector2d, true);
	pool.register("ObservableVector3d", ObservableVector3d, true);
	pool.register("Matrix2d", Matrix2d, true);
	pool.register("Matrix3d", Matrix3d, true);
	pool.register("Rect", Rect, true);
	pool.register("RoundRect", RoundRect, true);
	pool.register("Polygon", Polygon, true);
	pool.register("Line", Line, true);
	pool.register("Point", Point, true);
	pool.register("Ellipse", Ellipse, true);
	pool.register("Bounds", Bounds, true);
	pool.register("CanvasRenderTarget", CanvasRenderTarget, true);

	// publish Boot notification
	event.emit(event.BOOT);

	// enable/disable the cache
	loader.setNocache(utils.getUriFragment().nocache || false);

	// automatically enable keyboard events
	input.initKeyboardEvent();

	// mark melonJS as initialized
	initialized = true;

	/// if auto init is disable and this function was called manually
	if (skipAutoInit === true) {
		event.emit(event.DOM_READY);
	}
}

// call the library init function when ready
device.onReady(() => {
	if (skipAutoInit === false) {
		boot();
	}
});
