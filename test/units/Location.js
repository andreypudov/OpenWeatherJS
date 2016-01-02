/**
 * The OpenWeatherJS Library.
 * The JavaScript library to work with weather information and forecasts data 
 * provided by Open Weather Map. Built using TypeScript.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 The OpenWeatherJS Project
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

QUnit.test('Location', function(assert) {
	/* Id */
	assert.strictEqual(new OpenWeatherJS.Location.getById(6198442).id, 6198442, 'Location id is 6198442.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getById(0)
		}, new RangeError('Location id value should be between 1 and 99999999'), 
		'Location id is out of range exception.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getById(null)
		}, new TypeError('Value is not a number.'), 
		'Location id type exception.');

	/* Name */
	assert.strictEqual(new OpenWeatherJS.Location.getByName('Cheboksary').name, 'Cheboksary', 
		'Location name is Cheboksary.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByName(null)
		}, new TypeError('Location name is invalid.'), 
		'Location name type exception.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByName(10)
		}, new TypeError('Location name is invalid.'), 
		'Location name type exception.');

	/* Coordinates */
	assert.strictEqual(new OpenWeatherJS.Location.getByCoordinates(56.174999, 47.286388).latitude, 
		56.174999, 'Location latitude is 56.174999.');
	assert.strictEqual(new OpenWeatherJS.Location.getByCoordinates(56.174999, 47.286388).longitude, 
		47.286388, 'Location longitude is 47.286388.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByCoordinates(null, 10)
		}, new TypeError('Location latitude is invalid.'), 
		'Location coordinates type exception.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByCoordinates(10, null)
		}, new TypeError('Location longitude is invalid.'), 
		'Location coordinates type exception.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByCoordinates('56.174999', '47.286388')
		}, new TypeError('Location latitude is invalid.'), 
		'Location coordinates type exception.');

	/* Zip */
	assert.strictEqual(new OpenWeatherJS.Location.getByZip('428000', 'RU').zip, 
		'428000', 'Location zip is 428000');
	assert.strictEqual(new OpenWeatherJS.Location.getByZip('428000', 'RU').country, 
		'RU', 'Location country is RU');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByZip(null, 10)
		}, new TypeError('Location zip is invalid.'), 
		'Location zip type exception.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByZip('428000', 10)
		}, new TypeError('Location country is invalid.'), 
		'Location country type exception.');
	assert.throws(function() {
			new OpenWeatherJS.Location.getByZip(428000, 'RU')
		}, new TypeError('Location zip is invalid.'), 
		'Location country type exception.');
});