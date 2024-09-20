/* wgpu-matrix@3.0.1, license MIT */
function wrapConstructor(OriginalConstructor, modifier) {
    return class extends OriginalConstructor {
        constructor(...args) {
            super(...args);
            modifier(this);
        }
    }; // Type assertion is necessary here
}
const ZeroArray = wrapConstructor((Array), a => a.fill(0));

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
let EPSILON = 0.000001;

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Vec3
 */
function getAPIImpl$5(Ctor) {
    /**
     * Creates a Vec2; may be called with x, y, z to set initial values.
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Vec2's specified type
     * it would be faster to use
     *
     * ```
     * const v = vec2.clone(someJSArray);
     * ```
     *
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @returns the created vector
     */
    function create(x = 0, y = 0) {
        const newDst = new Ctor(2);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
            }
        }
        return newDst;
    }
    /**
     * Creates a Vec2; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Vec2
     * Also see {@link vec2.create} and {@link vec2.copy}
     *
     * @param x first value
     * @param y second value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = x;
        newDst[1] = y;
        return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.ceil(v[0]);
        newDst[1] = Math.ceil(v[1]);
        return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.floor(v[0]);
        newDst[1] = Math.floor(v[1]);
        return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.round(v[0]);
        newDst[1] = Math.round(v[1]);
        return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v, min = 0, max = 1, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.min(max, Math.max(min, v[0]));
        newDst[1] = Math.min(max, Math.max(min, v[1]));
        return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + b[0] * scale;
        newDst[1] = a[1] + b[1] * scale;
        return newDst;
    }
    /**
     * Returns the angle in radians between two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns The angle in radians between the 2 vectors.
     */
    function angle(a, b) {
        const ax = a[0];
        const ay = a[1];
        const bx = b[0];
        const by = b[1];
        const mag1 = Math.sqrt(ax * ax + ay * ay);
        const mag2 = Math.sqrt(bx * bx + by * by);
        const mag = mag1 * mag2;
        const cosine = mag && dot(a, b) / mag;
        return Math.acos(cosine);
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + t[0] * (b[0] - a[0]);
        newDst[1] = a[1] + t[1] * (b[1] - a[1]);
        return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.max(a[0], b[0]);
        newDst[1] = Math.max(a[1], b[1]);
        return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.min(a[0], b[0]);
        newDst[1] = Math.min(a[1], b[1]);
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = 1 / v[0];
        newDst[1] = 1 / v[1];
        return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    const invert = inverse;
    /**
     * Computes the cross product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of a cross b.
     */
    function cross(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        const z = a[0] * b[1] - a[1] * b[0];
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = z;
        return newDst;
    }
    /**
     * Computes the dot product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        return Math.sqrt(v0 * v0 + v1 * v1);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    const len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        return v0 * v0 + v1 * v1;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    const lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    const dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        return dx * dx + dy * dy;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    const distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        const v0 = v[0];
        const v1 = v[1];
        const len = Math.sqrt(v0 * v0 + v1 * v1);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
        }
        return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = -v[0];
        newDst[1] = -v[1];
        return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec2.clone})
     * Also see {@link vec2.create} and {@link vec2.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = v[0];
        newDst[1] = v[1];
        return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec2.copy})
     * Also see {@link vec2.create} and {@link vec2.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    const clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] * b[0];
        newDst[1] = a[1] * b[1];
        return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    const mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] / b[0];
        newDst[1] = a[1] / b[1];
        return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    const div = divide;
    /**
     * Creates a random unit vector * scale
     * @param scale - Default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The random vector.
     */
    function random(scale = 1, dst) {
        const newDst = (dst ?? new Ctor(2));
        const angle = Math.random() * 2 * Math.PI;
        newDst[0] = Math.cos(angle) * scale;
        newDst[1] = Math.sin(angle) * scale;
        return newDst;
    }
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = 0;
        newDst[1] = 0;
        return newDst;
    }
    /**
     * transform Vec2 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional Vec2 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
        const newDst = (dst ?? new Ctor(2));
        const x = v[0];
        const y = v[1];
        newDst[0] = x * m[0] + y * m[4] + m[12];
        newDst[1] = x * m[1] + y * m[5] + m[13];
        return newDst;
    }
    /**
     * Transforms vec4 by 3x3 matrix
     *
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional Vec2 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat3(v, m, dst) {
        const newDst = (dst ?? new Ctor(2));
        const x = v[0];
        const y = v[1];
        newDst[0] = m[0] * x + m[4] * y + m[8];
        newDst[1] = m[1] * x + m[5] * y + m[9];
        return newDst;
    }
    /**
     * Rotate a 2D vector
     *
     * @param a The vec2 point to rotate
     * @param b The origin of the rotation
     * @param rad The angle of rotation in radians
     * @returns the rotated vector
     */
    function rotate(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(2));
        // Translate point to the origin
        const p0 = a[0] - b[0];
        const p1 = a[1] - b[1];
        const sinC = Math.sin(rad);
        const cosC = Math.cos(rad);
        //perform rotation and translate to correct position
        newDst[0] = p0 * cosC - p1 * sinC + b[0];
        newDst[1] = p0 * sinC + p1 * cosC + b[1];
        return newDst;
    }
    /**
     * Treat a 2D vector as a direction and set it's length
     *
     * @param a The vec2 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
        const newDst = (dst ?? new Ctor(2));
        normalize(a, newDst);
        return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec2 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
        const newDst = (dst ?? new Ctor(2));
        if (length(a) > maxLen) {
            return setLength(a, maxLen, newDst);
        }
        return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        return lerp(a, b, 0.5, newDst);
    }
    return {
        create,
        fromValues,
        set,
        ceil,
        floor,
        round,
        clamp,
        add,
        addScaled,
        angle,
        subtract,
        sub,
        equalsApproximately,
        equals,
        lerp,
        lerpV,
        max,
        min,
        mulScalar,
        scale,
        divScalar,
        inverse,
        invert,
        cross,
        dot,
        length,
        len,
        lengthSq,
        lenSq,
        distance,
        dist,
        distanceSq,
        distSq,
        normalize,
        negate,
        copy,
        clone,
        multiply,
        mul,
        divide,
        div,
        random,
        zero,
        transformMat4,
        transformMat3,
        rotate,
        setLength,
        truncate,
        midpoint,
    };
}
const cache$5 = new Map();
function getAPI$5(Ctor) {
    let api = cache$5.get(Ctor);
    if (!api) {
        api = getAPIImpl$5(Ctor);
        cache$5.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates a typed API for Mat3
 * */
function getAPIImpl$4(Ctor) {
    const vec2 = getAPI$5(Ctor);
    /**
     * Create a Mat3 from values
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Mat3's specified type
     * it would be faster to use
     *
     * ```
     * const m = mat3.clone(someJSArray);
     * ```
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @returns matrix created from values.
     */
    function create(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        const newDst = new Ctor(12);
        // to make the array homogenous
        newDst[3] = 0;
        newDst[7] = 0;
        newDst[11] = 0;
        if (v0 !== undefined) {
            newDst[0] = v0;
            if (v1 !== undefined) {
                newDst[1] = v1;
                if (v2 !== undefined) {
                    newDst[2] = v2;
                    if (v3 !== undefined) {
                        newDst[4] = v3;
                        if (v4 !== undefined) {
                            newDst[5] = v4;
                            if (v5 !== undefined) {
                                newDst[6] = v5;
                                if (v6 !== undefined) {
                                    newDst[8] = v6;
                                    if (v7 !== undefined) {
                                        newDst[9] = v7;
                                        if (v8 !== undefined) {
                                            newDst[10] = v8;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Sets the values of a Mat3
     * Also see {@link mat3.create} and {@link mat3.copy}
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 set from values.
     */
    function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = v0;
        newDst[1] = v1;
        newDst[2] = v2;
        newDst[3] = 0;
        newDst[4] = v3;
        newDst[5] = v4;
        newDst[6] = v5;
        newDst[7] = 0;
        newDst[8] = v6;
        newDst[9] = v7;
        newDst[10] = v8;
        newDst[11] = 0;
        return newDst;
    }
    /**
     * Creates a Mat3 from the upper left 3x3 part of a Mat4
     * @param m4 - source matrix
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 made from m4
     */
    function fromMat4(m4, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = m4[0];
        newDst[1] = m4[1];
        newDst[2] = m4[2];
        newDst[3] = 0;
        newDst[4] = m4[4];
        newDst[5] = m4[5];
        newDst[6] = m4[6];
        newDst[7] = 0;
        newDst[8] = m4[8];
        newDst[9] = m4[9];
        newDst[10] = m4[10];
        newDst[11] = 0;
        return newDst;
    }
    /**
     * Creates a Mat3 rotation matrix from a quaternion
     * @param q - quaternion to create matrix from
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 made from q
     */
    function fromQuat(q, dst) {
        const newDst = (dst ?? new Ctor(12));
        const x = q[0];
        const y = q[1];
        const z = q[2];
        const w = q[3];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const yx = y * x2;
        const yy = y * y2;
        const zx = z * x2;
        const zy = z * y2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        newDst[0] = 1 - yy - zz;
        newDst[1] = yx + wz;
        newDst[2] = zx - wy;
        newDst[3] = 0;
        newDst[4] = yx - wz;
        newDst[5] = 1 - xx - zz;
        newDst[6] = zy + wx;
        newDst[7] = 0;
        newDst[8] = zx + wy;
        newDst[9] = zy - wx;
        newDst[10] = 1 - xx - yy;
        newDst[11] = 0;
        return newDst;
    }
    /**
     * Negates a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns -m.
     */
    function negate(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = -m[0];
        newDst[1] = -m[1];
        newDst[2] = -m[2];
        newDst[4] = -m[4];
        newDst[5] = -m[5];
        newDst[6] = -m[6];
        newDst[8] = -m[8];
        newDst[9] = -m[9];
        newDst[10] = -m[10];
        return newDst;
    }
    /**
     * Copies a matrix. (same as {@link mat3.clone})
     * Also see {@link mat3.create} and {@link mat3.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    function copy(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = m[0];
        newDst[1] = m[1];
        newDst[2] = m[2];
        newDst[4] = m[4];
        newDst[5] = m[5];
        newDst[6] = m[6];
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
        return newDst;
    }
    /**
     * Copies a matrix (same as {@link mat3.copy})
     * Also see {@link mat3.create} and {@link mat3.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    const clone = copy;
    /**
     * Check if 2 matrices are approximately equal
     * @param a Operand matrix.
     * @param b Operand matrix.
     * @returns true if matrices are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[4] - b[4]) < EPSILON &&
            Math.abs(a[5] - b[5]) < EPSILON &&
            Math.abs(a[6] - b[6]) < EPSILON &&
            Math.abs(a[8] - b[8]) < EPSILON &&
            Math.abs(a[9] - b[9]) < EPSILON &&
            Math.abs(a[10] - b[10]) < EPSILON;
    }
    /**
     * Check if 2 matrices are exactly equal
     * @param a Operand matrix.
     * @param b Operand matrix.
     * @returns true if matrices are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2] &&
            a[4] === b[4] &&
            a[5] === b[5] &&
            a[6] === b[6] &&
            a[8] === b[8] &&
            a[9] === b[9] &&
            a[10] === b[10];
    }
    /**
     * Creates a 3-by-3 identity matrix.
     *
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A 3-by-3 identity matrix.
     */
    function identity(dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Takes the transpose of a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The transpose of m.
     */
    function transpose(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        if (newDst === m) {
            let t;
            // 0 1 2
            // 4 5 6
            // 8 9 10
            t = m[1];
            m[1] = m[4];
            m[4] = t;
            t = m[2];
            m[2] = m[8];
            m[8] = t;
            t = m[6];
            m[6] = m[9];
            m[9] = t;
            return newDst;
        }
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        newDst[0] = m00;
        newDst[1] = m10;
        newDst[2] = m20;
        newDst[4] = m01;
        newDst[5] = m11;
        newDst[6] = m21;
        newDst[8] = m02;
        newDst[9] = m12;
        newDst[10] = m22;
        return newDst;
    }
    /**
     * Computes the inverse of a 3-by-3 matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    function inverse(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const b01 = m22 * m11 - m12 * m21;
        const b11 = -m22 * m10 + m12 * m20;
        const b21 = m21 * m10 - m11 * m20;
        const invDet = 1 / (m00 * b01 + m01 * b11 + m02 * b21);
        newDst[0] = b01 * invDet;
        newDst[1] = (-m22 * m01 + m02 * m21) * invDet;
        newDst[2] = (m12 * m01 - m02 * m11) * invDet;
        newDst[4] = b11 * invDet;
        newDst[5] = (m22 * m00 - m02 * m20) * invDet;
        newDst[6] = (-m12 * m00 + m02 * m10) * invDet;
        newDst[8] = b21 * invDet;
        newDst[9] = (-m21 * m00 + m01 * m20) * invDet;
        newDst[10] = (m11 * m00 - m01 * m10) * invDet;
        return newDst;
    }
    /**
     * Compute the determinant of a matrix
     * @param m - the matrix
     * @returns the determinant
     */
    function determinant(m) {
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        return m00 * (m11 * m22 - m21 * m12) -
            m10 * (m01 * m22 - m21 * m02) +
            m20 * (m01 * m12 - m11 * m02);
    }
    /**
     * Computes the inverse of a 3-by-3 matrix. (same as inverse)
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    const invert = inverse;
    /**
     * Multiplies two 3-by-3 matrices with a on the left and b on the right
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(12));
        const a00 = a[0];
        const a01 = a[1];
        const a02 = a[2];
        const a10 = a[4 + 0];
        const a11 = a[4 + 1];
        const a12 = a[4 + 2];
        const a20 = a[8 + 0];
        const a21 = a[8 + 1];
        const a22 = a[8 + 2];
        const b00 = b[0];
        const b01 = b[1];
        const b02 = b[2];
        const b10 = b[4 + 0];
        const b11 = b[4 + 1];
        const b12 = b[4 + 2];
        const b20 = b[8 + 0];
        const b21 = b[8 + 1];
        const b22 = b[8 + 2];
        newDst[0] = a00 * b00 + a10 * b01 + a20 * b02;
        newDst[1] = a01 * b00 + a11 * b01 + a21 * b02;
        newDst[2] = a02 * b00 + a12 * b01 + a22 * b02;
        newDst[4] = a00 * b10 + a10 * b11 + a20 * b12;
        newDst[5] = a01 * b10 + a11 * b11 + a21 * b12;
        newDst[6] = a02 * b10 + a12 * b11 + a22 * b12;
        newDst[8] = a00 * b20 + a10 * b21 + a20 * b22;
        newDst[9] = a01 * b20 + a11 * b21 + a21 * b22;
        newDst[10] = a02 * b20 + a12 * b21 + a22 * b22;
        return newDst;
    }
    /**
     * Multiplies two 3-by-3 matrices with a on the left and b on the right (same as multiply)
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    const mul = multiply;
    /**
     * Sets the translation component of a 3-by-3 matrix to the given
     * vector.
     * @param a - The matrix.
     * @param v - The vector.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix with translation set.
     */
    function setTranslation(a, v, dst) {
        const newDst = (dst ?? identity());
        if (a !== newDst) {
            newDst[0] = a[0];
            newDst[1] = a[1];
            newDst[2] = a[2];
            newDst[4] = a[4];
            newDst[5] = a[5];
            newDst[6] = a[6];
        }
        newDst[8] = v[0];
        newDst[9] = v[1];
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Returns the translation component of a 3-by-3 matrix as a vector with 3
     * entries.
     * @param m - The matrix.
     * @param dst - vector to hold result. If not passed a new one is created.
     * @returns The translation component of m.
     */
    function getTranslation(m, dst) {
        const newDst = (dst ?? vec2.create());
        newDst[0] = m[8];
        newDst[1] = m[9];
        return newDst;
    }
    /**
     * Returns an axis of a 3x3 matrix as a vector with 2 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y,
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
        const newDst = (dst ?? vec2.create());
        const off = axis * 4;
        newDst[0] = m[off + 0];
        newDst[1] = m[off + 1];
        return newDst;
    }
    /**
     * Sets an axis of a 3x3 matrix as a vector with 2 entries
     * @param m - The matrix.
     * @param v - the axis vector
     * @param axis - The axis  0 = x, 1 = y;
     * @param dst - The matrix to set. If not passed a new one is created.
     * @returns The matrix with axis set.
     */
    function setAxis(m, v, axis, dst) {
        const newDst = (dst === m ? m : copy(m, dst));
        const off = axis * 4;
        newDst[off + 0] = v[0];
        newDst[off + 1] = v[1];
        return newDst;
    }
    ///**
    // * Returns the scaling component of the matrix
    // * @param m - The Matrix
    // * @param dst - The vector to set. If not passed a new one is created.
    // */
    function getScaling(m, dst) {
        const newDst = (dst ?? vec2.create());
        const xx = m[0];
        const xy = m[1];
        const yx = m[4];
        const yy = m[5];
        newDst[0] = Math.sqrt(xx * xx + xy * xy);
        newDst[1] = Math.sqrt(yx * yx + yy * yy);
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which translates by the given vector v.
     * @param v - The vector by which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translation matrix.
     */
    function translation(v, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[8] = v[0];
        newDst[9] = v[1];
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Translates the given 3-by-3 matrix by the given vector v.
     * @param m - The matrix.
     * @param v - The vector by which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translated matrix.
     */
    function translate(m, v, dst) {
        const newDst = (dst ?? new Ctor(12));
        const v0 = v[0];
        const v1 = v[1];
        const m00 = m[0];
        const m01 = m[1];
        const m02 = m[2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        if (m !== newDst) {
            newDst[0] = m00;
            newDst[1] = m01;
            newDst[2] = m02;
            newDst[4] = m10;
            newDst[5] = m11;
            newDst[6] = m12;
        }
        newDst[8] = m00 * v0 + m10 * v1 + m20;
        newDst[9] = m01 * v0 + m11 * v1 + m21;
        newDst[10] = m02 * v0 + m12 * v1 + m22;
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates  by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotation(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = s;
        newDst[2] = 0;
        newDst[4] = -s;
        newDst[5] = c;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix  by the given angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotate(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 + s * m10;
        newDst[1] = c * m01 + s * m11;
        newDst[2] = c * m02 + s * m12;
        newDst[4] = c * m10 - s * m00;
        newDst[5] = c * m11 - s * m01;
        newDst[6] = c * m12 - s * m02;
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has three
     * entries.
     * @param v - A vector of
     *     2 entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling(v, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = v[0];
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = v[1];
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * three entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of 2 entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale(m, v, dst) {
        const newDst = (dst ?? new Ctor(12));
        const v0 = v[0];
        const v1 = v[1];
        newDst[0] = v0 * m[0 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2];
        newDst[4] = v1 * m[1 * 4 + 0];
        newDst[5] = v1 * m[1 * 4 + 1];
        newDst[6] = v1 * m[1 * 4 + 2];
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales uniformly in each dimension
     * @param s - Amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling(s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = s;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = s;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given.
     * @param m - The matrix to be modified.
     * @param s - Amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale(m, s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = s * m[0 * 4 + 0];
        newDst[1] = s * m[0 * 4 + 1];
        newDst[2] = s * m[0 * 4 + 2];
        newDst[4] = s * m[1 * 4 + 0];
        newDst[5] = s * m[1 * 4 + 1];
        newDst[6] = s * m[1 * 4 + 2];
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
        }
        return newDst;
    }
    return {
        clone,
        create,
        set,
        fromMat4,
        fromQuat,
        negate,
        copy,
        equalsApproximately,
        equals,
        identity,
        transpose,
        inverse,
        invert,
        determinant,
        mul,
        multiply,
        setTranslation,
        getTranslation,
        getAxis,
        setAxis,
        getScaling,
        translation,
        translate,
        rotation,
        rotate,
        scaling,
        scale,
        uniformScaling,
        uniformScale,
    };
}
const cache$4 = new Map();
function getAPI$4(Ctor) {
    let api = cache$4.get(Ctor);
    if (!api) {
        api = getAPIImpl$4(Ctor);
        cache$4.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Vec3
 * */
function getAPIImpl$3(Ctor) {
    /**
     * Creates a vec3; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @returns the created vector
     */
    function create(x, y, z) {
        const newDst = new Ctor(3);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
                if (z !== undefined) {
                    newDst[2] = z;
                }
            }
        }
        return newDst;
    }
    /**
     * Creates a vec3; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Vec3
     * Also see {@link vec3.create} and {@link vec3.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = x;
        newDst[1] = y;
        newDst[2] = z;
        return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.ceil(v[0]);
        newDst[1] = Math.ceil(v[1]);
        newDst[2] = Math.ceil(v[2]);
        return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.floor(v[0]);
        newDst[1] = Math.floor(v[1]);
        newDst[2] = Math.floor(v[2]);
        return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.round(v[0]);
        newDst[1] = Math.round(v[1]);
        newDst[2] = Math.round(v[2]);
        return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v, min = 0, max = 1, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.min(max, Math.max(min, v[0]));
        newDst[1] = Math.min(max, Math.max(min, v[1]));
        newDst[2] = Math.min(max, Math.max(min, v[2]));
        return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + b[0] * scale;
        newDst[1] = a[1] + b[1] * scale;
        newDst[2] = a[2] + b[2] * scale;
        return newDst;
    }
    /**
     * Returns the angle in radians between two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns The angle in radians between the 2 vectors.
     */
    function angle(a, b) {
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const bx = b[0];
        const by = b[1];
        const bz = b[2];
        const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
        const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
        const mag = mag1 * mag2;
        const cosine = mag && dot(a, b) / mag;
        return Math.acos(cosine);
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        newDst[2] = a[2] - b[2];
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        newDst[2] = a[2] + t * (b[2] - a[2]);
        return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + t[0] * (b[0] - a[0]);
        newDst[1] = a[1] + t[1] * (b[1] - a[1]);
        newDst[2] = a[2] + t[2] * (b[2] - a[2]);
        return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.max(a[0], b[0]);
        newDst[1] = Math.max(a[1], b[1]);
        newDst[2] = Math.max(a[2], b[2]);
        return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.min(a[0], b[0]);
        newDst[1] = Math.min(a[1], b[1]);
        newDst[2] = Math.min(a[2], b[2]);
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        newDst[2] = v[2] * k;
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        newDst[2] = v[2] / k;
        return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = 1 / v[0];
        newDst[1] = 1 / v[1];
        newDst[2] = 1 / v[2];
        return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    const invert = inverse;
    /**
     * Computes the cross product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of a cross b.
     */
    function cross(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        const t1 = a[2] * b[0] - a[0] * b[2];
        const t2 = a[0] * b[1] - a[1] * b[0];
        newDst[0] = a[1] * b[2] - a[2] * b[1];
        newDst[1] = t1;
        newDst[2] = t2;
        return newDst;
    }
    /**
     * Computes the dot product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    const len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        return v0 * v0 + v1 * v1 + v2 * v2;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    const lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    const dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    const distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
            newDst[2] = v2 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
        }
        return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = -v[0];
        newDst[1] = -v[1];
        newDst[2] = -v[2];
        return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec3.clone})
     * Also see {@link vec3.create} and {@link vec3.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = v[0];
        newDst[1] = v[1];
        newDst[2] = v[2];
        return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec3.copy})
     * Also see {@link vec3.create} and {@link vec3.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    const clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] * b[0];
        newDst[1] = a[1] * b[1];
        newDst[2] = a[2] * b[2];
        return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    const mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] / b[0];
        newDst[1] = a[1] / b[1];
        newDst[2] = a[2] / b[2];
        return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    const div = divide;
    /**
     * Creates a random vector
     * @param scale - Default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The random vector.
     */
    function random(scale = 1, dst) {
        const newDst = (dst ?? new Ctor(3));
        const angle = Math.random() * 2 * Math.PI;
        const z = Math.random() * 2 - 1;
        const zScale = Math.sqrt(1 - z * z) * scale;
        newDst[0] = Math.cos(angle) * zScale;
        newDst[1] = Math.sin(angle) * zScale;
        newDst[2] = z * scale;
        return newDst;
    }
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        return newDst;
    }
    /**
     * transform vec3 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const x = v[0];
        const y = v[1];
        const z = v[2];
        const w = (m[3] * x + m[7] * y + m[11] * z + m[15]) || 1;
        newDst[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        newDst[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        newDst[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return newDst;
    }
    /**
     * Transform vec3 by upper 3x3 matrix inside 4x4 matrix.
     * @param v - The direction.
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns The transformed vector.
     */
    function transformMat4Upper3x3(v, m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        newDst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
        return newDst;
    }
    /**
     * Transforms vec3 by 3x3 matrix
     *
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat3(v, m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const x = v[0];
        const y = v[1];
        const z = v[2];
        newDst[0] = x * m[0] + y * m[4] + z * m[8];
        newDst[1] = x * m[1] + y * m[5] + z * m[9];
        newDst[2] = x * m[2] + y * m[6] + z * m[10];
        return newDst;
    }
    /**
     * Transforms vec3 by Quaternion
     * @param v - the vector to transform
     * @param q - the quaternion to transform by
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed
     */
    function transformQuat(v, q, dst) {
        const newDst = (dst ?? new Ctor(3));
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const w2 = q[3] * 2;
        const x = v[0];
        const y = v[1];
        const z = v[2];
        const uvX = qy * z - qz * y;
        const uvY = qz * x - qx * z;
        const uvZ = qx * y - qy * x;
        newDst[0] = x + uvX * w2 + (qy * uvZ - qz * uvY) * 2;
        newDst[1] = y + uvY * w2 + (qz * uvX - qx * uvZ) * 2;
        newDst[2] = z + uvZ * w2 + (qx * uvY - qy * uvX) * 2;
        return newDst;
    }
    /**
     * Returns the translation component of a 4-by-4 matrix as a vector with 3
     * entries.
     * @param m - The matrix.
     * @param dst - vector to hold result. If not passed a new one is created.
     * @returns The translation component of m.
     */
    function getTranslation(m, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = m[12];
        newDst[1] = m[13];
        newDst[2] = m[14];
        return newDst;
    }
    /**
     * Returns an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y, 2 = z;
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
        const newDst = (dst ?? new Ctor(3));
        const off = axis * 4;
        newDst[0] = m[off + 0];
        newDst[1] = m[off + 1];
        newDst[2] = m[off + 2];
        return newDst;
    }
    /**
     * Returns the scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const xx = m[0];
        const xy = m[1];
        const xz = m[2];
        const yx = m[4];
        const yy = m[5];
        const yz = m[6];
        const zx = m[8];
        const zy = m[9];
        const zz = m[10];
        newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
        newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
        newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
        return newDst;
    }
    /**
     * Rotate a 3D vector around the x-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns the rotated vector
     */
    function rotateX(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(3));
        const p = [];
        const r = [];
        //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        //perform rotation
        r[0] = p[0];
        r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
        r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
        //translate to correct position
        newDst[0] = r[0] + b[0];
        newDst[1] = r[1] + b[1];
        newDst[2] = r[2] + b[2];
        return newDst;
    }
    /**
     * Rotate a 3D vector around the y-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns the rotated vector
     */
    function rotateY(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(3));
        const p = [];
        const r = [];
        // translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        // perform rotation
        r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
        // translate to correct position
        newDst[0] = r[0] + b[0];
        newDst[1] = r[1] + b[1];
        newDst[2] = r[2] + b[2];
        return newDst;
    }
    /**
     * Rotate a 3D vector around the z-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns {vec3} out
     */
    function rotateZ(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(3));
        const p = [];
        const r = [];
        // translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        // perform rotation
        r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
        r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
        r[2] = p[2];
        // translate to correct position
        newDst[0] = r[0] + b[0];
        newDst[1] = r[1] + b[1];
        newDst[2] = r[2] + b[2];
        return newDst;
    }
    /**
     * Treat a 3D vector as a direction and set it's length
     *
     * @param a The vec3 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
        const newDst = (dst ?? new Ctor(3));
        normalize(a, newDst);
        return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec3 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
        const newDst = (dst ?? new Ctor(3));
        if (length(a) > maxLen) {
            return setLength(a, maxLen, newDst);
        }
        return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        return lerp(a, b, 0.5, newDst);
    }
    return {
        create,
        fromValues,
        set,
        ceil,
        floor,
        round,
        clamp,
        add,
        addScaled,
        angle,
        subtract,
        sub,
        equalsApproximately,
        equals,
        lerp,
        lerpV,
        max,
        min,
        mulScalar,
        scale,
        divScalar,
        inverse,
        invert,
        cross,
        dot,
        length,
        len,
        lengthSq,
        lenSq,
        distance,
        dist,
        distanceSq,
        distSq,
        normalize,
        negate,
        copy,
        clone,
        multiply,
        mul,
        divide,
        div,
        random,
        zero,
        transformMat4,
        transformMat4Upper3x3,
        transformMat3,
        transformQuat,
        getTranslation,
        getAxis,
        getScaling,
        rotateX,
        rotateY,
        rotateZ,
        setLength,
        truncate,
        midpoint,
    };
}
const cache$3 = new Map();
function getAPI$3(Ctor) {
    let api = cache$3.get(Ctor);
    if (!api) {
        api = getAPIImpl$3(Ctor);
        cache$3.set(Ctor, api);
    }
    return api;
}

/**
 * Generates a typed API for Mat4
 * */
function getAPIImpl$2(Ctor) {
    const vec3 = getAPI$3(Ctor);
    /**
     * 4x4 Matrix math math functions.
     *
     * Almost all functions take an optional `newDst` argument. If it is not passed in the
     * functions will create a new matrix. In other words you can do this
     *
     *     const mat = mat4.translation([1, 2, 3]);  // Creates a new translation matrix
     *
     * or
     *
     *     const mat = mat4.create();
     *     mat4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
     *
     * The first style is often easier but depending on where it's used it generates garbage where
     * as there is almost never allocation with the second style.
     *
     * It is always save to pass any matrix as the destination. So for example
     *
     *     const mat = mat4.identity();
     *     const trans = mat4.translation([1, 2, 3]);
     *     mat4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
     *
     */
    /**
     * Create a Mat4 from values
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Mat4's specified type
     * it would be faster to use
     *
     * ```
     * const m = mat4.clone(someJSArray);
     * ```
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param v9 - value for element 9
     * @param v10 - value for element 10
     * @param v11 - value for element 11
     * @param v12 - value for element 12
     * @param v13 - value for element 13
     * @param v14 - value for element 14
     * @param v15 - value for element 15
     * @returns created from values.
     */
    function create(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
        const newDst = new Ctor(16);
        if (v0 !== undefined) {
            newDst[0] = v0;
            if (v1 !== undefined) {
                newDst[1] = v1;
                if (v2 !== undefined) {
                    newDst[2] = v2;
                    if (v3 !== undefined) {
                        newDst[3] = v3;
                        if (v4 !== undefined) {
                            newDst[4] = v4;
                            if (v5 !== undefined) {
                                newDst[5] = v5;
                                if (v6 !== undefined) {
                                    newDst[6] = v6;
                                    if (v7 !== undefined) {
                                        newDst[7] = v7;
                                        if (v8 !== undefined) {
                                            newDst[8] = v8;
                                            if (v9 !== undefined) {
                                                newDst[9] = v9;
                                                if (v10 !== undefined) {
                                                    newDst[10] = v10;
                                                    if (v11 !== undefined) {
                                                        newDst[11] = v11;
                                                        if (v12 !== undefined) {
                                                            newDst[12] = v12;
                                                            if (v13 !== undefined) {
                                                                newDst[13] = v13;
                                                                if (v14 !== undefined) {
                                                                    newDst[14] = v14;
                                                                    if (v15 !== undefined) {
                                                                        newDst[15] = v15;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Sets the values of a Mat4
     * Also see {@link mat4.create} and {@link mat4.copy}
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param v9 - value for element 9
     * @param v10 - value for element 10
     * @param v11 - value for element 11
     * @param v12 - value for element 12
     * @param v13 - value for element 13
     * @param v14 - value for element 14
     * @param v15 - value for element 15
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 created from values.
     */
    function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = v0;
        newDst[1] = v1;
        newDst[2] = v2;
        newDst[3] = v3;
        newDst[4] = v4;
        newDst[5] = v5;
        newDst[6] = v6;
        newDst[7] = v7;
        newDst[8] = v8;
        newDst[9] = v9;
        newDst[10] = v10;
        newDst[11] = v11;
        newDst[12] = v12;
        newDst[13] = v13;
        newDst[14] = v14;
        newDst[15] = v15;
        return newDst;
    }
    /**
     * Creates a Mat4 from a Mat3
     * @param m3 - source matrix
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 made from m3
     */
    function fromMat3(m3, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = m3[0];
        newDst[1] = m3[1];
        newDst[2] = m3[2];
        newDst[3] = 0;
        newDst[4] = m3[4];
        newDst[5] = m3[5];
        newDst[6] = m3[6];
        newDst[7] = 0;
        newDst[8] = m3[8];
        newDst[9] = m3[9];
        newDst[10] = m3[10];
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Creates a Mat4 rotation matrix from a quaternion
     * @param q - quaternion to create matrix from
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 made from q
     */
    function fromQuat(q, dst) {
        const newDst = (dst ?? new Ctor(16));
        const x = q[0];
        const y = q[1];
        const z = q[2];
        const w = q[3];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const yx = y * x2;
        const yy = y * y2;
        const zx = z * x2;
        const zy = z * y2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        newDst[0] = 1 - yy - zz;
        newDst[1] = yx + wz;
        newDst[2] = zx - wy;
        newDst[3] = 0;
        newDst[4] = yx - wz;
        newDst[5] = 1 - xx - zz;
        newDst[6] = zy + wx;
        newDst[7] = 0;
        newDst[8] = zx + wy;
        newDst[9] = zy - wx;
        newDst[10] = 1 - xx - yy;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Negates a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns -m.
     */
    function negate(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = -m[0];
        newDst[1] = -m[1];
        newDst[2] = -m[2];
        newDst[3] = -m[3];
        newDst[4] = -m[4];
        newDst[5] = -m[5];
        newDst[6] = -m[6];
        newDst[7] = -m[7];
        newDst[8] = -m[8];
        newDst[9] = -m[9];
        newDst[10] = -m[10];
        newDst[11] = -m[11];
        newDst[12] = -m[12];
        newDst[13] = -m[13];
        newDst[14] = -m[14];
        newDst[15] = -m[15];
        return newDst;
    }
    /**
     * Copies a matrix. (same as {@link mat4.clone})
     * Also see {@link mat4.create} and {@link mat4.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    function copy(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = m[0];
        newDst[1] = m[1];
        newDst[2] = m[2];
        newDst[3] = m[3];
        newDst[4] = m[4];
        newDst[5] = m[5];
        newDst[6] = m[6];
        newDst[7] = m[7];
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
        newDst[11] = m[11];
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
        return newDst;
    }
    /**
     * Copies a matrix (same as {@link mat4.copy})
     * Also see {@link mat4.create} and {@link mat4.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    const clone = copy;
    /**
     * Check if 2 matrices are approximately equal
     * @param a - Operand matrix.
     * @param b - Operand matrix.
     * @returns true if matrices are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[3] - b[3]) < EPSILON &&
            Math.abs(a[4] - b[4]) < EPSILON &&
            Math.abs(a[5] - b[5]) < EPSILON &&
            Math.abs(a[6] - b[6]) < EPSILON &&
            Math.abs(a[7] - b[7]) < EPSILON &&
            Math.abs(a[8] - b[8]) < EPSILON &&
            Math.abs(a[9] - b[9]) < EPSILON &&
            Math.abs(a[10] - b[10]) < EPSILON &&
            Math.abs(a[11] - b[11]) < EPSILON &&
            Math.abs(a[12] - b[12]) < EPSILON &&
            Math.abs(a[13] - b[13]) < EPSILON &&
            Math.abs(a[14] - b[14]) < EPSILON &&
            Math.abs(a[15] - b[15]) < EPSILON;
    }
    /**
     * Check if 2 matrices are exactly equal
     * @param a - Operand matrix.
     * @param b - Operand matrix.
     * @returns true if matrices are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2] &&
            a[3] === b[3] &&
            a[4] === b[4] &&
            a[5] === b[5] &&
            a[6] === b[6] &&
            a[7] === b[7] &&
            a[8] === b[8] &&
            a[9] === b[9] &&
            a[10] === b[10] &&
            a[11] === b[11] &&
            a[12] === b[12] &&
            a[13] === b[13] &&
            a[14] === b[14] &&
            a[15] === b[15];
    }
    /**
     * Creates a 4-by-4 identity matrix.
     *
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A 4-by-4 identity matrix.
     */
    function identity(dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Takes the transpose of a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The transpose of m.
     */
    function transpose(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        if (newDst === m) {
            let t;
            t = m[1];
            m[1] = m[4];
            m[4] = t;
            t = m[2];
            m[2] = m[8];
            m[8] = t;
            t = m[3];
            m[3] = m[12];
            m[12] = t;
            t = m[6];
            m[6] = m[9];
            m[9] = t;
            t = m[7];
            m[7] = m[13];
            m[13] = t;
            t = m[11];
            m[11] = m[14];
            m[14] = t;
            return newDst;
        }
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        newDst[0] = m00;
        newDst[1] = m10;
        newDst[2] = m20;
        newDst[3] = m30;
        newDst[4] = m01;
        newDst[5] = m11;
        newDst[6] = m21;
        newDst[7] = m31;
        newDst[8] = m02;
        newDst[9] = m12;
        newDst[10] = m22;
        newDst[11] = m32;
        newDst[12] = m03;
        newDst[13] = m13;
        newDst[14] = m23;
        newDst[15] = m33;
        return newDst;
    }
    /**
     * Computes the inverse of a 4-by-4 matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    function inverse(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        const tmp0 = m22 * m33;
        const tmp1 = m32 * m23;
        const tmp2 = m12 * m33;
        const tmp3 = m32 * m13;
        const tmp4 = m12 * m23;
        const tmp5 = m22 * m13;
        const tmp6 = m02 * m33;
        const tmp7 = m32 * m03;
        const tmp8 = m02 * m23;
        const tmp9 = m22 * m03;
        const tmp10 = m02 * m13;
        const tmp11 = m12 * m03;
        const tmp12 = m20 * m31;
        const tmp13 = m30 * m21;
        const tmp14 = m10 * m31;
        const tmp15 = m30 * m11;
        const tmp16 = m10 * m21;
        const tmp17 = m20 * m11;
        const tmp18 = m00 * m31;
        const tmp19 = m30 * m01;
        const tmp20 = m00 * m21;
        const tmp21 = m20 * m01;
        const tmp22 = m00 * m11;
        const tmp23 = m10 * m01;
        const t0 = (tmp0 * m11 + tmp3 * m21 + tmp4 * m31) -
            (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
        const t1 = (tmp1 * m01 + tmp6 * m21 + tmp9 * m31) -
            (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
        const t2 = (tmp2 * m01 + tmp7 * m11 + tmp10 * m31) -
            (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
        const t3 = (tmp5 * m01 + tmp8 * m11 + tmp11 * m21) -
            (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
        const d = 1 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
        newDst[0] = d * t0;
        newDst[1] = d * t1;
        newDst[2] = d * t2;
        newDst[3] = d * t3;
        newDst[4] = d * ((tmp1 * m10 + tmp2 * m20 + tmp5 * m30) -
            (tmp0 * m10 + tmp3 * m20 + tmp4 * m30));
        newDst[5] = d * ((tmp0 * m00 + tmp7 * m20 + tmp8 * m30) -
            (tmp1 * m00 + tmp6 * m20 + tmp9 * m30));
        newDst[6] = d * ((tmp3 * m00 + tmp6 * m10 + tmp11 * m30) -
            (tmp2 * m00 + tmp7 * m10 + tmp10 * m30));
        newDst[7] = d * ((tmp4 * m00 + tmp9 * m10 + tmp10 * m20) -
            (tmp5 * m00 + tmp8 * m10 + tmp11 * m20));
        newDst[8] = d * ((tmp12 * m13 + tmp15 * m23 + tmp16 * m33) -
            (tmp13 * m13 + tmp14 * m23 + tmp17 * m33));
        newDst[9] = d * ((tmp13 * m03 + tmp18 * m23 + tmp21 * m33) -
            (tmp12 * m03 + tmp19 * m23 + tmp20 * m33));
        newDst[10] = d * ((tmp14 * m03 + tmp19 * m13 + tmp22 * m33) -
            (tmp15 * m03 + tmp18 * m13 + tmp23 * m33));
        newDst[11] = d * ((tmp17 * m03 + tmp20 * m13 + tmp23 * m23) -
            (tmp16 * m03 + tmp21 * m13 + tmp22 * m23));
        newDst[12] = d * ((tmp14 * m22 + tmp17 * m32 + tmp13 * m12) -
            (tmp16 * m32 + tmp12 * m12 + tmp15 * m22));
        newDst[13] = d * ((tmp20 * m32 + tmp12 * m02 + tmp19 * m22) -
            (tmp18 * m22 + tmp21 * m32 + tmp13 * m02));
        newDst[14] = d * ((tmp18 * m12 + tmp23 * m32 + tmp15 * m02) -
            (tmp22 * m32 + tmp14 * m02 + tmp19 * m12));
        newDst[15] = d * ((tmp22 * m22 + tmp16 * m02 + tmp21 * m12) -
            (tmp20 * m12 + tmp23 * m22 + tmp17 * m02));
        return newDst;
    }
    /**
     * Compute the determinant of a matrix
     * @param m - the matrix
     * @returns the determinant
     */
    function determinant(m) {
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        const tmp0 = m22 * m33;
        const tmp1 = m32 * m23;
        const tmp2 = m12 * m33;
        const tmp3 = m32 * m13;
        const tmp4 = m12 * m23;
        const tmp5 = m22 * m13;
        const tmp6 = m02 * m33;
        const tmp7 = m32 * m03;
        const tmp8 = m02 * m23;
        const tmp9 = m22 * m03;
        const tmp10 = m02 * m13;
        const tmp11 = m12 * m03;
        const t0 = (tmp0 * m11 + tmp3 * m21 + tmp4 * m31) -
            (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
        const t1 = (tmp1 * m01 + tmp6 * m21 + tmp9 * m31) -
            (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
        const t2 = (tmp2 * m01 + tmp7 * m11 + tmp10 * m31) -
            (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
        const t3 = (tmp5 * m01 + tmp8 * m11 + tmp11 * m21) -
            (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
        return m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3;
    }
    /**
     * Computes the inverse of a 4-by-4 matrix. (same as inverse)
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    const invert = inverse;
    /**
     * Multiplies two 4-by-4 matrices with a on the left and b on the right
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(16));
        const a00 = a[0];
        const a01 = a[1];
        const a02 = a[2];
        const a03 = a[3];
        const a10 = a[4 + 0];
        const a11 = a[4 + 1];
        const a12 = a[4 + 2];
        const a13 = a[4 + 3];
        const a20 = a[8 + 0];
        const a21 = a[8 + 1];
        const a22 = a[8 + 2];
        const a23 = a[8 + 3];
        const a30 = a[12 + 0];
        const a31 = a[12 + 1];
        const a32 = a[12 + 2];
        const a33 = a[12 + 3];
        const b00 = b[0];
        const b01 = b[1];
        const b02 = b[2];
        const b03 = b[3];
        const b10 = b[4 + 0];
        const b11 = b[4 + 1];
        const b12 = b[4 + 2];
        const b13 = b[4 + 3];
        const b20 = b[8 + 0];
        const b21 = b[8 + 1];
        const b22 = b[8 + 2];
        const b23 = b[8 + 3];
        const b30 = b[12 + 0];
        const b31 = b[12 + 1];
        const b32 = b[12 + 2];
        const b33 = b[12 + 3];
        newDst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
        newDst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
        newDst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
        newDst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
        newDst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
        newDst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
        newDst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
        newDst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
        newDst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
        newDst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
        newDst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
        newDst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
        newDst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
        newDst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
        newDst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
        newDst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
        return newDst;
    }
    /**
     * Multiplies two 4-by-4 matrices with a on the left and b on the right (same as multiply)
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    const mul = multiply;
    /**
     * Sets the translation component of a 4-by-4 matrix to the given
     * vector.
     * @param a - The matrix.
     * @param v - The vector.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix with translation set.
     */
    function setTranslation(a, v, dst) {
        const newDst = (dst ?? identity());
        if (a !== newDst) {
            newDst[0] = a[0];
            newDst[1] = a[1];
            newDst[2] = a[2];
            newDst[3] = a[3];
            newDst[4] = a[4];
            newDst[5] = a[5];
            newDst[6] = a[6];
            newDst[7] = a[7];
            newDst[8] = a[8];
            newDst[9] = a[9];
            newDst[10] = a[10];
            newDst[11] = a[11];
        }
        newDst[12] = v[0];
        newDst[13] = v[1];
        newDst[14] = v[2];
        newDst[15] = 1;
        return newDst;
    }
    ///**
    // * Returns the translation component of a 4-by-4 matrix as a vector with 3
    // * entries.
    // * @param m - The matrix.
    // * @param dst - vector to hold result. If not passed a new one is created.
    // * @returns The translation component of m.
    // */
    function getTranslation(m, dst) {
        const newDst = (dst ?? vec3.create());
        newDst[0] = m[12];
        newDst[1] = m[13];
        newDst[2] = m[14];
        return newDst;
    }
    /**
     * Returns an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y, 2 = z;
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
        const newDst = (dst ?? vec3.create());
        const off = axis * 4;
        newDst[0] = m[off + 0];
        newDst[1] = m[off + 1];
        newDst[2] = m[off + 2];
        return newDst;
    }
    /**
     * Sets an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param v - the axis vector
     * @param axis - The axis  0 = x, 1 = y, 2 = z;
     * @param dst - The matrix to set. If not passed a new one is created.
     * @returns The matrix with axis set.
     */
    function setAxis(m, v, axis, dst) {
        const newDst = (dst === m) ? dst : copy(m, dst);
        const off = axis * 4;
        newDst[off + 0] = v[0];
        newDst[off + 1] = v[1];
        newDst[off + 2] = v[2];
        return newDst;
    }
    ///**
    // * Returns the scaling component of the matrix
    // * @param m - The Matrix
    // * @param dst - The vector to set. If not passed a new one is created.
    // */
    function getScaling(m, dst) {
        const newDst = (dst ?? vec3.create());
        const xx = m[0];
        const xy = m[1];
        const xz = m[2];
        const yx = m[4];
        const yy = m[5];
        const yz = m[6];
        const zx = m[8];
        const zy = m[9];
        const zz = m[10];
        newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
        newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
        newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
        return newDst;
    }
    /**
     * Computes a 4-by-4 perspective transformation matrix given the angular height
     * of the frustum, the aspect ratio, and the near and far clipping planes.  The
     * arguments define a frustum extending in the negative z direction.  The given
     * angle is the vertical angle of the frustum, and the horizontal angle is
     * determined to produce the given aspect ratio.  The arguments near and far are
     * the distances to the near and far clipping planes.  Note that near and far
     * are not z coordinates, but rather they are distances along the negative
     * z-axis.  The matrix generated sends the viewing frustum to the unit box.
     * We assume a unit box extending from -1 to 1 in the x and y dimensions and
     * from 0 to 1 in the z dimension.
     *
     * Note: If you pass `Infinity` for zFar then it will produce a projection matrix
     * returns -Infinity for Z when transforming coordinates with Z <= 0 and +Infinity for Z
     * otherwise.
     *
     * @param fieldOfViewYInRadians - The camera angle from top to bottom (in radians).
     * @param aspect - The aspect ratio width / height.
     * @param zNear - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param zFar - The depth (negative z coordinate)
     *     of the far clipping plane.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The perspective matrix.
     */
    function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
        const newDst = (dst ?? new Ctor(16));
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
        newDst[0] = f / aspect;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = f;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[15] = 0;
        if (Number.isFinite(zFar)) {
            const rangeInv = 1 / (zNear - zFar);
            newDst[10] = zFar * rangeInv;
            newDst[14] = zFar * zNear * rangeInv;
        }
        else {
            newDst[10] = -1;
            newDst[14] = -zNear;
        }
        return newDst;
    }
    /**
     * Computes a 4-by-4 reverse-z perspective transformation matrix given the angular height
     * of the frustum, the aspect ratio, and the near and far clipping planes.  The
     * arguments define a frustum extending in the negative z direction.  The given
     * angle is the vertical angle of the frustum, and the horizontal angle is
     * determined to produce the given aspect ratio.  The arguments near and far are
     * the distances to the near and far clipping planes.  Note that near and far
     * are not z coordinates, but rather they are distances along the negative
     * z-axis.  The matrix generated sends the viewing frustum to the unit box.
     * We assume a unit box extending from -1 to 1 in the x and y dimensions and
     * from 1 (at -zNear) to 0 (at -zFar) in the z dimension.
     *
     * @param fieldOfViewYInRadians - The camera angle from top to bottom (in radians).
     * @param aspect - The aspect ratio width / height.
     * @param zNear - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param zFar - The depth (negative z coordinate)
     *     of the far clipping plane. (default = Infinity)
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The perspective matrix.
     */ function perspectiveReverseZ(fieldOfViewYInRadians, aspect, zNear, zFar = Infinity, dst) {
        const newDst = (dst ?? new Ctor(16));
        const f = 1 / Math.tan(fieldOfViewYInRadians * 0.5);
        newDst[0] = f / aspect;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = f;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[15] = 0;
        if (zFar === Infinity) {
            newDst[10] = 0;
            newDst[14] = zNear;
        }
        else {
            const rangeInv = 1 / (zFar - zNear);
            newDst[10] = zNear * rangeInv;
            newDst[14] = zFar * zNear * rangeInv;
        }
        return newDst;
    }
    /**
     * Computes a 4-by-4 orthogonal transformation matrix that transforms from
     * the given the left, right, bottom, and top dimensions to -1 +1 in x, and y
     * and 0 to +1 in z.
     * @param left - Left side of the near clipping plane viewport.
     * @param right - Right side of the near clipping plane viewport.
     * @param bottom - Bottom of the near clipping plane viewport.
     * @param top - Top of the near clipping plane viewport.
     * @param near - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param far - The depth (negative z coordinate)
     *     of the far clipping plane.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The orthographic projection matrix.
     */
    function ortho(left, right, bottom, top, near, far, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = 2 / (right - left);
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 2 / (top - bottom);
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1 / (near - far);
        newDst[11] = 0;
        newDst[12] = (right + left) / (left - right);
        newDst[13] = (top + bottom) / (bottom - top);
        newDst[14] = near / (near - far);
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Computes a 4-by-4 perspective transformation matrix given the left, right,
     * top, bottom, near and far clipping planes. The arguments define a frustum
     * extending in the negative z direction. The arguments near and far are the
     * distances to the near and far clipping planes. Note that near and far are not
     * z coordinates, but rather they are distances along the negative z-axis. The
     * matrix generated sends the viewing frustum to the unit box. We assume a unit
     * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
     * dimension.
     * @param left - The x coordinate of the left plane of the box.
     * @param right - The x coordinate of the right plane of the box.
     * @param bottom - The y coordinate of the bottom plane of the box.
     * @param top - The y coordinate of the right plane of the box.
     * @param near - The negative z coordinate of the near plane of the box.
     * @param far - The negative z coordinate of the far plane of the box.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The perspective projection matrix.
     */
    function frustum(left, right, bottom, top, near, far, dst) {
        const newDst = (dst ?? new Ctor(16));
        const dx = (right - left);
        const dy = (top - bottom);
        const dz = (near - far);
        newDst[0] = 2 * near / dx;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 2 * near / dy;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = (left + right) / dx;
        newDst[9] = (top + bottom) / dy;
        newDst[10] = far / dz;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = near * far / dz;
        newDst[15] = 0;
        return newDst;
    }
    /**
     * Computes a 4-by-4 reverse-z perspective transformation matrix given the left, right,
     * top, bottom, near and far clipping planes. The arguments define a frustum
     * extending in the negative z direction. The arguments near and far are the
     * distances to the near and far clipping planes. Note that near and far are not
     * z coordinates, but rather they are distances along the negative z-axis. The
     * matrix generated sends the viewing frustum to the unit box. We assume a unit
     * box extending from -1 to 1 in the x and y dimensions and from 1 (-near) to 0 (-far) in the z
     * dimension.
     * @param left - The x coordinate of the left plane of the box.
     * @param right - The x coordinate of the right plane of the box.
     * @param bottom - The y coordinate of the bottom plane of the box.
     * @param top - The y coordinate of the right plane of the box.
     * @param near - The negative z coordinate of the near plane of the box.
     * @param far - The negative z coordinate of the far plane of the box.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The perspective projection matrix.
     */
    function frustumReverseZ(left, right, bottom, top, near, far = Infinity, dst) {
        const newDst = (dst ?? new Ctor(16));
        const dx = (right - left);
        const dy = (top - bottom);
        newDst[0] = 2 * near / dx;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 2 * near / dy;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = (left + right) / dx;
        newDst[9] = (top + bottom) / dy;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[15] = 0;
        if (far === Infinity) {
            newDst[10] = 0;
            newDst[14] = near;
        }
        else {
            const rangeInv = 1 / (far - near);
            newDst[10] = near * rangeInv;
            newDst[14] = far * near * rangeInv;
        }
        return newDst;
    }
    const xAxis = vec3.create();
    const yAxis = vec3.create();
    const zAxis = vec3.create();
    /**
     * Computes a 4-by-4 aim transformation.
     *
     * This is a matrix which positions an object aiming down positive Z.
     * toward the target.
     *
     * Note: this is **NOT** the inverse of lookAt as lookAt looks at negative Z.
     *
     * @param position - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The aim matrix.
     */
    function aim(position, target, up, dst) {
        const newDst = (dst ?? new Ctor(16));
        vec3.normalize(vec3.subtract(target, position, zAxis), zAxis);
        vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
        vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
        newDst[0] = xAxis[0];
        newDst[1] = xAxis[1];
        newDst[2] = xAxis[2];
        newDst[3] = 0;
        newDst[4] = yAxis[0];
        newDst[5] = yAxis[1];
        newDst[6] = yAxis[2];
        newDst[7] = 0;
        newDst[8] = zAxis[0];
        newDst[9] = zAxis[1];
        newDst[10] = zAxis[2];
        newDst[11] = 0;
        newDst[12] = position[0];
        newDst[13] = position[1];
        newDst[14] = position[2];
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Computes a 4-by-4 camera aim transformation.
     *
     * This is a matrix which positions an object aiming down negative Z.
     * toward the target.
     *
     * Note: this is the inverse of `lookAt`
     *
     * @param eye - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The aim matrix.
     */
    function cameraAim(eye, target, up, dst) {
        const newDst = (dst ?? new Ctor(16));
        vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
        vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
        vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
        newDst[0] = xAxis[0];
        newDst[1] = xAxis[1];
        newDst[2] = xAxis[2];
        newDst[3] = 0;
        newDst[4] = yAxis[0];
        newDst[5] = yAxis[1];
        newDst[6] = yAxis[2];
        newDst[7] = 0;
        newDst[8] = zAxis[0];
        newDst[9] = zAxis[1];
        newDst[10] = zAxis[2];
        newDst[11] = 0;
        newDst[12] = eye[0];
        newDst[13] = eye[1];
        newDst[14] = eye[2];
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Computes a 4-by-4 view transformation.
     *
     * This is a view matrix which transforms all other objects
     * to be in the space of the view defined by the parameters.
     *
     * @param eye - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The look-at matrix.
     */
    function lookAt(eye, target, up, dst) {
        const newDst = (dst ?? new Ctor(16));
        vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
        vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
        vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
        newDst[0] = xAxis[0];
        newDst[1] = yAxis[0];
        newDst[2] = zAxis[0];
        newDst[3] = 0;
        newDst[4] = xAxis[1];
        newDst[5] = yAxis[1];
        newDst[6] = zAxis[1];
        newDst[7] = 0;
        newDst[8] = xAxis[2];
        newDst[9] = yAxis[2];
        newDst[10] = zAxis[2];
        newDst[11] = 0;
        newDst[12] = -(xAxis[0] * eye[0] + xAxis[1] * eye[1] + xAxis[2] * eye[2]);
        newDst[13] = -(yAxis[0] * eye[0] + yAxis[1] * eye[1] + yAxis[2] * eye[2]);
        newDst[14] = -(zAxis[0] * eye[0] + zAxis[1] * eye[1] + zAxis[2] * eye[2]);
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which translates by the given vector v.
     * @param v - The vector by
     *     which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translation matrix.
     */
    function translation(v, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        newDst[11] = 0;
        newDst[12] = v[0];
        newDst[13] = v[1];
        newDst[14] = v[2];
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Translates the given 4-by-4 matrix by the given vector v.
     * @param m - The matrix.
     * @param v - The vector by
     *     which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translated matrix.
     */
    function translate(m, v, dst) {
        const newDst = (dst ?? new Ctor(16));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const m00 = m[0];
        const m01 = m[1];
        const m02 = m[2];
        const m03 = m[3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        if (m !== newDst) {
            newDst[0] = m00;
            newDst[1] = m01;
            newDst[2] = m02;
            newDst[3] = m03;
            newDst[4] = m10;
            newDst[5] = m11;
            newDst[6] = m12;
            newDst[7] = m13;
            newDst[8] = m20;
            newDst[9] = m21;
            newDst[10] = m22;
            newDst[11] = m23;
        }
        newDst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
        newDst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
        newDst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
        newDst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationX(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = c;
        newDst[6] = s;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = -s;
        newDst[10] = c;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the x-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateX(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m10 = m[4];
        const m11 = m[5];
        const m12 = m[6];
        const m13 = m[7];
        const m20 = m[8];
        const m21 = m[9];
        const m22 = m[10];
        const m23 = m[11];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[4] = c * m10 + s * m20;
        newDst[5] = c * m11 + s * m21;
        newDst[6] = c * m12 + s * m22;
        newDst[7] = c * m13 + s * m23;
        newDst[8] = c * m20 - s * m10;
        newDst[9] = c * m21 - s * m11;
        newDst[10] = c * m22 - s * m12;
        newDst[11] = c * m23 - s * m13;
        if (m !== newDst) {
            newDst[0] = m[0];
            newDst[1] = m[1];
            newDst[2] = m[2];
            newDst[3] = m[3];
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationY(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = 0;
        newDst[2] = -s;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = s;
        newDst[9] = 0;
        newDst[10] = c;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the y-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateY(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 - s * m20;
        newDst[1] = c * m01 - s * m21;
        newDst[2] = c * m02 - s * m22;
        newDst[3] = c * m03 - s * m23;
        newDst[8] = c * m20 + s * m00;
        newDst[9] = c * m21 + s * m01;
        newDst[10] = c * m22 + s * m02;
        newDst[11] = c * m23 + s * m03;
        if (m !== newDst) {
            newDst[4] = m[4];
            newDst[5] = m[5];
            newDst[6] = m[6];
            newDst[7] = m[7];
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationZ(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = s;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = -s;
        newDst[5] = c;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the z-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateZ(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 + s * m10;
        newDst[1] = c * m01 + s * m11;
        newDst[2] = c * m02 + s * m12;
        newDst[3] = c * m03 + s * m13;
        newDst[4] = c * m10 - s * m00;
        newDst[5] = c * m11 - s * m01;
        newDst[6] = c * m12 - s * m02;
        newDst[7] = c * m13 - s * m03;
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
            newDst[11] = m[11];
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the given axis by the given
     * angle.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A matrix which rotates angle radians
     *     around the axis.
     */
    function axisRotation(axis, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        let x = axis[0];
        let y = axis[1];
        let z = axis[2];
        const n = Math.sqrt(x * x + y * y + z * z);
        x /= n;
        y /= n;
        z /= n;
        const xx = x * x;
        const yy = y * y;
        const zz = z * z;
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        const oneMinusCosine = 1 - c;
        newDst[0] = xx + (1 - xx) * c;
        newDst[1] = x * y * oneMinusCosine + z * s;
        newDst[2] = x * z * oneMinusCosine - y * s;
        newDst[3] = 0;
        newDst[4] = x * y * oneMinusCosine - z * s;
        newDst[5] = yy + (1 - yy) * c;
        newDst[6] = y * z * oneMinusCosine + x * s;
        newDst[7] = 0;
        newDst[8] = x * z * oneMinusCosine + y * s;
        newDst[9] = y * z * oneMinusCosine - x * s;
        newDst[10] = zz + (1 - zz) * c;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the given axis by the given
     * angle. (same as axisRotation)
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A matrix which rotates angle radians
     *     around the axis.
     */
    const rotation = axisRotation;
    /**
     * Rotates the given 4-by-4 matrix around the given axis by the
     * given angle.
     * @param m - The matrix.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function axisRotate(m, axis, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        let x = axis[0];
        let y = axis[1];
        let z = axis[2];
        const n = Math.sqrt(x * x + y * y + z * z);
        x /= n;
        y /= n;
        z /= n;
        const xx = x * x;
        const yy = y * y;
        const zz = z * z;
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        const oneMinusCosine = 1 - c;
        const r00 = xx + (1 - xx) * c;
        const r01 = x * y * oneMinusCosine + z * s;
        const r02 = x * z * oneMinusCosine - y * s;
        const r10 = x * y * oneMinusCosine - z * s;
        const r11 = yy + (1 - yy) * c;
        const r12 = y * z * oneMinusCosine + x * s;
        const r20 = x * z * oneMinusCosine + y * s;
        const r21 = y * z * oneMinusCosine - x * s;
        const r22 = zz + (1 - zz) * c;
        const m00 = m[0];
        const m01 = m[1];
        const m02 = m[2];
        const m03 = m[3];
        const m10 = m[4];
        const m11 = m[5];
        const m12 = m[6];
        const m13 = m[7];
        const m20 = m[8];
        const m21 = m[9];
        const m22 = m[10];
        const m23 = m[11];
        newDst[0] = r00 * m00 + r01 * m10 + r02 * m20;
        newDst[1] = r00 * m01 + r01 * m11 + r02 * m21;
        newDst[2] = r00 * m02 + r01 * m12 + r02 * m22;
        newDst[3] = r00 * m03 + r01 * m13 + r02 * m23;
        newDst[4] = r10 * m00 + r11 * m10 + r12 * m20;
        newDst[5] = r10 * m01 + r11 * m11 + r12 * m21;
        newDst[6] = r10 * m02 + r11 * m12 + r12 * m22;
        newDst[7] = r10 * m03 + r11 * m13 + r12 * m23;
        newDst[8] = r20 * m00 + r21 * m10 + r22 * m20;
        newDst[9] = r20 * m01 + r21 * m11 + r22 * m21;
        newDst[10] = r20 * m02 + r21 * m12 + r22 * m22;
        newDst[11] = r20 * m03 + r21 * m13 + r22 * m23;
        if (m !== newDst) {
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the given axis by the
     * given angle. (same as rotate)
     * @param m - The matrix.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    const rotate = axisRotate;
    /**
     * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has three
     * entries.
     * @param v - A vector of
     *     three entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling(v, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = v[0];
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = v[1];
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = v[2];
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Scales the given 4-by-4 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * three entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of three entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale(m, v, dst) {
        const newDst = (dst ?? new Ctor(16));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        newDst[0] = v0 * m[0 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2];
        newDst[3] = v0 * m[0 * 4 + 3];
        newDst[4] = v1 * m[1 * 4 + 0];
        newDst[5] = v1 * m[1 * 4 + 1];
        newDst[6] = v1 * m[1 * 4 + 2];
        newDst[7] = v1 * m[1 * 4 + 3];
        newDst[8] = v2 * m[2 * 4 + 0];
        newDst[9] = v2 * m[2 * 4 + 1];
        newDst[10] = v2 * m[2 * 4 + 2];
        newDst[11] = v2 * m[2 * 4 + 3];
        if (m !== newDst) {
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which scales a uniform amount in each dimension.
     * @param s - the amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling(s, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = s;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = s;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = s;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Scales the given 4-by-4 matrix in each dimension by a uniform scale.
     * @param m - The matrix to be modified.
     * @param s - The amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale(m, s, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = s * m[0 * 4 + 0];
        newDst[1] = s * m[0 * 4 + 1];
        newDst[2] = s * m[0 * 4 + 2];
        newDst[3] = s * m[0 * 4 + 3];
        newDst[4] = s * m[1 * 4 + 0];
        newDst[5] = s * m[1 * 4 + 1];
        newDst[6] = s * m[1 * 4 + 2];
        newDst[7] = s * m[1 * 4 + 3];
        newDst[8] = s * m[2 * 4 + 0];
        newDst[9] = s * m[2 * 4 + 1];
        newDst[10] = s * m[2 * 4 + 2];
        newDst[11] = s * m[2 * 4 + 3];
        if (m !== newDst) {
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    return {
        create,
        set,
        fromMat3,
        fromQuat,
        negate,
        copy,
        clone,
        equalsApproximately,
        equals,
        identity,
        transpose,
        inverse,
        determinant,
        invert,
        multiply,
        mul,
        setTranslation,
        getTranslation,
        getAxis,
        setAxis,
        getScaling,
        perspective,
        perspectiveReverseZ,
        ortho,
        frustum,
        frustumReverseZ,
        aim,
        cameraAim,
        lookAt,
        translation,
        translate,
        rotationX,
        rotateX,
        rotationY,
        rotateY,
        rotationZ,
        rotateZ,
        axisRotation,
        rotation,
        axisRotate,
        rotate,
        scaling,
        scale,
        uniformScaling,
        uniformScale,
    };
}
const cache$2 = new Map();
function getAPI$2(Ctor) {
    let api = cache$2.get(Ctor);
    if (!api) {
        api = getAPIImpl$2(Ctor);
        cache$2.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Qud
 * */
function getAPIImpl$1(Ctor) {
    const vec3 = getAPI$3(Ctor);
    /**
     * Creates a quat4; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param w - Initial w value.
     * @returns the created vector
     */
    function create(x, y, z, w) {
        const newDst = new Ctor(4);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
                if (z !== undefined) {
                    newDst[2] = z;
                    if (w !== undefined) {
                        newDst[3] = w;
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Creates a Quat; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param z - Initial w value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Quat
     * Also see {@link quat.create} and {@link quat.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param w fourth value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, w, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = x;
        newDst[1] = y;
        newDst[2] = z;
        newDst[3] = w;
        return newDst;
    }
    /**
     * Sets a quaternion from the given angle and  axis,
     * then returns it.
     *
     * @param axis - the axis to rotate around
     * @param angleInRadians - the angle
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The quaternion that represents the given axis and angle
     **/
    function fromAxisAngle(axis, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const s = Math.sin(halfAngle);
        newDst[0] = s * axis[0];
        newDst[1] = s * axis[1];
        newDst[2] = s * axis[2];
        newDst[3] = Math.cos(halfAngle);
        return newDst;
    }
    /**
     * Gets the rotation axis and angle
     * @param q - quaternion to compute from
     * @param dst - Vec3 to hold result. If not passed in a new one is created.
     * @return angle and axis
     */
    function toAxisAngle(q, dst) {
        const newDst = (dst ?? vec3.create(3));
        const angle = Math.acos(q[3]) * 2;
        const s = Math.sin(angle * 0.5);
        if (s > EPSILON) {
            newDst[0] = q[0] / s;
            newDst[1] = q[1] / s;
            newDst[2] = q[2] / s;
        }
        else {
            newDst[0] = 1;
            newDst[1] = 0;
            newDst[2] = 0;
        }
        return { angle, axis: newDst };
    }
    /**
     * Returns the angle in degrees between two rotations a and b.
     * @param a - quaternion a
     * @param b - quaternion b
     * @return angle in radians between the two quaternions
     */
    function angle(a, b) {
        const d = dot(a, b);
        return Math.acos(2 * d * d - 1);
    }
    /**
     * Multiplies two quaternions
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const aw = a[3];
        const bx = b[0];
        const by = b[1];
        const bz = b[2];
        const bw = b[3];
        newDst[0] = ax * bw + aw * bx + ay * bz - az * by;
        newDst[1] = ay * bw + aw * by + az * bx - ax * bz;
        newDst[2] = az * bw + aw * bz + ax * by - ay * bx;
        newDst[3] = aw * bw - ax * bx - ay * by - az * bz;
        return newDst;
    }
    /**
     * Multiplies two quaternions
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    const mul = multiply;
    /**
     * Rotates the given quaternion around the X axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateX(q, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const qw = q[3];
        const bx = Math.sin(halfAngle);
        const bw = Math.cos(halfAngle);
        newDst[0] = qx * bw + qw * bx;
        newDst[1] = qy * bw + qz * bx;
        newDst[2] = qz * bw - qy * bx;
        newDst[3] = qw * bw - qx * bx;
        return newDst;
    }
    /**
     * Rotates the given quaternion around the Y axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateY(q, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const qw = q[3];
        const by = Math.sin(halfAngle);
        const bw = Math.cos(halfAngle);
        newDst[0] = qx * bw - qz * by;
        newDst[1] = qy * bw + qw * by;
        newDst[2] = qz * bw + qx * by;
        newDst[3] = qw * bw - qy * by;
        return newDst;
    }
    /**
     * Rotates the given quaternion around the Z axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateZ(q, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const qw = q[3];
        const bz = Math.sin(halfAngle);
        const bw = Math.cos(halfAngle);
        newDst[0] = qx * bw + qy * bz;
        newDst[1] = qy * bw - qx * bz;
        newDst[2] = qz * bw + qw * bz;
        newDst[3] = qw * bw - qz * bz;
        return newDst;
    }
    /**
     * Spherically linear interpolate between two quaternions
     *
     * @param a - starting value
     * @param b - ending value
     * @param t - value where 0 = a and 1 = b
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function slerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const aw = a[3];
        let bx = b[0];
        let by = b[1];
        let bz = b[2];
        let bw = b[3];
        let cosOmega = ax * bx + ay * by + az * bz + aw * bw;
        if (cosOmega < 0) {
            cosOmega = -cosOmega;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        let scale0;
        let scale1;
        if (1.0 - cosOmega > EPSILON) {
            const omega = Math.acos(cosOmega);
            const sinOmega = Math.sin(omega);
            scale0 = Math.sin((1 - t) * omega) / sinOmega;
            scale1 = Math.sin(t * omega) / sinOmega;
        }
        else {
            scale0 = 1.0 - t;
            scale1 = t;
        }
        newDst[0] = scale0 * ax + scale1 * bx;
        newDst[1] = scale0 * ay + scale1 * by;
        newDst[2] = scale0 * az + scale1 * bz;
        newDst[3] = scale0 * aw + scale1 * bw;
        return newDst;
    }
    /**
     * Compute the inverse of a quaternion
     *
     * @param q - quaternion to compute the inverse of
     * @returns A quaternion that is the result of a * b
     */
    function inverse(q, dst) {
        const newDst = (dst ?? new Ctor(4));
        const a0 = q[0];
        const a1 = q[1];
        const a2 = q[2];
        const a3 = q[3];
        const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        const invDot = dot ? 1 / dot : 0;
        newDst[0] = -a0 * invDot;
        newDst[1] = -a1 * invDot;
        newDst[2] = -a2 * invDot;
        newDst[3] = a3 * invDot;
        return newDst;
    }
    /**
     * Compute the conjugate of a quaternion
     * For quaternions with a magnitude of 1 (a unit quaternion)
     * this returns the same as the inverse but is faster to calculate.
     *
     * @param q - quaternion to compute the conjugate of.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The conjugate of q
     */
    function conjugate(q, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = -q[0];
        newDst[1] = -q[1];
        newDst[2] = -q[2];
        newDst[3] = q[3];
        return newDst;
    }
    /**
     * Creates a quaternion from the given rotation matrix.
     *
     * The created quaternion is not normalized.
     *
     * @param m - rotation matrix
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns the result
     */
    function fromMat(m, dst) {
        const newDst = (dst ?? new Ctor(4));
        /*
        0 1 2
        3 4 5
        6 7 8
      
        0 1 2
        4 5 6
        8 9 10
         */
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        const trace = m[0] + m[5] + m[10];
        if (trace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            const root = Math.sqrt(trace + 1); // 2w
            newDst[3] = 0.5 * root;
            const invRoot = 0.5 / root; // 1/(4w)
            newDst[0] = (m[6] - m[9]) * invRoot;
            newDst[1] = (m[8] - m[2]) * invRoot;
            newDst[2] = (m[1] - m[4]) * invRoot;
        }
        else {
            // |w| <= 1/2
            let i = 0;
            if (m[5] > m[0]) {
                i = 1;
            }
            if (m[10] > m[i * 4 + i]) {
                i = 2;
            }
            const j = (i + 1) % 3;
            const k = (i + 2) % 3;
            const root = Math.sqrt(m[i * 4 + i] - m[j * 4 + j] - m[k * 4 + k] + 1.0);
            newDst[i] = 0.5 * root;
            const invRoot = 0.5 / root;
            newDst[3] = (m[j * 4 + k] - m[k * 4 + j]) * invRoot;
            newDst[j] = (m[j * 4 + i] + m[i * 4 + j]) * invRoot;
            newDst[k] = (m[k * 4 + i] + m[i * 4 + k]) * invRoot;
        }
        return newDst;
    }
    /**
     * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
     *
     * @param xAngleInRadians - angle to rotate around X axis in radians.
     * @param yAngleInRadians - angle to rotate around Y axis in radians.
     * @param zAngleInRadians - angle to rotate around Z axis in radians.
     * @param order - order to apply euler angles
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion representing the same rotation as the euler angles applied in the given order
     */
    function fromEuler(xAngleInRadians, yAngleInRadians, zAngleInRadians, order, dst) {
        const newDst = (dst ?? new Ctor(4));
        const xHalfAngle = xAngleInRadians * 0.5;
        const yHalfAngle = yAngleInRadians * 0.5;
        const zHalfAngle = zAngleInRadians * 0.5;
        const sx = Math.sin(xHalfAngle);
        const cx = Math.cos(xHalfAngle);
        const sy = Math.sin(yHalfAngle);
        const cy = Math.cos(yHalfAngle);
        const sz = Math.sin(zHalfAngle);
        const cz = Math.cos(zHalfAngle);
        switch (order) {
            case 'xyz':
                newDst[0] = sx * cy * cz + cx * sy * sz;
                newDst[1] = cx * sy * cz - sx * cy * sz;
                newDst[2] = cx * cy * sz + sx * sy * cz;
                newDst[3] = cx * cy * cz - sx * sy * sz;
                break;
            case 'xzy':
                newDst[0] = sx * cy * cz - cx * sy * sz;
                newDst[1] = cx * sy * cz - sx * cy * sz;
                newDst[2] = cx * cy * sz + sx * sy * cz;
                newDst[3] = cx * cy * cz + sx * sy * sz;
                break;
            case 'yxz':
                newDst[0] = sx * cy * cz + cx * sy * sz;
                newDst[1] = cx * sy * cz - sx * cy * sz;
                newDst[2] = cx * cy * sz - sx * sy * cz;
                newDst[3] = cx * cy * cz + sx * sy * sz;
                break;
            case 'yzx':
                newDst[0] = sx * cy * cz + cx * sy * sz;
                newDst[1] = cx * sy * cz + sx * cy * sz;
                newDst[2] = cx * cy * sz - sx * sy * cz;
                newDst[3] = cx * cy * cz - sx * sy * sz;
                break;
            case 'zxy':
                newDst[0] = sx * cy * cz - cx * sy * sz;
                newDst[1] = cx * sy * cz + sx * cy * sz;
                newDst[2] = cx * cy * sz + sx * sy * cz;
                newDst[3] = cx * cy * cz - sx * sy * sz;
                break;
            case 'zyx':
                newDst[0] = sx * cy * cz - cx * sy * sz;
                newDst[1] = cx * sy * cz + sx * cy * sz;
                newDst[2] = cx * cy * sz - sx * sy * cz;
                newDst[3] = cx * cy * cz + sx * sy * sz;
                break;
            default:
                throw new Error(`Unknown rotation order: ${order}`);
        }
        return newDst;
    }
    /**
     * Copies a quaternion. (same as {@link quat.clone})
     * Also see {@link quat.create} and {@link quat.set}
     * @param q - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is a copy of q
     */
    function copy(q, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = q[0];
        newDst[1] = q[1];
        newDst[2] = q[2];
        newDst[3] = q[3];
        return newDst;
    }
    /**
     * Clones a quaternion. (same as {@link quat.copy})
     * Also see {@link quat.create} and {@link quat.set}
     * @param q - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A copy of q.
     */
    const clone = copy;
    /**
     * Adds two quaternions; assumes a and b have the same dimension.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        newDst[3] = a[3] + b[3];
        return newDst;
    }
    /**
     * Subtracts two quaternions.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        newDst[2] = a[2] - b[2];
        newDst[3] = a[3] - b[3];
        return newDst;
    }
    /**
     * Subtracts two quaternions.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Multiplies a quaternion by a scalar.
     * @param v - The quaternion.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        newDst[2] = v[2] * k;
        newDst[3] = v[3] * k;
        return newDst;
    }
    /**
     * Multiplies a quaternion by a scalar. (same as mulScalar)
     * @param v - The quaternion.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        newDst[2] = v[2] / k;
        newDst[3] = v[3] / k;
        return newDst;
    }
    /**
     * Computes the dot product of two quaternions
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns dot product
     */
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3]);
    }
    /**
     * Performs linear interpolation on two quaternions.
     * Given quaternions a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param t - Interpolation coefficient.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        newDst[2] = a[2] + t * (b[2] - a[2]);
        newDst[3] = a[3] + t * (b[3] - a[3]);
        return newDst;
    }
    /**
     * Computes the length of quaternion
     * @param v - quaternion.
     * @returns length of quaternion.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
    }
    /**
     * Computes the length of quaternion (same as length)
     * @param v - quaternion.
     * @returns length of quaternion.
     */
    const len = length;
    /**
     * Computes the square of the length of quaternion
     * @param v - quaternion.
     * @returns square of the length of quaternion.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3;
    }
    /**
     * Computes the square of the length of quaternion (same as lengthSq)
     * @param v - quaternion.
     * @returns square of the length of quaternion.
     */
    const lenSq = lengthSq;
    /**
     * Divides a quaternion by its Euclidean length and returns the quotient.
     * @param v - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The normalized quaternion.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        const len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
            newDst[2] = v2 / len;
            newDst[3] = v3 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
            newDst[3] = 0;
        }
        return newDst;
    }
    /**
     * Check if 2 quaternions are approximately equal
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns true if quaternions are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[3] - b[3]) < EPSILON;
    }
    /**
     * Check if 2 quaternions are exactly equal
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns true if quaternions are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Creates an identity quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns an identity quaternion
     */
    function identity(dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 1;
        return newDst;
    }
    const tempVec3 = vec3.create();
    const xUnitVec3 = vec3.create();
    const yUnitVec3 = vec3.create();
    /**
     * Computes a quaternion to represent the shortest rotation from one vector to another.
     *
     * @param aUnit - the start vector
     * @param bUnit - the end vector
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns the result
     */
    function rotationTo(aUnit, bUnit, dst) {
        const newDst = (dst ?? new Ctor(4));
        const dot = vec3.dot(aUnit, bUnit);
        if (dot < -0.999999) {
            vec3.cross(xUnitVec3, aUnit, tempVec3);
            if (vec3.len(tempVec3) < 0.000001) {
                vec3.cross(yUnitVec3, aUnit, tempVec3);
            }
            vec3.normalize(tempVec3, tempVec3);
            fromAxisAngle(tempVec3, Math.PI, newDst);
            return newDst;
        }
        else if (dot > 0.999999) {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
            newDst[3] = 1;
            return newDst;
        }
        else {
            vec3.cross(aUnit, bUnit, tempVec3);
            newDst[0] = tempVec3[0];
            newDst[1] = tempVec3[1];
            newDst[2] = tempVec3[2];
            newDst[3] = 1 + dot;
            return normalize(newDst, newDst);
        }
    }
    const tempQuat1 = new Ctor(4);
    const tempQuat2 = new Ctor(4);
    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param c - the third quaternion
     * @param d - the fourth quaternion
     * @param t - Interpolation coefficient 0 to 1
     * @returns result
     */
    function sqlerp(a, b, c, d, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        slerp(a, d, t, tempQuat1);
        slerp(b, c, t, tempQuat2);
        slerp(tempQuat1, tempQuat2, 2 * t * (1 - t), newDst);
        return newDst;
    }
    return {
        create,
        fromValues,
        set,
        fromAxisAngle,
        toAxisAngle,
        angle,
        multiply,
        mul,
        rotateX,
        rotateY,
        rotateZ,
        slerp,
        inverse,
        conjugate,
        fromMat,
        fromEuler,
        copy,
        clone,
        add,
        subtract,
        sub,
        mulScalar,
        scale,
        divScalar,
        dot,
        lerp,
        length,
        len,
        lengthSq,
        lenSq,
        normalize,
        equalsApproximately,
        equals,
        identity,
        rotationTo,
        sqlerp,
    };
}
const cache$1 = new Map();
/**
 *
 * Quat4 math functions.
 *
 * Almost all functions take an optional `newDst` argument. If it is not passed in the
 * functions will create a new `Quat4`. In other words you can do this
 *
 *     const v = quat4.cross(v1, v2);  // Creates a new Quat4 with the cross product of v1 x v2.
 *
 * or
 *
 *     const v = quat4.create();
 *     quat4.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always safe to pass any vector as the destination. So for example
 *
 *     quat4.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 */
function getAPI$1(Ctor) {
    let api = cache$1.get(Ctor);
    if (!api) {
        api = getAPIImpl$1(Ctor);
        cache$1.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Vec4
 * */
function getAPIImpl(Ctor) {
    /**
     * Creates a vec4; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param w - Initial w value.
     * @returns the created vector
     */
    function create(x, y, z, w) {
        const newDst = new Ctor(4);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
                if (z !== undefined) {
                    newDst[2] = z;
                    if (w !== undefined) {
                        newDst[3] = w;
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Creates a vec4; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param z - Initial w value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Vec4
     * Also see {@link vec4.create} and {@link vec4.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param w fourth value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, w, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = x;
        newDst[1] = y;
        newDst[2] = z;
        newDst[3] = w;
        return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.ceil(v[0]);
        newDst[1] = Math.ceil(v[1]);
        newDst[2] = Math.ceil(v[2]);
        newDst[3] = Math.ceil(v[3]);
        return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.floor(v[0]);
        newDst[1] = Math.floor(v[1]);
        newDst[2] = Math.floor(v[2]);
        newDst[3] = Math.floor(v[3]);
        return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.round(v[0]);
        newDst[1] = Math.round(v[1]);
        newDst[2] = Math.round(v[2]);
        newDst[3] = Math.round(v[3]);
        return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v, min = 0, max = 1, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.min(max, Math.max(min, v[0]));
        newDst[1] = Math.min(max, Math.max(min, v[1]));
        newDst[2] = Math.min(max, Math.max(min, v[2]));
        newDst[3] = Math.min(max, Math.max(min, v[3]));
        return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        newDst[3] = a[3] + b[3];
        return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + b[0] * scale;
        newDst[1] = a[1] + b[1] * scale;
        newDst[2] = a[2] + b[2] * scale;
        newDst[3] = a[3] + b[3] * scale;
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        newDst[2] = a[2] - b[2];
        newDst[3] = a[3] - b[3];
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[3] - b[3]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        newDst[2] = a[2] + t * (b[2] - a[2]);
        newDst[3] = a[3] + t * (b[3] - a[3]);
        return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + t[0] * (b[0] - a[0]);
        newDst[1] = a[1] + t[1] * (b[1] - a[1]);
        newDst[2] = a[2] + t[2] * (b[2] - a[2]);
        newDst[3] = a[3] + t[3] * (b[3] - a[3]);
        return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.max(a[0], b[0]);
        newDst[1] = Math.max(a[1], b[1]);
        newDst[2] = Math.max(a[2], b[2]);
        newDst[3] = Math.max(a[3], b[3]);
        return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.min(a[0], b[0]);
        newDst[1] = Math.min(a[1], b[1]);
        newDst[2] = Math.min(a[2], b[2]);
        newDst[3] = Math.min(a[3], b[3]);
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        newDst[2] = v[2] * k;
        newDst[3] = v[3] * k;
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        newDst[2] = v[2] / k;
        newDst[3] = v[3] / k;
        return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = 1 / v[0];
        newDst[1] = 1 / v[1];
        newDst[2] = 1 / v[2];
        newDst[3] = 1 / v[3];
        return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    const invert = inverse;
    /**
     * Computes the dot product of two vectors
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3]);
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    const len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    const lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        const dw = a[3] - b[3];
        return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    const dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        const dw = a[3] - b[3];
        return dx * dx + dy * dy + dz * dz + dw * dw;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    const distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        const len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
            newDst[2] = v2 / len;
            newDst[3] = v3 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
            newDst[3] = 0;
        }
        return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = -v[0];
        newDst[1] = -v[1];
        newDst[2] = -v[2];
        newDst[3] = -v[3];
        return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec4.clone})
     * Also see {@link vec4.create} and {@link vec4.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0];
        newDst[1] = v[1];
        newDst[2] = v[2];
        newDst[3] = v[3];
        return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec4.copy})
     * Also see {@link vec4.create} and {@link vec4.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    const clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] * b[0];
        newDst[1] = a[1] * b[1];
        newDst[2] = a[2] * b[2];
        newDst[3] = a[3] * b[3];
        return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    const mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] / b[0];
        newDst[1] = a[1] / b[1];
        newDst[2] = a[2] / b[2];
        newDst[3] = a[3] / b[3];
        return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    const div = divide;
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        return newDst;
    }
    /**
     * transform vec4 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec4 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
        const newDst = (dst ?? new Ctor(4));
        const x = v[0];
        const y = v[1];
        const z = v[2];
        const w = v[3];
        newDst[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        newDst[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        newDst[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        newDst[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return newDst;
    }
    /**
     * Treat a 4D vector as a direction and set it's length
     *
     * @param a The vec4 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
        const newDst = (dst ?? new Ctor(4));
        normalize(a, newDst);
        return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec4 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
        const newDst = (dst ?? new Ctor(4));
        if (length(a) > maxLen) {
            return setLength(a, maxLen, newDst);
        }
        return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        return lerp(a, b, 0.5, newDst);
    }
    return {
        create,
        fromValues,
        set,
        ceil,
        floor,
        round,
        clamp,
        add,
        addScaled,
        subtract,
        sub,
        equalsApproximately,
        equals,
        lerp,
        lerpV,
        max,
        min,
        mulScalar,
        scale,
        divScalar,
        inverse,
        invert,
        dot,
        length,
        len,
        lengthSq,
        lenSq,
        distance,
        dist,
        distanceSq,
        distSq,
        normalize,
        negate,
        copy,
        clone,
        multiply,
        mul,
        divide,
        div,
        zero,
        transformMat4,
        setLength,
        truncate,
        midpoint,
    };
}
const cache = new Map();
/**
 *
 * Vec4 math functions.
 *
 * Almost all functions take an optional `newDst` argument. If it is not passed in the
 * functions will create a new `Vec4`. In other words you can do this
 *
 *     const v = vec4.cross(v1, v2);  // Creates a new Vec4 with the cross product of v1 x v2.
 *
 * or
 *
 *     const v = vec4.create();
 *     vec4.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always safe to pass any vector as the destination. So for example
 *
 *     vec4.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 */
function getAPI(Ctor) {
    let api = cache.get(Ctor);
    if (!api) {
        api = getAPIImpl(Ctor);
        cache.set(Ctor, api);
    }
    return api;
}

/**
 * Generate wgpu-matrix API for type
 */
function wgpuMatrixAPI(Mat3Ctor, Mat4Ctor, QuatCtor, Vec2Ctor, Vec3Ctor, Vec4Ctor) {
    return {
        /** @namespace mat4 */
        mat4: getAPI$2(Mat3Ctor),
        /** @namespace mat3 */
        mat3: getAPI$4(Mat4Ctor),
        /** @namespace quat */
        quat: getAPI$1(QuatCtor),
        /** @namespace vec2 */
        vec2: getAPI$5(Vec2Ctor),
        /** @namespace vec3 */
        vec3: getAPI$3(Vec3Ctor),
        /** @namespace vec4 */
        vec4: getAPI(Vec4Ctor),
    };
}
const { 
/** @namespace */
mat4, 
/** @namespace */
mat3, 
/** @namespace */
quat, 
/** @namespace */
vec2, 
/** @namespace */
vec3, 
/** @namespace */
vec4, } = wgpuMatrixAPI(Float32Array, Float32Array, Float32Array, Float32Array, Float32Array, Float32Array);
wgpuMatrixAPI(Float64Array, Float64Array, Float64Array, Float64Array, Float64Array, Float64Array);
wgpuMatrixAPI(ZeroArray, Array, Array, Array, Array, Array);

/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function () {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function () {
      dom.addClass(this, 'drag').bind(window, 'touchend', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame$1(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame$1;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller, {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}
var GUI$1 = GUI;

// from github.com/hughsk/stanford-dragon
var dragonRawData = {
    cells: [[5, 0, 2], [0, 1, 2], [0, 3, 1], [10, 2, 9], [10, 11, 2], [11, 8, 2], [4, 0, 5], [1, 3, 6], [4, 5, 2], [8, 7, 2], [13, 12, 8], [11, 13, 8], [10, 13, 11], [3, 0, 4], [2, 7, 4], [10, 9, 13], [12, 7, 8], [6, 7, 1], [1, 7, 2], [7, 9, 2], [4, 7, 14], [12, 14, 7], [9, 7, 6], [4, 6, 3], [18, 17, 16], [15, 9, 6], [20, 21, 18], [18, 21, 22], [16, 15, 18], [15, 20, 18], [19, 15, 16], [15, 19, 9], [23, 17, 18], [25, 21, 20], [6, 4, 24], [12, 26, 14], [15, 29, 30], [33, 16, 17], [26, 14, 12], [26, 12, 14], [27, 6, 24], [28, 12, 13], [15, 27, 29], [6, 27, 15], [15, 30, 20], [9, 28, 13], [9, 31, 28], [32, 21, 25], [22, 21, 32], [33, 9, 19], [16, 33, 19], [34, 35, 23], [18, 34, 23], [36, 17, 23], [36, 23, 35], [26, 12, 28], [25, 20, 30], [31, 9, 33], [32, 18, 22], [18, 32, 34], [17, 36, 33], [24, 14, 26], [24, 4, 14], [37, 28, 31], [38, 39, 40], [43, 26, 28], [43, 28, 37], [40, 39, 45], [41, 46, 42], [27, 24, 29], [30, 32, 25], [33, 37, 31], [36, 44, 33], [32, 30, 34], [36, 35, 52], [52, 35, 51], [85, 49, 48], [45, 39, 53], [24, 26, 55], [43, 55, 26], [30, 29, 58], [30, 60, 34], [37, 59, 43], [59, 57, 43], [32, 60, 34], [32, 34, 60], [60, 32, 34], [61, 37, 33], [60, 35, 34], [61, 33, 44], [52, 51, 62], [64, 63, 48], [65, 63, 48], [63, 64, 48], [65, 48, 49], [69, 68, 38], [38, 68, 39], [39, 50, 53], [45, 70, 40], [45, 71, 70], [74, 73, 41], [42, 74, 41], [47, 74, 41], [74, 42, 46], [74, 46, 41], [77, 76, 79], [79, 76, 78], [78, 82, 81], [79, 78, 81], [80, 79, 81], [24, 55, 54], [43, 57, 55], [60, 30, 58], [60, 34, 32], [33, 98, 37], [44, 36, 61], [36, 52, 83], [84, 48, 63], [85, 48, 84], [63, 65, 64], [86, 50, 66], [50, 86, 67], [50, 39, 87], [53, 50, 88], [53, 88, 89], [71, 45, 53], [89, 90, 53], [53, 90, 72], [47, 73, 72], [47, 41, 73], [74, 47, 75], [78, 76, 91], [91, 92, 78], [82, 92, 93], [78, 92, 82], [77, 79, 80], [81, 82, 95], [95, 82, 93], [94, 96, 97], [94, 80, 96], [81, 95, 104], [56, 29, 24], [33, 37, 98], [109, 110, 51], [85, 84, 99], [100, 49, 99], [99, 49, 85], [66, 101, 86], [87, 66, 50], [67, 88, 50], [69, 40, 70], [38, 40, 69], [88, 102, 89], [93, 82, 95], [82, 93, 95], [104, 95, 93], [97, 96, 105], [81, 105, 80], [96, 80, 105], [97, 105, 106], [105, 81, 104], [94, 97, 106], [56, 58, 29], [98, 37, 61], [35, 108, 109], [109, 51, 35], [62, 51, 110], [64, 65, 63], [65, 49, 100], [67, 86, 101], [68, 87, 39], [89, 102, 90], [90, 47, 72], [47, 111, 75], [91, 76, 115], [103, 92, 91], [92, 103, 93], [112, 77, 80], [112, 80, 94], [104, 93, 113], [60, 58, 120], [98, 59, 37], [122, 36, 83], [47, 90, 111], [116, 94, 106], [107, 106, 105], [107, 105, 118], [107, 119, 106], [60, 108, 35], [121, 98, 61], [36, 122, 61], [62, 83, 52], [65, 100, 63], [73, 71, 72], [72, 71, 53], [123, 93, 103], [56, 24, 54], [125, 117, 124], [107, 126, 119], [107, 127, 126], [109, 128, 110], [130, 101, 66], [102, 67, 132], [102, 88, 67], [102, 114, 133], [102, 133, 90], [135, 125, 124], [56, 54, 55], [123, 137, 93], [124, 117, 136], [116, 106, 119], [59, 98, 121], [118, 127, 107], [128, 109, 138], [122, 83, 61], [99, 84, 129], [99, 129, 130], [131, 101, 130], [101, 131, 132], [115, 76, 139], [139, 76, 77], [123, 140, 134], [123, 103, 140], [136, 141, 124], [134, 142, 137], [123, 134, 137], [137, 113, 93], [117, 143, 144], [117, 125, 143], [66, 99, 130], [132, 131, 146], [67, 101, 132], [146, 114, 132], [69, 71, 68], [70, 71, 69], [114, 102, 132], [159, 56, 55], [118, 105, 147], [145, 59, 121], [214, 115, 186], [482, 186, 611], [186, 115, 139], [134, 149, 150], [158, 94, 116], [55, 57, 160], [142, 134, 150], [104, 147, 105], [164, 144, 143], [148, 127, 147], [127, 118, 147], [61, 83, 151], [177, 66, 87], [112, 154, 77], [140, 157, 134], [160, 159, 55], [136, 161, 141], [136, 141, 161], [194, 117, 144], [59, 166, 165], [147, 168, 148], [138, 172, 128], [171, 61, 151], [110, 173, 62], [129, 84, 236], [176, 63, 100], [100, 99, 176], [209, 180, 152], [133, 111, 90], [183, 182, 181], [186, 139, 153], [153, 139, 77], [155, 157, 103], [157, 140, 103], [154, 112, 156], [134, 157, 149], [135, 190, 188], [188, 190, 189], [136, 191, 141], [162, 160, 57], [193, 58, 56], [193, 197, 58], [162, 57, 59], [117, 194, 136], [142, 224, 195], [196, 113, 137], [104, 113, 196], [104, 196, 147], [119, 220, 116], [120, 58, 197], [125, 163, 143], [163, 164, 143], [120, 167, 60], [200, 227, 145], [200, 229, 227], [169, 145, 121], [168, 127, 148], [151, 83, 201], [110, 232, 173], [62, 201, 83], [205, 131, 204], [99, 66, 87], [114, 178, 179], [133, 209, 152], [208, 209, 133], [133, 152, 111], [209, 208, 180], [213, 183, 184], [185, 213, 184], [214, 155, 91], [77, 154, 153], [77, 156, 154], [154, 156, 77], [215, 149, 157], [156, 94, 187], [156, 112, 94], [216, 124, 191], [191, 124, 141], [135, 188, 125], [125, 188, 192], [161, 191, 136], [219, 116, 220], [158, 116, 219], [159, 160, 56], [136, 221, 161], [162, 57, 222], [222, 57, 162], [166, 222, 162], [136, 194, 223], [136, 223, 221], [166, 162, 59], [137, 142, 195], [137, 195, 196], [164, 194, 144], [59, 165, 166], [225, 168, 147], [226, 119, 126], [167, 199, 60], [59, 145, 227], [60, 199, 108], [145, 227, 200], [145, 200, 227], [145, 200, 227], [145, 227, 200], [230, 198, 126], [228, 170, 138], [228, 138, 109], [145, 229, 200], [126, 127, 231], [231, 127, 168], [138, 170, 172], [171, 121, 61], [110, 128, 232], [234, 129, 233], [235, 129, 234], [175, 233, 129], [129, 233, 175], [84, 174, 236], [174, 84, 63], [130, 129, 175], [130, 175, 202], [100, 174, 63], [202, 235, 203], [130, 202, 203], [176, 100, 63], [131, 203, 204], [131, 130, 203], [87, 176, 99], [87, 66, 177], [178, 131, 205], [177, 87, 68], [178, 114, 146], [247, 68, 71], [114, 179, 206], [206, 239, 114], [239, 133, 114], [71, 73, 207], [133, 240, 208], [241, 207, 73], [208, 240, 180], [241, 74, 75], [241, 73, 74], [210, 111, 152], [211, 111, 210], [211, 242, 111], [242, 75, 111], [243, 212, 181], [181, 243, 182], [243, 181, 182], [181, 212, 183], [183, 185, 184], [155, 103, 91], [135, 124, 216], [187, 94, 158], [218, 150, 244], [246, 150, 218], [142, 150, 246], [224, 142, 246], [163, 125, 192], [59, 227, 166], [226, 126, 198], [108, 199, 109], [227, 229, 200], [229, 145, 169], [121, 171, 169], [175, 233, 129], [175, 129, 236], [235, 202, 175], [205, 237, 178], [238, 68, 247], [152, 180, 210], [183, 212, 182], [183, 182, 185], [149, 244, 150], [149, 217, 244], [244, 245, 218], [245, 254, 248], [248, 218, 245], [246, 218, 248], [196, 195, 249], [196, 249, 250], [196, 225, 147], [126, 231, 230], [232, 128, 172], [129, 235, 175], [205, 204, 237], [177, 68, 238], [178, 206, 179], [213, 182, 183], [214, 91, 115], [149, 215, 217], [254, 255, 248], [195, 224, 249], [250, 225, 196], [226, 256, 119], [224, 257, 258], [249, 224, 258], [199, 228, 109], [198, 230, 226], [229, 227, 200], [259, 260, 257], [257, 260, 261], [230, 262, 251], [251, 226, 230], [252, 262, 268], [263, 264, 266], [260, 263, 267], [264, 265, 266], [251, 262, 252], [267, 263, 266], [252, 268, 269], [270, 252, 269], [269, 271, 270], [204, 203, 235], [237, 204, 272], [176, 87, 177], [146, 131, 178], [206, 273, 240], [240, 239, 206], [240, 133, 239], [275, 182, 213], [275, 213, 274], [245, 244, 254], [120, 197, 167], [259, 276, 263], [260, 259, 263], [171, 151, 201], [201, 171, 83], [171, 201, 83], [201, 62, 173], [265, 277, 266], [178, 373, 280], [310, 247, 71], [206, 280, 273], [212, 243, 253], [182, 243, 181], [244, 217, 215], [254, 244, 281], [191, 161, 221], [189, 192, 188], [223, 282, 221], [220, 119, 256], [250, 168, 225], [226, 283, 256], [249, 284, 250], [257, 246, 259], [258, 284, 249], [283, 226, 285], [261, 258, 257], [226, 286, 285], [170, 232, 172], [169, 171, 287], [263, 276, 264], [286, 226, 251], [265, 289, 277], [291, 317, 293], [278, 277, 289], [292, 291, 293], [277, 290, 266], [294, 271, 269], [298, 300, 295], [300, 298, 295], [296, 300, 299], [304, 299, 300], [299, 304, 301], [301, 305, 302], [304, 305, 301], [306, 302, 305], [300, 303, 304], [234, 279, 235], [204, 307, 272], [204, 235, 307], [178, 237, 308], [206, 178, 280], [241, 75, 242], [180, 240, 273], [243, 311, 253], [275, 243, 182], [213, 185, 182], [135, 216, 190], [187, 158, 219], [56, 160, 193], [312, 221, 282], [254, 313, 255], [246, 257, 224], [264, 276, 315], [169, 287, 229], [265, 264, 289], [286, 251, 252], [267, 316, 260], [316, 261, 260], [319, 266, 290], [266, 319, 267], [292, 322, 323], [292, 293, 322], [329, 327, 326], [329, 326, 328], [327, 329, 330], [295, 330, 329], [296, 331, 330], [329, 297, 295], [332, 296, 299], [295, 335, 298], [295, 297, 335], [295, 298, 296], [334, 332, 299], [334, 299, 301], [369, 337, 338], [296, 298, 300], [298, 339, 300], [302, 306, 337], [306, 340, 337], [341, 305, 304], [306, 305, 341], [342, 306, 341], [235, 279, 307], [236, 174, 100], [238, 247, 309], [247, 310, 309], [310, 71, 207], [310, 207, 241], [210, 180, 275], [482, 214, 186], [186, 153, 483], [190, 192, 189], [255, 313, 314], [346, 289, 264], [286, 252, 288], [292, 318, 291], [270, 288, 252], [293, 317, 347], [318, 292, 348], [349, 320, 278], [277, 278, 320], [277, 320, 321], [352, 350, 351], [353, 352, 351], [352, 353, 324], [352, 324, 322], [355, 324, 353], [359, 357, 355], [355, 358, 359], [325, 363, 364], [327, 397, 325], [326, 325, 364], [325, 326, 327], [365, 327, 330], [326, 366, 328], [295, 296, 330], [329, 328, 367], [297, 329, 367], [368, 331, 296], [368, 296, 332], [334, 302, 336], [369, 333, 337], [334, 301, 302], [333, 302, 337], [298, 335, 339], [337, 340, 370], [303, 300, 339], [372, 306, 342], [371, 304, 303], [371, 343, 304], [341, 304, 343], [236, 100, 176], [478, 236, 176], [484, 486, 155], [193, 344, 197], [248, 259, 246], [248, 276, 259], [170, 228, 232], [258, 261, 345], [375, 201, 173], [375, 347, 201], [171, 291, 287], [317, 171, 347], [289, 349, 278], [347, 375, 376], [375, 350, 376], [376, 350, 352], [290, 277, 321], [413, 348, 323], [323, 348, 292], [320, 349, 377], [322, 376, 352], [351, 378, 353], [355, 379, 324], [356, 355, 353], [359, 358, 381], [359, 381, 382], [359, 382, 380], [384, 383, 382], [383, 384, 385], [360, 388, 386], [387, 389, 386], [386, 389, 390], [360, 386, 390], [361, 360, 362], [360, 390, 362], [391, 428, 361], [426, 427, 392], [426, 392, 393], [325, 361, 363], [391, 361, 325], [361, 362, 394], [363, 361, 394], [397, 391, 325], [396, 395, 399], [395, 398, 399], [394, 400, 364], [364, 363, 394], [366, 326, 364], [331, 401, 330], [398, 430, 402], [367, 328, 366], [403, 333, 369], [402, 369, 405], [367, 366, 404], [302, 333, 336], [369, 338, 405], [297, 367, 407], [406, 405, 338], [337, 370, 338], [339, 335, 408], [371, 303, 339], [340, 306, 372], [178, 308, 373], [409, 180, 273], [212, 253, 243], [611, 186, 483], [244, 215, 410], [374, 191, 221], [493, 374, 221], [313, 312, 314], [168, 250, 284], [171, 317, 291], [171, 201, 347], [411, 291, 318], [287, 291, 411], [289, 412, 349], [293, 347, 376], [376, 322, 293], [379, 355, 357], [355, 356, 414], [355, 414, 358], [383, 380, 382], [418, 415, 416], [416, 417, 419], [418, 416, 420], [386, 418, 420], [386, 420, 387], [422, 418, 386], [388, 422, 386], [424, 385, 423], [384, 423, 385], [425, 424, 426], [426, 424, 427], [360, 361, 428], [390, 389, 362], [396, 392, 395], [396, 393, 392], [466, 396, 399], [366, 400, 468], [401, 365, 330], [402, 430, 403], [366, 364, 400], [399, 398, 402], [399, 402, 431], [403, 369, 402], [432, 333, 403], [368, 332, 334], [297, 407, 335], [370, 406, 338], [370, 340, 372], [557, 177, 238], [155, 214, 569], [487, 410, 215], [190, 216, 490], [490, 216, 492], [191, 374, 492], [493, 492, 374], [494, 192, 190], [496, 221, 312], [222, 499, 162], [437, 500, 222], [192, 436, 163], [312, 282, 314], [222, 166, 437], [194, 507, 223], [276, 248, 255], [276, 255, 315], [508, 228, 199], [440, 284, 258], [258, 345, 512], [510, 229, 411], [375, 173, 232], [514, 289, 346], [350, 375, 442], [442, 443, 350], [350, 443, 445], [351, 350, 445], [294, 520, 271], [413, 323, 446], [378, 351, 445], [356, 353, 378], [359, 380, 357], [530, 529, 451], [450, 530, 451], [450, 451, 416], [381, 358, 452], [453, 380, 383], [451, 417, 416], [453, 380, 383], [384, 382, 381], [415, 422, 455], [384, 381, 454], [421, 383, 385], [453, 383, 421], [416, 419, 420], [415, 418, 422], [387, 420, 419], [456, 387, 419], [421, 385, 424], [421, 424, 425], [389, 387, 456], [457, 424, 423], [458, 425, 426], [424, 457, 427], [458, 426, 393], [362, 389, 429], [392, 427, 457], [459, 458, 393], [391, 397, 460], [429, 462, 362], [394, 362, 462], [397, 365, 465], [396, 466, 464], [397, 327, 365], [430, 395, 463], [395, 430, 398], [432, 403, 467], [430, 467, 403], [432, 471, 336], [432, 336, 333], [402, 405, 433], [402, 433, 431], [470, 334, 336], [367, 404, 407], [433, 405, 406], [406, 370, 473], [279, 475, 307], [477, 474, 175], [548, 372, 603], [236, 477, 175], [551, 343, 550], [555, 434, 272], [557, 238, 309], [309, 238, 557], [480, 273, 280], [480, 280, 479], [562, 242, 211], [275, 180, 409], [409, 311, 243], [275, 409, 243], [212, 568, 182], [483, 153, 154], [156, 485, 154], [486, 157, 155], [488, 244, 410], [489, 187, 491], [491, 187, 219], [254, 281, 313], [219, 220, 495], [498, 160, 162], [498, 435, 160], [499, 222, 500], [222, 501, 500], [435, 193, 160], [160, 193, 435], [222, 500, 501], [503, 501, 500], [256, 495, 220], [160, 502, 193], [502, 344, 193], [503, 500, 437], [504, 256, 283], [197, 344, 438], [163, 436, 164], [504, 256, 283], [504, 283, 256], [197, 438, 167], [506, 507, 194], [314, 282, 511], [439, 504, 283], [439, 283, 285], [505, 199, 167], [168, 441, 231], [227, 229, 510], [509, 227, 510], [511, 346, 315], [346, 264, 315], [262, 230, 441], [231, 441, 230], [229, 287, 411], [513, 411, 318], [375, 232, 442], [412, 289, 514], [267, 316, 515], [316, 267, 515], [288, 270, 444], [517, 444, 270], [444, 271, 521], [290, 518, 519], [516, 520, 269], [321, 518, 290], [520, 294, 269], [520, 294, 271], [320, 524, 321], [525, 271, 294], [323, 322, 324], [378, 445, 527], [525, 354, 271], [323, 324, 379], [271, 354, 447], [448, 356, 378], [379, 357, 449], [449, 357, 380], [529, 528, 531], [451, 529, 531], [532, 414, 356], [533, 450, 415], [452, 358, 414], [380, 453, 579], [417, 531, 534], [417, 451, 531], [415, 450, 416], [383, 380, 453], [453, 383, 380], [383, 453, 380], [384, 454, 423], [537, 535, 428], [388, 360, 537], [535, 537, 428], [360, 428, 537], [425, 458, 536], [456, 538, 389], [460, 428, 391], [392, 457, 461], [393, 396, 459], [395, 392, 461], [395, 461, 463], [459, 396, 464], [541, 465, 365], [399, 431, 469], [399, 469, 466], [542, 368, 470], [544, 545, 433], [544, 433, 406], [407, 472, 335], [335, 472, 408], [234, 233, 474], [408, 476, 339], [602, 476, 408], [307, 475, 279], [474, 233, 175], [370, 372, 548], [371, 339, 476], [371, 476, 339], [307, 279, 549], [476, 371, 339], [339, 476, 371], [476, 339, 371], [434, 555, 272], [176, 556, 478], [556, 176, 177], [177, 557, 556], [309, 557, 238], [309, 310, 558], [559, 479, 280], [560, 273, 480], [241, 481, 561], [481, 241, 242], [211, 242, 562], [564, 311, 563], [565, 311, 564], [253, 311, 565], [243, 253, 566], [182, 275, 213], [274, 213, 275], [567, 568, 212], [156, 187, 489], [612, 281, 244], [216, 191, 492], [499, 498, 162], [497, 312, 313], [438, 505, 167], [511, 282, 614], [613, 614, 282], [613, 282, 223], [284, 440, 168], [512, 345, 261], [570, 571, 346], [616, 286, 288], [346, 571, 514], [516, 269, 268], [515, 267, 319], [517, 270, 444], [444, 270, 271], [348, 413, 573], [523, 518, 321], [351, 445, 526], [445, 351, 526], [445, 526, 527], [529, 574, 528], [356, 448, 576], [533, 578, 450], [578, 530, 450], [414, 582, 452], [533, 415, 581], [531, 580, 534], [455, 584, 415], [453, 421, 583], [534, 585, 417], [454, 381, 587], [585, 419, 417], [455, 422, 586], [585, 588, 419], [456, 419, 590], [423, 454, 591], [425, 536, 421], [589, 421, 536], [535, 388, 537], [590, 592, 456], [592, 538, 456], [593, 457, 423], [535, 537, 428], [389, 538, 592], [428, 460, 594], [389, 595, 429], [457, 593, 539], [461, 457, 539], [462, 429, 597], [463, 461, 540], [394, 462, 400], [598, 401, 331], [599, 466, 469], [643, 471, 432], [470, 368, 334], [470, 336, 471], [404, 366, 468], [469, 431, 600], [601, 404, 468], [600, 431, 433], [407, 404, 546], [544, 406, 473], [408, 472, 547], [279, 234, 475], [370, 548, 603], [604, 371, 476], [343, 371, 606], [341, 552, 342], [372, 342, 554], [607, 372, 554], [651, 236, 478], [343, 606, 550], [341, 343, 551], [341, 551, 552], [554, 342, 553], [272, 307, 434], [308, 272, 434], [308, 237, 272], [608, 373, 308], [557, 309, 652], [481, 242, 211], [563, 609, 564], [569, 214, 482], [569, 482, 610], [154, 485, 483], [215, 157, 487], [157, 486, 487], [495, 256, 504], [166, 503, 437], [505, 508, 199], [315, 255, 314], [315, 314, 511], [285, 286, 616], [615, 232, 228], [615, 618, 232], [268, 262, 617], [349, 412, 514], [516, 268, 617], [443, 442, 572], [517, 444, 521], [413, 446, 573], [621, 377, 349], [621, 522, 377], [623, 518, 523], [320, 377, 627], [524, 523, 321], [521, 271, 626], [622, 521, 626], [447, 626, 271], [575, 624, 622], [575, 622, 626], [378, 526, 628], [378, 527, 526], [379, 625, 323], [629, 574, 529], [574, 629, 575], [574, 575, 631], [629, 529, 630], [530, 630, 529], [379, 449, 577], [448, 378, 576], [660, 530, 578], [449, 380, 577], [581, 632, 533], [583, 579, 453], [581, 415, 584], [381, 452, 582], [455, 586, 584], [580, 588, 534], [583, 421, 589], [588, 585, 534], [419, 588, 664], [634, 423, 591], [536, 458, 633], [635, 633, 458], [458, 459, 636], [595, 389, 592], [461, 539, 540], [636, 459, 464], [400, 462, 640], [638, 541, 365], [639, 637, 464], [430, 540, 641], [401, 638, 365], [639, 464, 466], [430, 641, 467], [598, 331, 368], [432, 467, 641], [640, 642, 400], [642, 468, 400], [643, 542, 470], [468, 644, 601], [543, 404, 601], [546, 404, 543], [407, 546, 645], [407, 646, 472], [545, 544, 647], [544, 473, 647], [650, 473, 370], [683, 372, 607], [434, 307, 605], [371, 670, 606], [608, 559, 373], [559, 280, 373], [560, 480, 273], [409, 273, 653], [562, 481, 211], [655, 654, 275], [212, 243, 566], [275, 182, 655], [488, 410, 487], [312, 497, 496], [500, 501, 499], [508, 505, 656], [570, 346, 511], [615, 228, 657], [513, 510, 411], [618, 442, 232], [316, 512, 261], [444, 619, 288], [318, 348, 659], [675, 267, 515], [316, 267, 675], [526, 445, 443], [526, 443, 572], [517, 521, 622], [377, 522, 627], [320, 627, 524], [676, 575, 629], [575, 626, 631], [528, 574, 631], [660, 630, 530], [631, 661, 531], [528, 631, 531], [356, 576, 532], [577, 380, 579], [580, 531, 662], [586, 422, 663], [590, 419, 664], [422, 388, 663], [388, 535, 663], [635, 458, 665], [594, 460, 596], [665, 458, 636], [460, 397, 666], [397, 465, 666], [636, 464, 637], [597, 640, 462], [430, 463, 540], [639, 599, 680], [598, 368, 542], [643, 470, 471], [644, 468, 642], [599, 469, 600], [645, 546, 543], [433, 545, 600], [669, 649, 475], [669, 668, 649], [407, 645, 646], [473, 648, 647], [646, 547, 472], [279, 475, 649], [602, 408, 547], [650, 370, 603], [549, 605, 307], [476, 602, 604], [670, 371, 671], [555, 434, 605], [684, 434, 555], [309, 558, 652], [310, 241, 561], [563, 653, 480], [653, 273, 480], [563, 311, 653], [409, 653, 311], [672, 562, 211], [210, 672, 211], [654, 210, 275], [182, 568, 655], [156, 689, 485], [503, 227, 509], [440, 258, 512], [439, 285, 616], [657, 697, 615], [619, 616, 288], [442, 618, 674], [442, 674, 572], [620, 349, 514], [572, 674, 704], [621, 349, 620], [519, 319, 290], [624, 705, 517], [624, 517, 622], [518, 623, 519], [625, 446, 323], [676, 624, 575], [676, 629, 630], [677, 379, 577], [576, 378, 628], [631, 626, 447], [448, 713, 576], [533, 632, 578], [678, 632, 581], [581, 584, 678], [414, 532, 582], [587, 381, 582], [718, 588, 580], [454, 587, 591], [589, 536, 633], [633, 665, 719], [590, 664, 592], [635, 665, 633], [593, 722, 539], [429, 595, 597], [679, 597, 595], [541, 666, 465], [667, 401, 598], [639, 466, 599], [725, 598, 542], [432, 641, 643], [681, 600, 545], [605, 549, 649], [649, 549, 279], [648, 473, 650], [651, 477, 236], [549, 307, 605], [603, 372, 683], [608, 308, 684], [562, 731, 481], [612, 244, 488], [740, 497, 313], [491, 219, 495], [690, 494, 190], [192, 494, 436], [160, 435, 502], [436, 693, 164], [502, 438, 344], [164, 506, 194], [223, 507, 694], [166, 227, 503], [613, 223, 694], [613, 694, 614], [656, 657, 508], [440, 695, 168], [508, 657, 228], [441, 168, 695], [440, 512, 733], [571, 570, 511], [441, 696, 262], [698, 262, 696], [262, 698, 617], [700, 616, 619], [316, 658, 512], [699, 617, 698], [673, 513, 318], [673, 318, 659], [699, 701, 617], [316, 675, 703], [517, 700, 619], [515, 703, 675], [516, 617, 701], [619, 444, 517], [659, 348, 702], [702, 348, 573], [515, 319, 519], [572, 704, 526], [706, 526, 704], [446, 702, 573], [734, 705, 676], [705, 624, 676], [294, 520, 525], [709, 523, 524], [707, 676, 630], [526, 708, 628], [525, 520, 354], [520, 710, 354], [354, 710, 447], [447, 712, 631], [712, 447, 626], [631, 712, 626], [576, 628, 713], [631, 626, 712], [448, 576, 713], [577, 579, 714], [579, 583, 716], [662, 531, 661], [583, 589, 716], [580, 662, 718], [584, 586, 663], [717, 587, 582], [535, 428, 720], [428, 594, 720], [664, 721, 592], [423, 591, 722], [593, 423, 722], [460, 666, 596], [540, 723, 724], [638, 401, 667], [641, 726, 643], [545, 647, 681], [649, 668, 682], [474, 475, 234], [646, 728, 547], [647, 648, 650], [649, 682, 605], [474, 477, 651], [307, 549, 605], [604, 729, 670], [603, 683, 730], [371, 604, 670], [730, 683, 607], [671, 371, 670], [342, 552, 554], [308, 434, 684], [556, 557, 652], [561, 558, 310], [480, 479, 559], [731, 558, 561], [731, 561, 481], [732, 609, 480], [480, 609, 563], [654, 672, 210], [566, 253, 565], [567, 212, 566], [685, 687, 686], [688, 686, 687], [482, 611, 483], [484, 155, 569], [484, 569, 610], [689, 156, 489], [190, 490, 690], [740, 313, 281], [221, 496, 691], [435, 692, 502], [506, 164, 693], [674, 615, 697], [618, 615, 674], [658, 316, 703], [700, 517, 705], [519, 623, 515], [522, 621, 627], [625, 379, 677], [446, 625, 677], [626, 447, 712], [711, 660, 578], [711, 630, 660], [632, 678, 578], [532, 576, 715], [582, 532, 715], [750, 584, 663], [539, 722, 723], [540, 539, 723], [463, 540, 724], [540, 463, 724], [641, 540, 724], [542, 643, 725], [599, 600, 680], [680, 600, 735], [645, 601, 736], [543, 601, 645], [646, 645, 727], [602, 547, 728], [554, 553, 342], [565, 564, 609], [567, 655, 568], [687, 685, 738], [493, 221, 691], [501, 742, 741], [739, 494, 690], [741, 499, 501], [697, 657, 743], [571, 511, 614], [509, 510, 513], [509, 513, 673], [620, 514, 744], [745, 516, 701], [516, 745, 520], [708, 526, 706], [707, 630, 711], [747, 578, 678], [661, 631, 712], [589, 633, 719], [423, 634, 591], [592, 721, 595], [751, 640, 597], [751, 597, 679], [820, 640, 751], [725, 643, 726], [727, 645, 736], [681, 647, 752], [474, 651, 753], [754, 647, 650], [606, 670, 550], [552, 551, 550], [737, 559, 608], [559, 737, 762], [480, 559, 732], [566, 655, 567], [756, 757, 685], [756, 755, 757], [281, 612, 740], [491, 495, 489], [441, 759, 696], [699, 698, 696], [746, 627, 621], [708, 706, 628], [661, 712, 748], [579, 716, 749], [664, 588, 718], [761, 595, 721], [594, 596, 666], [638, 667, 598], [601, 644, 642], [669, 475, 474], [732, 559, 762], [686, 688, 758], [765, 764, 505], [438, 765, 505], [436, 779, 782], [512, 658, 789], [766, 700, 705], [767, 734, 707], [734, 676, 707], [623, 523, 799], [714, 677, 577], [715, 809, 582], [810, 582, 809], [587, 717, 812], [760, 589, 719], [816, 594, 666], [637, 639, 769], [818, 641, 724], [819, 598, 725], [681, 735, 600], [771, 669, 474], [772, 757, 755], [772, 755, 757], [756, 685, 686], [773, 482, 483], [485, 773, 483], [871, 485, 489], [488, 487, 763], [776, 493, 691], [844, 489, 495], [501, 777, 742], [764, 656, 505], [501, 503, 777], [436, 494, 779], [439, 783, 504], [693, 785, 506], [657, 784, 743], [694, 507, 506], [733, 786, 440], [733, 440, 786], [695, 759, 441], [512, 786, 733], [514, 571, 848], [787, 616, 700], [704, 674, 791], [705, 734, 766], [704, 794, 706], [796, 446, 798], [523, 709, 799], [707, 711, 800], [708, 628, 706], [447, 710, 804], [708, 805, 628], [524, 627, 806], [712, 447, 804], [579, 749, 807], [808, 678, 584], [808, 584, 750], [809, 812, 717], [750, 663, 811], [720, 594, 815], [636, 637, 768], [768, 637, 769], [858, 638, 598], [640, 820, 642], [770, 680, 821], [770, 639, 680], [601, 642, 822], [824, 669, 771], [825, 824, 771], [682, 668, 827], [861, 771, 474], [828, 605, 682], [650, 830, 754], [829, 555, 605], [831, 604, 602], [729, 604, 831], [603, 730, 832], [835, 478, 556], [835, 834, 478], [555, 836, 684], [608, 684, 836], [837, 556, 652], [654, 655, 841], [772, 757, 755], [686, 758, 687], [687, 758, 688], [777, 843, 742], [740, 612, 497], [780, 498, 499], [765, 502, 781], [765, 438, 502], [845, 656, 764], [692, 435, 502], [502, 435, 781], [656, 846, 784], [657, 656, 784], [440, 733, 786], [571, 614, 788], [514, 848, 744], [759, 790, 696], [699, 696, 790], [674, 697, 791], [759, 786, 790], [701, 699, 790], [790, 792, 701], [703, 515, 793], [792, 745, 701], [702, 446, 796], [795, 515, 797], [797, 515, 623], [446, 677, 801], [746, 802, 627], [804, 710, 850], [713, 628, 851], [715, 576, 713], [714, 749, 807], [807, 749, 579], [662, 661, 748], [809, 582, 810], [809, 717, 582], [589, 854, 716], [589, 760, 854], [587, 812, 717], [664, 718, 813], [587, 717, 814], [719, 855, 760], [591, 587, 814], [856, 664, 813], [925, 665, 857], [882, 679, 761], [638, 666, 541], [595, 761, 679], [881, 666, 638], [679, 820, 751], [639, 770, 769], [818, 726, 641], [826, 735, 681], [605, 828, 829], [728, 863, 602], [555, 829, 833], [832, 864, 650], [862, 651, 834], [651, 478, 834], [650, 603, 832], [832, 730, 865], [555, 833, 836], [762, 737, 838], [652, 558, 839], [609, 840, 565], [772, 755, 842], [757, 772, 868], [487, 486, 774], [870, 488, 763], [775, 490, 492], [892, 497, 612], [494, 739, 779], [844, 495, 504], [495, 504, 844], [504, 495, 844], [874, 777, 503], [785, 694, 506], [440, 759, 695], [439, 616, 787], [759, 440, 786], [877, 766, 734], [658, 703, 793], [878, 767, 707], [708, 706, 910], [520, 745, 710], [524, 806, 849], [803, 524, 849], [801, 677, 714], [915, 801, 714], [711, 578, 747], [628, 805, 851], [748, 712, 852], [715, 713, 879], [714, 579, 749], [662, 748, 853], [809, 715, 810], [663, 535, 720], [665, 636, 857], [859, 726, 818], [819, 725, 884], [725, 726, 859], [885, 642, 820], [642, 860, 822], [771, 861, 825], [753, 861, 474], [754, 752, 647], [650, 864, 942], [941, 831, 602], [670, 729, 944], [866, 550, 670], [836, 737, 608], [950, 655, 566], [888, 755, 756], [738, 685, 955], [610, 482, 869], [889, 484, 610], [485, 689, 489], [890, 742, 843], [891, 890, 843], [779, 739, 873], [691, 496, 778], [893, 764, 894], [765, 894, 764], [1037, 977, 781], [895, 656, 845], [846, 656, 784], [783, 439, 897], [509, 898, 503], [614, 694, 982], [697, 743, 847], [899, 439, 787], [848, 571, 788], [789, 902, 512], [700, 766, 903], [790, 786, 876], [658, 902, 789], [790, 876, 904], [904, 905, 790], [790, 905, 792], [877, 734, 878], [734, 767, 878], [907, 621, 620], [797, 623, 908], [912, 707, 800], [446, 801, 989], [745, 850, 710], [800, 711, 913], [916, 802, 746], [806, 627, 802], [917, 711, 747], [917, 747, 678], [712, 804, 918], [715, 919, 810], [920, 678, 808], [807, 749, 716], [921, 662, 853], [663, 720, 922], [721, 664, 856], [722, 591, 924], [856, 926, 721], [927, 761, 721], [857, 636, 768], [818, 724, 883], [928, 824, 930], [963, 930, 825], [928, 929, 824], [930, 824, 825], [932, 931, 825], [669, 824, 933], [933, 668, 669], [932, 825, 861], [931, 932, 861], [826, 681, 935], [736, 934, 727], [861, 753, 936], [937, 828, 682], [753, 651, 936], [829, 828, 939], [752, 754, 940], [727, 938, 728], [728, 646, 727], [650, 942, 830], [670, 945, 866], [607, 554, 867], [607, 867, 946], [966, 886, 833], [836, 833, 886], [737, 836, 886], [762, 838, 948], [950, 566, 565], [952, 887, 951], [772, 951, 887], [842, 951, 772], [772, 887, 953], [954, 868, 772], [955, 756, 686], [757, 868, 954], [482, 773, 957], [890, 741, 742], [497, 892, 972], [499, 741, 974], [871, 489, 844], [764, 893, 895], [845, 764, 895], [765, 781, 894], [873, 782, 779], [896, 693, 436], [785, 693, 980], [981, 694, 785], [982, 694, 981], [697, 847, 984], [786, 512, 904], [673, 659, 901], [876, 786, 904], [700, 903, 787], [904, 512, 902], [958, 744, 848], [959, 877, 878], [792, 906, 745], [621, 907, 911], [746, 621, 911], [524, 803, 914], [805, 708, 1046], [852, 712, 918], [715, 879, 919], [716, 999, 807], [853, 748, 852], [921, 853, 662], [718, 662, 880], [812, 809, 1000], [811, 663, 922], [813, 718, 880], [923, 717, 812], [814, 717, 923], [816, 666, 962], [666, 817, 962], [817, 666, 881], [1002, 1004, 723], [883, 724, 1002], [1006, 818, 883], [679, 882, 1005], [859, 884, 725], [930, 929, 928], [931, 963, 825], [824, 929, 933], [735, 826, 823], [935, 681, 752], [939, 828, 937], [1017, 754, 830], [829, 939, 833], [943, 966, 833], [864, 832, 865], [1029, 609, 732], [1028, 562, 672], [1032, 950, 565], [952, 953, 887], [955, 685, 757], [869, 889, 610], [1035, 485, 871], [1035, 773, 485], [967, 872, 739], [968, 739, 690], [969, 612, 488], [892, 612, 972], [974, 741, 971], [1036, 893, 894], [891, 843, 777], [975, 891, 777], [978, 782, 873], [895, 1038, 784], [656, 895, 784], [896, 436, 782], [503, 898, 979], [875, 980, 693], [982, 983, 614], [899, 897, 439], [614, 983, 788], [899, 787, 900], [898, 509, 673], [898, 673, 901], [620, 744, 958], [704, 791, 985], [902, 658, 793], [659, 702, 796], [792, 905, 906], [795, 908, 515], [908, 795, 515], [515, 795, 793], [989, 798, 446], [909, 745, 1044], [990, 746, 911], [990, 911, 746], [801, 915, 989], [914, 709, 524], [916, 993, 746], [993, 916, 746], [714, 807, 997], [879, 715, 919], [879, 919, 715], [808, 811, 750], [750, 811, 808], [814, 923, 591], [719, 665, 960], [925, 960, 665], [961, 594, 816], [721, 926, 1001], [1001, 926, 721], [721, 926, 927], [723, 1004, 1002], [1005, 761, 927], [761, 1005, 882], [724, 723, 1002], [1049, 638, 858], [1008, 769, 770], [1006, 859, 818], [1009, 1050, 929], [930, 1009, 929], [1009, 930, 963], [933, 929, 1052], [821, 680, 735], [821, 735, 1011], [601, 822, 860], [668, 933, 964], [935, 823, 826], [931, 861, 965], [601, 860, 736], [827, 668, 1012], [1013, 937, 1012], [1012, 937, 682], [965, 861, 936], [727, 934, 1058], [1015, 936, 651], [939, 937, 1016], [938, 1018, 728], [938, 728, 1018], [863, 728, 938], [1017, 940, 754], [833, 939, 943], [1015, 862, 1020], [830, 942, 1019], [941, 602, 863], [670, 944, 945], [1021, 670, 945], [1021, 945, 670], [946, 730, 607], [1022, 550, 866], [835, 1024, 834], [835, 556, 1024], [762, 948, 732], [949, 732, 948], [1029, 732, 949], [731, 562, 1028], [1031, 654, 841], [1031, 841, 654], [1031, 841, 655], [565, 840, 1032], [950, 1031, 655], [888, 842, 755], [772, 953, 1033], [955, 757, 1034], [686, 687, 956], [869, 482, 957], [486, 484, 774], [763, 487, 870], [775, 690, 490], [968, 967, 739], [775, 492, 970], [971, 741, 890], [691, 778, 776], [893, 973, 895], [974, 780, 499], [873, 739, 967], [973, 893, 1036], [894, 781, 977], [1037, 781, 435], [780, 435, 498], [1037, 435, 780], [975, 777, 874], [978, 896, 782], [896, 875, 693], [743, 784, 847], [900, 903, 899], [697, 984, 1039], [903, 900, 787], [791, 697, 985], [902, 1041, 904], [1043, 620, 958], [905, 904, 1041], [620, 1043, 987], [792, 906, 905], [906, 792, 905], [1044, 906, 905], [792, 906, 1044], [792, 1044, 906], [878, 707, 988], [1045, 794, 1042], [706, 794, 1045], [906, 1044, 745], [707, 912, 988], [796, 798, 989], [745, 1044, 991], [745, 909, 1044], [909, 745, 991], [911, 990, 746], [800, 913, 912], [745, 909, 991], [850, 745, 991], [1046, 708, 910], [992, 711, 917], [992, 913, 711], [914, 803, 849], [996, 851, 805], [996, 805, 1046], [804, 850, 994], [714, 997, 995], [852, 918, 998], [810, 919, 879], [750, 811, 808], [880, 662, 853], [760, 855, 854], [1066, 718, 880], [813, 880, 856], [594, 1047, 815], [1048, 924, 591], [1047, 594, 961], [961, 816, 962], [723, 722, 924], [883, 1002, 1004], [881, 638, 1049], [1007, 768, 769], [1005, 820, 679], [1008, 1007, 769], [1079, 884, 819], [963, 1051, 1009], [860, 642, 1010], [1053, 963, 931], [933, 1054, 964], [682, 827, 1012], [935, 752, 1056], [752, 940, 1056], [727, 1058, 938], [1014, 1016, 937], [727, 1018, 938], [651, 862, 1015], [943, 939, 1016], [862, 834, 1020], [941, 863, 831], [831, 944, 729], [552, 550, 1022], [554, 552, 1023], [554, 1060, 867], [737, 886, 838], [1025, 556, 837], [837, 652, 839], [947, 948, 838], [1026, 558, 731], [672, 654, 1030], [952, 1062, 1063], [952, 1063, 953], [888, 756, 955], [954, 772, 1033], [738, 955, 956], [687, 738, 956], [492, 776, 970], [492, 493, 776], [1073, 894, 977], [778, 497, 976], [778, 496, 497], [844, 504, 783], [874, 503, 979], [1042, 704, 985], [794, 704, 1042], [1041, 902, 793], [1043, 620, 987], [907, 620, 1043], [793, 795, 908], [912, 878, 988], [908, 795, 797], [910, 706, 1045], [907, 990, 911], [799, 709, 1064], [994, 850, 991], [802, 993, 1076], [802, 916, 993], [879, 713, 851], [998, 918, 994], [1065, 917, 678], [1065, 678, 920], [854, 999, 716], [720, 815, 922], [855, 719, 960], [1001, 926, 856], [925, 857, 768], [1002, 723, 924], [1003, 925, 768], [858, 598, 819], [1067, 1068, 1069], [1067, 1069, 1050], [1009, 1067, 1050], [1079, 819, 884], [1079, 819, 884], [821, 1008, 770], [929, 1050, 1052], [1050, 1069, 1052], [1010, 642, 885], [933, 1052, 1054], [735, 823, 1011], [964, 1054, 1012], [965, 1055, 931], [937, 1057, 1014], [937, 1013, 1057], [965, 936, 1055], [936, 1015, 1059], [938, 1018, 727], [966, 943, 1016], [865, 730, 946], [1060, 1070, 867], [834, 1024, 1020], [947, 838, 886], [556, 1025, 1024], [731, 1027, 1026], [840, 609, 1029], [956, 955, 686], [484, 889, 774], [487, 774, 870], [968, 690, 775], [488, 870, 969], [967, 739, 872], [1074, 972, 612], [1073, 1036, 894], [975, 1071, 891], [976, 497, 972], [976, 972, 1074], [1037, 1090, 977], [783, 897, 899], [785, 980, 981], [981, 980, 982], [982, 980, 1075], [985, 697, 1039], [903, 766, 877], [1040, 901, 659], [986, 1040, 659], [796, 986, 659], [878, 912, 988], [799, 908, 623], [746, 990, 916], [1064, 709, 914], [992, 912, 913], [915, 714, 995], [849, 806, 1076], [918, 804, 994], [917, 1065, 920], [1000, 809, 810], [1066, 880, 853], [1077, 855, 960], [962, 1047, 961], [883, 1004, 1006], [768, 1007, 1003], [1078, 1067, 1009], [1078, 1009, 1080], [1081, 736, 860], [934, 736, 1081], [668, 964, 1012], [863, 938, 1018], [1019, 942, 864], [1070, 865, 946], [1022, 866, 945], [946, 867, 1070], [1023, 552, 1022], [839, 558, 1026], [949, 948, 1102], [1028, 672, 1030], [1030, 654, 841], [612, 972, 1074], [1072, 895, 973], [780, 974, 971], [1107, 844, 783], [1092, 783, 899], [806, 802, 1076], [1048, 591, 923], [858, 819, 1079], [1006, 884, 859], [860, 1010, 885], [931, 1055, 1099], [1011, 823, 935], [1055, 936, 1059], [1060, 554, 1023], [886, 1083, 947], [1027, 731, 1028], [1103, 1032, 840], [1104, 1063, 1086], [1063, 1062, 1086], [757, 954, 1034], [890, 891, 1088], [1071, 1088, 891], [774, 1087, 870], [870, 1087, 774], [612, 969, 972], [1089, 871, 844], [1071, 975, 1091], [895, 1072, 1038], [899, 903, 1093], [877, 959, 903], [959, 877, 903], [1041, 793, 1132], [808, 811, 922], [880, 718, 1066], [1068, 1097, 1069], [1006, 1079, 884], [1097, 1085, 1069], [1051, 963, 1053], [1052, 1069, 1085], [1014, 1057, 1100], [966, 1016, 1082], [1016, 1117, 1082], [1118, 831, 863], [1022, 945, 1021], [1102, 947, 1061], [1102, 948, 947], [949, 1102, 1084], [1105, 1088, 1071], [1073, 977, 1090], [847, 784, 1127], [903, 877, 1128], [1128, 877, 959], [912, 1130, 988], [912, 992, 1109], [807, 999, 854], [852, 853, 1136], [853, 852, 1136], [812, 1000, 1241], [1095, 1067, 1078], [1110, 1096, 1112], [1110, 1068, 1095], [1111, 1095, 1078], [1068, 1112, 1096], [1068, 1110, 1112], [1067, 1095, 1068], [1097, 1068, 1096], [884, 1079, 1203], [1080, 1009, 1051], [1085, 1054, 1052], [860, 885, 1098], [1054, 1085, 1114], [1057, 1116, 1100], [1016, 1014, 1117], [865, 1120, 864], [1122, 1020, 1024], [1020, 1122, 1119], [1121, 865, 1070], [1101, 1061, 947], [1029, 949, 1084], [1062, 1086, 1124], [1106, 890, 1088], [780, 971, 1165], [873, 967, 1126], [1164, 1037, 780], [1038, 895, 1169], [1171, 874, 979], [984, 847, 1127], [1174, 788, 983], [796, 1040, 986], [1045, 1042, 1129], [1041, 1108, 905], [1131, 1132, 793], [793, 908, 1131], [1044, 905, 1108], [910, 1045, 1133], [1179, 989, 915], [799, 1064, 1181], [1046, 910, 1133], [1044, 1094, 1134], [991, 1135, 994], [1183, 915, 995], [995, 997, 1183], [1186, 917, 920], [1187, 997, 807], [1188, 998, 994], [852, 1136, 853], [1193, 1077, 855], [1193, 855, 1077], [923, 812, 1241], [856, 1195, 1001], [1110, 1095, 1197], [927, 926, 1001], [1110, 1112, 1096], [1051, 1113, 1206], [1113, 1051, 1053], [1053, 931, 1141], [821, 1011, 1209], [1054, 1114, 1013], [1012, 1054, 1013], [1099, 1055, 1210], [1142, 1011, 935], [1014, 1100, 1117], [1143, 1059, 1144], [1059, 1015, 1144], [1015, 1119, 1144], [1019, 864, 1215], [1145, 1119, 1146], [1216, 944, 831], [1119, 1122, 1146], [945, 1219, 1021], [1083, 947, 1101], [947, 1083, 1101], [1025, 837, 1123], [837, 839, 1123], [1222, 1029, 1084], [1029, 1149, 840], [1124, 1086, 1062], [952, 1150, 1062], [1124, 1086, 1062], [954, 1153, 1034], [1155, 773, 871], [1071, 1154, 1105], [1071, 1105, 1154], [1157, 1087, 870], [1157, 870, 1087], [967, 968, 1160], [1163, 972, 969], [1167, 1074, 972], [1163, 1167, 972], [1090, 1037, 1164], [1166, 778, 976], [1107, 1168, 844], [1038, 1169, 784], [978, 873, 1126], [875, 1172, 980], [983, 982, 1173], [1175, 848, 788], [1128, 1234, 1233], [958, 1176, 1043], [1177, 959, 878], [1178, 1043, 1176], [1108, 1041, 1132], [1044, 1108, 1236], [1094, 1044, 1180], [1064, 914, 1182], [1044, 1134, 991], [998, 1136, 852], [1137, 810, 879], [1066, 853, 1192], [1066, 856, 880], [1242, 815, 1047], [927, 1001, 1138], [881, 962, 817], [1110, 1196, 1112], [1002, 1048, 1004], [1002, 924, 1048], [1198, 1196, 1110], [1199, 1095, 1111], [1003, 1007, 1200], [1049, 858, 881], [1079, 884, 1203], [1113, 1205, 1051], [1140, 820, 1139], [1051, 1206, 1113], [1206, 1113, 1053], [1098, 885, 1284], [1099, 1141, 931], [1211, 1100, 1116], [934, 1081, 1058], [1055, 1059, 1143], [1056, 940, 1017], [1288, 1082, 1117], [1119, 1015, 1020], [1118, 1214, 831], [1147, 1145, 1146], [1217, 1120, 865], [944, 1021, 945], [1146, 1122, 1147], [1219, 1022, 1021], [1023, 1248, 1249], [1070, 1060, 1220], [1121, 1070, 1220], [1101, 947, 1083], [1101, 1148, 1061], [1122, 1024, 1221], [1221, 1024, 1025], [1030, 841, 1031], [1103, 840, 1149], [1032, 1225, 950], [1124, 1152, 1086], [1086, 1227, 1104], [955, 1034, 888], [1033, 1228, 1229], [773, 1035, 871], [1231, 973, 1036], [1231, 1230, 973], [1071, 1156, 1105], [774, 1157, 870], [971, 890, 1158], [1166, 776, 778], [1126, 967, 1160], [1169, 895, 1038], [783, 1168, 1107], [978, 1126, 896], [1170, 783, 1092], [982, 1075, 1173], [983, 1173, 1174], [1303, 1093, 903], [1128, 1233, 903], [988, 1177, 878], [796, 989, 1179], [1264, 912, 1109], [993, 916, 990], [994, 1135, 1238], [1184, 849, 1076], [996, 1185, 851], [1190, 807, 854], [879, 1191, 1137], [1239, 808, 922], [1243, 1198, 1197], [1198, 1110, 1197], [1112, 1196, 1244], [1096, 1244, 1202], [1112, 1244, 1096], [1201, 1200, 1007], [1097, 1096, 1202], [820, 1005, 1139], [1201, 1007, 1008], [1085, 1207, 1283], [1314, 1141, 1099], [860, 1098, 1284], [1115, 1055, 1143], [1021, 944, 1218], [1147, 1122, 1146], [1219, 945, 1021], [1023, 1022, 1248], [1061, 1148, 1250], [1025, 1251, 1221], [1252, 1025, 1123], [839, 1252, 1123], [1026, 1027, 1028], [1222, 1084, 1294], [1030, 1031, 1223], [1223, 1031, 1224], [1031, 950, 1224], [1124, 1062, 1150], [1124, 1254, 1152], [1151, 952, 951], [842, 888, 1034], [1033, 953, 1228], [954, 1033, 1229], [871, 1255, 1155], [1105, 1156, 1154], [969, 870, 1302], [1090, 1162, 1073], [1164, 780, 1165], [1257, 844, 1168], [1258, 1071, 1091], [1258, 1156, 1071], [1091, 975, 1258], [1259, 1260, 896], [875, 896, 1260], [959, 1234, 1128], [1265, 1131, 908], [990, 907, 1235], [908, 799, 1181], [1179, 915, 989], [1237, 1180, 1044], [1182, 1267, 1064], [1046, 1268, 996], [992, 917, 1269], [917, 1186, 1269], [1076, 1270, 1184], [1137, 1191, 879], [1193, 854, 1077], [854, 855, 1077], [1000, 810, 1273], [1194, 960, 925], [1196, 1309, 1274], [1244, 1196, 1274], [1277, 1202, 1244], [1078, 1199, 1111], [1079, 1006, 1279], [1051, 1281, 1080], [1051, 1205, 1281], [1008, 1204, 1201], [1097, 1202, 1245], [885, 820, 1140], [885, 1140, 1396], [885, 1208, 1284], [1085, 1283, 1114], [1142, 1209, 1011], [1210, 1055, 1285], [1285, 1055, 1115], [1142, 935, 1286], [1013, 1318, 1057], [1320, 1144, 1247], [1017, 1287, 1056], [1100, 1288, 1117], [938, 1212, 1018], [863, 1018, 1213], [864, 1120, 1406], [1217, 865, 1121], [1219, 1021, 1218], [1220, 1217, 1121], [1291, 1101, 1083], [1060, 1023, 1249], [1250, 1102, 1061], [1102, 1250, 1292], [1293, 1252, 839], [1293, 839, 1026], [1253, 1325, 1294], [1222, 1326, 1029], [1296, 1030, 1223], [1326, 1149, 1029], [1298, 1254, 1297], [1124, 1297, 1254], [1152, 1254, 1298], [1151, 951, 1226], [842, 1300, 951], [1086, 1152, 1227], [1328, 1063, 1104], [1155, 957, 773], [889, 1329, 774], [774, 1330, 1157], [973, 1256, 1230], [1230, 1256, 973], [1036, 1073, 1231], [1073, 1301, 1231], [970, 1159, 775], [970, 776, 1161], [1089, 844, 1257], [1167, 1163, 1074], [1163, 1167, 1074], [1357, 1168, 783], [1357, 783, 1170], [1092, 899, 1170], [984, 1127, 1361], [1173, 1075, 1261], [1171, 979, 898], [1232, 1171, 898], [899, 1093, 1303], [1133, 1045, 1266], [1094, 1180, 1134], [994, 1238, 1306], [1307, 1309, 1196], [1308, 1307, 1196], [1333, 1309, 1307], [1198, 1308, 1196], [1308, 1198, 1243], [1243, 1197, 1275], [1386, 1047, 962], [1275, 1197, 1095], [1311, 1275, 1095], [1311, 1095, 1199], [1244, 1274, 1277], [1276, 927, 1138], [1312, 1006, 1004], [1005, 927, 1276], [1078, 1080, 1199], [1202, 1277, 1278], [1280, 1005, 1139], [1097, 1245, 1085], [1085, 1245, 1313], [1314, 1053, 1141], [1285, 1115, 1315], [1211, 1316, 1100], [1100, 1316, 1317], [1143, 1320, 1115], [1115, 1320, 1315], [1321, 1058, 1081], [935, 1056, 1286], [1319, 1318, 1013], [1320, 1143, 1144], [1056, 1287, 1017], [938, 1058, 1212], [1119, 1145, 1147], [1119, 1147, 1145], [1218, 1322, 1219], [1323, 1060, 1249], [1251, 1025, 1252], [1252, 1293, 1324], [1084, 1253, 1294], [1028, 1295, 1026], [1298, 1296, 1327], [1150, 952, 1151], [1152, 1298, 1299], [1299, 1298, 1327], [1152, 1299, 1227], [842, 1034, 1300], [869, 957, 1125], [1344, 957, 1155], [1329, 889, 1345], [973, 1256, 1230], [1073, 1162, 1301], [1255, 871, 1089], [1157, 1302, 870], [1169, 1072, 1354], [1169, 1038, 1072], [1163, 1074, 1167], [874, 1258, 975], [1127, 784, 1359], [899, 1303, 1170], [901, 1040, 1362], [907, 1043, 1235], [1132, 1131, 1365], [1180, 1237, 1044], [908, 1181, 1332], [1135, 991, 1238], [996, 1268, 1185], [1305, 1076, 993], [994, 1306, 1238], [1269, 1186, 920], [1373, 807, 1190], [1272, 854, 1377], [856, 1066, 1381], [1381, 1384, 856], [1309, 1333, 1274], [1392, 1111, 1199], [1334, 1278, 1277], [1391, 881, 1393], [881, 858, 1393], [1334, 1335, 1278], [1394, 858, 1079], [1395, 1080, 1281], [1139, 1005, 1280], [1202, 1278, 1245], [1205, 1113, 1206], [1008, 821, 1282], [1053, 1246, 1206], [1204, 1008, 1282], [1314, 1099, 1210], [1318, 1319, 1398], [1212, 1058, 1321], [1017, 1287, 1056], [1400, 1056, 1287], [1082, 1288, 1290], [1288, 1401, 1290], [1017, 830, 1289], [863, 1213, 1402], [1214, 1118, 863], [830, 1019, 1215], [1322, 944, 1407], [1122, 1147, 1146], [1322, 1218, 944], [1291, 1410, 1101], [1252, 1341, 1251], [1292, 1084, 1102], [1252, 1324, 1342], [1252, 1342, 1341], [1253, 1084, 1292], [1028, 1296, 1298], [1028, 1030, 1296], [1227, 1299, 1327], [1420, 1063, 1328], [1344, 1125, 957], [869, 1345, 889], [1154, 1346, 1105], [1330, 774, 1329], [1256, 973, 1230], [1106, 1347, 890], [1156, 1350, 1154], [1154, 1350, 1348], [1072, 973, 1349], [775, 1352, 968], [1158, 890, 1351], [1160, 968, 1352], [1164, 1162, 1090], [1163, 969, 1302], [1354, 1072, 1349], [1158, 1165, 971], [1436, 776, 1166], [1160, 1355, 1126], [976, 1074, 1356], [1126, 1259, 896], [1171, 1258, 874], [875, 1260, 1172], [1075, 980, 1261], [1360, 1170, 1303], [1361, 1127, 1359], [1174, 1175, 788], [1039, 984, 1304], [1303, 903, 1233], [1262, 901, 1362], [848, 1175, 958], [1175, 1363, 958], [1362, 1040, 1364], [1363, 1178, 1176], [1040, 796, 1364], [985, 1129, 1042], [1364, 796, 1263], [1045, 1129, 1266], [1263, 796, 1179], [1265, 1365, 1131], [1365, 1236, 1108], [1181, 1267, 1332], [1268, 1133, 1366], [915, 1183, 989], [1133, 1268, 1046], [914, 1369, 1182], [993, 990, 1368], [1370, 1183, 997], [1305, 993, 1368], [1369, 914, 849], [1371, 1370, 997], [1076, 1305, 1270], [997, 1187, 1371], [1269, 920, 1271], [1373, 1187, 807], [1371, 1187, 1373], [1374, 998, 1188], [1136, 998, 1374], [1192, 853, 1136], [1240, 1239, 922], [1378, 1380, 1333], [922, 1242, 1383], [1378, 1307, 1379], [1378, 1333, 1307], [1240, 922, 1383], [1380, 1382, 1333], [1242, 1047, 1383], [1387, 1333, 1382], [1333, 1387, 1274], [1310, 923, 1241], [1310, 1048, 923], [1423, 1194, 925], [1388, 1275, 1311], [1388, 1311, 1199], [1138, 1001, 1195], [1312, 1004, 1310], [1274, 1387, 1334], [1138, 1195, 1390], [1389, 962, 881], [881, 1391, 1389], [1200, 925, 1003], [1277, 1274, 1334], [1111, 1392, 1199], [1276, 1138, 1390], [1199, 1080, 1392], [1392, 1080, 1281], [1394, 1393, 858], [1203, 1394, 1079], [1079, 1279, 1203], [1005, 1280, 1140], [1278, 1335, 1425], [1206, 1395, 1281], [1206, 1281, 1205], [1140, 1139, 1005], [1246, 1314, 1206], [1207, 1085, 1313], [1282, 821, 1209], [1283, 1207, 1313], [1314, 1210, 1285], [1319, 1114, 1283], [1284, 1336, 860], [1284, 1427, 1336], [1142, 1286, 1209], [860, 1336, 1081], [1013, 1337, 1319], [1319, 1337, 1013], [1336, 1321, 1081], [1398, 1319, 1337], [1056, 1400, 1287], [1288, 1100, 1317], [1399, 1058, 1212], [1399, 1212, 1058], [1399, 1018, 1212], [1119, 1247, 1144], [1404, 1247, 1119], [1402, 1018, 1213], [1018, 1402, 1213], [1403, 1289, 1017], [830, 1403, 1289], [1017, 1289, 1403], [1402, 1214, 863], [1145, 1404, 1119], [1147, 1404, 1145], [1082, 1290, 1405], [831, 1214, 1216], [944, 1216, 1407], [966, 1408, 886], [1404, 1122, 1409], [1404, 1147, 1122], [1406, 1120, 1217], [1338, 1083, 1408], [1083, 886, 1408], [1122, 1251, 1409], [1023, 1249, 1248], [1411, 1023, 1248], [1023, 1411, 1249], [1220, 1070, 1412], [1410, 1148, 1101], [1060, 1323, 1339], [1323, 1060, 1339], [1070, 1220, 1412], [1410, 1250, 1148], [1022, 1340, 1248], [1022, 1219, 1340], [1340, 1219, 1248], [1323, 1249, 1339], [1339, 1249, 1411], [1410, 1413, 1250], [1219, 1340, 1248], [1414, 1250, 1413], [1122, 1221, 1251], [1342, 1324, 1341], [1415, 1293, 1026], [1295, 1415, 1026], [1415, 1295, 1028], [1295, 1028, 1298], [1032, 1431, 1225], [1224, 950, 1225], [1224, 1296, 1223], [1150, 1343, 1124], [1343, 1150, 1151], [1296, 1432, 1327], [1419, 951, 1300], [1227, 1327, 1418], [1104, 1227, 1328], [1153, 1419, 1034], [1419, 1300, 1034], [1345, 869, 1125], [1088, 1105, 1346], [1106, 1088, 1347], [1255, 1089, 1257], [973, 1230, 1349], [1162, 1164, 1301], [1454, 1255, 1257], [970, 1161, 1159], [1257, 1168, 1353], [1074, 1163, 1356], [976, 1356, 1166], [1126, 1355, 1259], [980, 1172, 1261], [1304, 984, 1361], [1174, 1173, 1175], [901, 1232, 898], [1437, 1303, 1233], [1232, 901, 1262], [1331, 1039, 1304], [985, 1039, 1331], [1176, 958, 1363], [1234, 959, 1177], [1129, 985, 1331], [1177, 988, 1130], [1235, 1043, 1178], [1108, 1132, 1365], [1265, 908, 1332], [1180, 1044, 1236], [1366, 1133, 1266], [1183, 1179, 989], [1368, 990, 1235], [1181, 1064, 1267], [1264, 1109, 992], [1134, 1180, 1238], [991, 1134, 1238], [1369, 849, 1184], [879, 851, 1372], [1188, 994, 1238], [920, 808, 1375], [1239, 1375, 808], [810, 1137, 1376], [1377, 854, 1193], [1381, 1066, 1192], [1194, 1193, 1077], [1379, 1307, 1308], [960, 1194, 1077], [922, 815, 1242], [1385, 1308, 1243], [1385, 1243, 1275], [1047, 1386, 1383], [856, 1384, 1195], [1004, 1048, 1310], [1005, 1276, 1390], [1005, 1390, 1280], [1279, 1006, 1312], [1281, 1080, 1395], [1245, 1278, 1425], [1314, 1246, 1053], [885, 1396, 1208], [1426, 1314, 1285], [1319, 1013, 1114], [1211, 1057, 1398], [1211, 1116, 1057], [1057, 1318, 1398], [1056, 1287, 1286], [1428, 1212, 1321], [1212, 1428, 1399], [1287, 1017, 1400], [1401, 1288, 1317], [1400, 1017, 1289], [1018, 1399, 1213], [1215, 864, 1406], [966, 1082, 1405], [1405, 1408, 966], [1220, 1060, 1323], [1412, 1220, 1323], [1323, 1411, 1339], [1323, 1339, 1411], [1325, 1253, 1429], [1430, 1325, 1429], [1415, 1028, 1295], [1294, 1326, 1222], [1149, 1326, 1416], [1343, 1297, 1124], [951, 1419, 1226], [1418, 1327, 1433], [1063, 1420, 1228], [953, 1063, 1228], [1153, 954, 1229], [1347, 1088, 1346], [1421, 1349, 1230], [1453, 1157, 1330], [1351, 890, 1347], [1352, 775, 1159], [1258, 1350, 1156], [1161, 776, 1436], [1355, 1160, 1422], [784, 1169, 1358], [1258, 1171, 1456], [1130, 912, 1264], [1367, 1264, 992], [1134, 1238, 1180], [1367, 992, 1269], [851, 1185, 1372], [879, 1372, 1189], [1271, 920, 1375], [1375, 1271, 1239], [1271, 1375, 1239], [1190, 854, 1373], [879, 1189, 1137], [1273, 810, 1376], [1379, 1463, 1378], [1379, 1308, 1441], [1241, 1000, 1273], [1382, 1442, 1443], [1382, 1443, 1387], [1423, 925, 1424], [1386, 962, 1389], [925, 1423, 1424], [1424, 925, 1200], [1314, 1444, 1206], [1397, 1283, 1313], [1316, 1445, 1446], [1317, 1316, 1446], [1403, 830, 1215], [1407, 1216, 1214], [1407, 1214, 1447], [1219, 1322, 1448], [1032, 1103, 1417], [1032, 1417, 1431], [1149, 1416, 1417], [1103, 1149, 1417], [1432, 1296, 1224], [1450, 1451, 1434], [1450, 1449, 1451], [1453, 1302, 1157], [1452, 1301, 1164], [1455, 1356, 1163], [1359, 784, 1358], [1264, 1457, 1130], [1470, 1267, 1182], [1270, 1305, 1458], [1184, 1270, 1438], [1439, 1184, 1438], [1270, 1458, 1438], [1439, 1438, 1462], [1439, 1462, 1459], [1462, 1438, 1460], [1461, 1459, 1462], [1373, 854, 1272], [1378, 1463, 1461], [1461, 1462, 1380], [1378, 1461, 1380], [1380, 1462, 1440], [1380, 1440, 1442], [1380, 1442, 1382], [1209, 1465, 1282], [1290, 1401, 1477], [1408, 1405, 1338], [1291, 1083, 1338], [1219, 1448, 1466], [1219, 1466, 1340], [1411, 1248, 1340], [1467, 1220, 1412], [1217, 1220, 1467], [1433, 1327, 1432], [1153, 1229, 1228], [1419, 1153, 1228], [1434, 1451, 1435], [1454, 1257, 1522], [1356, 1436, 1166], [1175, 1468, 1363], [1366, 1266, 1268], [1469, 1367, 1269], [1369, 1439, 1459], [1369, 1184, 1439], [1239, 1489, 1375], [1460, 1458, 1488], [1463, 1459, 1461], [1462, 1460, 1440], [1374, 1192, 1136], [1463, 1379, 1471], [1440, 1460, 1472], [1440, 1472, 1473], [1442, 1440, 1473], [1385, 1275, 1388], [1423, 925, 1424], [1334, 1443, 1464], [1335, 1334, 1474], [1475, 1314, 1426], [1396, 1496, 1208], [1286, 1287, 1476], [1402, 1213, 1399], [1402, 1399, 1478], [1324, 1252, 1341], [1298, 1297, 1295], [1418, 1433, 1449], [1453, 1163, 1302], [1452, 1164, 1165], [1356, 1455, 1436], [1479, 1355, 1422], [1353, 1168, 1357], [1172, 1173, 1261], [1233, 1234, 1177], [1235, 1178, 1481], [1483, 1332, 1267], [1134, 1180, 1485], [1485, 1238, 1134], [1470, 1182, 1369], [1305, 1486, 1458], [1470, 1369, 1459], [1458, 1515, 1555], [1463, 1487, 1459], [1460, 1438, 1458], [1242, 1240, 1383], [1443, 1442, 1473], [1381, 1492, 1195], [1381, 1195, 1384], [1334, 1387, 1443], [1388, 1199, 1392], [1334, 1464, 1474], [1206, 1444, 1395], [1314, 1475, 1444], [1313, 1245, 1425], [1313, 1425, 1495], [1496, 1284, 1208], [1283, 1397, 1319], [1209, 1497, 1465], [1497, 1209, 1286], [1498, 1320, 1247], [1401, 1317, 1477], [1498, 1247, 1404], [1501, 1400, 1289], [1403, 1501, 1289], [1290, 1477, 1500], [1399, 1428, 1478], [1502, 1403, 1215], [1402, 1478, 1503], [1504, 1215, 1406], [1505, 1504, 1406], [1467, 1406, 1217], [1467, 1505, 1406], [1322, 1407, 1448], [1414, 1413, 1506], [1339, 1412, 1323], [1509, 1292, 1414], [1292, 1250, 1414], [1521, 1251, 1341], [1521, 1341, 1252], [1415, 1324, 1293], [1225, 1511, 1224], [1151, 1510, 1343], [1419, 1151, 1226], [1449, 1433, 1512], [1450, 1227, 1418], [1449, 1450, 1418], [1451, 1449, 1512], [1347, 1346, 1623], [1453, 1513, 1163], [1480, 1350, 1258], [1361, 1359, 1523], [1175, 1173, 1468], [1177, 1130, 1525], [1482, 1235, 1481], [1265, 1332, 1483], [1484, 1180, 1236], [1235, 1482, 1514], [1268, 1266, 1366], [1305, 1368, 1486], [1470, 1459, 1487], [1271, 1375, 1489], [1472, 1460, 1517], [1471, 1379, 1441], [1241, 1273, 1490], [1443, 1473, 1491], [1280, 1390, 1493], [1531, 1204, 1282], [1465, 1497, 1286], [1321, 1427, 1519], [1427, 1321, 1336], [1477, 1317, 1446], [1499, 1476, 1287], [1287, 1400, 1499], [1215, 1504, 1502], [1466, 1508, 1340], [1297, 1415, 1295], [1432, 1224, 1511], [1419, 1228, 1151], [1536, 1231, 1301], [1257, 1353, 1522], [1468, 1173, 1524], [1468, 1543, 1363], [1368, 1235, 1514], [1188, 1238, 1526], [1486, 1515, 1458], [1189, 1372, 1185], [1460, 1488, 1517], [1527, 1471, 1441], [1239, 1240, 1682], [1441, 1308, 1385], [1240, 1242, 1383], [1194, 1423, 1424], [1528, 1386, 1389], [1564, 1388, 1392], [1443, 1491, 1464], [1529, 1389, 1391], [1569, 1280, 1493], [1496, 1427, 1284], [1465, 1286, 1497], [1316, 1211, 1573], [1577, 1576, 1315], [1577, 1315, 1320], [1211, 1398, 1518], [1477, 1579, 1580], [1534, 1344, 1155], [1535, 1155, 1255], [1616, 1536, 1301], [1538, 1453, 1330], [1301, 1452, 1537], [1349, 1421, 1540], [1452, 1165, 1541], [1171, 1232, 1456], [1172, 1542, 1173], [1542, 1524, 1173], [1544, 1233, 1177], [1363, 1543, 1545], [1362, 1364, 1594], [1363, 1545, 1178], [1178, 1545, 1481], [1263, 1546, 1364], [1236, 1365, 1548], [1368, 1514, 1549], [1486, 1368, 1549], [1550, 1485, 1180], [1486, 1552, 1515], [1487, 1463, 1471], [1553, 1487, 1471], [1555, 1488, 1458], [1557, 1273, 1376], [1517, 1488, 1558], [1473, 1472, 1517], [1441, 1385, 1559], [1517, 1560, 1473], [1689, 1775, 1385], [1381, 1686, 1692], [1194, 1424, 1561], [1473, 1562, 1491], [1528, 1389, 1529], [1464, 1491, 1565], [1474, 1464, 1567], [1281, 1566, 1392], [1281, 1395, 1566], [1200, 1201, 1568], [1444, 1494, 1395], [1444, 1530, 1494], [1474, 1425, 1335], [1569, 1140, 1280], [1282, 1465, 1571], [1571, 1465, 1497], [1427, 1572, 1574], [1575, 1446, 1445], [1573, 1211, 1518], [1578, 1321, 1519], [1477, 1446, 1579], [1320, 1498, 1612], [1499, 1400, 1520], [1477, 1580, 1500], [1520, 1400, 1501], [1581, 1501, 1403], [1410, 1291, 1583], [1409, 1251, 1585], [1251, 1588, 1585], [1251, 1521, 1588], [1508, 1411, 1340], [1252, 1324, 1589], [1533, 1343, 1510], [1591, 1151, 1228], [1765, 1512, 1760], [1592, 1434, 1435], [1615, 1231, 1536], [1615, 1230, 1231], [1623, 1346, 1154], [1453, 1593, 1513], [1593, 1163, 1513], [1635, 1634, 1161], [1354, 1628, 1169], [1627, 1353, 1357], [1170, 1360, 1643], [1646, 1172, 1260], [1360, 1303, 1643], [1650, 1262, 1652], [1546, 1594, 1364], [1481, 1595, 1547], [1481, 1547, 1482], [1656, 1264, 1658], [1236, 1664, 1484], [1483, 1267, 1596], [1671, 1185, 1268], [1675, 1672, 1373], [1598, 1271, 1489], [1272, 1679, 1675], [1516, 1553, 1471], [1516, 1471, 1527], [1557, 1376, 1273], [1517, 1558, 1560], [1562, 1473, 1560], [1563, 1195, 1492], [1600, 1386, 1528], [1493, 1390, 1700], [1702, 1279, 1312], [1604, 1602, 1603], [1567, 1705, 1474], [1602, 1604, 1605], [1605, 1604, 1603], [1425, 1570, 1495], [1605, 1603, 1607], [1606, 1605, 1607], [1315, 1576, 1285], [1397, 1610, 1319], [1427, 1496, 1572], [1497, 1709, 1571], [1446, 1575, 1713], [1573, 1518, 1611], [1580, 1446, 1579], [1612, 1498, 1404], [1582, 1403, 1502], [1405, 1729, 1338], [1412, 1339, 1745], [1745, 1467, 1412], [1509, 1747, 1292], [1324, 1415, 1753], [1324, 1753, 1752], [1325, 1326, 1294], [1325, 1590, 1326], [1326, 1755, 1416], [1151, 1613, 1510], [1760, 1433, 1432], [1420, 1591, 1228], [1345, 1125, 1767], [1539, 1230, 1615], [1301, 1619, 1616], [1623, 1154, 1804], [1522, 1618, 1255], [1421, 1230, 1539], [1453, 1538, 1593], [1626, 1348, 1350], [1455, 1163, 1625], [1627, 1522, 1353], [1354, 1349, 1628], [1630, 1158, 1351], [1630, 1351, 1624], [1630, 1165, 1158], [1160, 1352, 1633], [1633, 1632, 1160], [1625, 1436, 1455], [1436, 1636, 1161], [1636, 1635, 1161], [1626, 1350, 1480], [1638, 1627, 1357], [1480, 1637, 1626], [1355, 1479, 1640], [1639, 1358, 1169], [1480, 1258, 1641], [1480, 1258, 1637], [1637, 1258, 1641], [1480, 1641, 1258], [1638, 1357, 1170], [1642, 1355, 1640], [1799, 1638, 1643], [1259, 1645, 1260], [1259, 1642, 1645], [1260, 1645, 1646], [1647, 1361, 1523], [1456, 1232, 1648], [1648, 1232, 1650], [1643, 1303, 1649], [1649, 1303, 1437], [1649, 1437, 1233], [1524, 1543, 1468], [1232, 1262, 1650], [1545, 1543, 1653], [1652, 1262, 1362], [1652, 1594, 1546], [1525, 1457, 1656], [1655, 1546, 1263], [1656, 1457, 1264], [1661, 1265, 1660], [1265, 1596, 1660], [1514, 1482, 1666], [1266, 1663, 1366], [1550, 1180, 1484], [1267, 1470, 1596], [1596, 1470, 1669], [1485, 1668, 1670], [1470, 1551, 1669], [1551, 1470, 1669], [1673, 1526, 1670], [1238, 1670, 1526], [1671, 1674, 1189], [1185, 1671, 1189], [1526, 1673, 1188], [1771, 1271, 1598], [1598, 1489, 1677], [1374, 1188, 1678], [1239, 1677, 1489], [1239, 1556, 1677], [1599, 1272, 1377], [1488, 1555, 1558], [1192, 1374, 1684], [1377, 1193, 1599], [1441, 1559, 1681], [1687, 1240, 1383], [1687, 1682, 1240], [1683, 1193, 1194], [1690, 1194, 1561], [1691, 1562, 1560], [1690, 1561, 1424], [1563, 1692, 1195], [1200, 1694, 1424], [1564, 1392, 1695], [1566, 1695, 1392], [1697, 1312, 1693], [1491, 1562, 1565], [1195, 1563, 1390], [1696, 1694, 1200], [1312, 1310, 1693], [1698, 1392, 1566], [1698, 1566, 1395], [1601, 1698, 1395], [1390, 1699, 1700], [1697, 1702, 1312], [1696, 1200, 1568], [1703, 1203, 1702], [1530, 1601, 1395], [1395, 1601, 1530], [1203, 1703, 1394], [1530, 1601, 1395], [1494, 1530, 1395], [1779, 1602, 1605], [1474, 1705, 1425], [1444, 1704, 1530], [1493, 1700, 1569], [1782, 1204, 1531], [1786, 1784, 1426], [1140, 1569, 1608], [1396, 1140, 1608], [1706, 1531, 1282], [1786, 1426, 1285], [1396, 1608, 1783], [1496, 1396, 1609], [1708, 1285, 1576], [1572, 1496, 1609], [1575, 1445, 1710], [1316, 1710, 1445], [1711, 1319, 1610], [1497, 1286, 1709], [1574, 1578, 1427], [1519, 1427, 1578], [1709, 1286, 1476], [1476, 1712, 1709], [1716, 1321, 1578], [1446, 1713, 1579], [1476, 1499, 1714], [1577, 1320, 1612], [1428, 1321, 1717], [1477, 1579, 1580], [1477, 1580, 1579], [1718, 1714, 1499], [1499, 1520, 1718], [1720, 1612, 1404], [1580, 1719, 1500], [1721, 1478, 1428], [1501, 1581, 1520], [1582, 1725, 1403], [1403, 1725, 1582], [1402, 1727, 1214], [1503, 1402, 1726], [1726, 1402, 1503], [1214, 1727, 1447], [1584, 1413, 1410], [1583, 1584, 1410], [1582, 1502, 1725], [1731, 1725, 1502], [1504, 1731, 1502], [1506, 1733, 1586], [1447, 1732, 1407], [1505, 1731, 1504], [1467, 1737, 1505], [1735, 1466, 1587], [1508, 1741, 1411], [1588, 1742, 1734], [1585, 1588, 1734], [1587, 1466, 1740], [1740, 1466, 1448], [1741, 1744, 1411], [1737, 1467, 1743], [1735, 1508, 1466], [1744, 1411, 1507], [1745, 1743, 1467], [1746, 1506, 1586], [1506, 1746, 1414], [1742, 1588, 1521], [1339, 1411, 1507], [1509, 1414, 1747], [1742, 1252, 1589], [1521, 1252, 1742], [1748, 1253, 1292], [1748, 1749, 1253], [1751, 1429, 1253], [1430, 1429, 1751], [1430, 1532, 1325], [1754, 1415, 1297], [1754, 1753, 1415], [1756, 1757, 1417], [1416, 1756, 1417], [1431, 1417, 1797], [1225, 1431, 1758], [1759, 1511, 1225], [1533, 1613, 1510], [1533, 1510, 1613], [1533, 1510, 1613], [1511, 1759, 1432], [1613, 1151, 1591], [1762, 1227, 1763], [1227, 1762, 1328], [1420, 1328, 1762], [1764, 1763, 1227], [1227, 1450, 1764], [1765, 1766, 1512], [1434, 1764, 1450], [1766, 1451, 1512], [1592, 1451, 1766], [1592, 1435, 1451], [1534, 1155, 1614], [1614, 1155, 1535], [1614, 1535, 1255], [1620, 1329, 1767], [1619, 1301, 1537], [1804, 1154, 1348], [1804, 1348, 1621], [1329, 1622, 1330], [1522, 1255, 1454], [1539, 1540, 1421], [1541, 1537, 1452], [1624, 1347, 1623], [1625, 1163, 1593], [1165, 1629, 1541], [1628, 1349, 1540], [1624, 1351, 1347], [1629, 1165, 1630], [1160, 1632, 1422], [1633, 1352, 1634], [1631, 1422, 1632], [1634, 1159, 1161], [1436, 1625, 1636], [1422, 1631, 1479], [1631, 1640, 1479], [1638, 1170, 1643], [1359, 1639, 1523], [1258, 1456, 1644], [1644, 1641, 1258], [1642, 1259, 1355], [1524, 1542, 1543], [1543, 1542, 1800], [1304, 1361, 1647], [1769, 1304, 1647], [1653, 1543, 1800], [1651, 1233, 1544], [1525, 1544, 1177], [1652, 1362, 1594], [1654, 1129, 1331], [1595, 1481, 1545], [1654, 1770, 1129], [1525, 1130, 1457], [1129, 1659, 1266], [1263, 1179, 1657], [1365, 1265, 1662], [1265, 1661, 1662], [1265, 1483, 1596], [1665, 1657, 1179], [1484, 1664, 1550], [1658, 1367, 1597], [1179, 1183, 1665], [1549, 1514, 1666], [1667, 1370, 1371], [1771, 1597, 1469], [1238, 1485, 1670], [1771, 1469, 1269], [1486, 1549, 1552], [1470, 1487, 1669], [1371, 1373, 1672], [1549, 1772, 1552], [1669, 1487, 1553], [1271, 1771, 1269], [1674, 1554, 1189], [1188, 1673, 1676], [1188, 1676, 1678], [1373, 1272, 1675], [1189, 1680, 1137], [1599, 1679, 1272], [1137, 1680, 1376], [1773, 1558, 1555], [1527, 1441, 1681], [1683, 1599, 1193], [1376, 1680, 1557], [1273, 1376, 1557], [1685, 1192, 1684], [1560, 1558, 1773], [1385, 1775, 1559], [1688, 1683, 1194], [1686, 1381, 1192], [1490, 1273, 1774], [1241, 1490, 1774], [1687, 1383, 1600], [1385, 1388, 1689], [1600, 1383, 1386], [1492, 1381, 1692], [1310, 1241, 1693], [1563, 1492, 1692], [1564, 1388, 1695], [1695, 1388, 1564], [1692, 1563, 1195], [1390, 1692, 1776], [1390, 1563, 1692], [1698, 1566, 1392], [1391, 1393, 1529], [1464, 1565, 1777], [1567, 1464, 1777], [1601, 1530, 1698], [1393, 1394, 1701], [1778, 1394, 1703], [1203, 1279, 1702], [1802, 1568, 1204], [1570, 1425, 1705], [1475, 1704, 1444], [1780, 1782, 1706], [1781, 1605, 1606], [1606, 1785, 1781], [1784, 1704, 1475], [1706, 1782, 1531], [1784, 1475, 1426], [1569, 1783, 1608], [1607, 1788, 1606], [1787, 1706, 1571], [1606, 1790, 1785], [1803, 1786, 1285], [1706, 1282, 1571], [1397, 1313, 1707], [1803, 1285, 1708], [1397, 1707, 1610], [1710, 1316, 1573], [1319, 1711, 1792], [1319, 1792, 1337], [1712, 1476, 1714], [1579, 1446, 1580], [1579, 1580, 1793], [1721, 1428, 1717], [1478, 1721, 1722], [1290, 1719, 1723], [1290, 1500, 1719], [1581, 1403, 1582], [1290, 1723, 1405], [1503, 1478, 1722], [1727, 1402, 1726], [1726, 1503, 1722], [1402, 1503, 1726], [1728, 1583, 1291], [1409, 1720, 1404], [1724, 1729, 1405], [1720, 1409, 1585], [1291, 1338, 1728], [1506, 1413, 1733], [1448, 1732, 1736], [1448, 1407, 1732], [1733, 1739, 1586], [1505, 1737, 1738], [1731, 1505, 1738], [1740, 1735, 1587], [1736, 1735, 1740], [1448, 1736, 1740], [1745, 1507, 1795], [1745, 1339, 1507], [1744, 1507, 1411], [1411, 1744, 1507], [1414, 1746, 1747], [1292, 1747, 1748], [1589, 1324, 1750], [1749, 1751, 1253], [1532, 1811, 1590], [1326, 1590, 1755], [1754, 1297, 1343], [1756, 1416, 1755], [1758, 1431, 1797], [1754, 1343, 1533], [1225, 1758, 1759], [1533, 1591, 1761], [1760, 1432, 1759], [1533, 1613, 1591], [1420, 1761, 1591], [1420, 1762, 1761], [1512, 1433, 1760], [1764, 1434, 1592], [1615, 1536, 1616], [1767, 1125, 1617], [1617, 1344, 1534], [1617, 1125, 1344], [1255, 1618, 1614], [1329, 1345, 1767], [1622, 1329, 1620], [1622, 1538, 1330], [1768, 1621, 1348], [1625, 1593, 1798], [1621, 1348, 1626], [1630, 1541, 1629], [1352, 1159, 1634], [1631, 1632, 1640], [1359, 1358, 1639], [1456, 1648, 1644], [1651, 1649, 1233], [1331, 1304, 1769], [1654, 1331, 1769], [1236, 1548, 1664], [1666, 1482, 1547], [1469, 1597, 1367], [1665, 1183, 1667], [1672, 1667, 1371], [1554, 1680, 1189], [1515, 1552, 1555], [1374, 1678, 1684], [1239, 1682, 1556], [1192, 1685, 1686], [1273, 1557, 1774], [1689, 1388, 1564], [1424, 1694, 1690], [1776, 1699, 1390], [1393, 1701, 1529], [1700, 1699, 1776], [1701, 1394, 1778], [1801, 1602, 1779], [1568, 1201, 1204], [1802, 1204, 1780], [1204, 1782, 1780], [1784, 1786, 1426], [1784, 1426, 1786], [1784, 1786, 1803], [1396, 1783, 1609], [1789, 1606, 1788], [1790, 1606, 1789], [1398, 1337, 1792], [1611, 1791, 1573], [1715, 1398, 1792], [1611, 1398, 1715], [1716, 1717, 1321], [1580, 1579, 1793], [1579, 1713, 1793], [1580, 1579, 1793], [1724, 1405, 1723], [1447, 1727, 1730], [1733, 1413, 1584], [1447, 1730, 1732], [1508, 1794, 1741], [1794, 1508, 1735], [1750, 1324, 1752], [1532, 1430, 1751], [1590, 1325, 1532], [1417, 1757, 1797], [1348, 1621, 1768], [1627, 1805, 1522], [1806, 1541, 1630], [1639, 1169, 1628], [1172, 1646, 1542], [1264, 1367, 1658], [1548, 1365, 1662], [1830, 1658, 1597], [1183, 1370, 1667], [1268, 1366, 1663], [1550, 1670, 1485], [1485, 1670, 1668], [1688, 1194, 1690], [1566, 1698, 1695], [1813, 1602, 1801], [1813, 1802, 1602], [1700, 1776, 1809], [1808, 1801, 1779], [1603, 1602, 1780], [1707, 1313, 1495], [1787, 1571, 1709], [1611, 1518, 1398], [1793, 1719, 1580], [1718, 1520, 1581], [1793, 1580, 1719], [1745, 1795, 1810], [1743, 1745, 1737], [1751, 1748, 1747], [1754, 1533, 1812], [1768, 1621, 1626], [1807, 1627, 1638], [1542, 1646, 1800], [1643, 1649, 1824], [1646, 1645, 1800], [1663, 1266, 1659], [1671, 1268, 1663], [1677, 1598, 1771], [1553, 1516, 1527], [1527, 1681, 1559], [1693, 1241, 1774], [1696, 1568, 1802], [1780, 1602, 1802], [1779, 1605, 1781], [1607, 1603, 1706], [1573, 1791, 1710], [1727, 1732, 1730], [1728, 1338, 1729], [1854, 1728, 1729], [1744, 1795, 1507], [1810, 1737, 1745], [1814, 1746, 1586], [1751, 1749, 1748], [1761, 1762, 1533], [1815, 1768, 1626], [1637, 1641, 1644], [1659, 1129, 1770], [1655, 1263, 1657], [1678, 1676, 1673], [1555, 1552, 1772], [1681, 1527, 1559], [1560, 1773, 1837], [1564, 1689, 1695], [1696, 1802, 1813], [1842, 1779, 1781], [1603, 1780, 1706], [1706, 1788, 1607], [1787, 1788, 1706], [1789, 1818, 1790], [1818, 1788, 1789], [1818, 1789, 1788], [1581, 1520, 1718], [1793, 1719, 1580], [1899, 1734, 1742], [1746, 1814, 1747], [1757, 1756, 1860], [1758, 1797, 1757], [1861, 1766, 1765], [1820, 1619, 1537], [1624, 1821, 1630], [1822, 1632, 1633], [1640, 1632, 1822], [1645, 1642, 1640], [1645, 1640, 1822], [1637, 1644, 1823], [2066, 1648, 1650], [1769, 1647, 1825], [1652, 1546, 1826], [1595, 1545, 1828], [1548, 1662, 1831], [1662, 1661, 1660], [1831, 1662, 1660], [1550, 1668, 1670], [1673, 1670, 1668], [1771, 1598, 1677], [1772, 1835, 1555], [1865, 1555, 1835], [1681, 1559, 1836], [1690, 1866, 1688], [1686, 1685, 1838], [1560, 1837, 1691], [1693, 1774, 1816], [1689, 1564, 1695], [1839, 1564, 1695], [1562, 1691, 1565], [1817, 1801, 1808], [1817, 1808, 1868], [1813, 1841, 1694], [1813, 1694, 1696], [1843, 1781, 1785], [1608, 1609, 1783], [1576, 1803, 1708], [1788, 1845, 1789], [1845, 1818, 1789], [1847, 1578, 1574], [1847, 1716, 1578], [1848, 1721, 1717], [1721, 1726, 1722], [1726, 1721, 1849], [1849, 1727, 1726], [1727, 1850, 1732], [1736, 1732, 1850], [1725, 1731, 1582], [1739, 1733, 1853], [1795, 1744, 1741], [1754, 1859, 1753], [1753, 1859, 1858], [1757, 1819, 1758], [1533, 1762, 1812], [1764, 1861, 1763], [1764, 1592, 1766], [1861, 1764, 1766], [1535, 1534, 1614], [1820, 1537, 1541], [1621, 1768, 1948], [2122, 1623, 2165], [1636, 1625, 1862], [1625, 1798, 1862], [1628, 1540, 1875], [1633, 1634, 1822], [1827, 1828, 1545], [1655, 1657, 1880], [1829, 1595, 1828], [1829, 1547, 1595], [1666, 1547, 1829], [1664, 1548, 1831], [1666, 1829, 1832], [1832, 1549, 1666], [1596, 1669, 1660], [1771, 1905, 1597], [1833, 1672, 1675], [1834, 1553, 1527], [1836, 1527, 1681], [1773, 1555, 1865], [1685, 1684, 1838], [1559, 1775, 1689], [1689, 1564, 1839], [1692, 1686, 1867], [1813, 1801, 1817], [1817, 1841, 1813], [1565, 1691, 1869], [1695, 1698, 1840], [1778, 1529, 1701], [1785, 1790, 1843], [1843, 1790, 1870], [1707, 1495, 1844], [1845, 1788, 1787], [1572, 1609, 1574], [1818, 1871, 1790], [1575, 1710, 1892], [1872, 1575, 1846], [1711, 1610, 1792], [1716, 1848, 1717], [1731, 1738, 1851], [1852, 1731, 1851], [1852, 1851, 1895], [1731, 1852, 1582], [1854, 1729, 1855], [1814, 1586, 1857], [1586, 1739, 1857], [1752, 1589, 1750], [1539, 1615, 1873], [1619, 1820, 1616], [1821, 1806, 1630], [1806, 1821, 1624], [1903, 1768, 1815], [1628, 1876, 1639], [1649, 1651, 1544], [1832, 1829, 1881], [1671, 1663, 1864], [1670, 1673, 1668], [1677, 1771, 1598], [1679, 1599, 1675], [1866, 1683, 1688], [1689, 1839, 1885], [1686, 1838, 1867], [1694, 1886, 1690], [1692, 1867, 1776], [1565, 1888, 1777], [1608, 1783, 1609], [1870, 1790, 1891], [1871, 1891, 1790], [1579, 1710, 1791], [1713, 1575, 1872], [1579, 1791, 1917], [1894, 1582, 1895], [1852, 1895, 1582], [1919, 1851, 1737], [1738, 1737, 1851], [1583, 1728, 1897], [1739, 1853, 1898], [1739, 1898, 1856], [1811, 1532, 1796], [1819, 1757, 1860], [1762, 1901, 1812], [2053, 1539, 1873], [1622, 1620, 2060], [1804, 1621, 2063], [1902, 1541, 1806], [1815, 1626, 1904], [1626, 1637, 1904], [1649, 1544, 1651], [1658, 1830, 1966], [1549, 1832, 1882], [1669, 1883, 1660], [1668, 1974, 1670], [1883, 1669, 1553], [1678, 1981, 1984], [1599, 1683, 1884], [1839, 1689, 1885], [1885, 1689, 1839], [1817, 1868, 1908], [1868, 1808, 1908], [1781, 1843, 1910], [1609, 1783, 1608], [1911, 1574, 1609], [1709, 1912, 1787], [1787, 1913, 1845], [1847, 1574, 1931], [1818, 1914, 1932], [1916, 1872, 1846], [1933, 1715, 1792], [1718, 1520, 1918], [1727, 1849, 2025], [1739, 1856, 1857], [1941, 1754, 1812], [1941, 1812, 1901], [1765, 1921, 1861], [2119, 1820, 1943], [2117, 1618, 2061], [1943, 1820, 1541], [1954, 1876, 1628], [1922, 1822, 1634], [1863, 1654, 1769], [1545, 1653, 1879], [1667, 1973, 1665], [1883, 1553, 1834], [1924, 1527, 1836], [1865, 1835, 1985], [1986, 1836, 1559], [1885, 1559, 1689], [2084, 1682, 1687], [1695, 1993, 1839], [1926, 1817, 1997], [1691, 1837, 1992], [1841, 1886, 1694], [1841, 1996, 1995], [1808, 1887, 1908], [1927, 1776, 1867], [2004, 2002, 1778], [2005, 1842, 2007], [1702, 1929, 1703], [1890, 1787, 1912], [1891, 1930, 1870], [1891, 1871, 1915], [1818, 1845, 1914], [1709, 1712, 2021], [2101, 1577, 1612], [1581, 1582, 1520], [1851, 1938, 1895], [1795, 2035, 1810], [1854, 1728, 1920], [1590, 1811, 2046], [1859, 1754, 1941], [1762, 1763, 1901], [2118, 1614, 1618], [2059, 1538, 1622], [1614, 1874, 1535], [1945, 1540, 1539], [1943, 1541, 1902], [1807, 1952, 1627], [1807, 1638, 1952], [1807, 1952, 1638], [1799, 1957, 1638], [1904, 1637, 1956], [1957, 1799, 1643], [1637, 1823, 2064], [1800, 1645, 1960], [1960, 1877, 1800], [1644, 1648, 1961], [1877, 1653, 1800], [1652, 1962, 2068], [1652, 1826, 1962], [1654, 1863, 2072], [1663, 1659, 1923], [1969, 1831, 1968], [1881, 1967, 1832], [1831, 1660, 1968], [1970, 1550, 1664], [1864, 1663, 1971], [1975, 1864, 1971], [1668, 1550, 1974], [1772, 1549, 1978], [1673, 1670, 1979], [1554, 1674, 2079], [1924, 2080, 1834], [2081, 1675, 1980], [1924, 1834, 1527], [1678, 1673, 1979], [1675, 1599, 1980], [1981, 1673, 1678], [1678, 1673, 1981], [2082, 1527, 1924], [2082, 1924, 1527], [1599, 1884, 1980], [1865, 1925, 1773], [1987, 1683, 1866], [1885, 1689, 1989], [1689, 1885, 1989], [1838, 1684, 1907], [1839, 1993, 1695], [1867, 1907, 1994], [1838, 1907, 1867], [1886, 1996, 1995], [1886, 1841, 1996], [1817, 1908, 1997], [1817, 1926, 1841], [1999, 1600, 1528], [1840, 1698, 1998], [1528, 1529, 1999], [1565, 1869, 2000], [1927, 1809, 1776], [2002, 1529, 1778], [1702, 1697, 2001], [2005, 1779, 1842], [2007, 1842, 1781], [1569, 1700, 2008], [1567, 2009, 1705], [1530, 1704, 2010], [1704, 1909, 2010], [2012, 1781, 1910], [1784, 1909, 1704], [1705, 1495, 1570], [1843, 1870, 2013], [1844, 1495, 1889], [1608, 2015, 1609], [2016, 1784, 1803], [2017, 1911, 1609], [2018, 1870, 2019], [1911, 1931, 1574], [1847, 1931, 2097], [1714, 2021, 1712], [1818, 1932, 1871], [1932, 1915, 1871], [1710, 1579, 1917], [2021, 1714, 2022], [1716, 2023, 1848], [1793, 1713, 1935], [1713, 1872, 1935], [1793, 1935, 1936], [2026, 1918, 1520], [1582, 2026, 1520], [1582, 1894, 2026], [2029, 1894, 1895], [1793, 1936, 1719], [2030, 1719, 2104], [1723, 1719, 2030], [1724, 2032, 1729], [1810, 1919, 1737], [1584, 1583, 1897], [1897, 1728, 1920], [1856, 1898, 2111], [1920, 1728, 1854], [2037, 1920, 1854], [2037, 1854, 1855], [1920, 1728, 1854], [2037, 1855, 1729], [1856, 2039, 2040], [1856, 1939, 2039], [1940, 1856, 2040], [1857, 1940, 2041], [1857, 2041, 1814], [1814, 2041, 1747], [2041, 1751, 1747], [2041, 2042, 1751], [1751, 2042, 2043], [2042, 2043, 1751], [2045, 1796, 1532], [1796, 2045, 1811], [2044, 1858, 1859], [1590, 2046, 1755], [1755, 2046, 1900], [1900, 1756, 1755], [1860, 1756, 2048], [1760, 1759, 2050], [1763, 1941, 1901], [1861, 2052, 1763], [1921, 1765, 1760], [1945, 1539, 2053], [1873, 1615, 2054], [2054, 1615, 2055], [2055, 1616, 2056], [2060, 1620, 1944], [1593, 1538, 2059], [1767, 1944, 1620], [2117, 1874, 1614], [2165, 1804, 2063], [1623, 1804, 2165], [1947, 1949, 1798], [1617, 1534, 2120], [2126, 1624, 2122], [1636, 1862, 1950], [1768, 1903, 1948], [1954, 1628, 1953], [1956, 1903, 1815], [1815, 1904, 1956], [1807, 1638, 1955], [1639, 1876, 1954], [1922, 2129, 1822], [1961, 2064, 1823], [2130, 1643, 2131], [2066, 1650, 2067], [1647, 2132, 2134], [1649, 1651, 1878], [1545, 1879, 2071], [2073, 1544, 1525], [1863, 1769, 2072], [2071, 1827, 1545], [1828, 1827, 1963], [1880, 1546, 1655], [1657, 1665, 1965], [1905, 1966, 1597], [1966, 1830, 1597], [1973, 1965, 1665], [2076, 1660, 1883], [1671, 1864, 1975], [1672, 1833, 1977], [2078, 1833, 1675], [2139, 1978, 1549], [1674, 1671, 2079], [1982, 1677, 1556], [1835, 1978, 1983], [1554, 2079, 1680], [2082, 1924, 1836], [1985, 1835, 1983], [1981, 1678, 1984], [2082, 1986, 1559], [2083, 1678, 1981], [2161, 1559, 1986], [1559, 1989, 1986], [1885, 1989, 1559], [1773, 1925, 1985], [2084, 1990, 1682], [2085, 1774, 1557], [1690, 1987, 1866], [1684, 2083, 1907], [2086, 1774, 2085], [2087, 1926, 1908], [1926, 1995, 1996], [1992, 1837, 1991], [1926, 1996, 1841], [2088, 1687, 1600], [1996, 1841, 1995], [1994, 1927, 1867], [1869, 1691, 2000], [1887, 1808, 1779], [2006, 1698, 1530], [2003, 1809, 1927], [2008, 1700, 2003], [1809, 2003, 1700], [2004, 1778, 1929], [1929, 1778, 1703], [2006, 1530, 2010], [2011, 1569, 2008], [2007, 1781, 2012], [2007, 2012, 1910], [2015, 1569, 2091], [2015, 1783, 1569], [2013, 1910, 1843], [2015, 1608, 1783], [1890, 1912, 2092], [1890, 2092, 2093], [2146, 2013, 2018], [2018, 2013, 1870], [1844, 2094, 1707], [1912, 1709, 2020], [1870, 1930, 2019], [1930, 2095, 2019], [2096, 1846, 1575], [2020, 1709, 2021], [1930, 1891, 1915], [1893, 1576, 1577], [1871, 1915, 2099], [1915, 1871, 2099], [1792, 1610, 1933], [2097, 2152, 1847], [2152, 1716, 1847], [1932, 1914, 2098], [1932, 2098, 2100], [1611, 1715, 1933], [2102, 1714, 1918], [1918, 1714, 1718], [1872, 1916, 1935], [1721, 1848, 2023], [1849, 1721, 2023], [1727, 2025, 2027], [1850, 2154, 2031], [1736, 1850, 2031], [1736, 2033, 1896], [2034, 1733, 1584], [2156, 1585, 2158], [1794, 1735, 2106], [2034, 1853, 1733], [2034, 2036, 1853], [2109, 1584, 1897], [2110, 1897, 1583], [2032, 2157, 1729], [2038, 1856, 2111], [2158, 1734, 1899], [1751, 2043, 2042], [2043, 1532, 1751], [1859, 1941, 2047], [1756, 1900, 2048], [2051, 1760, 2050], [1941, 1763, 1942], [1942, 1763, 2052], [2052, 1760, 2051], [2052, 1921, 1760], [1861, 1921, 2052], [2053, 1873, 2054], [2055, 1615, 1616], [2056, 1616, 2057], [2058, 1616, 1820], [2059, 1622, 2060], [1540, 2062, 1945], [2062, 1540, 1945], [1946, 1767, 1617], [1798, 1593, 1947], [2123, 1948, 1768], [1768, 1948, 2123], [2062, 2125, 1540], [1624, 1623, 2122], [2125, 1875, 1540], [2126, 1806, 1624], [1902, 1806, 2126], [1635, 1636, 1950], [1627, 2124, 1805], [1628, 1875, 2125], [1634, 1635, 2128], [1955, 1952, 1807], [1922, 1634, 2128], [1639, 1954, 1958], [1956, 1637, 1959], [1645, 1822, 2129], [1959, 1637, 2064], [2129, 1960, 1645], [1639, 1958, 1523], [2131, 1643, 1824], [1647, 2065, 2132], [1824, 1649, 2131], [1647, 1523, 2065], [2067, 1650, 1652], [2067, 1652, 2135], [1651, 1544, 2069], [1879, 1653, 2136], [2071, 1879, 2136], [2137, 1962, 1546], [1826, 1546, 1962], [1770, 1654, 2074], [2073, 1525, 2075], [1880, 2137, 1546], [1829, 1963, 1881], [2075, 1658, 1964], [1656, 1658, 2075], [1829, 1828, 1963], [1965, 1880, 1657], [1966, 1964, 1658], [1923, 1971, 1663], [1660, 1968, 1969], [1970, 1972, 1550], [1832, 1967, 1882], [2076, 1968, 1660], [1976, 1905, 1771], [2077, 1882, 1967], [1973, 1667, 1977], [1550, 1972, 1974], [2078, 1977, 1833], [1549, 1882, 2077], [2139, 1549, 2077], [1906, 2078, 1675], [1670, 1974, 1979], [2140, 1771, 1677], [2140, 1976, 1771], [1671, 2138, 2079], [1883, 1834, 2080], [1772, 1978, 2139], [1982, 2140, 1677], [1978, 1772, 2139], [1835, 1772, 1978], [1678, 1979, 1981], [1836, 1986, 2082], [1557, 1680, 2141], [1982, 1556, 1990], [1884, 1683, 1980], [1990, 1556, 1682], [1683, 1884, 1980], [1985, 1925, 1865], [1684, 1678, 2083], [2161, 1986, 1989], [1683, 1987, 1884], [1886, 1987, 1690], [2142, 1989, 1885], [1557, 1988, 2085], [1990, 2084, 1687], [2084, 1990, 1687], [1816, 1774, 2086], [1687, 2088, 2084], [1926, 1997, 1908], [2142, 1839, 1695], [1695, 1993, 2142], [1816, 2086, 2143], [1693, 1816, 2143], [1998, 1993, 1840], [1840, 1993, 1695], [1999, 1529, 2090], [1928, 1698, 2006], [2090, 1529, 2002], [1887, 1779, 2005], [1702, 2001, 1929], [2162, 1777, 1888], [1777, 2009, 1567], [2145, 2007, 1910], [2091, 1569, 2011], [2009, 2172, 1889], [2015, 2147, 1609], [1889, 2148, 1844], [2147, 2017, 1609], [1844, 2148, 2094], [1913, 1787, 1890], [1610, 1707, 2094], [1803, 1576, 2150], [2018, 2019, 2095], [1575, 1892, 2096], [1914, 1845, 1913], [1893, 2150, 1576], [1846, 2096, 2151], [1846, 2096, 2151], [1933, 1610, 2149], [1846, 2151, 1916], [2153, 1916, 2151], [1915, 2099, 1930], [1710, 1917, 1892], [1915, 1932, 2100], [2099, 1915, 2100], [2023, 1716, 2152], [1611, 1933, 1715], [1933, 1611, 1715], [2102, 2022, 1714], [1849, 2023, 2025], [2102, 1918, 2026], [2029, 2026, 1894], [1936, 2028, 1719], [1719, 2028, 2104], [2105, 1612, 1720], [1850, 1727, 2154], [1937, 2032, 1724], [1736, 2031, 2033], [2156, 1720, 1585], [2156, 2105, 1720], [2106, 1735, 1736], [2108, 1794, 2106], [1810, 2035, 2107], [1734, 2158, 1585], [1898, 1853, 2036], [1583, 1897, 2110], [2110, 1897, 1920], [1857, 1856, 1940], [1589, 2112, 1742], [1752, 2113, 1589], [2045, 1532, 2043], [2159, 1753, 1858], [2159, 1858, 2044], [2114, 1811, 2045], [2047, 2044, 1859], [1811, 2114, 2046], [1819, 1860, 2048], [2049, 1759, 1758], [2050, 1759, 2049], [2117, 1614, 2118], [2058, 2057, 1616], [2058, 1820, 2119], [2062, 1540, 1945], [1767, 1946, 1944], [1618, 1522, 2061], [1943, 1902, 2119], [2120, 1946, 1617], [1534, 1535, 2121], [1535, 1874, 2121], [2061, 1522, 2124], [1862, 1798, 1950], [1798, 1949, 1950], [2124, 1522, 1805], [1948, 2127, 2123], [2124, 1627, 1952], [1903, 2127, 1948], [1951, 1635, 1950], [1953, 1628, 2125], [1635, 1951, 2128], [1638, 1957, 1955], [1957, 1643, 2130], [1958, 2065, 1523], [1961, 1823, 1644], [1825, 1647, 2134], [2133, 1653, 1877], [1653, 2133, 2136], [2135, 1652, 2068], [2069, 1544, 2073], [2072, 1769, 2070], [1963, 1827, 2071], [1659, 1770, 1923], [1664, 1831, 1969], [1970, 1664, 1969], [1968, 1660, 1969], [1977, 1667, 1672], [1906, 1675, 2081], [2160, 2080, 1924], [1924, 2082, 2160], [1988, 1557, 2141], [2161, 2082, 1559], [1991, 1837, 1773], [2142, 1885, 1839], [1992, 2089, 1691], [1928, 1998, 1698], [1888, 1565, 2000], [1697, 2144, 2001], [1777, 2162, 2009], [1705, 2009, 1889], [1784, 2014, 1909], [1495, 1705, 1889], [1784, 2016, 2014], [1912, 2020, 2021], [2096, 1846, 2151], [1930, 2099, 2163], [1934, 1917, 1791], [1611, 2024, 1934], [1791, 1611, 1934], [1933, 2024, 1611], [2101, 1612, 2103], [1612, 2105, 2103], [2154, 1727, 2027], [1724, 1723, 1937], [1938, 1851, 1919], [1938, 1919, 2155], [1896, 2106, 1736], [1919, 1810, 2107], [2035, 1795, 1741], [2034, 1584, 2109], [2111, 1898, 2036], [2109, 1897, 2110], [2037, 1729, 2157], [2112, 1899, 1742], [2113, 2112, 1589], [2113, 1752, 2159], [1752, 1753, 2159], [1758, 1819, 2116], [2164, 1941, 1942], [2052, 2164, 1942], [1618, 2117, 2118], [1534, 2121, 2120], [2131, 1649, 1878], [1961, 1648, 2066], [1769, 1825, 2134], [1878, 1651, 2069], [1769, 2134, 2070], [2074, 1654, 2166], [1654, 2072, 2166], [2075, 1525, 1656], [1770, 2074, 1923], [2138, 1671, 1975], [2076, 1883, 2080], [2141, 1680, 2079], [1991, 1773, 1985], [2088, 1600, 1999], [1697, 2143, 2144], [2000, 1691, 2089], [2169, 1927, 1994], [1697, 1693, 2143], [1910, 2007, 2145], [2145, 2007, 1910], [2092, 2170, 2093], [2092, 2171, 2170], [1931, 1911, 2017], [2021, 2178, 1912], [2016, 1803, 2150], [2149, 1610, 2094], [1893, 1577, 2101], [1937, 1723, 2030], [2035, 1741, 2173], [1939, 1856, 2038], [1819, 2048, 2115], [2049, 1758, 2116], [1947, 1593, 2059], [2073, 2075, 2167], [1968, 2076, 1969], [1974, 1972, 1970], [2183, 1974, 1970], [1983, 1978, 2139], [1987, 1980, 1884], [1926, 2087, 2168], [2175, 1999, 2090], [2176, 2008, 1927], [2008, 2003, 1927], [2013, 2146, 1910], [2146, 2177, 1910], [2017, 2147, 2015], [2092, 1912, 2178], [1931, 2017, 2097], [2095, 1930, 2163], [1741, 1794, 2108], [2037, 2157, 2180], [2157, 2037, 2180], [1621, 1948, 2063], [1877, 1960, 2133], [2185, 1976, 2140], [1988, 2141, 2207], [1995, 1926, 2168], [2170, 2189, 2188], [2170, 2171, 2189], [2147, 2017, 2015], [2190, 2018, 2095], [2191, 2095, 2163], [2153, 1935, 1916], [1741, 2108, 2173], [2109, 2179, 2193], [2034, 2109, 2193], [1941, 2164, 2196], [1941, 2196, 2047], [2048, 1900, 2181], [1819, 2115, 2116], [2052, 2051, 2050], [2050, 2164, 2052], [2058, 2119, 2174], [2119, 2058, 2174], [2118, 2117, 2061], [2057, 2058, 2056], [1961, 2066, 2067], [2070, 2134, 2132], [1975, 1971, 2197], [2198, 1969, 2076], [2205, 2138, 1975], [2160, 2076, 2080], [1979, 1974, 2184], [2138, 2205, 2079], [1983, 2139, 2206], [1995, 2168, 2199], [2168, 2087, 2186], [1991, 1985, 2200], [2169, 1994, 1907], [1992, 2000, 2089], [1928, 1993, 1998], [1928, 2187, 1993], [2006, 2187, 1928], [2010, 1909, 2014], [2209, 2092, 2178], [2190, 2146, 2018], [2201, 2190, 2095], [2030, 2104, 2028], [1919, 2107, 2192], [2037, 2157, 2180], [2216, 2039, 2194], [2216, 2194, 2039], [2195, 2039, 2194], [1902, 2182, 2119], [2412, 2165, 2269], [1951, 1950, 2203], [2070, 2166, 2072], [1905, 1964, 1966], [2078, 1973, 1977], [2198, 2076, 2160], [1906, 2081, 2078], [2321, 1982, 1990], [2199, 1987, 1995], [2000, 2219, 1888], [2097, 2017, 2210], [2021, 2022, 2102], [2220, 2021, 2102], [2202, 1892, 1917], [2163, 2099, 2213], [2100, 2098, 2212], [1938, 1919, 2155], [1938, 2155, 1919], [2106, 1896, 2033], [1899, 2156, 2158], [2109, 2110, 2179], [2039, 2194, 2216], [2216, 2194, 2039], [2194, 2216, 2195], [2217, 2112, 2113], [2062, 1945, 2053], [2053, 2054, 2055], [2174, 2058, 2224], [2225, 2123, 2127], [2204, 1878, 2069], [2074, 2228, 1923], [1970, 1969, 2183], [1969, 2198, 2183], [2083, 2218, 1907], [1987, 1886, 1995], [2236, 2169, 1907], [1908, 1887, 2240], [2240, 1887, 2005], [2011, 2008, 2091], [2244, 2092, 2209], [2249, 1913, 1890], [2151, 2221, 2153], [2023, 2152, 2097], [1893, 2101, 2211], [2100, 2213, 2099], [2257, 2102, 2026], [2261, 2105, 2156], [1919, 2192, 2155], [2194, 2039, 1939], [2222, 1899, 2112], [2041, 1940, 2215], [2292, 2061, 2411], [2058, 2119, 2224], [2223, 2182, 1902], [2056, 2058, 2174], [1944, 1946, 2270], [2128, 2129, 1922], [1903, 1956, 2226], [2127, 1903, 2226], [1959, 2227, 1956], [1976, 2229, 1905], [2205, 1975, 2231], [2083, 2233, 2276], [1907, 2279, 2236], [2142, 1993, 2237], [2188, 2189, 2208], [2241, 1929, 2001], [1910, 2242, 2145], [2250, 2190, 2201], [1914, 1913, 2249], [2097, 2210, 2248], [2096, 2251, 2151], [2151, 2252, 2221], [1914, 2253, 2098], [2021, 2220, 2492], [2496, 2202, 1917], [2221, 2255, 2153], [1917, 1934, 2254], [2367, 1935, 2153], [2260, 1895, 1938], [2106, 2033, 2214], [2034, 2193, 2263], [2179, 2263, 2193], [2156, 1899, 2264], [2222, 2264, 1899], [2265, 2039, 2195], [2040, 2039, 2266], [2267, 2112, 2217], [2291, 2043, 2042], [2045, 2043, 2291], [2114, 2268, 2046], [2050, 2196, 2164], [2404, 2182, 2223], [2404, 2223, 2182], [1948, 2269, 2063], [2224, 2056, 2174], [2269, 2165, 2063], [2296, 2055, 2056], [2415, 2121, 2406], [2203, 1950, 2413], [2301, 1953, 2125], [1955, 1957, 2305], [2424, 2130, 2131], [2068, 1962, 2436], [1965, 1973, 2271], [2197, 2230, 1975], [2077, 1967, 2314], [2272, 2183, 2198], [2315, 2185, 2140], [2082, 2316, 2160], [1983, 2206, 2234], [2083, 1981, 2233], [1988, 2207, 2275], [2320, 2168, 2186], [1985, 1983, 2319], [2276, 2218, 2083], [2325, 2199, 2324], [2464, 1990, 2281], [2142, 2278, 1989], [2237, 2330, 2142], [1992, 1991, 2466], [2237, 1993, 2187], [2245, 2177, 2146], [2172, 2348, 1889], [2283, 2177, 2245], [2190, 2245, 2146], [2017, 2248, 2210], [2150, 1893, 2211], [2258, 2371, 2026], [2285, 1937, 2030], [2376, 2214, 2033], [2173, 2262, 2035], [2381, 2261, 2156], [2515, 2037, 2385], [2286, 2264, 2287], [2287, 2264, 2288], [2288, 2264, 2289], [2287, 2288, 2289], [2289, 2264, 2222], [2222, 2290, 2289], [2290, 2222, 2112], [2266, 2039, 2265], [2394, 2113, 2159], [2394, 2159, 2044], [2293, 2062, 2053], [2412, 2122, 2165], [2297, 2056, 2224], [2414, 2122, 2412], [2120, 2121, 2415], [2127, 2226, 2421], [1960, 2129, 2423], [2227, 1959, 2064], [2426, 1961, 2427], [2428, 2133, 1960], [2430, 2067, 2135], [2430, 2135, 2431], [2307, 2070, 2132], [2431, 2135, 2435], [2436, 1962, 2137], [1975, 2452, 2231], [1974, 2183, 2454], [2452, 2205, 2231], [2456, 2078, 2081], [2315, 2451, 2185], [2139, 2314, 2274], [2184, 2273, 1979], [2206, 2139, 2274], [2459, 2317, 2079], [2273, 1981, 1979], [2460, 2081, 1980], [2462, 2207, 2141], [2186, 2277, 2320], [2322, 2168, 2235], [2207, 2462, 2275], [2325, 1987, 2199], [2277, 2465, 2186], [2327, 1907, 2218], [2279, 1907, 2327], [2186, 2087, 2277], [2087, 2280, 2277], [2085, 2275, 2329], [2328, 1991, 2200], [2280, 2087, 2331], [2084, 2088, 2281], [2278, 2142, 2330], [2331, 2087, 1908], [2282, 2088, 1999], [2332, 2143, 2086], [2239, 2237, 2187], [2334, 2144, 2143], [1992, 2335, 2000], [1927, 2337, 2176], [2238, 2336, 2208], [2334, 2241, 2001], [2006, 2473, 2187], [2008, 2176, 2337], [2340, 2005, 2007], [2219, 2477, 1888], [2004, 1929, 2341], [1888, 2477, 2162], [2008, 2343, 2091], [2344, 2189, 2171], [2482, 2162, 2477], [2345, 2010, 2014], [2015, 2091, 2483], [2092, 2244, 2171], [2093, 2350, 2485], [2352, 2147, 2015], [2356, 2246, 2016], [2148, 2486, 2094], [2284, 2355, 2190], [2356, 2016, 2357], [2250, 2284, 2190], [2353, 2178, 2021], [2252, 2151, 2358], [2201, 2095, 2359], [2360, 2221, 2252], [1892, 2251, 2096], [2362, 2191, 2256], [2221, 2361, 2255], [2364, 2024, 1933], [2023, 2365, 2500], [2255, 2361, 2153], [2023, 2500, 2025], [2363, 2102, 2257], [2501, 2101, 2103], [2255, 2367, 2153], [2212, 2368, 2100], [2027, 2025, 2259], [2507, 2372, 2028], [2371, 2026, 2029], [2375, 2155, 2511], [2214, 2033, 2376], [2214, 2376, 2106], [2108, 2106, 2377], [2173, 2108, 2378], [2173, 2378, 2379], [2038, 2111, 2382], [2036, 2383, 2111], [2509, 2381, 2287], [2156, 2264, 2286], [2381, 2156, 2286], [2385, 2037, 2180], [2194, 1939, 2389], [2287, 2289, 2386], [2386, 2289, 2390], [2289, 2290, 2391], [2040, 2266, 1940], [2518, 2215, 2392], [2267, 2290, 2112], [2194, 2517, 2216], [2290, 2267, 2391], [2195, 2216, 2265], [2291, 2521, 2045], [2524, 2394, 2044], [2395, 2044, 2047], [2395, 2047, 2196], [1900, 2046, 2181], [2181, 2396, 2048], [2116, 2115, 2398], [2404, 2182, 2223], [1874, 2117, 2406], [2118, 2292, 2117], [2292, 2118, 2061], [2296, 2053, 2055], [2402, 2053, 2296], [2408, 1949, 1947], [2059, 2060, 2295], [2223, 1902, 2407], [1902, 2126, 2407], [2409, 2269, 1948], [1949, 2413, 1950], [2408, 2413, 1949], [2060, 1944, 2295], [2406, 2121, 1874], [2297, 2296, 2056], [2295, 1944, 2270], [2414, 2126, 2122], [2416, 2062, 2293], [2416, 2125, 2062], [1946, 2298, 2270], [1951, 2203, 2417], [2300, 1952, 2303], [1952, 2300, 2124], [2301, 2125, 2416], [2418, 1951, 2302], [1954, 1953, 2419], [1955, 2303, 1952], [1955, 2305, 2303], [2421, 2225, 2127], [1954, 2422, 1958], [2419, 2422, 1954], [1956, 2421, 2226], [1956, 2226, 2421], [2129, 2304, 2423], [1957, 2130, 2305], [2227, 2226, 1956], [2424, 2305, 2130], [2426, 2227, 2064], [2426, 2064, 1961], [2307, 2132, 2425], [2065, 2425, 2132], [1878, 2204, 2432], [2136, 2133, 2308], [2204, 2069, 2434], [2309, 2070, 2307], [2135, 2068, 2435], [2434, 2432, 2204], [2437, 2434, 2073], [2434, 2069, 2073], [2438, 2071, 2310], [2167, 2437, 2073], [2437, 2167, 2439], [1963, 2071, 2438], [2167, 2441, 2439], [2167, 2075, 2441], [2312, 2311, 2137], [2228, 2443, 1923], [1880, 1965, 2312], [2444, 2312, 1965], [2444, 1965, 2271], [2443, 2313, 1923], [1905, 2447, 1964], [2445, 1964, 2447], [1923, 2313, 1971], [2448, 1881, 2446], [1971, 2313, 2197], [2448, 2314, 1967], [1973, 2450, 2449], [2449, 2450, 2232], [2450, 1973, 2232], [2452, 1975, 2230], [2183, 2453, 2454], [2453, 2183, 2272], [2453, 2272, 2198], [1974, 2454, 2455], [2078, 2456, 2232], [2453, 2198, 2457], [2139, 2077, 2314], [2457, 2198, 2160], [2455, 2184, 1974], [2455, 2458, 2184], [2079, 2205, 2452], [2317, 2079, 2452], [2458, 2273, 2184], [2079, 2317, 2459], [2317, 2141, 2079], [2160, 2316, 2457], [2457, 2316, 2082], [2315, 2140, 1982], [2460, 2456, 2081], [2317, 2459, 2141], [2457, 2082, 2318], [1981, 2273, 2461], [2233, 1981, 2461], [2319, 2234, 2206], [2322, 2168, 2320], [2082, 2161, 2318], [2322, 2235, 2168], [1983, 2234, 2319], [1989, 2318, 2161], [1987, 2325, 2460], [1987, 2460, 1980], [2322, 2463, 2199], [1989, 2323, 2318], [2462, 1988, 2275], [2168, 2322, 2199], [2319, 2326, 1985], [2327, 2218, 2276], [2465, 2277, 2186], [2323, 1989, 2278], [2281, 1990, 2084], [2275, 2085, 1988], [2277, 2331, 2465], [2277, 2280, 2331], [2086, 2085, 2329], [2469, 2169, 2468], [2332, 2334, 2143], [2337, 1927, 2469], [1927, 2169, 2469], [2282, 1999, 2470], [1999, 2175, 2470], [2334, 2001, 2144], [2471, 2219, 2000], [2473, 2239, 2187], [2090, 2002, 2472], [2188, 2208, 2338], [2336, 2338, 2208], [2238, 2208, 2189], [2340, 2240, 2005], [2340, 2007, 2342], [2242, 2007, 2145], [2002, 2004, 2341], [2475, 2002, 2341], [2342, 2007, 2242], [2479, 1929, 2480], [2478, 2006, 2010], [2189, 2344, 2476], [2170, 2188, 2338], [1910, 2481, 2242], [2091, 2343, 2483], [2347, 2009, 2482], [2009, 2162, 2482], [2344, 2171, 2484], [2346, 1910, 2177], [2481, 1910, 2346], [2177, 2283, 2346], [2093, 2170, 2243], [2350, 2093, 2243], [2484, 2171, 2244], [2009, 2348, 2172], [2485, 2093, 2350], [2015, 2349, 2352], [2350, 2093, 2485], [1889, 2486, 2148], [2352, 2017, 2147], [2244, 2209, 2178], [1890, 2093, 2485], [2017, 2352, 2247], [1890, 2485, 2354], [2486, 2487, 2094], [2094, 2487, 2149], [2248, 2488, 2097], [2249, 2354, 1914], [2016, 2150, 2357], [2491, 1914, 2354], [2358, 2151, 2251], [2492, 2489, 2021], [2201, 2359, 2250], [2362, 2359, 2095], [2360, 2361, 2221], [2191, 2362, 2095], [2490, 2493, 2149], [1914, 2491, 2253], [2251, 1892, 2495], [2023, 2097, 2494], [2202, 2495, 1892], [2495, 2202, 2496], [2357, 2211, 2497], [2498, 2496, 1917], [2363, 2492, 2102], [2364, 1933, 2493], [1933, 2149, 2493], [1934, 2024, 2499], [2499, 2024, 2364], [2211, 2101, 2497], [2163, 2366, 2191], [2256, 2191, 2366], [2153, 2367, 2255], [2259, 2025, 2500], [2098, 2253, 2212], [2163, 2369, 2366], [2258, 2257, 2026], [2213, 2100, 2502], [2212, 2253, 2503], [2368, 2212, 2503], [1935, 2367, 2504], [2370, 2501, 2103], [2368, 2505, 2213], [2163, 2213, 2369], [2259, 2373, 2027], [2504, 2506, 1935], [2371, 2258, 2026], [2506, 2507, 1936], [2507, 2028, 1936], [2371, 2029, 1895], [2507, 2028, 2372], [2372, 2028, 2507], [2370, 2103, 2105], [2031, 2154, 2373], [2371, 1895, 2260], [2285, 2030, 2372], [2030, 2028, 2372], [2370, 2105, 2261], [2031, 2373, 2374], [2155, 2260, 1938], [2033, 2374, 2510], [2155, 2192, 2511], [2508, 2261, 2509], [2033, 2214, 2376], [2106, 2376, 2377], [2035, 2511, 2107], [2378, 2108, 2377], [2035, 2262, 2379], [2261, 2381, 2509], [2384, 2157, 2032], [2382, 2111, 2383], [2381, 2286, 2287], [2382, 1939, 2038], [2512, 1939, 2382], [2263, 2036, 2034], [2036, 2263, 2383], [2157, 2385, 2180], [2385, 2157, 2384], [2386, 2509, 2287], [2513, 2179, 2110], [2513, 2110, 2514], [2387, 2110, 1920], [1920, 2037, 2387], [1939, 2512, 2389], [2386, 2390, 2388], [2388, 2390, 2516], [2391, 2290, 2289], [2391, 2289, 2290], [2215, 1940, 2392], [2518, 2041, 2215], [2042, 2041, 2518], [2289, 2391, 2519], [2216, 2517, 2393], [2267, 2217, 2113], [2394, 2267, 2113], [2520, 2519, 2522], [2523, 2520, 2522], [2525, 2114, 2521], [2114, 2045, 2521], [2524, 2044, 2395], [2114, 2525, 2268], [2268, 2046, 2525], [2268, 2525, 2046], [2196, 2050, 2527], [2196, 2527, 2526], [2527, 2050, 2528], [2528, 2049, 2399], [2115, 2048, 2397], [2049, 2116, 2529], [2399, 2049, 2529], [2402, 2401, 2053], [2403, 2119, 2182], [1947, 2059, 2294], [2406, 2117, 2292], [2404, 2223, 2407], [1947, 2405, 2408], [2409, 1948, 2123], [2409, 2123, 2410], [2294, 2059, 2295], [2411, 2061, 2300], [2061, 2124, 2300], [2414, 2407, 2126], [2417, 2203, 2413], [2299, 1946, 2120], [2299, 2298, 1946], [2299, 2120, 2415], [2302, 1951, 2417], [2410, 2123, 2225], [2128, 1951, 2418], [2419, 1953, 2301], [2129, 2128, 2420], [2065, 1958, 2425], [2424, 2131, 2429], [2423, 2428, 1960], [1961, 2067, 2530], [2308, 2133, 2428], [2136, 2308, 2433], [2068, 2436, 2435], [2311, 2436, 2137], [2228, 2074, 2166], [2166, 2440, 2228], [2137, 1880, 2312], [1963, 2438, 2442], [2445, 2441, 1964], [2441, 2075, 1964], [2448, 1967, 1881], [2230, 2197, 2313], [2449, 2271, 1973], [1973, 2078, 2232], [1976, 2451, 2229], [2458, 2455, 2273], [2451, 1976, 2185], [2459, 2462, 2141], [2275, 1988, 2462], [2277, 2531, 2320], [2277, 2465, 2531], [2321, 1990, 2464], [2200, 1985, 2326], [1991, 2328, 2466], [1908, 2467, 2331], [2279, 2169, 2236], [2088, 2282, 2281], [2538, 2333, 2238], [1908, 2240, 2467], [1992, 2466, 2335], [2000, 2335, 2471], [2090, 2472, 2470], [2470, 2175, 2090], [2539, 2208, 2238], [2475, 2472, 2002], [2219, 2471, 2339], [2337, 2474, 2008], [2238, 2189, 2476], [2477, 2219, 2339], [2008, 2474, 2343], [2473, 2006, 2478], [2540, 2476, 2189], [2189, 2476, 2540], [2341, 1929, 2479], [1929, 2241, 2480], [2170, 2338, 2243], [2345, 2478, 2010], [2483, 2349, 2015], [2350, 2243, 2485], [2485, 2243, 2532], [2345, 2014, 2533], [1889, 2351, 2486], [2244, 2178, 2353], [2245, 2190, 2355], [2247, 2248, 2017], [2353, 2021, 2489], [2284, 2250, 2355], [2360, 2252, 2358], [2357, 2150, 2211], [2488, 2494, 2097], [2498, 1917, 2254], [2023, 2494, 2365], [2497, 2101, 2501], [2153, 2361, 2367], [2368, 2213, 2502], [2506, 1936, 1935], [2369, 2213, 2505], [2258, 2026, 2371], [2154, 2027, 2373], [2260, 2155, 2375], [2033, 2031, 2374], [2033, 2510, 2376], [2192, 2107, 2511], [2032, 1937, 2380], [2384, 2032, 2380], [2263, 2179, 2513], [2194, 2389, 2517], [1940, 2266, 2392], [2042, 2518, 2291], [2216, 2393, 2265], [2549, 2391, 2267], [2519, 2391, 2535], [2535, 2391, 2534], [2522, 2519, 2535], [2181, 2046, 2396], [2046, 2268, 2396], [2050, 2049, 2528], [2116, 2398, 2529], [2053, 2401, 2400], [2182, 2404, 2403], [1947, 2294, 2405], [2224, 2119, 2403], [2922, 2635, 2269], [2418, 2420, 2128], [2304, 2129, 2420], [2429, 2131, 1878], [2427, 1961, 2530], [2530, 2067, 2430], [1878, 2432, 2306], [2071, 2136, 2433], [2071, 2433, 2310], [2437, 2439, 2441], [1881, 2442, 2446], [2447, 1905, 2229], [2319, 2206, 2274], [1982, 2321, 2315], [2462, 2459, 2568], [2324, 2199, 2463], [2200, 2326, 2328], [2086, 2329, 2332], [2536, 2537, 2333], [2536, 2333, 2538], [2468, 2169, 2279], [2330, 2237, 2239], [2208, 2539, 2238], [2238, 2540, 2539], [2238, 2476, 2540], [2340, 2342, 2541], [2551, 2340, 2541], [2348, 2009, 2347], [2351, 1889, 2348], [2533, 2014, 2246], [2014, 2016, 2246], [2249, 1890, 2354], [2250, 2284, 2355], [2149, 2487, 2490], [2492, 2220, 2102], [2360, 2542, 2361], [2361, 2542, 2543], [2100, 2368, 2502], [1937, 2285, 2380], [2511, 2035, 2379], [2262, 2173, 2379], [2517, 2547, 2393], [2393, 2547, 2548], [2394, 2549, 2267], [2534, 2391, 2549], [2395, 2196, 2526], [2046, 2268, 2550], [2268, 2046, 2550], [2398, 2115, 2397], [2293, 2053, 2400], [2402, 2400, 2401], [2635, 2412, 2269], [2425, 1958, 2422], [2429, 1878, 2306], [2440, 2166, 2309], [1881, 1963, 2442], [2459, 2317, 2568], [2273, 2233, 2461], [2538, 2238, 2539], [2540, 2476, 2344], [2481, 2342, 2242], [2342, 2481, 2541], [1934, 2499, 2254], [2546, 2545, 2508], [2544, 2261, 2508], [2544, 2370, 2261], [2545, 2544, 2508], [2387, 2037, 2515], [2396, 2268, 2550], [2048, 2396, 2397], [2423, 2304, 2428], [2166, 2070, 2309], [2231, 2230, 2452], [2452, 2230, 2231], [2456, 2552, 2232], [2565, 2566, 2273], [2570, 2569, 2320], [2316, 2457, 2318], [2325, 2554, 2460], [2573, 2325, 2324], [2554, 2325, 2536], [2325, 2537, 2536], [2540, 2344, 2484], [2541, 2481, 2555], [2582, 2541, 2555], [2353, 2489, 2583], [2514, 2110, 2387], [2401, 2400, 2402], [2298, 2299, 2647], [2300, 2303, 2557], [2418, 2302, 2417], [2426, 2558, 2227], [2310, 2433, 2438], [2228, 2313, 2443], [2560, 2313, 2228], [2448, 2562, 2314], [2232, 2563, 2449], [2564, 2452, 2230], [2231, 2452, 2564], [2231, 2564, 2452], [2455, 2565, 2273], [2567, 2563, 2232], [2552, 2567, 2232], [2454, 2453, 2457], [2273, 2566, 2565], [2233, 2273, 2566], [2322, 2320, 2569], [2571, 2315, 2321], [2460, 2552, 2456], [2553, 2552, 2460], [2276, 2233, 2572], [2324, 2463, 2573], [2323, 2574, 2318], [2318, 2574, 2316], [2327, 2276, 2572], [2575, 2553, 2554], [2553, 2460, 2554], [2323, 2278, 2574], [2275, 2576, 2329], [2334, 2332, 2577], [2475, 2470, 2472], [2577, 2578, 2334], [2241, 2334, 2578], [2341, 2479, 2475], [2480, 2241, 2579], [2594, 2340, 2551], [2338, 2532, 2243], [2485, 2532, 2580], [2483, 2352, 2349], [2532, 2551, 2580], [2580, 2551, 2541], [2555, 2481, 2581], [2481, 2346, 2581], [2284, 2245, 2355], [2492, 2583, 2489], [2584, 2493, 2490], [2250, 2359, 2362], [2495, 2496, 2498], [2492, 2363, 2257], [2362, 2256, 2585], [2585, 2256, 2587], [2361, 2586, 2367], [2368, 2503, 2502], [2502, 2505, 2368], [2507, 2506, 2588], [2507, 2588, 2372], [2378, 2377, 2591], [2378, 2591, 2379], [2518, 2521, 2291], [2522, 2520, 2523], [2404, 2407, 2556], [2403, 2404, 2223], [2300, 2303, 2557], [2419, 2301, 2422], [2421, 2226, 2227], [2558, 2559, 2227], [2447, 2561, 2445], [2449, 2593, 2592], [2593, 2449, 2563], [2553, 2567, 2552], [2570, 2320, 2531], [2599, 2281, 2282], [2594, 2551, 2532], [2601, 2352, 2483], [2580, 2541, 2582], [2533, 2246, 2356], [2603, 2581, 2245], [2486, 2351, 2487], [2373, 2259, 2500], [2589, 2374, 2373], [2371, 2260, 2590], [2528, 2595, 2527], [2891, 2408, 2405], [2631, 2409, 2632], [2300, 2557, 2303], [2435, 2436, 2311], [2561, 2447, 2229], [2553, 2598, 2567], [2597, 2570, 2531], [2609, 2238, 2333], [2610, 2470, 2475], [2474, 2337, 2343], [2532, 2338, 2594], [2485, 2580, 2354], [2284, 2603, 2245], [2354, 2580, 2602], [2542, 2604, 2543], [2257, 2258, 2371], [2502, 2368, 2505], [2528, 2399, 2595], [2627, 2404, 2556], [2293, 2625, 2644], [2300, 2557, 2637], [2647, 2299, 2415], [2301, 2416, 2649], [2445, 2561, 2229], [2592, 2444, 2449], [2593, 2616, 2592], [2570, 2597, 2607], [2726, 2715, 2321], [2608, 2574, 2278], [2469, 2468, 2279], [2905, 2279, 2735], [2741, 2599, 2282], [2479, 2600, 2475], [2245, 2581, 2346], [2245, 2346, 2283], [2582, 2555, 2612], [2582, 2611, 2602], [2612, 2555, 2581], [2611, 2582, 2612], [2584, 2806, 2493], [2365, 2793, 2500], [2543, 2605, 2361], [2369, 2505, 2824], [2606, 2521, 2518], [2626, 2402, 2634], [2412, 2642, 2414], [2636, 2294, 2295], [2893, 2270, 2614], [2656, 2225, 2421], [2658, 2656, 2421], [2421, 2227, 2596], [2530, 2430, 2427], [2530, 2615, 2427], [2666, 2530, 2430], [2430, 2530, 2427], [2306, 2432, 2434], [2306, 2434, 2670], [2677, 2438, 2674], [2675, 2434, 2437], [2442, 2438, 2677], [2681, 2560, 2228], [2684, 2441, 2686], [2442, 2685, 2446], [2444, 2271, 2449], [2692, 2445, 2229], [2699, 2565, 2455], [2563, 2567, 2706], [2899, 2570, 2704], [2319, 2274, 2710], [2573, 2463, 2719], [2723, 2573, 2719], [2275, 2462, 2722], [2717, 2531, 2465], [2727, 2575, 2554], [2328, 2326, 2731], [2734, 2574, 2608], [2735, 2327, 2725], [2739, 2278, 2330], [2743, 2331, 2467], [2336, 2238, 2609], [2750, 2239, 2757], [2776, 2479, 2480], [2777, 2601, 2483], [2533, 2356, 2782], [2602, 2580, 2582], [2612, 2581, 2603], [2284, 2787, 2355], [2792, 2357, 2800], [2793, 2494, 2488], [2490, 2799, 2584], [2365, 2494, 2793], [2250, 2362, 2807], [2373, 2500, 2819], [2605, 2543, 2618], [2828, 2586, 2827], [2504, 2367, 2830], [2510, 2374, 2838], [2511, 2845, 2842], [2377, 2844, 2591], [2508, 2509, 2846], [2853, 2509, 2386], [2913, 2515, 2854], [2851, 2389, 2512], [2263, 2513, 2859], [2856, 2517, 2389], [2289, 2519, 2864], [2875, 2535, 2534], [2875, 2876, 2535], [2395, 2879, 2524], [2396, 2550, 2885], [2629, 2406, 2292], [2625, 2293, 2400], [2628, 2556, 2407], [2633, 2413, 2408], [2404, 2627, 2223], [2628, 2407, 2414], [2409, 2410, 2632], [2402, 2296, 2634], [2627, 2403, 2223], [2294, 2636, 2295], [2640, 2296, 2297], [2224, 2645, 2297], [2646, 2224, 2403], [2416, 2293, 2644], [2418, 2638, 2648], [2418, 2417, 2638], [2298, 2614, 2270], [2649, 2416, 2644], [2410, 2225, 2632], [2225, 2650, 2632], [2653, 2418, 2651], [2420, 2418, 2653], [2304, 2420, 2654], [2305, 2655, 2303], [2301, 2657, 2422], [2657, 2659, 2422], [2422, 2660, 2425], [2659, 2660, 2422], [2596, 2662, 2421], [2424, 2429, 2663], [2662, 2596, 2227], [2427, 2615, 2426], [2429, 2665, 2663], [2615, 2530, 2666], [2227, 2559, 2662], [2668, 2308, 2428], [2558, 2426, 2664], [2558, 2669, 2559], [2675, 2670, 2434], [2673, 2440, 2309], [2435, 2311, 2676], [2671, 2435, 2676], [2678, 2679, 2440], [2440, 2681, 2228], [2679, 2681, 2440], [2683, 2442, 2677], [2683, 2685, 2442], [2560, 2681, 2313], [2312, 2444, 2687], [2686, 2441, 2445], [2444, 2688, 2687], [2448, 2446, 2685], [2448, 2685, 2691], [2693, 2230, 2690], [2592, 2616, 2444], [2230, 2313, 2690], [2616, 2898, 2688], [2693, 2564, 2230], [2694, 2692, 2229], [2451, 2694, 2229], [2448, 2691, 2562], [2616, 2593, 2695], [2564, 2693, 2452], [2696, 2452, 2693], [2616, 2695, 2593], [2314, 2562, 2697], [2570, 2703, 2704], [2454, 2457, 2702], [2451, 2315, 2705], [2711, 2566, 2700], [2695, 2563, 2706], [2570, 2899, 2569], [2316, 2709, 2457], [2316, 2712, 2709], [2322, 2569, 2463], [2567, 2598, 2713], [2607, 2597, 2531], [2319, 2710, 2716], [2315, 2571, 2715], [2572, 2714, 2720], [2572, 2233, 2714], [2716, 2721, 2319], [2325, 2723, 2724], [2723, 2325, 2573], [2464, 2726, 2321], [2727, 2553, 2575], [2728, 2717, 2465], [2275, 2722, 2576], [2329, 2576, 2722], [2729, 2574, 2734], [2329, 2722, 2736], [2727, 2554, 2737], [2732, 2537, 2325], [2536, 2737, 2554], [2278, 2734, 2608], [2734, 2278, 2739], [2743, 2740, 2331], [2736, 2332, 2329], [2536, 2538, 2742], [2745, 2332, 2736], [2328, 2733, 2466], [2281, 2599, 2741], [2333, 2537, 2748], [2239, 2744, 2330], [2752, 2336, 2748], [2466, 2749, 2335], [2469, 2747, 2337], [2751, 2282, 2470], [2336, 2609, 2748], [2240, 2743, 2467], [2749, 2471, 2335], [2749, 2756, 2471], [2754, 2758, 2337], [2755, 2240, 2340], [2337, 2758, 2343], [2471, 2763, 2339], [2336, 2752, 2338], [2470, 2610, 2761], [2610, 2475, 2761], [2340, 2594, 2766], [2339, 2767, 2477], [2241, 2578, 2768], [2594, 2338, 2762], [2760, 2483, 2343], [2769, 2579, 2241], [2540, 2484, 2771], [2477, 2772, 2482], [2479, 2773, 2600], [2774, 2347, 2482], [2774, 2482, 2772], [2779, 2480, 2579], [2779, 2579, 2778], [2348, 2347, 2774], [2352, 2601, 2777], [2777, 2780, 2352], [2244, 2771, 2484], [2781, 2351, 2348], [2356, 2783, 2782], [2352, 2780, 2247], [2907, 2244, 2353], [2780, 2785, 2247], [2487, 2351, 2784], [2785, 2248, 2247], [2603, 2284, 2787], [2602, 2790, 2617], [2602, 2611, 2790], [2793, 2488, 2248], [2583, 2492, 2791], [2354, 2602, 2617], [2784, 2490, 2487], [2248, 2785, 2793], [2354, 2617, 2491], [2792, 2356, 2357], [2787, 2284, 2250], [2794, 2797, 2542], [2794, 2542, 2360], [2799, 2490, 2784], [2250, 2359, 2786], [2250, 2786, 2796], [2798, 2360, 2358], [2250, 2802, 2359], [2800, 2357, 2792], [2804, 2251, 2495], [2795, 2492, 2805], [2543, 2604, 2797], [2805, 2492, 2257], [2802, 2250, 2807], [2973, 2804, 2808], [2497, 2810, 2809], [2500, 2793, 2814], [2254, 2812, 2498], [2254, 2816, 2812], [2499, 2816, 2254], [2807, 2362, 2585], [2253, 2815, 2503], [2820, 2256, 2366], [2821, 2807, 2585], [2810, 2497, 2501], [2370, 2810, 2501], [2820, 2366, 2369], [2370, 2620, 2619], [2502, 2503, 2815], [2368, 2502, 2823], [2820, 2369, 2824], [2256, 2820, 2825], [2256, 2825, 2587], [2827, 2586, 2361], [2827, 2361, 2605], [2586, 2828, 2367], [2827, 2605, 2618], [2832, 2620, 2370], [2831, 2585, 2587], [2832, 2370, 2544], [2368, 2823, 2505], [2831, 2821, 2585], [2504, 2830, 2506], [2826, 2589, 2373], [2504, 2506, 2830], [2830, 2506, 2504], [2836, 2506, 2830], [2833, 2374, 2589], [2824, 2505, 2823], [2621, 2588, 2506], [2260, 2837, 2590], [2836, 2588, 2621], [2260, 2375, 2837], [2376, 2510, 2839], [2836, 2372, 2588], [2379, 2591, 2845], [2840, 2546, 2846], [2546, 2508, 2846], [2849, 2384, 2380], [2512, 2622, 2851], [2852, 2512, 2382], [2622, 2512, 2852], [2850, 2509, 2853], [2849, 2385, 2384], [2854, 2384, 2385], [2854, 2385, 2384], [2854, 2385, 2849], [2853, 2386, 2388], [2515, 2385, 2854], [2851, 2856, 2389], [2382, 2383, 2852], [2858, 2914, 2263], [2860, 2513, 2514], [2861, 2517, 2856], [2390, 2862, 2516], [2861, 2547, 2517], [2863, 2547, 2861], [2390, 2289, 2864], [2547, 2865, 2548], [2519, 2866, 2864], [2548, 2865, 2867], [2392, 2266, 2868], [2518, 2392, 2868], [2519, 2520, 2866], [2869, 2266, 2265], [2870, 2393, 2548], [2265, 2393, 2870], [2624, 2548, 2867], [2606, 2518, 2872], [2522, 2873, 2520], [2548, 2624, 2874], [2606, 2872, 2521], [2875, 2549, 2921], [2873, 2522, 2876], [2878, 2394, 2524], [2522, 2535, 2876], [2877, 2525, 2521], [2877, 2880, 2525], [2526, 2879, 2395], [2527, 2881, 2526], [2527, 2882, 2881], [2268, 2525, 2883], [2882, 2527, 2884], [2527, 2595, 2884], [2550, 2268, 2883], [2885, 2886, 2396], [2887, 2888, 2399], [2884, 2399, 2888], [2889, 2396, 2886], [2396, 2889, 2397], [2398, 2397, 2890], [2401, 2626, 2625], [2625, 2400, 2401], [2626, 2401, 2402], [2627, 2556, 2628], [2629, 2292, 2892], [2642, 2407, 2628], [2642, 2628, 2407], [2411, 2300, 2892], [2630, 2294, 2636], [2639, 2406, 2629], [2634, 2296, 2640], [2642, 2412, 2635], [2893, 2294, 2295], [2643, 2415, 2406], [2406, 2639, 2643], [2403, 2641, 2646], [2613, 2298, 2647], [2651, 2418, 2648], [2557, 2303, 2637], [2224, 2894, 2646], [2225, 2656, 2650], [2652, 2303, 2655], [2653, 2654, 2420], [2428, 2304, 2661], [2658, 2421, 2662], [2305, 2424, 2655], [2655, 2424, 2663], [2615, 2664, 2426], [2429, 2306, 2665], [2668, 2428, 2661], [2667, 2662, 2559], [2558, 2664, 2669], [2667, 2559, 2669], [2309, 2307, 2895], [2673, 2309, 2895], [2308, 2668, 2433], [2430, 2431, 2435], [2430, 2435, 2671], [2438, 2433, 2674], [2680, 2675, 2437], [2682, 2311, 2312], [2682, 2676, 2311], [2680, 2437, 2441], [2680, 2441, 2684], [2897, 2682, 2688], [2687, 2682, 2312], [2682, 2687, 2688], [2690, 2313, 2689], [2686, 2445, 2692], [2444, 2616, 2688], [2616, 2592, 2898], [2592, 2616, 2898], [2699, 2455, 2698], [2455, 2454, 2698], [2693, 2452, 2696], [2695, 2616, 2593], [2700, 2565, 2699], [2273, 2565, 2700], [2695, 2593, 2563], [2566, 2273, 2700], [2703, 2570, 2704], [2900, 2704, 2570], [2274, 2314, 2697], [2702, 2457, 2709], [2707, 2317, 2452], [2935, 2695, 2706], [2900, 2570, 2607], [2568, 2317, 2707], [2708, 2569, 2936], [2462, 2568, 2707], [2569, 2708, 2936], [2714, 2233, 2566], [2463, 2936, 2719], [2607, 2531, 2717], [2462, 2901, 2902], [2598, 2553, 2718], [2571, 2321, 2715], [2462, 2902, 2722], [2725, 2327, 2572], [2572, 2720, 2725], [2574, 2729, 2316], [2316, 2729, 2712], [2721, 2326, 2319], [2731, 2326, 2721], [2464, 2281, 2738], [2735, 2279, 2327], [2737, 2903, 2727], [2724, 2732, 2325], [2465, 2331, 2740], [2904, 2732, 2537], [2469, 2279, 2905], [2330, 2744, 2739], [2281, 2741, 2738], [2536, 2742, 2737], [2733, 2746, 2466], [2577, 2332, 2745], [2466, 2746, 2749], [2239, 2750, 2744], [2751, 2926, 2741], [2751, 2741, 2282], [2754, 2337, 2747], [2759, 2742, 2539], [2742, 2538, 2539], [2759, 2539, 2540], [2758, 2760, 2343], [2471, 2756, 2763], [2578, 2577, 2753], [2338, 2752, 2762], [2751, 2470, 2761], [2766, 2764, 2340], [2478, 2765, 2473], [2594, 2762, 2766], [2241, 2768, 2769], [2345, 2765, 2478], [2475, 2600, 2773], [2778, 2579, 2769], [2483, 2775, 2777], [2773, 2479, 2776], [2345, 2533, 2770], [2770, 2533, 2782], [2774, 2781, 2348], [2939, 2907, 2244], [2784, 2351, 2781], [2907, 2353, 2791], [2939, 2907, 2791], [2789, 2787, 2284], [2789, 2284, 2355], [2791, 2353, 2583], [2612, 2603, 2786], [2788, 2612, 2786], [2611, 2612, 2788], [2790, 2611, 2788], [2355, 2787, 2789], [2790, 2908, 2617], [2783, 2356, 2792], [2787, 2796, 2786], [2787, 2250, 2796], [2795, 2791, 2492], [2602, 2617, 2908], [2908, 2617, 2602], [2802, 2786, 2359], [2604, 2542, 2797], [2617, 2602, 2908], [2602, 2617, 2908], [2909, 2358, 2251], [2491, 2617, 2908], [2803, 2491, 2908], [2806, 2584, 2799], [2357, 2809, 2792], [2491, 2803, 2253], [2804, 2495, 2498], [2357, 2497, 2809], [2812, 2808, 2498], [2543, 2813, 2910], [2499, 2364, 2817], [2815, 2811, 2502], [2543, 2910, 2813], [2543, 2813, 2618], [2823, 2502, 2811], [2826, 2373, 2819], [2822, 2371, 2911], [2587, 2829, 2831], [2589, 2826, 2833], [2834, 2911, 2371], [2371, 2590, 2834], [2834, 2590, 2837], [2546, 2840, 2545], [2840, 2835, 2545], [2506, 2836, 2621], [2837, 2511, 2842], [2836, 2841, 2372], [2377, 2376, 2839], [2511, 2379, 2845], [2285, 2847, 2848], [2380, 2285, 2848], [2846, 2509, 2850], [2849, 2380, 2848], [2855, 2853, 2388], [2514, 2387, 2857], [2383, 2915, 2852], [2914, 2915, 2383], [2914, 2383, 2263], [2853, 2855, 2388], [2388, 2516, 2853], [2516, 2862, 2853], [2863, 2865, 2547], [2519, 2917, 2866], [2917, 2864, 2866], [2916, 2864, 2917], [2519, 2866, 2917], [2266, 2623, 2868], [2869, 2265, 2871], [2918, 2266, 2869], [2872, 2518, 2868], [2520, 2873, 2866], [2623, 2266, 2918], [2919, 2624, 2867], [2870, 2548, 2874], [2874, 2624, 2919], [2872, 2877, 2521], [2394, 2878, 2920], [2549, 2394, 2920], [2921, 2549, 2920], [2534, 2549, 2875], [2524, 2879, 2878], [2879, 2526, 2881], [2595, 2399, 2884], [2399, 2529, 2887], [2529, 2398, 2887], [2891, 2405, 2630], [2892, 2292, 2411], [2628, 2414, 2642], [2269, 2409, 2631], [2417, 2413, 2633], [2630, 2405, 2294], [2641, 2403, 2627], [2636, 2294, 2893], [2640, 2297, 2645], [2893, 2295, 2270], [2614, 2298, 2613], [2647, 2415, 2643], [2645, 2224, 2646], [2224, 2646, 2894], [2637, 2303, 2652], [2657, 2301, 2649], [2923, 2304, 2654], [2307, 2425, 2660], [2924, 2615, 2666], [2896, 2306, 2670], [2666, 2430, 2671], [2672, 2433, 2668], [2433, 2672, 2674], [2678, 2440, 2679], [2898, 2616, 2695], [2701, 2452, 2693], [2454, 2702, 2698], [2707, 2452, 2701], [2569, 2899, 2708], [2694, 2451, 2705], [2714, 2566, 2711], [2706, 2567, 2713], [2463, 2569, 2936], [2901, 2462, 2902], [2462, 2707, 2902], [2713, 2598, 2718], [2464, 2730, 2726], [2733, 2328, 2731], [2730, 2464, 2738], [2904, 2732, 2724], [2925, 2904, 2724], [2903, 2737, 2536], [2903, 2536, 2737], [2609, 2333, 2748], [2753, 2577, 2745], [2757, 2239, 2765], [2906, 2759, 2540], [2755, 2340, 2764], [2239, 2473, 2765], [2767, 2339, 2763], [2906, 2540, 2771], [2477, 2767, 2772], [2907, 2939, 2244], [2603, 2787, 2786], [2798, 2358, 2801], [2253, 2803, 2815], [2803, 2811, 2815], [2803, 2908, 2811], [2804, 2498, 2808], [2817, 2364, 2493], [2806, 2817, 2493], [2499, 2817, 2816], [2819, 2500, 2814], [2822, 2818, 2257], [2257, 2371, 2822], [2587, 2825, 2829], [2544, 2835, 2832], [2544, 2545, 2835], [2374, 2833, 2838], [2510, 2838, 2839], [2837, 2375, 2511], [2843, 2377, 2839], [2845, 2591, 2844], [2263, 2859, 2858], [2859, 2513, 2860], [2390, 2864, 2862], [2868, 2623, 2918], [2871, 2265, 2870], [2595, 2888, 2884], [2398, 2890, 2887], [2633, 2408, 2891], [2894, 2645, 2646], [2950, 2645, 2894], [2650, 2656, 2933], [2658, 2933, 2656], [2661, 2304, 2923], [2657, 2660, 2659], [2307, 2660, 2895], [2669, 2664, 2615], [2667, 2934, 2662], [2306, 2896, 2665], [2665, 2896, 2670], [2440, 2673, 2679], [2313, 2681, 2689], [2697, 2562, 2691], [2705, 2315, 2715], [2553, 2727, 2718], [2537, 2732, 2904], [2747, 2469, 2905], [2748, 2537, 2732], [2743, 2240, 2755], [2755, 2766, 2937], [2766, 2755, 2764], [2483, 2760, 2775], [2765, 2345, 2770], [2927, 2779, 2778], [2776, 2480, 2928], [2480, 2779, 2928], [2779, 2927, 2928], [2939, 2771, 2907], [2785, 2780, 2940], [2944, 2790, 2788], [2944, 2908, 2790], [2794, 2360, 2798], [2801, 2358, 2909], [2909, 2251, 2804], [2814, 2793, 2953], [2818, 2805, 2257], [2813, 2543, 2797], [2811, 2945, 2823], [2619, 2810, 2370], [2911, 2834, 2822], [2367, 2828, 2830], [2846, 2832, 2840], [2835, 2840, 2832], [2954, 2839, 2838], [2844, 2377, 2843], [2285, 2372, 2841], [2857, 2387, 2515], [2860, 2514, 2857], [2872, 2868, 2946], [2873, 2876, 2866], [2918, 2869, 2871], [2920, 2878, 3003], [2595, 2884, 2888], [2885, 2550, 2883], [2887, 2948, 2884], [2881, 2947, 2879], [2930, 2879, 2947], [2890, 2397, 2889], [2955, 2627, 2628], [2922, 2269, 2631], [2638, 2417, 2633], [2892, 2300, 2637], [2958, 2894, 2932], [2615, 2924, 2664], [2615, 2664, 2669], [2701, 2693, 2951], [2274, 2697, 2710], [2728, 2465, 2740], [2742, 2988, 2903], [2745, 2736, 2966], [2766, 2762, 2752], [2768, 2578, 2753], [2475, 2773, 2761], [2938, 2776, 2928], [2928, 2927, 2778], [2771, 2244, 2907], [2928, 2778, 2927], [2799, 2784, 2942], [2795, 2805, 2791], [2943, 2788, 2786], [2943, 2786, 2802], [2944, 2788, 2943], [2811, 2908, 2944], [2802, 2807, 2796], [2811, 2944, 2945], [2823, 2945, 2824], [2857, 2515, 2913], [2946, 2868, 2918], [2525, 2880, 2883], [2628, 2627, 2955], [2657, 2959, 2660], [2960, 2666, 2671], [2961, 2671, 2676], [2897, 2688, 2981], [2982, 2898, 2695], [2936, 2569, 2708], [2723, 2719, 2936], [2713, 2718, 2727], [2965, 2726, 2730], [2965, 2730, 2738], [2967, 2743, 2755], [2766, 2752, 2937], [2761, 2773, 2968], [2773, 2776, 3011], [2990, 2771, 2939], [2770, 2782, 2970], [2784, 2781, 2971], [2929, 2941, 2952], [2793, 2785, 2972], [2797, 2929, 2813], [2945, 2944, 2943], [2945, 2943, 2820], [2796, 2825, 2802], [2825, 2796, 2807], [2807, 2796, 2825], [2945, 2820, 2824], [2833, 2826, 2819], [2810, 2619, 2974], [2619, 2620, 2974], [2822, 2834, 2995], [2827, 2618, 2912], [2830, 2975, 2836], [2847, 2285, 2841], [2853, 2862, 2864], [2864, 2976, 2853], [2888, 2887, 2884], [2886, 2885, 2883], [2931, 3003, 2930], [3003, 2879, 2930], [2956, 2628, 2642], [2632, 2650, 2957], [2669, 2664, 2924], [2682, 2897, 2979], [2951, 2693, 2690], [2983, 2704, 2984], [2704, 2900, 2984], [2962, 2723, 2936], [2902, 2707, 2986], [2935, 2706, 2713], [2748, 2732, 2904], [2744, 2734, 2739], [2754, 2747, 2758], [2765, 2770, 2969], [2927, 2778, 2991], [2805, 2992, 2791], [2822, 2805, 2818], [2813, 2929, 2993], [2796, 2807, 2825], [2813, 2993, 2994], [2994, 2618, 2813], [2838, 2833, 2996], [2845, 2998, 2842], [2853, 2976, 2850], [2854, 2849, 3000], [2851, 2622, 2852], [3001, 2852, 2915], [2914, 2858, 2915], [2871, 2870, 2977], [2871, 2977, 2918], [2978, 2894, 2958], [2897, 2981, 2980], [2690, 2689, 3031], [2899, 2704, 2983], [2707, 2701, 3008], [2702, 2709, 2985], [2708, 2899, 2936], [2707, 3008, 2986], [2717, 3009, 2607], [2963, 3009, 2717], [2963, 3009, 2717], [3009, 2963, 2717], [2713, 2727, 2987], [2722, 2902, 3033], [2905, 2735, 2725], [2903, 2737, 2742], [2989, 2758, 2747], [2988, 2742, 2759], [2750, 2757, 2765], [3020, 2759, 2906], [2906, 2771, 3010], [2775, 2760, 2777], [2969, 2770, 2970], [2776, 2938, 3011], [3034, 2792, 2809], [2825, 2820, 2943], [2819, 2814, 2953], [2833, 2819, 2996], [2834, 2837, 2995], [2829, 2825, 2831], [2843, 2839, 2954], [2999, 2843, 2954], [2620, 2832, 2997], [2998, 3013, 2842], [2837, 2842, 3013], [2997, 2832, 2846], [2843, 2999, 3014], [2845, 2844, 2998], [3014, 2998, 2844], [3015, 2846, 2850], [3015, 2997, 2846], [3016, 2850, 2976], [2851, 2852, 3001], [3002, 2859, 2860], [2917, 2866, 2876], [2878, 2879, 3003], [3004, 2874, 2919], [3005, 2918, 2977], [2949, 2931, 2930], [2627, 2628, 2955], [2625, 2649, 2644], [2932, 2894, 2958], [3041, 2665, 2670], [2682, 2979, 2676], [2689, 2681, 3031], [2981, 2688, 2898], [2699, 3045, 3093], [2694, 2705, 3018], [2709, 2712, 2964], [2713, 3019, 2935], [2902, 2722, 3033], [2723, 2719, 2724], [2719, 2925, 2724], [2966, 2736, 2722], [2988, 2759, 3020], [2751, 2761, 3021], [2751, 3021, 2926], [3020, 2906, 3010], [2777, 2760, 3022], [3010, 2771, 2990], [2781, 2774, 3023], [2778, 2769, 2991], [2929, 2952, 2941], [2909, 2804, 3248], [2805, 2822, 3024], [2929, 2952, 3012], [2993, 2929, 3012], [2943, 2802, 2825], [2993, 3025, 2994], [2807, 2821, 2831], [2830, 2828, 2975], [2844, 2843, 3014], [2851, 3001, 3026], [3016, 2976, 2916], [2916, 2976, 2864], [3035, 2916, 2917], [2876, 2875, 2917], [3004, 2870, 2874], [2886, 2883, 3027], [2887, 2890, 3028], [2882, 2947, 2881], [2930, 3029, 2949], [2636, 2893, 3174], [3176, 2893, 2614], [2646, 2645, 2950], [2646, 2950, 2894], [2655, 2663, 3007], [2978, 2958, 3017], [3032, 2981, 2898], [2694, 3018, 2692], [2964, 2712, 2729], [2744, 2750, 3226], [2755, 2937, 3113], [3117, 3010, 2990], [3129, 2785, 2940], [2939, 2791, 2992], [2942, 3135, 2799], [3133, 2783, 2792], [2838, 2996, 3056], [2858, 2859, 3002], [3035, 2917, 3036], [2946, 2918, 3005], [2919, 3037, 3004], [2672, 2668, 2674], [2673, 3043, 2679], [3085, 2897, 2979], [2680, 2684, 2686], [2983, 3044, 2899], [2982, 2695, 2935], [3033, 2722, 3101], [2722, 3033, 3101], [2727, 2903, 2987], [2738, 2741, 2965], [3103, 2748, 2904], [2967, 2755, 3051], [2937, 2752, 2748], [3114, 2760, 2758], [2767, 2772, 2774], [2772, 2767, 2774], [3120, 2968, 2773], [3023, 3122, 2781], [2940, 2780, 2777], [2972, 2953, 2793], [2819, 2953, 3054], [2799, 3055, 2806], [2995, 3145, 3143], [2837, 3145, 2995], [2825, 2807, 2831], [3145, 2837, 3143], [3057, 2827, 2912], [3150, 2847, 2841], [3015, 2850, 3016], [3155, 2854, 3367], [2916, 3035, 3016], [2887, 3028, 2948], [2886, 3027, 3063], [2889, 2886, 3063], [2890, 2889, 3028], [2949, 3170, 2931], [3289, 2628, 2956], [3293, 2892, 3173], [3064, 2956, 2642], [2642, 2635, 3064], [3379, 2630, 2636], [2643, 2639, 3069], [2645, 3068, 2640], [3070, 2641, 2627], [2958, 2894, 2978], [2653, 3072, 2654], [3075, 2978, 3017], [2933, 2658, 2662], [2933, 2662, 3076], [3079, 3017, 3030], [3080, 3079, 3030], [2960, 3081, 2666], [2673, 2895, 3043], [2961, 3083, 2671], [3084, 2670, 2675], [2679, 3043, 3190], [2676, 2979, 3085], [2979, 2897, 3085], [2979, 2897, 3086], [3088, 3031, 2681], [3086, 2897, 2980], [3086, 2980, 2981], [3196, 2981, 3032], [2692, 2686, 3090], [2686, 2692, 3090], [3092, 2984, 2900], [3032, 2898, 2982], [2700, 2699, 3093], [2702, 3202, 2698], [3018, 2705, 3046], [3324, 2702, 3327], [3018, 3046, 3047], [3046, 2705, 3047], [3098, 2714, 2711], [2709, 2964, 2985], [3209, 2935, 3019], [3097, 2723, 2962], [3097, 3099, 2723], [2705, 2715, 3212], [2719, 2723, 3100], [3048, 2964, 3216], [2964, 2729, 3216], [2722, 3101, 3033], [2966, 2722, 3033], [3107, 2987, 3049], [3033, 3101, 2966], [3049, 2987, 2903], [2904, 2925, 3103], [3107, 3049, 2903], [3219, 2966, 3101], [3341, 3107, 2903], [3106, 2747, 2905], [2967, 3051, 2743], [2753, 2745, 3223], [2761, 2968, 3120], [3121, 2772, 2767], [3236, 2777, 3232], [3121, 3023, 2774], [2940, 3236, 3124], [2939, 3237, 2990], [2940, 2777, 3236], [3125, 2927, 2991], [2938, 3239, 3127], [3130, 2938, 2928], [2784, 2971, 3128], [2972, 3129, 2940], [2785, 3129, 2972], [2784, 3350, 3052], [2942, 2784, 3052], [2972, 3243, 3134], [3134, 2953, 2972], [3242, 2992, 2805], [3352, 2798, 2801], [2801, 2909, 3138], [3246, 2792, 3034], [2809, 3246, 3034], [3244, 3024, 2822], [3056, 2996, 3251], [2993, 3012, 3141], [2954, 3056, 3251], [2838, 3056, 2954], [2954, 3254, 3146], [3146, 3147, 2954], [2999, 2954, 3147], [3256, 3143, 3013], [3057, 2828, 2827], [2848, 3365, 3268], [2849, 2848, 3268], [2997, 3015, 3151], [3152, 3000, 2849], [3155, 2913, 2854], [3368, 3156, 2860], [3158, 2851, 3026], [3001, 2915, 3059], [2917, 3162, 3036], [3162, 2917, 2875], [3164, 3162, 2920], [2920, 3162, 2921], [2870, 3004, 3278], [3164, 2920, 3003], [3164, 3003, 3165], [3061, 2946, 3005], [3279, 3004, 3037], [2884, 3062, 2882], [3284, 2947, 2882], [3290, 3289, 2956], [3292, 2891, 2630], [2629, 2892, 3293], [2626, 3294, 2625], [3295, 2633, 3171], [2639, 2629, 3293], [2892, 2637, 3173], [2922, 3064, 2635], [3174, 2893, 3176], [3177, 2613, 2647], [2641, 3070, 3071], [3178, 3177, 2647], [3067, 2632, 2957], [3069, 2647, 2643], [3301, 3006, 2614], [2653, 2651, 3180], [2978, 2894, 3038], [2978, 3075, 3038], [2663, 3308, 3306], [3077, 3030, 3017], [2934, 3078, 2662], [3188, 2663, 2665], [3080, 3040, 3079], [3040, 3017, 3079], [2666, 3186, 2924], [2934, 2667, 3312], [3313, 2674, 2668], [3040, 3080, 3042], [2677, 2674, 3313], [2683, 2677, 3191], [2686, 3087, 2680], [2690, 3031, 3088], [3193, 3194, 2690], [2692, 3195, 2686], [2951, 2690, 3194], [2691, 2685, 3089], [3197, 3091, 2983], [3199, 3196, 3032], [3092, 3197, 2983], [2951, 3194, 3198], [2984, 3092, 2983], [3044, 3201, 2899], [3198, 2701, 2951], [3199, 3032, 2982], [2699, 2698, 3202], [3008, 2701, 3198], [3008, 3198, 3094], [3321, 2900, 3092], [3202, 2702, 3323], [2900, 3203, 3092], [2692, 3018, 3204], [3206, 2982, 3095], [3206, 3095, 2982], [2899, 3205, 2936], [3095, 3206, 2982], [2936, 3205, 3207], [3097, 2936, 3208], [3096, 3098, 2700], [2936, 3207, 3208], [3098, 2711, 2700], [3097, 3208, 2962], [2962, 3208, 3097], [3097, 2962, 2936], [2986, 3008, 3210], [3209, 2982, 2935], [3329, 2607, 3009], [2902, 2986, 3211], [2705, 3212, 3332], [2720, 2714, 3331], [3213, 3019, 2713], [3214, 2717, 2728], [2725, 2720, 3334], [3217, 2713, 2987], [3103, 2925, 3218], [3337, 2728, 2740], [3105, 2733, 3338], [3104, 2734, 2744], [2965, 2741, 3050], [2903, 2988, 3109], [3222, 2748, 3103], [3220, 2965, 3050], [2747, 3221, 2989], [3221, 3110, 2989], [2755, 3111, 3051], [3227, 2741, 2926], [2988, 3020, 3109], [2937, 2748, 3225], [3051, 3111, 3113], [3111, 2755, 3113], [3344, 3109, 3020], [2989, 3114, 2758], [2760, 3114, 3118], [2926, 3115, 3227], [3229, 2768, 2753], [3117, 3344, 3020], [3115, 2926, 3021], [3117, 3020, 3010], [3022, 2760, 3118], [3116, 2765, 3119], [3115, 2761, 3120], [2774, 2772, 3121], [2777, 3022, 3232], [3233, 3119, 2765], [3233, 2765, 2969], [2769, 3234, 3235], [3125, 2769, 3235], [2773, 3011, 3120], [3011, 3127, 3120], [3125, 2991, 2769], [3126, 3237, 2939], [2969, 2970, 3123], [2971, 2781, 3128], [2938, 3127, 3011], [2940, 3124, 3238], [2940, 3238, 2972], [3131, 3130, 2928], [3132, 2927, 3125], [3126, 2939, 2992], [3130, 3239, 2938], [3240, 3131, 2928], [3128, 3350, 2784], [2938, 3239, 3130], [2938, 3130, 3239], [2928, 2927, 3241], [2927, 3132, 3241], [3130, 3131, 3239], [3240, 2928, 3241], [3351, 3242, 2992], [3242, 3351, 2992], [3135, 2942, 3052], [3351, 3242, 2805], [3137, 2953, 3134], [3351, 2805, 3244], [2952, 2929, 3136], [3245, 2952, 3136], [2953, 3137, 3139], [2953, 3139, 3054], [3024, 3244, 2805], [2929, 2797, 3053], [3136, 2929, 3053], [3354, 2797, 2794], [2996, 2819, 3139], [2952, 3141, 3012], [2952, 3245, 3141], [2799, 3247, 3055], [3054, 3139, 2819], [3249, 2996, 3139], [3253, 3244, 2822], [3246, 2809, 3140], [3253, 2822, 2995], [3252, 3253, 2995], [3143, 3252, 2995], [3144, 2809, 2810], [3146, 2954, 3251], [3141, 3148, 2993], [2954, 3146, 3254], [3013, 3257, 3256], [3261, 3256, 3257], [2999, 3255, 3258], [3014, 3260, 2998], [2998, 3261, 3259], [2999, 3258, 3014], [3260, 3259, 2998], [3259, 3261, 2998], [2998, 3259, 3261], [3261, 3257, 3013], [3261, 3013, 2998], [2974, 3262, 2810], [2620, 3262, 2974], [3262, 3265, 3149], [3057, 2618, 3263], [3262, 2620, 3265], [3057, 2912, 2618], [2997, 3265, 2620], [2828, 3266, 2975], [2841, 2836, 3267], [3152, 2849, 3268], [3151, 3149, 2997], [3153, 3000, 3152], [3015, 3016, 3151], [3269, 2854, 3000], [3270, 3154, 3016], [3158, 2856, 2851], [3158, 2861, 2856], [3016, 3271, 3270], [2858, 3002, 3157], [3016, 3035, 3271], [2858, 3272, 3273], [2858, 3273, 2915], [2861, 3158, 3369], [3271, 3035, 3274], [3276, 3275, 3026], [3026, 3001, 3370], [3036, 3274, 3035], [3161, 3371, 3274], [3161, 3274, 3036], [2865, 3160, 2867], [2867, 3160, 2919], [3162, 3161, 3036], [2875, 2921, 3162], [3163, 3278, 2870], [3277, 3037, 2919], [3278, 2977, 2870], [3374, 2946, 3061], [3061, 3005, 3166], [3166, 3005, 2977], [3168, 3027, 2883], [3168, 3283, 3027], [3063, 3281, 2889], [3169, 3028, 2889], [3285, 3165, 2931], [2931, 3165, 3003], [3029, 2930, 3286], [2634, 3288, 2626], [3291, 3290, 2956], [3171, 2891, 3292], [2956, 3064, 3291], [3064, 2635, 3291], [3287, 3294, 2626], [3289, 2955, 2628], [3172, 2632, 3067], [3172, 2631, 2632], [3297, 2639, 3293], [3296, 2638, 2633], [2627, 2955, 3289], [3292, 2630, 3379], [3068, 2634, 2640], [3379, 2636, 3174], [3175, 2646, 2641], [3296, 3299, 2648], [3296, 2648, 2638], [3068, 2645, 3065], [2613, 3177, 2614], [3301, 2614, 3006], [3298, 2637, 2652], [3302, 2625, 3294], [2650, 3300, 2957], [2648, 3180, 2651], [3298, 2652, 3179], [3181, 2649, 3302], [3072, 2653, 3180], [3304, 2649, 3181], [3182, 2894, 3038], [2894, 3182, 3038], [2657, 2649, 3304], [3074, 2650, 2933], [3038, 2894, 2978], [2958, 2978, 3038], [2923, 2654, 3303], [3183, 2958, 3038], [2661, 2923, 3305], [3039, 2655, 3306], [2959, 2657, 3184], [3304, 3184, 2657], [2661, 3305, 3307], [2958, 3183, 3017], [3007, 2663, 3306], [2660, 2959, 3184], [3017, 3077, 3075], [3309, 3030, 3077], [3030, 3309, 3080], [3308, 2663, 3188], [3310, 2660, 3184], [3310, 2895, 2660], [3017, 3040, 3077], [3187, 3078, 2934], [2661, 3307, 2668], [2924, 3186, 2669], [3311, 2669, 3186], [3188, 2665, 3041], [3310, 3043, 2895], [2669, 3311, 2667], [3042, 3080, 3189], [2960, 2671, 3081], [3041, 2670, 3314], [3081, 2671, 3082], [2670, 3084, 3314], [2671, 3083, 3082], [2961, 2676, 3315], [2961, 3315, 3083], [2676, 3085, 3315], [3192, 2681, 2679], [3085, 2979, 3086], [2675, 2680, 3087], [3192, 3088, 2681], [3193, 2690, 3088], [3193, 3088, 3194], [3087, 2686, 3317], [3380, 3086, 2981], [3380, 2981, 3196], [3319, 2691, 3089], [3197, 3092, 3318], [3194, 3381, 3198], [3201, 2983, 3091], [2697, 2691, 3319], [3090, 2692, 3204], [3200, 2699, 3202], [3205, 2899, 3201], [3094, 3198, 3320], [3092, 3203, 3321], [3206, 3199, 2982], [2702, 3324, 3323], [2700, 3093, 3096], [2697, 3325, 2710], [3210, 3008, 3094], [3326, 3095, 3209], [3209, 3095, 2982], [2986, 3210, 3211], [3331, 2714, 3098], [2705, 3332, 3047], [3019, 3213, 3330], [3333, 2716, 2710], [3209, 3019, 3330], [2723, 3099, 3100], [3384, 3329, 3009], [2902, 3211, 3383], [2722, 2902, 3383], [3333, 2721, 2716], [2987, 3217, 3335], [2719, 3218, 2925], [3100, 3218, 2719], [2721, 3333, 3215], [2715, 2726, 3102], [3213, 2713, 3335], [3335, 2713, 3217], [3217, 2987, 3335], [3214, 2728, 3337], [2721, 3215, 2731], [2905, 2725, 3339], [2726, 2965, 3102], [3338, 2733, 2731], [3102, 2965, 3220], [3217, 2987, 3107], [2740, 3340, 3337], [2746, 2733, 3105], [2746, 3105, 3342], [2747, 3106, 3221], [3221, 3106, 2747], [3221, 2747, 3106], [3341, 2903, 3109], [3108, 2743, 3051], [3225, 2748, 3222], [3114, 2989, 3110], [3225, 3113, 2937], [2746, 3342, 2749], [3050, 2741, 3227], [3344, 3341, 3109], [2749, 3112, 3228], [2756, 2749, 3228], [3226, 2750, 3116], [3118, 3114, 3386], [2756, 3228, 2763], [3116, 2750, 2765], [2768, 3229, 3230], [3231, 2767, 2763], [2761, 3115, 3021], [2768, 3230, 3234], [3118, 3232, 3022], [3120, 3345, 3115], [3387, 3117, 3237], [2769, 2768, 3234], [2990, 3237, 3117], [3122, 3023, 3121], [3346, 3237, 3126], [3120, 3127, 3347], [2970, 2782, 3123], [2781, 3348, 3128], [2782, 2783, 3123], [3126, 2992, 3242], [3127, 3239, 3349], [2972, 3238, 3243], [3126, 3242, 3351], [3240, 3239, 3131], [3241, 3132, 3125], [3133, 2792, 3246], [3247, 2799, 3135], [3247, 3135, 2799], [2794, 2798, 3352], [3355, 3141, 3245], [2804, 3356, 3248], [3247, 3250, 3055], [3392, 3251, 3249], [2996, 3249, 3251], [3357, 2804, 2973], [3356, 2804, 3357], [3357, 2973, 2808], [3358, 3357, 2808], [2808, 2812, 3358], [3142, 2806, 3055], [3140, 2809, 3144], [3359, 2812, 2816], [3360, 3144, 2810], [3146, 3251, 3254], [3146, 3254, 3255], [3147, 3146, 3255], [2816, 2817, 3361], [3142, 2817, 2806], [3262, 3360, 2810], [2999, 3147, 3255], [3141, 3362, 3148], [3013, 3143, 2837], [3148, 3025, 2993], [3260, 3258, 3259], [3258, 3260, 3014], [3148, 2994, 3025], [3058, 3263, 2618], [3264, 2828, 3057], [2994, 3058, 3148], [2994, 3148, 3058], [3148, 3058, 2994], [2994, 3058, 2618], [3266, 2828, 3264], [3266, 3363, 2975], [2997, 3149, 3265], [2836, 2975, 3363], [3267, 2836, 3364], [3150, 2841, 3267], [2848, 2847, 3150], [3151, 3016, 3154], [3366, 3151, 3154], [3000, 3153, 3269], [3154, 3270, 3366], [3367, 2854, 3269], [2857, 3368, 2860], [2863, 2861, 3369], [3059, 2915, 3273], [3275, 3158, 3026], [3276, 3026, 3370], [2863, 3369, 2865], [3369, 3159, 2865], [3159, 3160, 2865], [2872, 3372, 2877], [2872, 3060, 3372], [3160, 3277, 2919], [2870, 3278, 3163], [3167, 2977, 3278], [2877, 3372, 3280], [2880, 2877, 3280], [3277, 3279, 3037], [3004, 3279, 3278], [3061, 3166, 3374], [3062, 3282, 2882], [2883, 2880, 3280], [2883, 3280, 3168], [3063, 3027, 3281], [3169, 2889, 3281], [3376, 3005, 3166], [3027, 3283, 3281], [3166, 2977, 3167], [3167, 3377, 3166], [3284, 2882, 3282], [3378, 3165, 3285], [2930, 2947, 3284], [3284, 3378, 2930], [3286, 2930, 3378], [3170, 3285, 2931], [3286, 2949, 3029], [3286, 3170, 2949], [2626, 3288, 3287], [3068, 3288, 2634], [3064, 3291, 2635], [3070, 2627, 3289], [3064, 2922, 3066], [3178, 2647, 3069], [2957, 3300, 3067], [2648, 3299, 3180], [2649, 2625, 3302], [3301, 3176, 2614], [3039, 3179, 2652], [3303, 2654, 3072], [3039, 2652, 2655], [2655, 3007, 3306], [3017, 3183, 3077], [3074, 2933, 3076], [2662, 3078, 3076], [3307, 3185, 2668], [3312, 3187, 2934], [3185, 3313, 2668], [3311, 3312, 2667], [2679, 3190, 3192], [2675, 3087, 3084], [2685, 2683, 3089], [3317, 2686, 3195], [3195, 2692, 3090], [3320, 3196, 3199], [3044, 2983, 3201], [2900, 3321, 3092], [2699, 3200, 3045], [3320, 3199, 3206], [3094, 3320, 3382], [2702, 2985, 3327], [3204, 3018, 3047], [3206, 3095, 3326], [3210, 3094, 3211], [3094, 3382, 3211], [3384, 2963, 2717], [3102, 3212, 2715], [3101, 2722, 3383], [2720, 3331, 3334], [2731, 3215, 3338], [3216, 2729, 3336], [2725, 3334, 3339], [2729, 3104, 3336], [3104, 2729, 2734], [3106, 2905, 3339], [2966, 3219, 2745], [2740, 2743, 3108], [2740, 3108, 3340], [2745, 3219, 3223], [3224, 2744, 3226], [2749, 3342, 3112], [3223, 3229, 2753], [3385, 3344, 3117], [3231, 2763, 3228], [3387, 3385, 3117], [2767, 3231, 3121], [3121, 3231, 3396], [3346, 3387, 3237], [3233, 2969, 3123], [3123, 2783, 3133], [3390, 3391, 3239], [3390, 3239, 3240], [3137, 3389, 3139], [3401, 3351, 3244], [3401, 3244, 3253], [2799, 3135, 3247], [3354, 2794, 3352], [3352, 2801, 3353], [3053, 2797, 3354], [3393, 3391, 3255], [3392, 3254, 3251], [3254, 3393, 3255], [3055, 3250, 3142], [3359, 3358, 2812], [3366, 3149, 3151], [3368, 2857, 3155], [2857, 2913, 3155], [3157, 3002, 2860], [3421, 3270, 3271], [2858, 3157, 3272], [3370, 3001, 3059], [3158, 3275, 3276], [3162, 3371, 3161], [2872, 2946, 3373], [2946, 3374, 3373], [2884, 2948, 3062], [2948, 3375, 3062], [3166, 3005, 3376], [3166, 3377, 3376], [2633, 2891, 3171], [2922, 2631, 3066], [2631, 3172, 3066], [3296, 2633, 3295], [3173, 2637, 3298], [2645, 2646, 3175], [3069, 2639, 3297], [2614, 3177, 3301], [2650, 3074, 3300], [3305, 2923, 3303], [3077, 3183, 3075], [2666, 3081, 3186], [2677, 3313, 3191], [3316, 2683, 3191], [3089, 2683, 3316], [2680, 3317, 3087], [2680, 3087, 3317], [3320, 3380, 3196], [3201, 3091, 3197], [3201, 3197, 3426], [3198, 3381, 3380], [3198, 3380, 3320], [3320, 3206, 3382], [2697, 3322, 3325], [3382, 3206, 3326], [2710, 3325, 3328], [2900, 2607, 3329], [3203, 2900, 3329], [2985, 2964, 3048], [3097, 3100, 3099], [3097, 3407, 3100], [3333, 2710, 3328], [3327, 2985, 3048], [3330, 3326, 3209], [3009, 2963, 3384], [3332, 3212, 3102], [3214, 3384, 2717], [3335, 3217, 3394], [3217, 3107, 3394], [3106, 3110, 3221], [3343, 2744, 3224], [3395, 3050, 3227], [3385, 3341, 3344], [3348, 2781, 3122], [3124, 3236, 3238], [3234, 3125, 3235], [3397, 3125, 3234], [3414, 3126, 3351], [3241, 3125, 3388], [3137, 3134, 3389], [3400, 3240, 3241], [3241, 3388, 3400], [3390, 3240, 3400], [3398, 3249, 3139], [3392, 3249, 3398], [3398, 3399, 3392], [3258, 3391, 3390], [3258, 3390, 3400], [3138, 2909, 3248], [3393, 3254, 3392], [3259, 3400, 3256], [3143, 3402, 3253], [3250, 3247, 3420], [3391, 3258, 3255], [3400, 3403, 3256], [3143, 3253, 3252], [3258, 3400, 3259], [3259, 3256, 3261], [2816, 3361, 3359], [3361, 2817, 3142], [2848, 3150, 3365], [3157, 2860, 3156], [3162, 3164, 3371], [3404, 3160, 3159], [3060, 2872, 3373], [3405, 3165, 3378], [3175, 2641, 3071], [3067, 3300, 3406], [3183, 3038, 3075], [3309, 3077, 3040], [3080, 3309, 3040], [3090, 3317, 3195], [2697, 3319, 3322], [3326, 3211, 3382], [3211, 3326, 3383], [3326, 3330, 3408], [3383, 3326, 3408], [3101, 3383, 3408], [3101, 3408, 3409], [3410, 3330, 3213], [3410, 3213, 3335], [3219, 3101, 3411], [3411, 3101, 3409], [3223, 3219, 3411], [3104, 2744, 3343], [3051, 3113, 3225], [3412, 3232, 3118], [3232, 3412, 3236], [3238, 3236, 3413], [3415, 3346, 3126], [3414, 3415, 3126], [3350, 3128, 3052], [3416, 3134, 3238], [3134, 3243, 3238], [3399, 3347, 3127], [3127, 3349, 3399], [3139, 3389, 3398], [3399, 3349, 3393], [3393, 3349, 3391], [3239, 3391, 3349], [3392, 3399, 3393], [3400, 3388, 3403], [3245, 3419, 3355], [3357, 3248, 3356], [3402, 3143, 3403], [3143, 3256, 3403], [3360, 3144, 3262], [3262, 3144, 3360], [2836, 3363, 3364], [3422, 3164, 3405], [3405, 3164, 3165], [3375, 2948, 3169], [2948, 3028, 3169], [3065, 2645, 3175], [3184, 3443, 3310], [3314, 3084, 3041], [3446, 3085, 3086], [3318, 3424, 3447], [3194, 3088, 3450], [3425, 3086, 3380], [3339, 3334, 3331], [3408, 3410, 3409], [3408, 3330, 3410], [3110, 3106, 3457], [3427, 3107, 3341], [3340, 3108, 3051], [3427, 3394, 3107], [3386, 3114, 3460], [3385, 3427, 3341], [3114, 3110, 3460], [3464, 3395, 3115], [3395, 3227, 3115], [3387, 3346, 3415], [3429, 3345, 3347], [3345, 3120, 3347], [3397, 3432, 3401], [3128, 3433, 3052], [3430, 3123, 3133], [3398, 3429, 3347], [3431, 3389, 3134], [3431, 3429, 3389], [3389, 3429, 3398], [3398, 3347, 3399], [3388, 3125, 3397], [3401, 3432, 3414], [3401, 3414, 3351], [3388, 3397, 3434], [3402, 3434, 3401], [3247, 3135, 3052], [3470, 3133, 3246], [3247, 3052, 3417], [3388, 3434, 3403], [3402, 3401, 3253], [3403, 3434, 3402], [3353, 2801, 3138], [3420, 3247, 3435], [3360, 3437, 3144], [3437, 3360, 3262], [3266, 3264, 3057], [3439, 3268, 3365], [3439, 3152, 3268], [3287, 3288, 3068], [3440, 3289, 3290], [3441, 3298, 3179], [3181, 3302, 3304], [3307, 3305, 3303], [3187, 3076, 3078], [3186, 3081, 3444], [3041, 3084, 3445], [3083, 3081, 3082], [3449, 3088, 3192], [3318, 3447, 3197], [3380, 3381, 3425], [3092, 3451, 3318], [3205, 3452, 3207], [3321, 3451, 3092], [3098, 3453, 3331], [3338, 3215, 3333], [3454, 3339, 3331], [3455, 3332, 3102], [3409, 3410, 3456], [3456, 3335, 3394], [3455, 3102, 3458], [3411, 3409, 3456], [3456, 3410, 3335], [3102, 3220, 3458], [3459, 3411, 3456], [3461, 3223, 3459], [3224, 3226, 3343], [3228, 3112, 3342], [3343, 3226, 3462], [3461, 3229, 3223], [3463, 3427, 3385], [3230, 3461, 3465], [3461, 3230, 3229], [3463, 3385, 3387], [3466, 3463, 3387], [3119, 3233, 3428], [3465, 3466, 3415], [3230, 3465, 3467], [3116, 3119, 3428], [3230, 3467, 3234], [3467, 3465, 3415], [3415, 3466, 3387], [3233, 3430, 3428], [3468, 3345, 3429], [3397, 3234, 3432], [3467, 3414, 3432], [3467, 3415, 3414], [3430, 3233, 3123], [3234, 3467, 3432], [3122, 3128, 3348], [3416, 3469, 3431], [3431, 3468, 3429], [3434, 3397, 3401], [3431, 3134, 3416], [3470, 3430, 3133], [3418, 3470, 3246], [3436, 3245, 3136], [3246, 3140, 3418], [3437, 3140, 3144], [3140, 3437, 3471], [3360, 3437, 3262], [3262, 3437, 3360], [3438, 3437, 3262], [3473, 3266, 3057], [3262, 3149, 3438], [3149, 3366, 3438], [3474, 3366, 3270], [3474, 3270, 3421], [3274, 3421, 3271], [3369, 3158, 3475], [3369, 3475, 3159], [3276, 3475, 3158], [3476, 3371, 3164], [3422, 3476, 3164], [3060, 3373, 3374], [3168, 3280, 3372], [3423, 3477, 3405], [3405, 3477, 3422], [3377, 3167, 3278], [3166, 3376, 3374], [3285, 3170, 3378], [3517, 3290, 3518], [3527, 3295, 3171], [3176, 3301, 3177], [3039, 3442, 3179], [3308, 3188, 3306], [3478, 3479, 3480], [3478, 3480, 3448], [3424, 3448, 3447], [3481, 3448, 3424], [3381, 3194, 3450], [3317, 3090, 3482], [3205, 3201, 3452], [3208, 3207, 3452], [3203, 3451, 3321], [3216, 3336, 3104], [3459, 3456, 3394], [3411, 3459, 3223], [3459, 3394, 3427], [3461, 3459, 3463], [3459, 3427, 3463], [3461, 3463, 3466], [3461, 3466, 3465], [3468, 3464, 3345], [3236, 3488, 3413], [3464, 3115, 3345], [3416, 3238, 3413], [3413, 3469, 3416], [3431, 3469, 3468], [3247, 3417, 3435], [3420, 3418, 3435], [3435, 3418, 3420], [3472, 3148, 3362], [3438, 3366, 3474], [3484, 3483, 3421], [3274, 3484, 3421], [3273, 3370, 3059], [3378, 3423, 3405], [3443, 3310, 3562], [3486, 3187, 3479], [3486, 3479, 3478], [3447, 3448, 3495], [3381, 3450, 3487], [3447, 3426, 3197], [3511, 3482, 3204], [3203, 3329, 3622], [3051, 3496, 3340], [3458, 3220, 3050], [3386, 3412, 3118], [3236, 3412, 3488], [3468, 3469, 3464], [3128, 3122, 3489], [3490, 3435, 3417], [3418, 3435, 3470], [3674, 3352, 3672], [3673, 3138, 3675], [3688, 3683, 3358], [3422, 3505, 3476], [3372, 3492, 3168], [3378, 3170, 3286], [3287, 3288, 3294], [3538, 3070, 3289], [3406, 3300, 3074], [3493, 3306, 3188], [3486, 3076, 3187], [3310, 3443, 3184], [3081, 3083, 3494], [3478, 3448, 3481], [3585, 3086, 3589], [3487, 3425, 3381], [3447, 3495, 3426], [3323, 3612, 3202], [3625, 3623, 3327], [3106, 3339, 3457], [3103, 3498, 3222], [3458, 3050, 3497], [3222, 3498, 3225], [3225, 3647, 3651], [3497, 3395, 3499], [3395, 3497, 3050], [3412, 3386, 3500], [3488, 3412, 3500], [3464, 3501, 3395], [3413, 3488, 3501], [3501, 3464, 3469], [3413, 3501, 3469], [3052, 3433, 3417], [3435, 3490, 3470], [3354, 3674, 3676], [3356, 3248, 3357], [3245, 3436, 3684], [3702, 3704, 3266], [3503, 3269, 3153], [3483, 3504, 3491], [3277, 3160, 3404], [3740, 3060, 3374], [3743, 3423, 3755], [3516, 3288, 3287], [3290, 3517, 3440], [3522, 3297, 3293], [3518, 3064, 3066], [3518, 3066, 3524], [3066, 3172, 3524], [3536, 3173, 3298], [3068, 3065, 3506], [3542, 3536, 3298], [3406, 3074, 3300], [3550, 3552, 3304], [3185, 3557, 3563], [3185, 3307, 3557], [3563, 3313, 3185], [3311, 3186, 3444], [3041, 3445, 3576], [3495, 3448, 3480], [3495, 3480, 3579], [3191, 3588, 3316], [3089, 3603, 3319], [3510, 3208, 3452], [3319, 3603, 3322], [3093, 3045, 3611], [3090, 3204, 3482], [3208, 3616, 3097], [3453, 3098, 3620], [3628, 3384, 3214], [3339, 3454, 3630], [3643, 3652, 3342], [3228, 3653, 3654], [3650, 3497, 3499], [3228, 3342, 3653], [3655, 3462, 3226], [3501, 3499, 3395], [3488, 3500, 3512], [3512, 3501, 3488], [3663, 3121, 3396], [3122, 3121, 3665], [3513, 3417, 3433], [3417, 3670, 3513], [3675, 3138, 3248], [3678, 3675, 3248], [3248, 3356, 3678], [3698, 3058, 3148], [3502, 3437, 3438], [3362, 3696, 3472], [3696, 3700, 3472], [3502, 3471, 3437], [3472, 3700, 3514], [3702, 3266, 3473], [3502, 3438, 3474], [3502, 3474, 3491], [3476, 3484, 3274], [3476, 3274, 3371], [3733, 3475, 3276], [3737, 3372, 3060], [3747, 3740, 3374], [3745, 3168, 3738], [3746, 3743, 3282], [3747, 3374, 3754], [3284, 3282, 3743], [3516, 3287, 3520], [3518, 3290, 3291], [3518, 3291, 3064], [3293, 3173, 3519], [3287, 3068, 3520], [3523, 3519, 3173], [3515, 3294, 3288], [3527, 3171, 3521], [3526, 3525, 3292], [3297, 3522, 3528], [3532, 3524, 3172], [3526, 3379, 3174], [3506, 3520, 3068], [3534, 3533, 3176], [3536, 3523, 3173], [3177, 3534, 3176], [3177, 3178, 3534], [3178, 3069, 3535], [3532, 3172, 3067], [3441, 3542, 3298], [3506, 3544, 3068], [3299, 3541, 3180], [3544, 3073, 3068], [3506, 3073, 3065], [3071, 3507, 3540], [3538, 3507, 3071], [3545, 3532, 3067], [3406, 3545, 3067], [3543, 3302, 3294], [3544, 3068, 3073], [3073, 3506, 3065], [3542, 3441, 3179], [3546, 3542, 3179], [3180, 3541, 3072], [3406, 3300, 3545], [3303, 3072, 3548], [3546, 3179, 3549], [3485, 3073, 3508], [3073, 3485, 3508], [3551, 3545, 3300], [3550, 3304, 3302], [3550, 3302, 3543], [3300, 3074, 3551], [3553, 3551, 3074], [3442, 3039, 3549], [3555, 3039, 3306], [3554, 3039, 3555], [3304, 3552, 3184], [3556, 3074, 3076], [3556, 3553, 3074], [3307, 3303, 3548], [3306, 3039, 3555], [3184, 3552, 3558], [3548, 3557, 3307], [3039, 3306, 3555], [3493, 3555, 3306], [3493, 3560, 3555], [3562, 3184, 3559], [3556, 3076, 3486], [3561, 3556, 3486], [3493, 3188, 3560], [3562, 3310, 3443], [3312, 3564, 3187], [3312, 3565, 3564], [3486, 3478, 3561], [3041, 3566, 3188], [3310, 3567, 3043], [3562, 3567, 3310], [3311, 3509, 3568], [3311, 3568, 3312], [3040, 3042, 3080], [3509, 3311, 3568], [3311, 3509, 3568], [3187, 3564, 3479], [3564, 3572, 3479], [3571, 3509, 3311], [3571, 3311, 3444], [3571, 3444, 3081], [3494, 3578, 3081], [3578, 3575, 3081], [3481, 3570, 3478], [3566, 3041, 3576], [3043, 3577, 3190], [3583, 3085, 3582], [3315, 3085, 3583], [3083, 3578, 3494], [3083, 3584, 3578], [3445, 3587, 3576], [3587, 3445, 3087], [3445, 3084, 3087], [3585, 3446, 3086], [3586, 3449, 3192], [3590, 3449, 3586], [3086, 3425, 3589], [3593, 3449, 3590], [3589, 3425, 3592], [3449, 3593, 3088], [3592, 3425, 3487], [3594, 3487, 3596], [3592, 3487, 3594], [3487, 3450, 3596], [3426, 3495, 3591], [3316, 3588, 3089], [3597, 3424, 3318], [3089, 3588, 3598], [3760, 3426, 3591], [3597, 3318, 3600], [3599, 3317, 3602], [3600, 3318, 3451], [3452, 3201, 3426], [3603, 3089, 3598], [3452, 3601, 3510], [3606, 3600, 3451], [3601, 3452, 3605], [3208, 3510, 3604], [3045, 3200, 3608], [3451, 3203, 3606], [3608, 3611, 3045], [3610, 3202, 3612], [3606, 3203, 3613], [3614, 3322, 3603], [3604, 3616, 3208], [3482, 3511, 3609], [3612, 3323, 3324], [3093, 3615, 3096], [3096, 3615, 3098], [3617, 3324, 3327], [3609, 3204, 3618], [3204, 3047, 3618], [3621, 3407, 3097], [3617, 3327, 3623], [3331, 3453, 3620], [3619, 3624, 3333], [3626, 3407, 3621], [3328, 3619, 3333], [3627, 3331, 3620], [3618, 3047, 3332], [3618, 3332, 3629], [3454, 3331, 3627], [3626, 3100, 3407], [3632, 3332, 3455], [3631, 3218, 3626], [3629, 3332, 3632], [3337, 3633, 3214], [3339, 3630, 3636], [3339, 3636, 3457], [3105, 3338, 3634], [3632, 3455, 3458], [3632, 3458, 3640], [3631, 3103, 3218], [3105, 3634, 3639], [3642, 3103, 3631], [3643, 3105, 3639], [3642, 3644, 3103], [3638, 3340, 3496], [3496, 3645, 3638], [3342, 3105, 3643], [3104, 3343, 3641], [3457, 3637, 3646], [3640, 3458, 3497], [3343, 3648, 3641], [3650, 3640, 3497], [3225, 3498, 3644], [3457, 3646, 3110], [3646, 3460, 3110], [3460, 3646, 3649], [3051, 3225, 3651], [3649, 3646, 3460], [3653, 3342, 3652], [3765, 3656, 3500], [3656, 3657, 3500], [3658, 3650, 3499], [3343, 3462, 3655], [3460, 3765, 3386], [3386, 3765, 3500], [3657, 3658, 3499], [3500, 3657, 3512], [3512, 3657, 3499], [3659, 3231, 3228], [3488, 3512, 3657], [3501, 3512, 3499], [3657, 3512, 3488], [3655, 3226, 3116], [3231, 3660, 3396], [3662, 3116, 3428], [3767, 3662, 3428], [3665, 3121, 3664], [3663, 3665, 3664], [3665, 3666, 3122], [3489, 3122, 3666], [3489, 3666, 3128], [3767, 3428, 3430], [3767, 3430, 3667], [3670, 3433, 3668], [3671, 3669, 3430], [3417, 3513, 3670], [3430, 3490, 3671], [3671, 3490, 3669], [3430, 3470, 3490], [3417, 3669, 3490], [3674, 3354, 3352], [3053, 3354, 3676], [3680, 3419, 3245], [3679, 3419, 3680], [3419, 3679, 3355], [3136, 3053, 3676], [3678, 3356, 3683], [3140, 3682, 3418], [3418, 3682, 3677], [3683, 3356, 3357], [3679, 3686, 3355], [3436, 3136, 3685], [3436, 3685, 3684], [3140, 3689, 3682], [3687, 3250, 3420], [3690, 3250, 3687], [3358, 3691, 3688], [3692, 3355, 3686], [3693, 3359, 3361], [3691, 3359, 3693], [3695, 3689, 3140], [3355, 3692, 3141], [3695, 3140, 3471], [3362, 3141, 3696], [3263, 3058, 3769], [3698, 3697, 3058], [3695, 3502, 3699], [3695, 3471, 3502], [3698, 3148, 3472], [3263, 3701, 3057], [3057, 3701, 3702], [3702, 3473, 3057], [3699, 3502, 3703], [3363, 3704, 3705], [3266, 3704, 3363], [3514, 3698, 3472], [3707, 3703, 3502], [3709, 3267, 3706], [3364, 3706, 3267], [3365, 3150, 3710], [3710, 3150, 3267], [3703, 3707, 3502], [3711, 3152, 3439], [3491, 3703, 3502], [3153, 3714, 3503], [3715, 3491, 3504], [3715, 3504, 3717], [3491, 3483, 3718], [3491, 3718, 3483], [3474, 3718, 3491], [3474, 3421, 3718], [3367, 3269, 3720], [3483, 3491, 3718], [3474, 3421, 3718], [3718, 3421, 3474], [3483, 3718, 3504], [3718, 3717, 3504], [3368, 3155, 3721], [3483, 3718, 3421], [3156, 3723, 3157], [3483, 3484, 3718], [3718, 3484, 3725], [3724, 3272, 3157], [3370, 3273, 3728], [3725, 3484, 3729], [3729, 3484, 3476], [3728, 3730, 3370], [3729, 3505, 3732], [3729, 3476, 3505], [3735, 3492, 3372], [3731, 3736, 3159], [3736, 3404, 3159], [3734, 3372, 3737], [3735, 3372, 3734], [3492, 3735, 3738], [3732, 3505, 3739], [3422, 3739, 3505], [3737, 3060, 3740], [3741, 3739, 3477], [3477, 3739, 3422], [3277, 3404, 3742], [3738, 3168, 3492], [3741, 3477, 3743], [3477, 3423, 3743], [3770, 3062, 3744], [3062, 3744, 3282], [3742, 3279, 3277], [3281, 3749, 3169], [3281, 3748, 3749], [3744, 3062, 3375], [3168, 3751, 3283], [3751, 3748, 3283], [3283, 3748, 3281], [3169, 3749, 3750], [3169, 3750, 3375], [3752, 3278, 3742], [3752, 3753, 3278], [3376, 3754, 3374], [3278, 3753, 3377], [3288, 3516, 3515], [3521, 3171, 3292], [3522, 3293, 3519], [3526, 3292, 3379], [3289, 3517, 3529], [3289, 3440, 3517], [3297, 3528, 3069], [3069, 3528, 3535], [3537, 3294, 3515], [3771, 3065, 3175], [3175, 3071, 3771], [3071, 3070, 3538], [3299, 3296, 3539], [3539, 3296, 3530], [3539, 3541, 3299], [3537, 3543, 3294], [3506, 3068, 3544], [3072, 3541, 3547], [3072, 3547, 3548], [3179, 3442, 3549], [3554, 3549, 3039], [3184, 3558, 3559], [3562, 3310, 3184], [3560, 3188, 3757], [3313, 3563, 3569], [3080, 3573, 3189], [3758, 3573, 3080], [3568, 3565, 3312], [3561, 3478, 3570], [3042, 3573, 3080], [3042, 3759, 3573], [3042, 3573, 3759], [3313, 3569, 3574], [3042, 3189, 3573], [3575, 3571, 3081], [3191, 3313, 3574], [3479, 3572, 3579], [3580, 3570, 3481], [3480, 3479, 3579], [3581, 3191, 3574], [3083, 3315, 3583], [3584, 3083, 3583], [3582, 3085, 3585], [3446, 3585, 3085], [3495, 3579, 3591], [3580, 3424, 3597], [3087, 3595, 3587], [3087, 3599, 3595], [3087, 3317, 3599], [3601, 3426, 3760], [3452, 3426, 3601], [3601, 3761, 3604], [3482, 3602, 3317], [3601, 3604, 3510], [3601, 3605, 3452], [3602, 3482, 3609], [3200, 3202, 3608], [3202, 3607, 3608], [3614, 3325, 3322], [3612, 3324, 3617], [3609, 3511, 3204], [3328, 3325, 3614], [3098, 3615, 3620], [3614, 3619, 3328], [3613, 3203, 3622], [3329, 3384, 3622], [3625, 3327, 3048], [3338, 3333, 3763], [3627, 3630, 3454], [3100, 3626, 3218], [3625, 3048, 3635], [3048, 3216, 3635], [3641, 3635, 3104], [3637, 3457, 3636], [3337, 3340, 3638], [3635, 3216, 3104], [3632, 3640, 3764], [3498, 3103, 3644], [3647, 3225, 3644], [3496, 3051, 3645], [3649, 3460, 3646], [3645, 3051, 3651], [3460, 3649, 3765], [3657, 3766, 3650], [3657, 3650, 3658], [3656, 3765, 3766], [3656, 3766, 3657], [3659, 3228, 3654], [3660, 3231, 3659], [3662, 3661, 3116], [3660, 3663, 3396], [3767, 3661, 3662], [3121, 3663, 3664], [3668, 3666, 3768], [3433, 3666, 3668], [3128, 3666, 3433], [3430, 3669, 3667], [3513, 3433, 3670], [3513, 3670, 3417], [3417, 3670, 3669], [3352, 3353, 3673], [3353, 3138, 3673], [3679, 3680, 3684], [3684, 3680, 3245], [3136, 3676, 3681], [3687, 3435, 3677], [3685, 3136, 3681], [3420, 3435, 3687], [3357, 3358, 3683], [3358, 3359, 3691], [3361, 3142, 3694], [3142, 3690, 3694], [3250, 3690, 3142], [3141, 3692, 3696], [3058, 3697, 3769], [3263, 3769, 3701], [3364, 3363, 3705], [3365, 3710, 3708], [3267, 3709, 3710], [3711, 3439, 3365], [3711, 3365, 3708], [3711, 3712, 3152], [3153, 3152, 3712], [3491, 3715, 3703], [3153, 3712, 3713], [3153, 3713, 3714], [3503, 3714, 3716], [3716, 3720, 3269], [3269, 3503, 3716], [3722, 3368, 3721], [3723, 3156, 3368], [3723, 3368, 3722], [3724, 3157, 3723], [3726, 3272, 3724], [3272, 3726, 3273], [3273, 3726, 3727], [3732, 3725, 3729], [3731, 3159, 3475], [3730, 3276, 3370], [3730, 3733, 3276], [3475, 3733, 3731], [3736, 3742, 3404], [3770, 3744, 3062], [3744, 3746, 3282], [3744, 3375, 3750], [3168, 3745, 3751], [3278, 3279, 3742], [3423, 3378, 3755], [3284, 3743, 3756], [3284, 3756, 3755], [3754, 3376, 3377], [3378, 3284, 3755], [3521, 3292, 3525], [3771, 3506, 3065], [3538, 3289, 3529], [3178, 3535, 3534], [3771, 3071, 3540], [3757, 3188, 3566], [3758, 3080, 3573], [3572, 3564, 3565], [3568, 3509, 3571], [3577, 3043, 3567], [3192, 3190, 3577], [3481, 3424, 3580], [3088, 3593, 3596], [3450, 3088, 3596], [3202, 3610, 3607], [3615, 3093, 3611], [3621, 3097, 3616], [3762, 3609, 3618], [3627, 3620, 3779], [3618, 3629, 3772], [3384, 3628, 3622], [3762, 3618, 3772], [3773, 3772, 3629], [3773, 3629, 3632], [3628, 3214, 3633], [3633, 3337, 3638], [3773, 3632, 3764], [3766, 3764, 3640], [3645, 3651, 3647], [3649, 3646, 3765], [3650, 3766, 3640], [3343, 3655, 3648], [3655, 3116, 3661], [3663, 3664, 3665], [3669, 3767, 3667], [3352, 3673, 3672], [3677, 3435, 3418], [3693, 3361, 3694], [3364, 3705, 3706], [3719, 3367, 3720], [3155, 3719, 3721], [3155, 3367, 3719], [3273, 3727, 3728], [3744, 3741, 3746], [3770, 3741, 3744], [3754, 3377, 3753], [3296, 3527, 3530], [3296, 3295, 3527], [3526, 3174, 3531], [3174, 3176, 3531], [3176, 3533, 3531], [3778, 3571, 3575], [3579, 3572, 3565], [3575, 3578, 3778], [3586, 3192, 3577], [3191, 3581, 3588], [3595, 3599, 3587], [3760, 3591, 3786], [3601, 3760, 3786], [3634, 3338, 3763], [3637, 3636, 3646], [3647, 3644, 3645], [3646, 3780, 3765], [3766, 3765, 3764], [3765, 3780, 3764], [3781, 3664, 3663], [3665, 3664, 3781], [3670, 3789, 3669], [3695, 3682, 3689], [3703, 3695, 3699], [3716, 3714, 3774], [3743, 3746, 3741], [3750, 3770, 3744], [3754, 3782, 3747], [3784, 3783, 3775], [3555, 3549, 3554], [3560, 3757, 3566], [3565, 3785, 3579], [3763, 3333, 3624], [3787, 3636, 3630], [3787, 3630, 3627], [3636, 3788, 3646], [3789, 3767, 3669], [3670, 3668, 3768], [3699, 3682, 3695], [3725, 3717, 3718], [3791, 3790, 3725], [3791, 3725, 3732], [3741, 3791, 3739], [3810, 3770, 3750], [3812, 3752, 3811], [3742, 3811, 3752], [3812, 3753, 3752], [3775, 3793, 3784], [3541, 3548, 3547], [3555, 3794, 3549], [3568, 3814, 3785], [3816, 3778, 3578], [3591, 3579, 3785], [3589, 3592, 3796], [3591, 3785, 3786], [3600, 3797, 3597], [3798, 3599, 3602], [3621, 3616, 3801], [3615, 3802, 3620], [3639, 3634, 3643], [3644, 3642, 3631], [3788, 3803, 3646], [3780, 3646, 3803], [3780, 3803, 3764], [3764, 3803, 3773], [3670, 3768, 3789], [3687, 3677, 3682], [3695, 3703, 3699], [3698, 3701, 3769], [3774, 3806, 3716], [3715, 3717, 3806], [3807, 3736, 3731], [3791, 3732, 3739], [3747, 3809, 3740], [3747, 3782, 3754], [3756, 3743, 3755], [3792, 3517, 3518], [3520, 3506, 3516], [3541, 3539, 3530], [3540, 3507, 3538], [3543, 3537, 3515], [3813, 3560, 3566], [3565, 3568, 3785], [3594, 3796, 3592], [3798, 3587, 3599], [3761, 3601, 3817], [3603, 3598, 3799], [3819, 3609, 3762], [3772, 3819, 3762], [3787, 3627, 3779], [3636, 3821, 3788], [3820, 3772, 3803], [3803, 3772, 3773], [3641, 3648, 3804], [3661, 3822, 3655], [3661, 3767, 3823], [3665, 3781, 3824], [3666, 3665, 3824], [3789, 3823, 3767], [3676, 3685, 3681], [3825, 3699, 3703], [3805, 3825, 3703], [3698, 3769, 3697], [3712, 3711, 3708], [3703, 3715, 3774], [3774, 3715, 3806], [3790, 3806, 3717], [3791, 3770, 3826], [3741, 3770, 3791], [3771, 3540, 3507], [3827, 3530, 3541], [3828, 3559, 3777], [3570, 3795, 3561], [3568, 3571, 3778], [3568, 3778, 3814], [3588, 3581, 3815], [3786, 3817, 3601], [3818, 3602, 3609], [3829, 3818, 3609], [3611, 3608, 3800], [3779, 3620, 3802], [3819, 3829, 3609], [3820, 3819, 3772], [3619, 3763, 3624], [3636, 3787, 3821], [3788, 3820, 3803], [3644, 3631, 3830], [3633, 3638, 3645], [3648, 3655, 3822], [3823, 3822, 3661], [3686, 3679, 3684], [3699, 3825, 3682], [3825, 3699, 3805], [3825, 3805, 3699], [3790, 3717, 3725], [3810, 3749, 3831], [3750, 3749, 3810], [3541, 3530, 3827], [3536, 3542, 3523], [3832, 3542, 3546], [3828, 3775, 3783], [3776, 3775, 3828], [3777, 3776, 3828], [3559, 3828, 3833], [3548, 3834, 3557], [3566, 3576, 3813], [3814, 3778, 3816], [3814, 3816, 3817], [3602, 3818, 3798], [3936, 3606, 3948], [3835, 3779, 3802], [3779, 3836, 3787], [3787, 3836, 3821], [3821, 3820, 3788], [3804, 3648, 3822], [3663, 3660, 3842], [3768, 3666, 3838], [3805, 3703, 3774], [4008, 3724, 3723], [3736, 3807, 3742], [3520, 3516, 3506], [3519, 3523, 3865], [3793, 3775, 3784], [3828, 3783, 3840], [3894, 3545, 3551], [3832, 3546, 3549], [3777, 3558, 3552], [3559, 3558, 3777], [3895, 3553, 3901], [3909, 3562, 3903], [3813, 3576, 3841], [3785, 3817, 3786], [3785, 3814, 3817], [3817, 3816, 3761], [3607, 3610, 3612], [3836, 3837, 3821], [3819, 3820, 3837], [3821, 3837, 3820], [3644, 3830, 3963], [3660, 3659, 3842], [3824, 3838, 3666], [3823, 3838, 3789], [3838, 3823, 3789], [3838, 3823, 3789], [3838, 3789, 3768], [3687, 3682, 3825], [3843, 3806, 3790], [3747, 3754, 4030], [3857, 3518, 3524], [3857, 3517, 3792], [3870, 3533, 3534], [3876, 3538, 3529], [3538, 3878, 3540], [3873, 3532, 3545], [3541, 3530, 3880], [3542, 3887, 3881], [3892, 3889, 3777], [3828, 3840, 3847], [3900, 3557, 3834], [3558, 3848, 3559], [4039, 3557, 3900], [3562, 3909, 3567], [3570, 3580, 3914], [3576, 3841, 3913], [3841, 3576, 3913], [3916, 3815, 3581], [3917, 3586, 3577], [3578, 3584, 3922], [3593, 3928, 3596], [3596, 3929, 3594], [3935, 3603, 3799], [3606, 3613, 3948], [3950, 3948, 3622], [3850, 3829, 3819], [3948, 3613, 3622], [3951, 3952, 3619], [3950, 3628, 3956], [3950, 3622, 3628], [3954, 3634, 3763], [3633, 3964, 3962], [3633, 3645, 3964], [3644, 3963, 3645], [3966, 3653, 3652], [3977, 3675, 3678], [3985, 3684, 3685], [3683, 3688, 3982], [3986, 3690, 3851], [3993, 3514, 3700], [3712, 3708, 3854], [3855, 3712, 3854], [3714, 3805, 3774], [3843, 3716, 3806], [4009, 3724, 4008], [3726, 4010, 4057], [3826, 3770, 3810], [3839, 3738, 3735], [4026, 3809, 3747], [4023, 4024, 3748], [4033, 3753, 3812], [3520, 3856, 3516], [3857, 3792, 3518], [3528, 3522, 4036], [3515, 3866, 3516], [3515, 3516, 3520], [3860, 3520, 3506], [3863, 3526, 3531], [3865, 3522, 3519], [3866, 3515, 3516], [3863, 3533, 3870], [3517, 3857, 3868], [3531, 3533, 3863], [3867, 3534, 3535], [3868, 3529, 3517], [3532, 3873, 3524], [3530, 3527, 3871], [3530, 3871, 3874], [3865, 3523, 3875], [3878, 3538, 3876], [3878, 3879, 3540], [3506, 3771, 3844], [3881, 3523, 3542], [3784, 3846, 3783], [3846, 3784, 3775], [3515, 3872, 3883], [4060, 3507, 3845], [4037, 3873, 3882], [3776, 3888, 3775], [3890, 3541, 3884], [3887, 3542, 3832], [3543, 3891, 3550], [3541, 3890, 3548], [3783, 3846, 3847], [3783, 3847, 3840], [3889, 3776, 3777], [3549, 3893, 3832], [3894, 3551, 3895], [3777, 3552, 3892], [3895, 3551, 3553], [3900, 3834, 3890], [3898, 3549, 3794], [3828, 3896, 3899], [3899, 3833, 3828], [3833, 3899, 3559], [3899, 3848, 3559], [3558, 3559, 3848], [3555, 3898, 3794], [3562, 3559, 3903], [3898, 3555, 3902], [3555, 3560, 3902], [3904, 3556, 3561], [3904, 3901, 3556], [3907, 3561, 3795], [3569, 3906, 3911], [3569, 3563, 3906], [3560, 3908, 3905], [3813, 3908, 3560], [3841, 3913, 3813], [3910, 3570, 3914], [3581, 3574, 3916], [3917, 3577, 3912], [3577, 3567, 3912], [3913, 3841, 3576], [3585, 3589, 3920], [3922, 3584, 3919], [3589, 3923, 3921], [3796, 3923, 3589], [3924, 3580, 3597], [3586, 3917, 3590], [3917, 3925, 3590], [3816, 3578, 3927], [3594, 3923, 3796], [4061, 3587, 3930], [3597, 3797, 3924], [3588, 3926, 3598], [3927, 3849, 3761], [3927, 3761, 3816], [3596, 3931, 3929], [3797, 3600, 3924], [3933, 3598, 3926], [3932, 3600, 3936], [3934, 3798, 3818], [3939, 3608, 3607], [3937, 3800, 3608], [3800, 3940, 3611], [3607, 3612, 3939], [3941, 3611, 3940], [3615, 3941, 3942], [3802, 3615, 3942], [3829, 3850, 3818], [3612, 3617, 3945], [3819, 3837, 3850], [3951, 3619, 3614], [3836, 3779, 3835], [3836, 4044, 3850], [3836, 3850, 3837], [3763, 3619, 3952], [3626, 3621, 3953], [3623, 3625, 3955], [3958, 3628, 3633], [3625, 3635, 3959], [3631, 3963, 3830], [3961, 3641, 3967], [3652, 3643, 3966], [3968, 3641, 3804], [3969, 3654, 3653], [3969, 3970, 3654], [3659, 3654, 3970], [3973, 3838, 3824], [3972, 3824, 3781], [3672, 3974, 3674], [3975, 3675, 3977], [3675, 3975, 3673], [3976, 3676, 3674], [3981, 3678, 3683], [3687, 3851, 3690], [3694, 3690, 3986], [3984, 3990, 3686], [3688, 3691, 3987], [3988, 3691, 3693], [3692, 3990, 3696], [3700, 3696, 3992], [3992, 3993, 3700], [3853, 3991, 3805], [3991, 3825, 3805], [3706, 3994, 3709], [3709, 3994, 3995], [3709, 3995, 3852], [3709, 3852, 3710], [3997, 3994, 3706], [3705, 3997, 3706], [3698, 3998, 3701], [3698, 3999, 3998], [3708, 3710, 4054], [3708, 4054, 3854], [3999, 3698, 3514], [3853, 3805, 3714], [4001, 3714, 4000], [3714, 3713, 4000], [3721, 3719, 4002], [3716, 3720, 4005], [4005, 3720, 3716], [3721, 4004, 3722], [3721, 4002, 4004], [3722, 4004, 3723], [4007, 3723, 4004], [4012, 4006, 3843], [4009, 3726, 3724], [3843, 3790, 4012], [3791, 4011, 3790], [4011, 3791, 4012], [3826, 4012, 3791], [3734, 4014, 3735], [3737, 4015, 3734], [4017, 3733, 4016], [3733, 3730, 4016], [3731, 4017, 4019], [3731, 3733, 4017], [3826, 3810, 4013], [4017, 3808, 4021], [3839, 4014, 4022], [4013, 3810, 4024], [3839, 3735, 4014], [3810, 4024, 3831], [3810, 3831, 4024], [3738, 3839, 4022], [4059, 3742, 4019], [4026, 3747, 4027], [3751, 3745, 3738], [3751, 3738, 4022], [3831, 3749, 3748], [3831, 3748, 4024], [3742, 3807, 4019], [3751, 4029, 3748], [4029, 4028, 3748], [3742, 4031, 3811], [4030, 3754, 3747], [3811, 4031, 4032], [3811, 4032, 3812], [3753, 4033, 4034], [3747, 3754, 4035], [3754, 3753, 4034], [4035, 3754, 4034], [3856, 3520, 3516], [3864, 3535, 3528], [3866, 3515, 3520], [3865, 3859, 3522], [3860, 3506, 3877], [3521, 3525, 3869], [3870, 3534, 3867], [3872, 3515, 3866], [3861, 3524, 3873], [3881, 3875, 3523], [3543, 3515, 3883], [3844, 3771, 3507], [3540, 3879, 3845], [3540, 3845, 3507], [3873, 3545, 3882], [3882, 3545, 3886], [3541, 3880, 3884], [3891, 3543, 3883], [3891, 3892, 3550], [3892, 3552, 3550], [3896, 3828, 3847], [3897, 3893, 3549], [3897, 3549, 3898], [3834, 3548, 3890], [3574, 3569, 3911], [3567, 3909, 3912], [3584, 3583, 3915], [4061, 3576, 3587], [3928, 3590, 3925], [3928, 3593, 3590], [3923, 3594, 3929], [3934, 3930, 3587], [3600, 3932, 3924], [3604, 3761, 3938], [3600, 3606, 3936], [3800, 3937, 3940], [3850, 4040, 3818], [4068, 3941, 3940], [3604, 3938, 3616], [3612, 3943, 4041], [3941, 3615, 3611], [3943, 3612, 3945], [4043, 4040, 3850], [3802, 3942, 4042], [4042, 3942, 3946], [3946, 4044, 4045], [3946, 4045, 3835], [4043, 3850, 4044], [3801, 3616, 3947], [3617, 3949, 3945], [3836, 3835, 4045], [3623, 3949, 3617], [4045, 4044, 3836], [3944, 3951, 3614], [3947, 3621, 3801], [3763, 3952, 3954], [3949, 3623, 3955], [3956, 3628, 3958], [3625, 3959, 3955], [3635, 3961, 3959], [3957, 3631, 3626], [3958, 3633, 3962], [3957, 3963, 3631], [3964, 3645, 3963], [3966, 3643, 3965], [3961, 3635, 3641], [3643, 3634, 3965], [3969, 3653, 3966], [3968, 3967, 3641], [3970, 3969, 4046], [3822, 3968, 3804], [4063, 3968, 4047], [4047, 3968, 3822], [3971, 3659, 3970], [3971, 3842, 3659], [4048, 4047, 3822], [3663, 3842, 3971], [3663, 3971, 3781], [3973, 4048, 3838], [3838, 4048, 3823], [4048, 3822, 3823], [3824, 3972, 4050], [4050, 3973, 3824], [3974, 3672, 3975], [3672, 3673, 3975], [3980, 3685, 3676], [3678, 3981, 3978], [3683, 3982, 3981], [3985, 3686, 3684], [3694, 3986, 3989], [3687, 4051, 3851], [3990, 3692, 3686], [3691, 3988, 3987], [3694, 3989, 3693], [4051, 3687, 3825], [3991, 4051, 3825], [3992, 3696, 3990], [4052, 4051, 3991], [4051, 4052, 3991], [3991, 4052, 4051], [3702, 3701, 3996], [4052, 3991, 3853], [3705, 3704, 3997], [3704, 4053, 3997], [3993, 3700, 3514], [3514, 3700, 4056], [4000, 4055, 4052], [3514, 4056, 3999], [4001, 4052, 3853], [3712, 3855, 4000], [3853, 3714, 4001], [4000, 3713, 3712], [3719, 3720, 4005], [3716, 4006, 3720], [4006, 3716, 3843], [4010, 3726, 4009], [4012, 3790, 4011], [3728, 3727, 4057], [4015, 4014, 3734], [4018, 4058, 4020], [4017, 3733, 3808], [4019, 3807, 3731], [3808, 3733, 4017], [4018, 4020, 4023], [4023, 4020, 4024], [4020, 4058, 4024], [4024, 4058, 4013], [4025, 3740, 3809], [3810, 3831, 4024], [4025, 3809, 4026], [4023, 3748, 4028], [4029, 3751, 4022], [4027, 3747, 4030], [4032, 4033, 3812], [4030, 3747, 4035], [3860, 3856, 3520], [3524, 3861, 3857], [3858, 3525, 3526], [4036, 3864, 3528], [3522, 3859, 4036], [3856, 3866, 3520], [3867, 3535, 3864], [3506, 3844, 3877], [4060, 3844, 3507], [3885, 3846, 3775], [3882, 3886, 4037], [3888, 3885, 3775], [3888, 3776, 3889], [3886, 3545, 3894], [3553, 3556, 3901], [3848, 3903, 3559], [3557, 4039, 3906], [3563, 3557, 3906], [3902, 3560, 3905], [3904, 3561, 3907], [3795, 3570, 3910], [3916, 3574, 3911], [3582, 3585, 3920], [3919, 3584, 3915], [3920, 3589, 3921], [3914, 3580, 3924], [3916, 3588, 3815], [3578, 3922, 3927], [3916, 3926, 3588], [3931, 3596, 3928], [3930, 3934, 4062], [3934, 3587, 3798], [3799, 3598, 3933], [4062, 3934, 4040], [3818, 4040, 3934], [3608, 3939, 3937], [3614, 3603, 3935], [3615, 3941, 4068], [3939, 3612, 4041], [3935, 3944, 3614], [3802, 4042, 3946], [3835, 3802, 3946], [3621, 3947, 3953], [3634, 3954, 3960], [3965, 3634, 3960], [3969, 3966, 4069], [3971, 4065, 3781], [3972, 3781, 4065], [4071, 4048, 3973], [3972, 4065, 4071], [3976, 3674, 3974], [3977, 3678, 3978], [3979, 3676, 3976], [3676, 3979, 3980], [3983, 3685, 3980], [3685, 3983, 3985], [3982, 3688, 3987], [4053, 3702, 3996], [3704, 3702, 4053], [3993, 4056, 3700], [4000, 4052, 4001], [4055, 4000, 3855], [4002, 3719, 4003], [4005, 3720, 4006], [3727, 3726, 4057], [3826, 4013, 4012], [4016, 3728, 4057], [4015, 3740, 4066], [4015, 3737, 3740], [4021, 3808, 4017], [4014, 4067, 4022], [4066, 3740, 4025], [4067, 4023, 4022], [4018, 4023, 4067], [3742, 4059, 4031], [3526, 3862, 3858], [3526, 3863, 3862], [3527, 3521, 3871], [3869, 3871, 3521], [3876, 3529, 3868], [3880, 3530, 3874], [3887, 3832, 3893], [3907, 3795, 3910], [3908, 3813, 3913], [3582, 3920, 3918], [4061, 3913, 3576], [3930, 4062, 4061], [3941, 3615, 4068], [3938, 3947, 3616], [3626, 3953, 3957], [3959, 3961, 4084], [3967, 3968, 4063], [4063, 4047, 4048], [3973, 4050, 4071], [3972, 4071, 4050], [3686, 3985, 3984], [3988, 3693, 3989], [4005, 4003, 3719], [4008, 3723, 4007], [4005, 4006, 4012], [4016, 3730, 3728], [3869, 3525, 3858], [4078, 3890, 3884], [3935, 3799, 3933], [3938, 3761, 3849], [3942, 3941, 4068], [3946, 3942, 4072], [4072, 4081, 3946], [4073, 4084, 3967], [3969, 4069, 3966], [4073, 3967, 4063], [3970, 4046, 3971], [3994, 3997, 4076], [4077, 4005, 4012], [3847, 3846, 3896], [3582, 3918, 4079], [3921, 4094, 4095], [4040, 4080, 4062], [4081, 4080, 4040], [4081, 4044, 3946], [3957, 4083, 4099], [4084, 3961, 3967], [4069, 3969, 3966], [3971, 4046, 4085], [4063, 4048, 4071], [4070, 4064, 4049], [4075, 4070, 4049], [4087, 4051, 4055], [4055, 4051, 4052], [3701, 3998, 3996], [3855, 4088, 4055], [4088, 4055, 3855], [3993, 4089, 4056], [4029, 4023, 4028], [4022, 4023, 4029], [4034, 4033, 4035], [4270, 3876, 4133], [3844, 4060, 3845], [3844, 3845, 3879], [3905, 3898, 3902], [3583, 3582, 4079], [3915, 3583, 4079], [3920, 3921, 4095], [3914, 3924, 4096], [4098, 4072, 3942], [4040, 4044, 4081], [4044, 4043, 4040], [3949, 4082, 3945], [3957, 4099, 3963], [3955, 3959, 4084], [4100, 4101, 4074], [4101, 4064, 4074], [4086, 3989, 3986], [3990, 3993, 3992], [4053, 4102, 3997], [4054, 3710, 3852], [4088, 3855, 3854], [4088, 3855, 4055], [4032, 4031, 4059], [3856, 3860, 3866], [3866, 3883, 3872], [3885, 3896, 3846], [3903, 3848, 4092], [3903, 4092, 4093], [3898, 3905, 3902], [3909, 3903, 4093], [4079, 3918, 4103], [3915, 4079, 3919], [3929, 4097, 3923], [3931, 4097, 3929], [4040, 4043, 4081], [4043, 4040, 4081], [4044, 4040, 4043], [4044, 4040, 4043], [3952, 3951, 3944], [4082, 3949, 3955], [3950, 3956, 3958], [4105, 4063, 4071], [4064, 4070, 4074], [4087, 4051, 3851], [3851, 4051, 4087], [3997, 4102, 4076], [4087, 4055, 4088], [3999, 4056, 4106], [4010, 4009, 4008], [4013, 4077, 4012], [4016, 4057, 4107], [4058, 4077, 4013], [4030, 4035, 4033], [4090, 3889, 3892], [3891, 4090, 3892], [3891, 3883, 4091], [3906, 4039, 3900], [3904, 3907, 3901], [3918, 3920, 4095], [4083, 3957, 4099], [3965, 3960, 3954], [3964, 3958, 3962], [4104, 4111, 4110], [4046, 3969, 4112], [4101, 4100, 4104], [4065, 4085, 4113], [4065, 3971, 4085], [4113, 4105, 4071], [4113, 4071, 4065], [3979, 3976, 3980], [3983, 3979, 3980], [4051, 4087, 3851], [4087, 3986, 3851], [3993, 4114, 4089], [4077, 4058, 4108], [4132, 3844, 3879], [3876, 3868, 4133], [3909, 4093, 3912], [4152, 3908, 3913], [3932, 3936, 4125], [3942, 4115, 4098], [4068, 3940, 4109], [4100, 4111, 4104], [3966, 3965, 4069], [4116, 4073, 4063], [4116, 4063, 4105], [3983, 3980, 3979], [4108, 4003, 4005], [4108, 4005, 4077], [3860, 4131, 3866], [4118, 3883, 3866], [4138, 3875, 3881], [4120, 3887, 3897], [3897, 3887, 3893], [3902, 3897, 3898], [4103, 3918, 4095], [4068, 4124, 4115], [4109, 4124, 4068], [4068, 4115, 3942], [3947, 3938, 4127], [4116, 4168, 4084], [4069, 3965, 4128], [4170, 4110, 4169], [4170, 4104, 4110], [4116, 4084, 4073], [3969, 4069, 4112], [3977, 3978, 4241], [3984, 3985, 3990], [4088, 4129, 4087], [3990, 3992, 3993], [4058, 4018, 4130], [4016, 4107, 4257], [4066, 4025, 4026], [4026, 4027, 4030], [4131, 3860, 3877], [4117, 3866, 4131], [3879, 3878, 4135], [3881, 3887, 4138], [3887, 4139, 4138], [3874, 3871, 3880], [4120, 4141, 3887], [4142, 3889, 4090], [4121, 3845, 4038], [3897, 3902, 4145], [4204, 3899, 3896], [3901, 3907, 4149], [4093, 4150, 3912], [3914, 4096, 4285], [3925, 4213, 3928], [4288, 3927, 4156], [4109, 4217, 4124], [3940, 4158, 4217], [3940, 3937, 4158], [3937, 3939, 4159], [4041, 3943, 3945], [3950, 3958, 4224], [3965, 3954, 4165], [3958, 3964, 4167], [4069, 4128, 4231], [4069, 4234, 4112], [4046, 4112, 4085], [4116, 4105, 4113], [4171, 4074, 4070], [4238, 4049, 4064], [3974, 3975, 4239], [4245, 3982, 3987], [4247, 3985, 3983], [4175, 3990, 3985], [3986, 4087, 4174], [4176, 4087, 4129], [3854, 4129, 4088], [3996, 3998, 4179], [4089, 4182, 4056], [4183, 4004, 4002], [4010, 4186, 4185], [4057, 4010, 4185], [4187, 4003, 4108], [4015, 4066, 4190], [4030, 4192, 4026], [4262, 4131, 3877], [4262, 3877, 3844], [4194, 3857, 3861], [3844, 4132, 4264], [4196, 3867, 3864], [3858, 4197, 4268], [4133, 3868, 3857], [4134, 4036, 3859], [3859, 4134, 4036], [4132, 3879, 4135], [3865, 4134, 3859], [4138, 3865, 3875], [4136, 3873, 4037], [3871, 4137, 3880], [4139, 3887, 4119], [4118, 3866, 3883], [3866, 4118, 3883], [4200, 3884, 3880], [4090, 3883, 4118], [3885, 3888, 4143], [3888, 4201, 4143], [3845, 4121, 4038], [4144, 3884, 4200], [3897, 4141, 4120], [3897, 4145, 4141], [3883, 4090, 3891], [3885, 4202, 3896], [4091, 3883, 3891], [3897, 4145, 4203], [4146, 4092, 3848], [3848, 3899, 4146], [4205, 3906, 3900], [4148, 3902, 3905], [4207, 3906, 4206], [3908, 4209, 3905], [3905, 4209, 4208], [4210, 4095, 4280], [4212, 3917, 3912], [4103, 4095, 4210], [3921, 3923, 4286], [3925, 3917, 4213], [3927, 3922, 4156], [3933, 3926, 4154], [3931, 3928, 4123], [4061, 4062, 4219], [3849, 3927, 4215], [4214, 4124, 4218], [4062, 4080, 4219], [4124, 4214, 4115], [4217, 4109, 3940], [4219, 4080, 4081], [3935, 4289, 4126], [3935, 3933, 4289], [3937, 4159, 4158], [4080, 4219, 4081], [4161, 4080, 4081], [4126, 3944, 3935], [3944, 4295, 4163], [4295, 3944, 4163], [3945, 4082, 4221], [3952, 3944, 4295], [4222, 3953, 3947], [3954, 3952, 4223], [4224, 3958, 4225], [4165, 3954, 4223], [3953, 4222, 3957], [4226, 3955, 4084], [4225, 3958, 4167], [4228, 4111, 4227], [3963, 4099, 4166], [3964, 3963, 4167], [4110, 4111, 4228], [3965, 4165, 4229], [4230, 4227, 4111], [4110, 4228, 4169], [4128, 3965, 4229], [4128, 4229, 4231], [4232, 4084, 4168], [4168, 4116, 4232], [4116, 4233, 4232], [4085, 4112, 4236], [4235, 4116, 4113], [4100, 4074, 4171], [4085, 4236, 4113], [4236, 4235, 4113], [4299, 4070, 4075], [4238, 4172, 4049], [4075, 4049, 4172], [3976, 3974, 4173], [4243, 3988, 3989], [4242, 3988, 4243], [4086, 3986, 4174], [3982, 4246, 4301], [3982, 4301, 3981], [4246, 3982, 4245], [4174, 4087, 4176], [4249, 4250, 4102], [4250, 4076, 4102], [4177, 4053, 3996], [4249, 4102, 4053], [4251, 4303, 3994], [4252, 4129, 3854], [4253, 4178, 3854], [4253, 3854, 4054], [4106, 4056, 4254], [4183, 4002, 4184], [4255, 4007, 4183], [4255, 4307, 4008], [4256, 4057, 4185], [4108, 4003, 4187], [4108, 4187, 4077], [4187, 4108, 4077], [4018, 4188, 4189], [4018, 4067, 4188], [4067, 4014, 4189], [4016, 4191, 4017], [4015, 4308, 4014], [4019, 4191, 4260], [4019, 4017, 4191], [4261, 4066, 4026], [4263, 4262, 3844], [4264, 4263, 3844], [4194, 3861, 4195], [4265, 3867, 4267], [4136, 4195, 3873], [3858, 3862, 4197], [3863, 4266, 4197], [4265, 4266, 3870], [4196, 3864, 4036], [4036, 4198, 4196], [4133, 3857, 4194], [4134, 3859, 4036], [4269, 3869, 3858], [3871, 4269, 4137], [3871, 3869, 4269], [4138, 4199, 3865], [4134, 3865, 4199], [3871, 4271, 4137], [3871, 4137, 4271], [4138, 4139, 4119], [4118, 3866, 4117], [4136, 4037, 4272], [3880, 4137, 4140], [4272, 4037, 3886], [4141, 4119, 3887], [4200, 3880, 4140], [4142, 4273, 3889], [4090, 4118, 4142], [4119, 4141, 3887], [3887, 4141, 4119], [3887, 4120, 4141], [3887, 4141, 4120], [4144, 4078, 3884], [4143, 4202, 3885], [4141, 4120, 3897], [4141, 3897, 4120], [3890, 4144, 4276], [3890, 4078, 4144], [4203, 4145, 3897], [3900, 3890, 4205], [4276, 4205, 3890], [4202, 4204, 3896], [4146, 4147, 4092], [4146, 3899, 4204], [4205, 4207, 3906], [4148, 3905, 4208], [4093, 4092, 4147], [4207, 4206, 3906], [4206, 3906, 4207], [3911, 3906, 4279], [4151, 3907, 3910], [4150, 4212, 3912], [4282, 4280, 4094], [4094, 4280, 4095], [4284, 3916, 3911], [3921, 4282, 4094], [4153, 3922, 3919], [4154, 3916, 4284], [4152, 3913, 4061], [3926, 3916, 4154], [4212, 4213, 3917], [3922, 4153, 4156], [4285, 3924, 4155], [4122, 4061, 4219], [4115, 4214, 4287], [3923, 4157, 4286], [4215, 4288, 4156], [3932, 4155, 3924], [4098, 4115, 4216], [4097, 4157, 3923], [4290, 3931, 4123], [4097, 4291, 4157], [3938, 3849, 4160], [4072, 4098, 4216], [4160, 3849, 4215], [4161, 4072, 4216], [4161, 4219, 4080], [4159, 3939, 4162], [4081, 4072, 4161], [3939, 4041, 4162], [3943, 4041, 4293], [4162, 3943, 4293], [4041, 3943, 4162], [4293, 4041, 3945], [4295, 3944, 4126], [4163, 3944, 4295], [3936, 3948, 4294], [4296, 4293, 3945], [3944, 4163, 4295], [3947, 4127, 4220], [4221, 4296, 3945], [4164, 4221, 4082], [4223, 3952, 4295], [4294, 3950, 4297], [4082, 3955, 4164], [4222, 4166, 3957], [4164, 3955, 4226], [4099, 3957, 4166], [4167, 3963, 4166], [4226, 4084, 4232], [4069, 4231, 4234], [4235, 4233, 4116], [4236, 4112, 4234], [4101, 4170, 4237], [4101, 4104, 4170], [4237, 4238, 4101], [4070, 4299, 4171], [4064, 4101, 4238], [4299, 4172, 4238], [4299, 4075, 4172], [4173, 3974, 4239], [4240, 3976, 4173], [4241, 3975, 3977], [4086, 4243, 3989], [4174, 4243, 4086], [4301, 4241, 3978], [3980, 3976, 4244], [4244, 4300, 4240], [4244, 3976, 4300], [3981, 4301, 3978], [4245, 3988, 4242], [3987, 3988, 4245], [4175, 3985, 4248], [4250, 3994, 4076], [4177, 4249, 4053], [3992, 3990, 4248], [4248, 3990, 4175], [4178, 4253, 4252], [3992, 4180, 3993], [3995, 4303, 3852], [4303, 4304, 3852], [4177, 3996, 4179], [4253, 3852, 4304], [4253, 4054, 3852], [4179, 3998, 3999], [4180, 4181, 4114], [4180, 4114, 3993], [4306, 3999, 4106], [4106, 4254, 4306], [4056, 4182, 4254], [4114, 4181, 4089], [4181, 4182, 4089], [4007, 4004, 4183], [4002, 4003, 4184], [4008, 4007, 4255], [4307, 4010, 4008], [4307, 4186, 4010], [4057, 4256, 4257], [4187, 4130, 4188], [4058, 4130, 4187], [4058, 4187, 4108], [4016, 4257, 4258], [4067, 4189, 4188], [4189, 4014, 4308], [4191, 4016, 4258], [4015, 4190, 4259], [4015, 4259, 4308], [4192, 4261, 4026], [4030, 4309, 4192], [4019, 4310, 4059], [4033, 4193, 4030], [4030, 4193, 4309], [4032, 4059, 4310], [4193, 4033, 4311], [4032, 4310, 4311], [4195, 3861, 3873], [4266, 3863, 3870], [4265, 3870, 3867], [3862, 3863, 4197], [4269, 3858, 4268], [4139, 4138, 4119], [4139, 4119, 4141], [4137, 4271, 4140], [3888, 3889, 4201], [4201, 3889, 4273], [4272, 3894, 4274], [4272, 3886, 3894], [4141, 4145, 4203], [3894, 3895, 4275], [4274, 3894, 4275], [4203, 4145, 3902], [3902, 4148, 4203], [4147, 4146, 4322], [3895, 3901, 4277], [4275, 3895, 4277], [3901, 4149, 4277], [4093, 4147, 4278], [3906, 4206, 4207], [4149, 3907, 4151], [3906, 4207, 4279], [4079, 4103, 4211], [4281, 4079, 4211], [4151, 3910, 3914], [4209, 3908, 4152], [3919, 4079, 4283], [4153, 3919, 4283], [4314, 4152, 4061], [4282, 3921, 4286], [4096, 3924, 4285], [4061, 4122, 4314], [4287, 4216, 4115], [4289, 3933, 4154], [4124, 4217, 4218], [4215, 3927, 4288], [4097, 3931, 4291], [4127, 3938, 4220], [4222, 3947, 4220], [4294, 3948, 3950], [4224, 4297, 3950], [4232, 4315, 4226], [4231, 4317, 4234], [4230, 4111, 4298], [4316, 4232, 4233], [4298, 4111, 4100], [4235, 4316, 4233], [4100, 4171, 4298], [3975, 4241, 4239], [4240, 4300, 3976], [4244, 3983, 3980], [4302, 3985, 4247], [4302, 4248, 3985], [4252, 4176, 4129], [3994, 4250, 4251], [4178, 4252, 3854], [4303, 3995, 3994], [4318, 4252, 4253], [3992, 4248, 4180], [4179, 3999, 4305], [4184, 4003, 4108], [4187, 4184, 4108], [4107, 4057, 4257], [4130, 4018, 4188], [4018, 4189, 4188], [4190, 4066, 4261], [4019, 4260, 4310], [4033, 4032, 4311], [3867, 4196, 4267], [4198, 4036, 4134], [4141, 4319, 4139], [4322, 4146, 4204], [4322, 4204, 4202], [4322, 4323, 4147], [4150, 4093, 4278], [4211, 4103, 4210], [4284, 3911, 4279], [4151, 3914, 4313], [4283, 4079, 4281], [4313, 3914, 4285], [4287, 4214, 4325], [4123, 3928, 4213], [4214, 4218, 4325], [4125, 4155, 3932], [4291, 3931, 4290], [4292, 4125, 3936], [4161, 4216, 4219], [4292, 3936, 4294], [4164, 4226, 4315], [3983, 4244, 4247], [4176, 4243, 4174], [4318, 4253, 4304], [4304, 4303, 4318], [4305, 3999, 4306], [4188, 4184, 4187], [4192, 4193, 4326], [4193, 4192, 4309], [3878, 3876, 4135], [4135, 3876, 4270], [4144, 4200, 4140], [4141, 4203, 4320], [4315, 4327, 4164], [4231, 4229, 4165], [4316, 4315, 4232], [4236, 4317, 4329], [4329, 4316, 4235], [4234, 4317, 4236], [4236, 4329, 4235], [4301, 4369, 4370], [4186, 4307, 4342], [4147, 4346, 4324], [4287, 4325, 4331], [4217, 4334, 4325], [4333, 4216, 4287], [4158, 4159, 4335], [4159, 4162, 4358], [4336, 4126, 4289], [4220, 3938, 4160], [4165, 4223, 4337], [4231, 4165, 4328], [4361, 4315, 4316], [4365, 4298, 4171], [4300, 4244, 4240], [4243, 4176, 4252], [4243, 4252, 4368], [4185, 4186, 4342], [4257, 4372, 4258], [4264, 4131, 4262], [4264, 4262, 4263], [4343, 4134, 4199], [4141, 4320, 4319], [4118, 4330, 4344], [4330, 4118, 4117], [4205, 4276, 4144], [4147, 4324, 4348], [4278, 4147, 4348], [4207, 4349, 4279], [4279, 4349, 4284], [4349, 4352, 4284], [4282, 4210, 4280], [4283, 4281, 4353], [4287, 4331, 4333], [4212, 4354, 4213], [4282, 4286, 4332], [4152, 4314, 4122], [4217, 4325, 4218], [4213, 4290, 4123], [4335, 4159, 4358], [4336, 4289, 4357], [4295, 4126, 4336], [4220, 4160, 4359], [4166, 4222, 4360], [4224, 4225, 4167], [4231, 4328, 4362], [4227, 4230, 4363], [4317, 4231, 4362], [4317, 4362, 4364], [4317, 4364, 4329], [4230, 4298, 4363], [4365, 4363, 4298], [4366, 4365, 4171], [4368, 4245, 4242], [4367, 4245, 4368], [4367, 4369, 4245], [4241, 4301, 4370], [4369, 4246, 4245], [4369, 4301, 4246], [4368, 4242, 4243], [4177, 4179, 4339], [4340, 4250, 4249], [4256, 4185, 4371], [4183, 4184, 4188], [4188, 4189, 4373], [4372, 4191, 4258], [4193, 4192, 4326], [4311, 4310, 4193], [4271, 4137, 4269], [4142, 4118, 4344], [4205, 4144, 4347], [4202, 4321, 4204], [4321, 4386, 4204], [4323, 4346, 4147], [4376, 4324, 4346], [4376, 4346, 4375], [4377, 4351, 4350], [4377, 4350, 4331], [4154, 4284, 4356], [4284, 4352, 4356], [4325, 4377, 4331], [4355, 4282, 4332], [4357, 4289, 4154], [4286, 4157, 4332], [4158, 4334, 4217], [4293, 4296, 4510], [4223, 4295, 4337], [4294, 4297, 4224], [4316, 4364, 4361], [4329, 4364, 4316], [4171, 4299, 4237], [4299, 4238, 4237], [4240, 4173, 4537], [4256, 4371, 4257], [4308, 4373, 4189], [4379, 4138, 4139], [4269, 4268, 4382], [4383, 4196, 4198], [4330, 4117, 4131], [4271, 4269, 4381], [4198, 4134, 4385], [4134, 4343, 4385], [4384, 4202, 4143], [4321, 4202, 4384], [4345, 4144, 4140], [4272, 4274, 4275], [4325, 4334, 4389], [4325, 4389, 4377], [4510, 4162, 4293], [4337, 4295, 4378], [4393, 4391, 4338], [4227, 4338, 4391], [4224, 4167, 4392], [4361, 4390, 4315], [4328, 4165, 4397], [4227, 4363, 4338], [4368, 4318, 4245], [4368, 4252, 4318], [4428, 4425, 4270], [4394, 4374, 4380], [4374, 4394, 4384], [4383, 4198, 4385], [4440, 4272, 4444], [4450, 4438, 4143], [4407, 4282, 4355], [4489, 4213, 4482], [4158, 4396, 4334], [4122, 4219, 4216], [4503, 4358, 4162], [4164, 4327, 4221], [4165, 4337, 4397], [4328, 4397, 4362], [4364, 4390, 4361], [4529, 4363, 4365], [4539, 4244, 4300], [4245, 4367, 4368], [4318, 4303, 4246], [4183, 4373, 4559], [4373, 4183, 4188], [4259, 4190, 4564], [4618, 4418, 4571], [4423, 4194, 4195], [4419, 4131, 4264], [4425, 4132, 4135], [4195, 4136, 4427], [4429, 4428, 4270], [4434, 4319, 4320], [4197, 4266, 4572], [4432, 4142, 4344], [4269, 4382, 4381], [4441, 4382, 4268], [4267, 4196, 4399], [4196, 4383, 4399], [4384, 4394, 4401], [4343, 4437, 4446], [4450, 4143, 4201], [4444, 4272, 4454], [4144, 4345, 4452], [4456, 4323, 4322], [4323, 4457, 4458], [4455, 4203, 4403], [4202, 4204, 4462], [4405, 4121, 4312], [4467, 4387, 4350], [4150, 4278, 4470], [4471, 4349, 4207], [4278, 4348, 4470], [4469, 4472, 4350], [4395, 4472, 4350], [4483, 4377, 4389], [4481, 4377, 4483], [4355, 4407, 4388], [4407, 4355, 4388], [4480, 4313, 4285], [4355, 4332, 4408], [4216, 4487, 4333], [4356, 4357, 4154], [4122, 4216, 4333], [4213, 4489, 4290], [4332, 4157, 4409], [4500, 4358, 4503], [4160, 4215, 4502], [4291, 4501, 4505], [4336, 4506, 4508], [4512, 4510, 4296], [4511, 4292, 4294], [4516, 4294, 4224], [4337, 4518, 4397], [4327, 4315, 4390], [4362, 4397, 4412], [4527, 4338, 4363], [4529, 4527, 4363], [4540, 4244, 4539], [4246, 4245, 4318], [4177, 4415, 4414], [4306, 4549, 4305], [4180, 4551, 4181], [4550, 4306, 4254], [4554, 4181, 4341], [4183, 4558, 4255], [4568, 4260, 4566], [4310, 4260, 4569], [4566, 4192, 4570], [4418, 4138, 4571], [4420, 4264, 4132], [4420, 4419, 4264], [4421, 4199, 4138], [4422, 4379, 4139], [4139, 4319, 4422], [4420, 4132, 4425], [4419, 4426, 4131], [4424, 4195, 4427], [4425, 4135, 4270], [4429, 4270, 4133], [4430, 4199, 4421], [4398, 4380, 4374], [4400, 4433, 4344], [4430, 4437, 4343], [4343, 4199, 4430], [4443, 4434, 4320], [4374, 4384, 4431], [4438, 4431, 4384], [4330, 4400, 4344], [4426, 4439, 4131], [4265, 4442, 4436], [4267, 4442, 4265], [4380, 4401, 4394], [4438, 4384, 4143], [4439, 4330, 4131], [4445, 4381, 4382], [4445, 4382, 4441], [4446, 4383, 4385], [4574, 4446, 4383], [4385, 4343, 4446], [4448, 4142, 4447], [4439, 4400, 4330], [4401, 4449, 4384], [4384, 4453, 4321], [4345, 4140, 4452], [4346, 4323, 4458], [4346, 4459, 4375], [4403, 4203, 4148], [4461, 4321, 4453], [4386, 4321, 4461], [4456, 4202, 4462], [4322, 4202, 4456], [4459, 4402, 4376], [4459, 4376, 4375], [4347, 4144, 4460], [4405, 4312, 4121], [4454, 4277, 4463], [4461, 4204, 4386], [4461, 4462, 4204], [4404, 4405, 4312], [4404, 4312, 4405], [4205, 4347, 4464], [4403, 4148, 4208], [4205, 4464, 4207], [4350, 4387, 4467], [4467, 4350, 4468], [4467, 4469, 4350], [4466, 4208, 4209], [4350, 4472, 4395], [4211, 4210, 4406], [4475, 4281, 4211], [4475, 4476, 4281], [4212, 4150, 4470], [4476, 4353, 4281], [4210, 4282, 4406], [4313, 4473, 4151], [4331, 4350, 4477], [4477, 4350, 4472], [4209, 4152, 4474], [4474, 4152, 4484], [4407, 4355, 4408], [4334, 4483, 4389], [4152, 4122, 4484], [4213, 4354, 4482], [4333, 4331, 4487], [4156, 4153, 4485], [4155, 4488, 4285], [4334, 4492, 4483], [4492, 4334, 4493], [4334, 4396, 4493], [4491, 4156, 4215], [4216, 4333, 4487], [4491, 4215, 4156], [4155, 4125, 4495], [4493, 4158, 4496], [4489, 4494, 4290], [4409, 4157, 4497], [4156, 4498, 4215], [4290, 4499, 4291], [4215, 4498, 4502], [4157, 4291, 4505], [4125, 4292, 4495], [4336, 4357, 4506], [4503, 4162, 4507], [4411, 4410, 4157], [4162, 4510, 4507], [4359, 4160, 4502], [4509, 4292, 4511], [4295, 4336, 4508], [4515, 4220, 4513], [4511, 4294, 4516], [4221, 4517, 4514], [4221, 4327, 4517], [4337, 4378, 4518], [4222, 4520, 4360], [4523, 4327, 4390], [4392, 4522, 4224], [4360, 4520, 4166], [4390, 4364, 4524], [4167, 4166, 4392], [4362, 4412, 4364], [4391, 4525, 4227], [4412, 4524, 4364], [4413, 4228, 4227], [4527, 4526, 4338], [4529, 4366, 4531], [4529, 4365, 4366], [4237, 4170, 4531], [4171, 4237, 4532], [4171, 4532, 4366], [4535, 4367, 4245], [4367, 4535, 4369], [4241, 4538, 4239], [4370, 4535, 4534], [4370, 4369, 4535], [4539, 4300, 4536], [4300, 4240, 4536], [4540, 4541, 4244], [4251, 4543, 4303], [4248, 4302, 4542], [4544, 4543, 4251], [4545, 4251, 4250], [4546, 4545, 4250], [4180, 4248, 4542], [4340, 4546, 4250], [4339, 4415, 4177], [4414, 4249, 4177], [4249, 4546, 4340], [4339, 4416, 4415], [4414, 4340, 4249], [4549, 4179, 4305], [4414, 4548, 4340], [4542, 4547, 4180], [4550, 4180, 4547], [4550, 4552, 4180], [4552, 4551, 4180], [4306, 4550, 4549], [4553, 4181, 4551], [4554, 4341, 4553], [4341, 4181, 4553], [4254, 4182, 4551], [4181, 4553, 4182], [4554, 4553, 4181], [4555, 4371, 4185], [4255, 4556, 4307], [4555, 4185, 4342], [4557, 4555, 4342], [4561, 4558, 4559], [4556, 4342, 4307], [4559, 4558, 4183], [4555, 4417, 4371], [4417, 4257, 4371], [4257, 4560, 4372], [4417, 4560, 4257], [4308, 4561, 4373], [4561, 4559, 4373], [4560, 4191, 4372], [4562, 4191, 4560], [4562, 4566, 4191], [4566, 4260, 4191], [4567, 4565, 4261], [4567, 4261, 4192], [4570, 4192, 4193], [4138, 4379, 4571], [4423, 4195, 4424], [4429, 4194, 4423], [4133, 4194, 4429], [4398, 4374, 4431], [4433, 4432, 4344], [4435, 4197, 4572], [4266, 4265, 4572], [4436, 4572, 4265], [4401, 4380, 4398], [4438, 4573, 4431], [4427, 4136, 4440], [4268, 4197, 4441], [4197, 4435, 4441], [4447, 4142, 4432], [4442, 4267, 4399], [4450, 4273, 4448], [4273, 4142, 4448], [4445, 4451, 4271], [4271, 4381, 4445], [4399, 4383, 4574], [4201, 4273, 4450], [4320, 4203, 4455], [4140, 4271, 4452], [4272, 4275, 4454], [4323, 4456, 4457], [4460, 4144, 4452], [4458, 4459, 4346], [4454, 4275, 4277], [4348, 4324, 4376], [4348, 4376, 4575], [4277, 4149, 4465], [4466, 4403, 4208], [4465, 4151, 4473], [4465, 4149, 4151], [4466, 4209, 4474], [4350, 4351, 4468], [4475, 4211, 4406], [4352, 4349, 4471], [4473, 4313, 4480], [4351, 4377, 4468], [4407, 4406, 4210], [4468, 4377, 4481], [4482, 4212, 4470], [4283, 4353, 4479], [4283, 4479, 4485], [4153, 4283, 4485], [4487, 4331, 4477], [4285, 4488, 4480], [4484, 4122, 4490], [4491, 4156, 4485], [4396, 4158, 4493], [4332, 4497, 4408], [4332, 4409, 4497], [4499, 4290, 4494], [4158, 4335, 4500], [4409, 4497, 4157], [4291, 4499, 4501], [4157, 4504, 4409], [4504, 4497, 4409], [4335, 4358, 4500], [4505, 4411, 4157], [4411, 4157, 4410], [4296, 4221, 4514], [4295, 4508, 4378], [4512, 4296, 4514], [4220, 4359, 4513], [4515, 4222, 4220], [4579, 4580, 4391], [4580, 4579, 4391], [4520, 4222, 4515], [4521, 4412, 4397], [4523, 4589, 4517], [4591, 4522, 4392], [4392, 4166, 4520], [4227, 4525, 4413], [4519, 4393, 4338], [4169, 4228, 4413], [4169, 4528, 4530], [4170, 4169, 4530], [4532, 4237, 4531], [4532, 4531, 4366], [4173, 4239, 4533], [4533, 4239, 4538], [4246, 4535, 4245], [4247, 4244, 4541], [4246, 4303, 4535], [4303, 4543, 4535], [4542, 4302, 4582], [4251, 4545, 4544], [4179, 4416, 4339], [4548, 4249, 4340], [4556, 4557, 4342], [4561, 4255, 4558], [4563, 4259, 4564], [4564, 4190, 4261], [4567, 4192, 4566], [4569, 4260, 4568], [4570, 4193, 4310], [4310, 4569, 4570], [4422, 4319, 4434], [4136, 4272, 4440], [4442, 4399, 4574], [4574, 4383, 4446], [4443, 4320, 4455], [4453, 4384, 4449], [4584, 4460, 4452], [4575, 4376, 4402], [4463, 4277, 4465], [4467, 4472, 4469], [4348, 4585, 4470], [4406, 4282, 4210], [4478, 4353, 4476], [4352, 4471, 4586], [4353, 4478, 4479], [4354, 4212, 4482], [4356, 4352, 4586], [4586, 4576, 4356], [4122, 4333, 4490], [4357, 4356, 4576], [4357, 4576, 4506], [4496, 4158, 4500], [4513, 4359, 4502], [4508, 4577, 4378], [4378, 4578, 4518], [4521, 4397, 4518], [4521, 4590, 4412], [4523, 4517, 4327], [4580, 4391, 4519], [4580, 4579, 4525], [4523, 4524, 4581], [4523, 4390, 4524], [4391, 4393, 4519], [4590, 4524, 4412], [4170, 4530, 4531], [4537, 4173, 4533], [4550, 4254, 4552], [4254, 4551, 4552], [4308, 4259, 4563], [4308, 4563, 4561], [4564, 4261, 4565], [4401, 4398, 4431], [4427, 4440, 4444], [4383, 4446, 4574], [4271, 4451, 4583], [4271, 4583, 4452], [4464, 4347, 4460], [4207, 4464, 4471], [4469, 4472, 4467], [4473, 4480, 4607], [4282, 4407, 4210], [4486, 4408, 4587], [4490, 4333, 4487], [4577, 4508, 4592], [4508, 4506, 4592], [4157, 4411, 4504], [4577, 4578, 4378], [4612, 4580, 4519], [4579, 4588, 4525], [4581, 4524, 4590], [4525, 4391, 4580], [4537, 4539, 4536], [4241, 4370, 4538], [4538, 4370, 4534], [4536, 4240, 4537], [4582, 4302, 4247], [4249, 4548, 4546], [4179, 4549, 4416], [4182, 4553, 4551], [4594, 4555, 4557], [4595, 4255, 4561], [4595, 4556, 4255], [4427, 4444, 4440], [4348, 4575, 4585], [4471, 4464, 4597], [4576, 4586, 4598], [4486, 4407, 4408], [4485, 4599, 4491], [4156, 4491, 4498], [4495, 4292, 4509], [4495, 4509, 4609], [4600, 4578, 4577], [4578, 4600, 4518], [4521, 4518, 4593], [4521, 4593, 4590], [4224, 4522, 4516], [4601, 4590, 4593], [4601, 4581, 4590], [4581, 4589, 4523], [4547, 4542, 4550], [4555, 4594, 4417], [4421, 4138, 4418], [4618, 4421, 4418], [4401, 4431, 4449], [4438, 4431, 4573], [4602, 4574, 4446], [4442, 4574, 4603], [4602, 4603, 4574], [4584, 4464, 4460], [4605, 4575, 4402], [4405, 4596, 4404], [4406, 4407, 4475], [4586, 4471, 4597], [4474, 4484, 4606], [4576, 4598, 4608], [4477, 4484, 4487], [4490, 4487, 4484], [4506, 4576, 4608], [4506, 4608, 4592], [4488, 4155, 4495], [4509, 4511, 4610], [4411, 4588, 4504], [4611, 4504, 4579], [4515, 4613, 4520], [4601, 4589, 4581], [4612, 4519, 4614], [4591, 4392, 4520], [4519, 4338, 4526], [4528, 4169, 4413], [4615, 4530, 4528], [4531, 4530, 4615], [4543, 4538, 4534], [4616, 4538, 4543], [4543, 4534, 4535], [4582, 4247, 4541], [4541, 4542, 4582], [4548, 4414, 4546], [4416, 4414, 4415], [4556, 4595, 4557], [4561, 4563, 4595], [4562, 4560, 4417], [4644, 4421, 4618], [4449, 4431, 4438], [4451, 4445, 4583], [4604, 4605, 4402], [4624, 4460, 4464], [4467, 4469, 4472], [4586, 4597, 4598], [4468, 4481, 4483], [4587, 4408, 4407], [4408, 4587, 4407], [4491, 4599, 4485], [4505, 4501, 4499], [4518, 4600, 4620], [4516, 4610, 4511], [4593, 4518, 4620], [4611, 4579, 4612], [4543, 4545, 4616], [4544, 4545, 4543], [4546, 4616, 4545], [4562, 4417, 4617], [4379, 4422, 4571], [4447, 4432, 4621], [4669, 4583, 4628], [4584, 4452, 4583], [4462, 4639, 4456], [4464, 4584, 4624], [4464, 4460, 4624], [4470, 4585, 4575], [4469, 4467, 4472], [4470, 4575, 4619], [4497, 4504, 4626], [4592, 4600, 4577], [4609, 4509, 4610], [4593, 4620, 4601], [4579, 4504, 4588], [4589, 4601, 4632], [4579, 4580, 4612], [4522, 4591, 4516], [4627, 4612, 4614], [4520, 4633, 4591], [4614, 4519, 4526], [4634, 4614, 4526], [4528, 4413, 4615], [4645, 4422, 4434], [4426, 4419, 4439], [4653, 4434, 4443], [4444, 4454, 4622], [4436, 4442, 4623], [4442, 4603, 4623], [4671, 4458, 4457], [4597, 4464, 4641], [4685, 4466, 4474], [4484, 4477, 4472], [4598, 4597, 4641], [4486, 4475, 4407], [4592, 4608, 4630], [4592, 4630, 4631], [4600, 4592, 4631], [4512, 4514, 4510], [4711, 4515, 4513], [4591, 4633, 4516], [4614, 4634, 4717], [4526, 4720, 4634], [4616, 4546, 4635], [4566, 4733, 4567], [4571, 4645, 4762], [4571, 4422, 4645], [4618, 4571, 4762], [4430, 4421, 4649], [4648, 4647, 4423], [4652, 4433, 4400], [4656, 4446, 4430], [4446, 4437, 4430], [4737, 4448, 4447], [4736, 4450, 4448], [4572, 4660, 4435], [4667, 4628, 4445], [4583, 4445, 4628], [4638, 4584, 4583], [4679, 4463, 4681], [4604, 4605, 4682], [4464, 4624, 4641], [4484, 4472, 4606], [4479, 4478, 4695], [4598, 4641, 4642], [4598, 4642, 4630], [4489, 4482, 4629], [4699, 4698, 4483], [4598, 4630, 4608], [4699, 4483, 4492], [4496, 4500, 4704], [4499, 4705, 4505], [4600, 4643, 4620], [4601, 4620, 4632], [4527, 4529, 4721], [4566, 4562, 4731], [4788, 4618, 4762], [4420, 4425, 4650], [4646, 4425, 4428], [4646, 4428, 4429], [4647, 4429, 4423], [4651, 4648, 4423], [4651, 4423, 4424], [4424, 4427, 4651], [4447, 4621, 4654], [4438, 4659, 4449], [4662, 4400, 4439], [4660, 4572, 4436], [4660, 4436, 4665], [4667, 4445, 4664], [4446, 4666, 4602], [4658, 4668, 4449], [4636, 4637, 4439], [4739, 4663, 4455], [4663, 4443, 4455], [4449, 4668, 4453], [4639, 4675, 4456], [4455, 4403, 4677], [4462, 4675, 4639], [4459, 4676, 4402], [4463, 4465, 4681], [4682, 4605, 4604], [4688, 4474, 4606], [4406, 4475, 4691], [4689, 4691, 4475], [4689, 4476, 4475], [4492, 4493, 4701], [4631, 4643, 4600], [4499, 4501, 4705], [4609, 4610, 4708], [4411, 4505, 4710], [4613, 4633, 4520], [4525, 4588, 4716], [4717, 4634, 4718], [4723, 4537, 4533], [4537, 4724, 4539], [4540, 4726, 4541], [4542, 4541, 4728], [4617, 4417, 4730], [4595, 4563, 4557], [4564, 4565, 4732], [4617, 4565, 4567], [4566, 4570, 4733], [4644, 4618, 4788], [4646, 4429, 4647], [4425, 4734, 4650], [4645, 4434, 4653], [4419, 4420, 4650], [4621, 4432, 4654], [4657, 4427, 4440], [4659, 4658, 4449], [4439, 4419, 4655], [4440, 4444, 4661], [4665, 4436, 4623], [4655, 4636, 4439], [4444, 4622, 4740], [4669, 4628, 4667], [4603, 4670, 4623], [4637, 4742, 4636], [4739, 4455, 4677], [4675, 4674, 4456], [4453, 4462, 4461], [4453, 4675, 4462], [4402, 4676, 4604], [4676, 4605, 4604], [4638, 4624, 4584], [4638, 4744, 4624], [4404, 4596, 4405], [4744, 4745, 4624], [4624, 4744, 4745], [4691, 4625, 4406], [4686, 4467, 4468], [4596, 4406, 4625], [4475, 4406, 4596], [4689, 4475, 4596], [4478, 4476, 4693], [4482, 4470, 4619], [4696, 4475, 4486], [4694, 4473, 4607], [4700, 4491, 4485], [4630, 4746, 4747], [4630, 4642, 4746], [4489, 4629, 4779], [4408, 4749, 4587], [4408, 4497, 4749], [4493, 4496, 4701], [4494, 4702, 4499], [4631, 4630, 4643], [4703, 4497, 4626], [4750, 4496, 4704], [4501, 4499, 4705], [4503, 4507, 4707], [4620, 4751, 4632], [4507, 4709, 4707], [4712, 4507, 4510], [4502, 4711, 4513], [4632, 4714, 4589], [4752, 4611, 4612], [4627, 4755, 4612], [4517, 4769, 4514], [4588, 4411, 4713], [4614, 4717, 4627], [4717, 4715, 4627], [4615, 4413, 4719], [4526, 4527, 4721], [4756, 4531, 4615], [4721, 4529, 4531], [4533, 4538, 4616], [4725, 4539, 4724], [4726, 4540, 4539], [4725, 4726, 4539], [4726, 4727, 4541], [4546, 4757, 4635], [4758, 4635, 4546], [4542, 4728, 4550], [4416, 4759, 4414], [4772, 4549, 4771], [4594, 4557, 4564], [4563, 4564, 4557], [4567, 4733, 4566], [4568, 4566, 4569], [4569, 4566, 4570], [4652, 4432, 4433], [4651, 4427, 4775], [4649, 4656, 4430], [4738, 4419, 4650], [4427, 4657, 4775], [4435, 4773, 4441], [4438, 4450, 4659], [4655, 4738, 4439], [4738, 4655, 4439], [4637, 4655, 4738], [4655, 4637, 4636], [4740, 4622, 4454], [4459, 4458, 4671], [4456, 4674, 4457], [4638, 4583, 4669], [4638, 4669, 4743], [4602, 4763, 4603], [4741, 4454, 4679], [4680, 4636, 4678], [4679, 4454, 4463], [4624, 4745, 4744], [4745, 4641, 4624], [4745, 4744, 4778], [4764, 4575, 4605], [4596, 4625, 4777], [4687, 4472, 4469], [4619, 4575, 4764], [4778, 4641, 4745], [4690, 4472, 4687], [4478, 4693, 4695], [4692, 4468, 4483], [4475, 4696, 4689], [4692, 4483, 4698], [4482, 4619, 4629], [4479, 4697, 4485], [4746, 4642, 4765], [4700, 4485, 4697], [4699, 4492, 4701], [4609, 4488, 4495], [4630, 4747, 4643], [4703, 4749, 4497], [4704, 4750, 4496], [4496, 4750, 4704], [4499, 4784, 4705], [4620, 4643, 4751], [4704, 4500, 4503], [4703, 4626, 4504], [4643, 4767, 4751], [4751, 4767, 4632], [4705, 4710, 4505], [4703, 4504, 4611], [4502, 4498, 4711], [4755, 4752, 4612], [4768, 4610, 4516], [4514, 4754, 4510], [4589, 4714, 4785], [4755, 4627, 4715], [4613, 4770, 4633], [4719, 4413, 4525], [4615, 4719, 4756], [4537, 4723, 4722], [4757, 4533, 4616], [4757, 4616, 4635], [4635, 4757, 4546], [4758, 4546, 4414], [4414, 4759, 4758], [4759, 4416, 4729], [4550, 4760, 4771], [4761, 4729, 4416], [4550, 4771, 4549], [4416, 4549, 4761], [4730, 4594, 4732], [4417, 4594, 4730], [4732, 4594, 4564], [4617, 4732, 4565], [4733, 4567, 4566], [4652, 4735, 4432], [4654, 4432, 4735], [4435, 4774, 4773], [4447, 4654, 4737], [4662, 4652, 4400], [4655, 4419, 4738], [4450, 4736, 4659], [4664, 4445, 4441], [4440, 4661, 4657], [4666, 4446, 4656], [4439, 4637, 4662], [4665, 4670, 4660], [4670, 4665, 4623], [4740, 4454, 4741], [4457, 4672, 4671], [4673, 4459, 4671], [4457, 4674, 4672], [4763, 4670, 4603], [4763, 4602, 4666], [4673, 4676, 4459], [4637, 4636, 4680], [4678, 4636, 4742], [4680, 4678, 4776], [4638, 4743, 4744], [4677, 4403, 4466], [4680, 4683, 4684], [4686, 4469, 4467], [4467, 4469, 4686], [4469, 4687, 4467], [4469, 4467, 4687], [4688, 4685, 4474], [4764, 4605, 4682], [4777, 4689, 4596], [4465, 4473, 4694], [4693, 4476, 4689], [4641, 4778, 4642], [4765, 4642, 4778], [4629, 4619, 4779], [4780, 4694, 4607], [4479, 4695, 4697], [4607, 4480, 4780], [4587, 4696, 4486], [4781, 4747, 4765], [4480, 4488, 4780], [4488, 4748, 4780], [4746, 4765, 4747], [4747, 4781, 4782], [4747, 4782, 4783], [4702, 4494, 4779], [4701, 4496, 4750], [4609, 4748, 4488], [4643, 4747, 4767], [4706, 4498, 4491], [4703, 4611, 4752], [4411, 4710, 4753], [4516, 4633, 4770], [4770, 4768, 4516], [4613, 4515, 4711], [4613, 4711, 4786], [4718, 4634, 4720], [4413, 4719, 4756], [4719, 4413, 4756], [4756, 4721, 4531], [4724, 4537, 4722], [4727, 4541, 4726], [4727, 4726, 4541], [4758, 4757, 4635], [4728, 4541, 4727], [4728, 4760, 4550], [4761, 4759, 4729], [4772, 4761, 4549], [4730, 4731, 4562], [4730, 4562, 4617], [4617, 4730, 4732], [4567, 4730, 4617], [4566, 4733, 4570], [4644, 4649, 4421], [4737, 4736, 4448], [4742, 4637, 4738], [4661, 4444, 4740], [4453, 4668, 4675], [4683, 4680, 4776], [4467, 4686, 4469], [4686, 4687, 4469], [4686, 4468, 4692], [4625, 4691, 4683], [4795, 4686, 4692], [4606, 4472, 4690], [4606, 4690, 4688], [4779, 4619, 4764], [4697, 4791, 4700], [4489, 4779, 4494], [4747, 4783, 4767], [4491, 4700, 4706], [4701, 4750, 4704], [4784, 4499, 4702], [4704, 4503, 4707], [4610, 4768, 4708], [4754, 4514, 4787], [4713, 4411, 4753], [4517, 4589, 4769], [4514, 4769, 4787], [4770, 4613, 4786], [4588, 4713, 4716], [4720, 4526, 4721], [4533, 4757, 4723], [4792, 4757, 4758], [4731, 4733, 4566], [4730, 4567, 4733], [4774, 4435, 4789], [4441, 4773, 4664], [4435, 4660, 4789], [4664, 4773, 4802], [4763, 4790, 4670], [4776, 4678, 4742], [4605, 4676, 4682], [4685, 4677, 4466], [4683, 4777, 4625], [4783, 4782, 4767], [4609, 4708, 4748], [4714, 4632, 4767], [4800, 4768, 4770], [4769, 4785, 4801], [4769, 4589, 4785], [4760, 4771, 4728], [4771, 4760, 4728], [4730, 4733, 4731], [4838, 4788, 4950], [4425, 4646, 4734], [4805, 4683, 4776], [4681, 4465, 4694], [4749, 4696, 4587], [4779, 4702, 4797], [4702, 4779, 4797], [4711, 4498, 4799], [4709, 4507, 4712], [4712, 4510, 4754], [4811, 4786, 4711], [4787, 4769, 4801], [4525, 4716, 4719], [4757, 4792, 4723], [4847, 4735, 4652], [4738, 4650, 4793], [4806, 4687, 4686], [4688, 4796, 4685], [4777, 4693, 4689], [4814, 4692, 4698], [4779, 4764, 4807], [4782, 4781, 4808], [4782, 4808, 4809], [4702, 4779, 4797], [4706, 4700, 4810], [4784, 4702, 4797], [4498, 4706, 4799], [4767, 4798, 4714], [4709, 4712, 4707], [4714, 4801, 4785], [4770, 4786, 4811], [4800, 4770, 4811], [4727, 4760, 4728], [4950, 4788, 4762], [4803, 4652, 4662], [4651, 4775, 4657], [4663, 4653, 4443], [4803, 4662, 4637], [4675, 4668, 4658], [4777, 4683, 4805], [4682, 4676, 4794], [4777, 4813, 4693], [4815, 4697, 4695], [4779, 4807, 4797], [4701, 4704, 4816], [4705, 4784, 4797], [4768, 4817, 4708], [4800, 4817, 4768], [4787, 4801, 4754], [4723, 4792, 4722], [4818, 4725, 4724], [4759, 4725, 4758], [4760, 4812, 4771], [4759, 4761, 4812], [4759, 4812, 4761], [4759, 4761, 4812], [4772, 4812, 4761], [4772, 4771, 4812], [4670, 4804, 4660], [4679, 4681, 4821], [4819, 4687, 4806], [4820, 4677, 4685], [4820, 4685, 4796], [4798, 4767, 4782], [4782, 4809, 4798], [4725, 4818, 4726], [4725, 4792, 4758], [4847, 4846, 4735], [4650, 4825, 4793], [4651, 4657, 4826], [4934, 4659, 4736], [4684, 4683, 4680], [4695, 4697, 4815], [4822, 4801, 4714], [4714, 4798, 4822], [4752, 4755, 4703], [4735, 4850, 4654], [4824, 4737, 4654], [4669, 4667, 4664], [4869, 4675, 4861], [4738, 4793, 4827], [4738, 4827, 4742], [4776, 4742, 4805], [4796, 4688, 4690], [4815, 4697, 4695], [4703, 4755, 4823], [4711, 4799, 4811], [4925, 4818, 4724], [4842, 4841, 4774], [4845, 4649, 4838], [4646, 4853, 4734], [4824, 4654, 4854], [4826, 4856, 4651], [4803, 4829, 4652], [4843, 4789, 4660], [4650, 4734, 4825], [4736, 4737, 4858], [4657, 4856, 4826], [4659, 4830, 4658], [4862, 4863, 4664], [4658, 4830, 4861], [4804, 4670, 4860], [4666, 4656, 4857], [4867, 4666, 4857], [4674, 4675, 4869], [4866, 4670, 4790], [4805, 4742, 4827], [4666, 4831, 4763], [4680, 4878, 4637], [4865, 4741, 4679], [4680, 4683, 4832], [4883, 4806, 4686], [4682, 4794, 4886], [4890, 4683, 4691], [4687, 4796, 4690], [4764, 4895, 4807], [4834, 4808, 4897], [4791, 4697, 4901], [4836, 4808, 4835], [4791, 4901, 4904], [4810, 4904, 4907], [4809, 4836, 4822], [4943, 4748, 4708], [4798, 4809, 4822], [4915, 4823, 4755], [4716, 4837, 4713], [4837, 4716, 4713], [4920, 4919, 4717], [4716, 4837, 4719], [4923, 4756, 4719], [4931, 4792, 4725], [4759, 4931, 4725], [4838, 4644, 4788], [4839, 4762, 4645], [4839, 4645, 4840], [4841, 4773, 4774], [4644, 4838, 4649], [4843, 4774, 4789], [4843, 4842, 4774], [4844, 4802, 4841], [4841, 4802, 4773], [4847, 4652, 4848], [4647, 4648, 4851], [4664, 4802, 4844], [4854, 4654, 4850], [4858, 4737, 4824], [4858, 4824, 4854], [4855, 4825, 4734], [4656, 4649, 4857], [4859, 4852, 4663], [4852, 4653, 4663], [4843, 4660, 4860], [4825, 4855, 4793], [4659, 4861, 4830], [4660, 4804, 4860], [4803, 4864, 4829], [4865, 4657, 4661], [4740, 4865, 4661], [4860, 4670, 4866], [4637, 4864, 4803], [4658, 4861, 4675], [4869, 4861, 4936], [4671, 4871, 4673], [4671, 4870, 4871], [4672, 4674, 4874], [4872, 4671, 4672], [4872, 4870, 4671], [4865, 4740, 4741], [4743, 4669, 4868], [4831, 4666, 4867], [4876, 4763, 4831], [4875, 4877, 4819], [4677, 4873, 4739], [4637, 4878, 4864], [4820, 4819, 4877], [4673, 4871, 4676], [4763, 4876, 4790], [4871, 4881, 4676], [4680, 4832, 4878], [4883, 4686, 4795], [4687, 4819, 4884], [4683, 4833, 4832], [4679, 4821, 4885], [4777, 4888, 4813], [4886, 4889, 4682], [4939, 4795, 4692], [4890, 4833, 4683], [4693, 4813, 4888], [4821, 4681, 4891], [4939, 4692, 4814], [4682, 4889, 4764], [4681, 4694, 4891], [4695, 4693, 4893], [4890, 4696, 4828], [4890, 4689, 4696], [4894, 4815, 4695], [4941, 4765, 4778], [4892, 4895, 4764], [4697, 4815, 4894], [4694, 4780, 4899], [4778, 4896, 4765], [4781, 4897, 4808], [4781, 4896, 4897], [4814, 4698, 4900], [4765, 4896, 4781], [4898, 4697, 4894], [4698, 4699, 4900], [4808, 4902, 4835], [4749, 4828, 4696], [4835, 4902, 4836], [4836, 4902, 4835], [4900, 4699, 4701], [4895, 4903, 4807], [4701, 4699, 4900], [4903, 4797, 4807], [4809, 4808, 4836], [4905, 4780, 4748], [4700, 4904, 4810], [4816, 4704, 4942], [4704, 4908, 4942], [4703, 4823, 4906], [4706, 4810, 4907], [4704, 4707, 4908], [4797, 4909, 4705], [4817, 4943, 4708], [4817, 4708, 4910], [4708, 4817, 4910], [4710, 4705, 4909], [4712, 4912, 4707], [4913, 4811, 4799], [4817, 4811, 4913], [4800, 4811, 4817], [4912, 4712, 4754], [4801, 4822, 4754], [4710, 4914, 4753], [4753, 4916, 4713], [4716, 4713, 4917], [4716, 4917, 4713], [4919, 4715, 4717], [4919, 4918, 4715], [4920, 4717, 4718], [4718, 4720, 4920], [4920, 4720, 4922], [4921, 4923, 4719], [4720, 4721, 4922], [4756, 4923, 4924], [4922, 4721, 4924], [4721, 4756, 4924], [4926, 4724, 4722], [4925, 4724, 4926], [4928, 4726, 4925], [4925, 4726, 4818], [4927, 4722, 4792], [4726, 4929, 4727], [4931, 4759, 4725], [4931, 4725, 4726], [4725, 4759, 4726], [4726, 4812, 4932], [4759, 4812, 4726], [4645, 4653, 4840], [4840, 4653, 4852], [4846, 4850, 4735], [4849, 4646, 4647], [4647, 4851, 4849], [4829, 4848, 4652], [4862, 4664, 4844], [4830, 4861, 4659], [4669, 4863, 4868], [4937, 4827, 4793], [4674, 4869, 4874], [4672, 4874, 4872], [4790, 4876, 4866], [4952, 4875, 4806], [4875, 4819, 4806], [4865, 4679, 4880], [4879, 4743, 4868], [4806, 4883, 4882], [4881, 4794, 4676], [4795, 4887, 4883], [4744, 4743, 4879], [4888, 4777, 4805], [4886, 4794, 4881], [4687, 4884, 4796], [4778, 4744, 4954], [4889, 4892, 4764], [4693, 4888, 4893], [4890, 4691, 4689], [4941, 4778, 4765], [4941, 4896, 4778], [4896, 4955, 4897], [4814, 4900, 4940], [4905, 4899, 4780], [4700, 4791, 4904], [4905, 4780, 4748], [4905, 4748, 4780], [4699, 4701, 4942], [4943, 4905, 4748], [4942, 4701, 4816], [4958, 4908, 4707], [4749, 4703, 4906], [4942, 4908, 4958], [4799, 4706, 4945], [4947, 4754, 4948], [4945, 4949, 4913], [4822, 4946, 4754], [4945, 4913, 4799], [4949, 4817, 4913], [4914, 4710, 4909], [4755, 4715, 4915], [4918, 4915, 4715], [4917, 4716, 4713], [4917, 4837, 4716], [4929, 4726, 4928], [4760, 4727, 4933], [4932, 4760, 4933], [4760, 4932, 4812], [4845, 4857, 4649], [4959, 4843, 4860], [4855, 4734, 4951], [4734, 4853, 4951], [4648, 4651, 4856], [4830, 4659, 4934], [4664, 4862, 4863], [4862, 4664, 4863], [4863, 4669, 4664], [4805, 4827, 4937], [4820, 4873, 4677], [4805, 4937, 4938], [4888, 4805, 4953], [4795, 4939, 4887], [4962, 4893, 4888], [4939, 4814, 4940], [4778, 4954, 4941], [4896, 4941, 4955], [4891, 4694, 4899], [4964, 4956, 4902], [4835, 4902, 4956], [4828, 4749, 4957], [4836, 4835, 4956], [4957, 4749, 4906], [4836, 4956, 4948], [4706, 4907, 4945], [4817, 4910, 4943], [4836, 4948, 4822], [4946, 4822, 4948], [4707, 4912, 4947], [4949, 4910, 4817], [4948, 4754, 4946], [4912, 4754, 4947], [4911, 4823, 4915], [4713, 4916, 4917], [4927, 4926, 4722], [4931, 4927, 4792], [4933, 4727, 4930], [4960, 4851, 4648], [4736, 4858, 4934], [4856, 4657, 4935], [4793, 4855, 4937], [4935, 4657, 4865], [4663, 4739, 4859], [4739, 4873, 4859], [4867, 4876, 4831], [4820, 4877, 4873], [4865, 4880, 4961], [4953, 4805, 4938], [4744, 4879, 4954], [4884, 4820, 4796], [4819, 4820, 4884], [4885, 4880, 4679], [4887, 4939, 4883], [4963, 4939, 4940], [4695, 4893, 4894], [4963, 4940, 4900], [4898, 4901, 4697], [4902, 4808, 4834], [4699, 4966, 4900], [4964, 4965, 4967], [4942, 4966, 4699], [4956, 4964, 4967], [4947, 4967, 4944], [4947, 4956, 4967], [4967, 4958, 4944], [4958, 4707, 4944], [4909, 4797, 4903], [4911, 4906, 4823], [4948, 4956, 4947], [4944, 4707, 4947], [4916, 4753, 4914], [4719, 4837, 4921], [4929, 4930, 4727], [4930, 4932, 4933], [4979, 4851, 4960], [4646, 4849, 4951], [4853, 4646, 4951], [4960, 4648, 4856], [4937, 4855, 4968], [4938, 4937, 4968], [4886, 4881, 4984], [4878, 4832, 4833], [4941, 4954, 4969], [4939, 4963, 4970], [4885, 4821, 4891], [4966, 4972, 4963], [4966, 4963, 4900], [4965, 4973, 4967], [4942, 4900, 4966], [4958, 4967, 4973], [4958, 4966, 4942], [4942, 4966, 4900], [4958, 4973, 4966], [4943, 4986, 4905], [4907, 4974, 4945], [4988, 4910, 4949], [4923, 4921, 4924], [4926, 4927, 4925], [4927, 4931, 4925], [4950, 4762, 4839], [4830, 4977, 4861], [4850, 4846, 4978], [4849, 4851, 4979], [4951, 4849, 4979], [4871, 4870, 4981], [4952, 4806, 4882], [4983, 4881, 4871], [4983, 4984, 4881], [4938, 4968, 4953], [4889, 4886, 4984], [4941, 4969, 4955], [4885, 4891, 4971], [4891, 4986, 4971], [4972, 4966, 4985], [4891, 4899, 4986], [4905, 4943, 4899], [4906, 4828, 4957], [4993, 4904, 4901], [4943, 4986, 4899], [4986, 4943, 4905], [4903, 4987, 4909], [4988, 4943, 4910], [4921, 4989, 4924], [4929, 4932, 4930], [4726, 4932, 4929], [4862, 4844, 4863], [4859, 4840, 4852], [4977, 4976, 4861], [4857, 4845, 4975], [4981, 4850, 4978], [4978, 4871, 4981], [4935, 4865, 4982], [4867, 4857, 4980], [4973, 4985, 4966], [4974, 4988, 4949], [4945, 4974, 4949], [4921, 4837, 4989], [4929, 4931, 4726], [5089, 4841, 4842], [5089, 5108, 5132], [4844, 4990, 4863], [4847, 4978, 4846], [4978, 4847, 4991], [4859, 4873, 4877], [4983, 4871, 4978], [4978, 4991, 4983], [4859, 4877, 4995], [4864, 4878, 4983], [4953, 4962, 4888], [4972, 4985, 4973], [4992, 4898, 4894], [4992, 4901, 4898], [4904, 4993, 4907], [5008, 4847, 4848], [4995, 4840, 4859], [4976, 4994, 4996], [4996, 4861, 4976], [5073, 5063, 4977], [4858, 4854, 4981], [4981, 4854, 4850], [4982, 4856, 4935], [4872, 4981, 4870], [4867, 4997, 4876], [4998, 4962, 4953], [4832, 4878, 4833], [4893, 4962, 4894], [4894, 4962, 5001], [4901, 4993, 4907], [4993, 4901, 4907], [4988, 4986, 4943], [4925, 4929, 4928], [5005, 4842, 4843], [4830, 4934, 5015], [5000, 4968, 4855], [5000, 4855, 4951], [4991, 4864, 4983], [4878, 4984, 4983], [5036, 4963, 4972], [4986, 4988, 4999], [4931, 4929, 4925], [5018, 4936, 4861], [4858, 4981, 4872], [5002, 4856, 4982], [5017, 4860, 5023], [4953, 4968, 5000], [4882, 4883, 4952], [4998, 4953, 5000], [4997, 5025, 4876], [4961, 4880, 4885], [4883, 4939, 5028], [4969, 4955, 5033], [5036, 4970, 4963], [4889, 5029, 4892], [5029, 5037, 4892], [5034, 4833, 5093], [5042, 4890, 4828], [4987, 4903, 4895], [4988, 5048, 4999], [4974, 5048, 4988], [4909, 5050, 4914], [5051, 4911, 4915], [4919, 4920, 4922], [4950, 5003, 4838], [4839, 4840, 5006], [5007, 4845, 4838], [5005, 4843, 4959], [5007, 4838, 4845], [4990, 4844, 5011], [4838, 5013, 4845], [4863, 4990, 5011], [4975, 4845, 5013], [5014, 4848, 4829], [5014, 5009, 4848], [5073, 4977, 4830], [5015, 4934, 4858], [4829, 4864, 4991], [4951, 5020, 5000], [4951, 4979, 5020], [4856, 5002, 4960], [5020, 4979, 5000], [5021, 4867, 4980], [4869, 4936, 5022], [5023, 4866, 4876], [4869, 5022, 4874], [4867, 5025, 4997], [4952, 4883, 5024], [4982, 4865, 4961], [5029, 4889, 4984], [4878, 4832, 5031], [5031, 4832, 4833], [4885, 5030, 4961], [4962, 4998, 5001], [5031, 4833, 5034], [4954, 5033, 4969], [5035, 4970, 4939], [5035, 4939, 4970], [5030, 4885, 4971], [4955, 4969, 5033], [5035, 4970, 5036], [5030, 4971, 5041], [5033, 4897, 4955], [4897, 5039, 4834], [4834, 5039, 4902], [5041, 4971, 4986], [5040, 4972, 5043], [4999, 5041, 4986], [5044, 4964, 4902], [5046, 4964, 5045], [4973, 4965, 5043], [5047, 4987, 4895], [5049, 4828, 4906], [4911, 5051, 4906], [4987, 5050, 4909], [4916, 4914, 5052], [5054, 4917, 4916], [5055, 5053, 4915], [4918, 5055, 4915], [5056, 5057, 4917], [4917, 5057, 4837], [5057, 5058, 4837], [4837, 5058, 4989], [4924, 4989, 5058], [5061, 4924, 5058], [4919, 4922, 5060], [5003, 4950, 4839], [4976, 4977, 5012], [4977, 5063, 5012], [5011, 5016, 4863], [4980, 4857, 4975], [5020, 5000, 4979], [5019, 4960, 5002], [5064, 4875, 4952], [4883, 5028, 5081], [4961, 5030, 5068], [5027, 4954, 4879], [4939, 4970, 5032], [5033, 4955, 4969], [4833, 4890, 5038], [5001, 4992, 4894], [4890, 5070, 5038], [4902, 5039, 5087], [5048, 5041, 4999], [4972, 4973, 5043], [4901, 4992, 4993], [5048, 5071, 5041], [4965, 4964, 5046], [5048, 4974, 4993], [4974, 4907, 4993], [5050, 4987, 5072], [5052, 4914, 5050], [5051, 4915, 5053], [4917, 5054, 5056], [4918, 4919, 5055], [5060, 4922, 5062], [5062, 4922, 4924], [5089, 4842, 5108], [4844, 4841, 5004], [5003, 4839, 5006], [4844, 5004, 5011], [4838, 5007, 5013], [4996, 4976, 5018], [4994, 4976, 4996], [5010, 4840, 4995], [5074, 5010, 4995], [4996, 5018, 4861], [4872, 4874, 5015], [4872, 5015, 4858], [4875, 4995, 4877], [5022, 4936, 5018], [4979, 4960, 5019], [5020, 4979, 5019], [4866, 5023, 4860], [4952, 5076, 5064], [5090, 4875, 5064], [5065, 5000, 5020], [5002, 4982, 5078], [5066, 5078, 4982], [5024, 5076, 4952], [5079, 4998, 5065], [4879, 4868, 5067], [5026, 5024, 4883], [4998, 5000, 5065], [5066, 4982, 5080], [4982, 4961, 5080], [5026, 4883, 5081], [4939, 5081, 5028], [5001, 4998, 5079], [5032, 4970, 5035], [5083, 4992, 5001], [5083, 5069, 4992], [5071, 5084, 5041], [5036, 4972, 5040], [4993, 4992, 5086], [5084, 5071, 5048], [5088, 5084, 5048], [5048, 4993, 5088], [5044, 5045, 4964], [5055, 4919, 5059], [5062, 4924, 5061], [5010, 5006, 4840], [5009, 5008, 4848], [4868, 4863, 5016], [4980, 4975, 5021], [4874, 5022, 5077], [5020, 5019, 5065], [5019, 5091, 5065], [5091, 5002, 5078], [5092, 5103, 5023], [5026, 5081, 5028], [5092, 4876, 5025], [5081, 5026, 5028], [5029, 4984, 4878], [5029, 4878, 5031], [5068, 5080, 4961], [5079, 5082, 5001], [5001, 5082, 5083], [5085, 5030, 5041], [5068, 5030, 5085], [5084, 5094, 5068], [5038, 5093, 4833], [5086, 4992, 5069], [5085, 5041, 5084], [4993, 5084, 5088], [5086, 5084, 4993], [5108, 4842, 5005], [4959, 4860, 5017], [5007, 5095, 5013], [4976, 5012, 5018], [5008, 5075, 4847], [4991, 4847, 5075], [5015, 5073, 4830], [5090, 5074, 4995], [4991, 5014, 5075], [4991, 5075, 5014], [5090, 4995, 4875], [5018, 5073, 5022], [5021, 4975, 5013], [5077, 5015, 4874], [5019, 5002, 5091], [5066, 5098, 5078], [5096, 4867, 5021], [5081, 5024, 5026], [5097, 5065, 5091], [5065, 5097, 5079], [5098, 5066, 5080], [5097, 5082, 5079], [5080, 5068, 5094], [5084, 5068, 5085], [5069, 5083, 5086], [5083, 5099, 5086], [5070, 5093, 5038], [5087, 5044, 4902], [5047, 4895, 4892], [5059, 4919, 5060], [5004, 4841, 5089], [5005, 4959, 5100], [5003, 5007, 4838], [4959, 5017, 5100], [5073, 5012, 5063], [5010, 5074, 5090], [5012, 5073, 5018], [5075, 5008, 5014], [4991, 5014, 4829], [5075, 5014, 4991], [5101, 5090, 5064], [4868, 5016, 5067], [5101, 5064, 5076], [5021, 5013, 5102], [5092, 5023, 4876], [5024, 5081, 5102], [5091, 5078, 5098], [4867, 5096, 5025], [5097, 5091, 5098], [5080, 5099, 5098], [4939, 5032, 5081], [5082, 5097, 5083], [5094, 5099, 5080], [5099, 5084, 5086], [5094, 5084, 5099], [5039, 4897, 5033], [5105, 4892, 5037], [5105, 5106, 4892], [5047, 4892, 5106], [4916, 5052, 5054], [5101, 5007, 5003], [5101, 5006, 5090], [5003, 5006, 5101], [5008, 5009, 5014], [5006, 5010, 5090], [5101, 5095, 5007], [5013, 5095, 5024], [5024, 5095, 5101], [5024, 5101, 5076], [5102, 5013, 5024], [5015, 5077, 5022], [4879, 5067, 5027], [5104, 4954, 5027], [5032, 5035, 5081], [5098, 5099, 5097], [5099, 5083, 5097], [5033, 4954, 5104], [5042, 5070, 4890], [5043, 4965, 5046], [5042, 4828, 5049], [4987, 5047, 5072], [4906, 5051, 5049], [5054, 5052, 5056], [5057, 5056, 5058], [5022, 5073, 5015], [5096, 5021, 5081], [5021, 5102, 5081], [5093, 5031, 5034], [5035, 5036, 5109], [5017, 5023, 5103], [5111, 5017, 5103], [5081, 5035, 5096], [5039, 5033, 5110], [5042, 5093, 5070], [5044, 5087, 5045], [5106, 5072, 5047], [5049, 5107, 5042], [5055, 5059, 5060], [5027, 5067, 5115], [5109, 5092, 5025], [5025, 5096, 5109], [5109, 5096, 5035], [5037, 5029, 5105], [5105, 5029, 5031], [5105, 5031, 5093], [5060, 5062, 5058], [5062, 5061, 5058], [5004, 5112, 5011], [5017, 5113, 5100], [5109, 5117, 5092], [5109, 5118, 5117], [5119, 5039, 5033], [5087, 5039, 5119], [5036, 5040, 5121], [5087, 5130, 5045], [5106, 5124, 5072], [5125, 5052, 5050], [5055, 5060, 5127], [5116, 5129, 5103], [5103, 5092, 5116], [5135, 5040, 5043], [5123, 5093, 5042], [5045, 5131, 5046], [5137, 5127, 5060], [5004, 5089, 5128], [5016, 5011, 5114], [5109, 5117, 5118], [5109, 5118, 5117], [5040, 5109, 5036], [5040, 5036, 5121], [5131, 5045, 5122], [5136, 5107, 5049], [5051, 5136, 5049], [5143, 5052, 5125], [5126, 5052, 5143], [5128, 5089, 5132], [5004, 5133, 5112], [5005, 5100, 5113], [5011, 5112, 5114], [5067, 5016, 5115], [5117, 5118, 5092], [5104, 5139, 5033], [5130, 5087, 5120], [5141, 5093, 5123], [5141, 5106, 5105], [5072, 5142, 5050], [5053, 5055, 5137], [5137, 5055, 5127], [5058, 5056, 5144], [5144, 5060, 5058], [5134, 5148, 5111], [5111, 5103, 5129], [5104, 5027, 5138], [5104, 5138, 5139], [5121, 5118, 5109], [5039, 5110, 5033], [5040, 5121, 5109], [5105, 5093, 5141], [5045, 5130, 5122], [5135, 5043, 5046], [5107, 5123, 5042], [5149, 5123, 5107], [5125, 5050, 5142], [5126, 5056, 5052], [5132, 5108, 5005], [5113, 5017, 5148], [5134, 5111, 5129], [5115, 5016, 5114], [5121, 5040, 5135], [5141, 5124, 5106], [5051, 5147, 5136], [5147, 5051, 5053], [5147, 5053, 5150], [5137, 5150, 5053], [5151, 5005, 5113], [5148, 5017, 5111], [5033, 5139, 5140], [5140, 5119, 5033], [5046, 5152, 5135], [5141, 5123, 5145], [5145, 5123, 5149], [5072, 5124, 5142], [5136, 5146, 5107], [5144, 5056, 5126], [5004, 5128, 5133], [5121, 5135, 5152], [5153, 5122, 5130], [5131, 5122, 5153], [5124, 5141, 5145], [5149, 5124, 5145], [5146, 5149, 5107], [5150, 5136, 5147], [5155, 5136, 5150], [5143, 5125, 5154], [5155, 5150, 5137], [5126, 5137, 5144], [5116, 5092, 5118], [5120, 5153, 5130], [5152, 5131, 5153], [5046, 5131, 5152], [5149, 5146, 5136], [5137, 5060, 5144], [5027, 5115, 5138], [5120, 5087, 5119], [5152, 5121, 5131], [5131, 5121, 5152], [5125, 5142, 5154], [5126, 5155, 5137], [5133, 5128, 5158], [5132, 5005, 5151], [5121, 5152, 5157], [5142, 5124, 5149], [5142, 5149, 5154], [5154, 5149, 5136], [5143, 5154, 5136], [5126, 5143, 5155], [5140, 5139, 5138], [5156, 5140, 5162], [5119, 5140, 5156], [5118, 5121, 5157], [5136, 5155, 5143], [5164, 5153, 5120], [5133, 5114, 5112], [5159, 5134, 5129], [5115, 5114, 5165], [5162, 5119, 5156], [5119, 5163, 5120], [5166, 5133, 5158], [5138, 5161, 5140], [5172, 5116, 5118], [5140, 5156, 5162], [5164, 5152, 5153], [5167, 5170, 5113], [5133, 5169, 5114], [5160, 5159, 5129], [5138, 5115, 5165], [5116, 5160, 5129], [5173, 5172, 5171], [5157, 5172, 5118], [5167, 5148, 5168], [5113, 5148, 5167], [5170, 5151, 5113], [5116, 5171, 5160], [5171, 5116, 5173], [5172, 5173, 5116], [5172, 5174, 5177], [5172, 5157, 5174], [5177, 5174, 5157], [5157, 5164, 5177], [5157, 5152, 5164], [5119, 5183, 5163], [5179, 5151, 5176], [5161, 5138, 5165], [5177, 5178, 5172], [5119, 5162, 5183], [5132, 5151, 5179], [5166, 5169, 5133], [5134, 5181, 5148], [5181, 5168, 5148], [5181, 5134, 5159], [5159, 5160, 5181], [5165, 5114, 5182], [5171, 5172, 5178], [5140, 5161, 5175], [5140, 5175, 5156], [5184, 5183, 5175], [5175, 5183, 5156], [5183, 5162, 5156], [5164, 5120, 5163], [5158, 5128, 5132], [5151, 5180, 5176], [5151, 5170, 5180], [5167, 5168, 5170], [5161, 5165, 5182], [5158, 5132, 5179], [5181, 5170, 5168], [5182, 5114, 5169], [5166, 5158, 5169], [5160, 5171, 5181], [5171, 5170, 5181], [5185, 5171, 5178], [5176, 5180, 5179], [5169, 5158, 5187], [5170, 5171, 5180], [5177, 5186, 5178], [5158, 5179, 5188], [5180, 5188, 5179], [5180, 5171, 5185], [5189, 5178, 5186], [5177, 5164, 5186], [5187, 5158, 5188], [5163, 5186, 5164], [5194, 5188, 5180], [5180, 5185, 5191], [5178, 5189, 5192], [5186, 5192, 5189], [5200, 5184, 5175], [5190, 5169, 5187], [5192, 5185, 5178], [5186, 5163, 5193], [5187, 5188, 5194], [5190, 5187, 5194], [5194, 5180, 5196], [5180, 5191, 5196], [5195, 5182, 5169], [5185, 5196, 5191], [5192, 5196, 5185], [5199, 5192, 5186], [5184, 5200, 5183], [5195, 5169, 5190], [5197, 5182, 5195], [5198, 5195, 5199], [5197, 5195, 5198], [5199, 5196, 5192], [5161, 5198, 5175], [5202, 5199, 5186], [5202, 5186, 5193], [5183, 5193, 5163], [5202, 5193, 5183], [5190, 5194, 5195], [5195, 5194, 5196], [5198, 5161, 5182], [5198, 5182, 5197], [5199, 5195, 5196], [5200, 5175, 5203], [5201, 5202, 5183], [5200, 5201, 5183], [5175, 5198, 5203], [5203, 5204, 5200], [5198, 5199, 5202], [5203, 5198, 5202], [5200, 5204, 5201], [5204, 5202, 5201], [5202, 5204, 5203]],
    positions: [[15.85415005683899, 27.896950021386147, -24.917999282479286], [16.001449897885323, 29.114199802279472, -24.810049682855606], [17.33729988336563, 29.78315018117428, -24.825699627399445], [15.59234969317913, 27.713749557733536, -24.183249101042747], [17.38560013473034, 28.173750266432762, -23.489199578762054], [16.939649358391762, 28.359299525618553, -24.828599765896797], [15.720950439572334, 29.41320091485977, -23.476500064134598], [17.353100702166557, 29.48874980211258, -24.318400770425797], [18.792299553751945, 30.017400160431862, -24.720899760723114], [17.447199672460556, 31.62575140595436, -23.77369999885559], [17.996350303292274, 31.195249408483505, -24.663349613547325], [18.812650814652443, 31.032200902700424, -24.75699968636036], [19.520100206136703, 29.889900237321854, -23.368600755929947], [19.3636491894722, 31.510699540376663, -23.58495071530342], [18.885349854826927, 28.379999101161957, -23.152200505137444], [15.565349720418453, 31.77575021982193, -22.97619916498661], [15.135150402784348, 33.679500222206116, -23.642150685191154], [15.056050382554531, 34.94755178689957, -23.283949121832848], [13.13064992427826, 33.670950680971146, -23.347700014710426], [16.64089970290661, 33.06185081601143, -22.835399955511093], [12.801299802958965, 32.004449516534805, -23.05220067501068], [11.149900034070015, 31.88125044107437, -22.916950285434723], [11.478650383651257, 32.87634998559952, -22.93110080063343], [13.62650003284216, 34.70110148191452, -22.878650575876236], [17.330849543213844, 29.38389964401722, -21.58919908106327], [11.2143000587821, 31.785398721694946, -21.978149190545082], [19.474400207400322, 29.67974916100502, -21.611399948596954], [15.875199809670448, 30.291350558400154, -22.18575030565262], [19.8488999158144, 31.891800463199615, -22.213999181985855], [15.228049829602242, 31.201399862766266, -21.447300910949707], [13.309899717569351, 31.838450580835342, -21.605050191283226], [17.8554505109787, 32.477349042892456, -22.0357496291399], [11.723349802196026, 33.069901168346405, -21.647000685334206], [17.406700178980827, 33.641450107097626, -21.624699234962463], [12.752650305628777, 33.79509970545769, -21.37189917266369], [13.497250154614449, 35.43199971318245, -21.073900163173676], [15.215650200843811, 35.53434833884239, -21.428599953651428], [19.49629932641983, 33.24649855494499, -20.97479999065399], [-10.924450121819973, 81.22999966144562, -21.45479992032051], [-13.042549602687359, 80.95649629831314, -21.308450028300285], [-11.29894983023405, 82.54650235176086, -21.394800394773483], [-12.932299636304379, 86.69549971818924, -21.43624983727932], [-11.60844974219799, 87.0869979262352, -21.308649331331253], [20.660050213336945, 31.72130137681961, -21.054750308394432], [16.68735034763813, 34.88269820809364, -21.224400028586388], [-13.253900222480297, 82.80500024557114, -21.1327001452446], [-12.320900335907936, 87.77900040149689, -21.27549983561039], [-14.770099893212318, 86.52299642562866, -20.90189978480339], [-12.957150116562843, 74.96750354766846, -20.931849256157875], [-13.51029984652996, 75.654998421669, -20.80654911696911], [-14.616750180721283, 80.38350194692612, -20.70385031402111], [13.444449752569199, 37.66455128788948, -20.806599408388138], [14.527750201523304, 37.731051445007324, -20.77155001461506], [-15.109349973499775, 83.20300281047821, -20.653650164604187], [18.09605024755001, 30.046699568629265, -20.247049629688263], [19.29360069334507, 30.35935014486313, -19.842900335788727], [17.493300139904022, 31.17460012435913, -19.338399171829224], [21.17694914340973, 31.517300754785538, -19.622599706053734], [15.529650263488293, 31.9674015045166, -19.712500274181366], [21.412549540400505, 33.70549902319908, -19.616849720478058], [13.158549554646015, 33.94560143351555, -19.582699984312057], [17.24730059504509, 35.51194816827774, -19.59720067679882], [13.304649852216244, 38.53930160403252, -19.497999921441078], [-13.061599805951118, 74.8170018196106, -19.540250301361084], [-11.715100146830082, 75.0890001654625, -20.58590017259121], [-12.186899781227112, 75.60650259256363, -20.255200564861298], [-15.029899775981903, 78.67500185966492, -19.898999482393265], [-15.727449208498001, 80.84650337696075, -19.955450668931007], [-12.550899758934975, 80.42100071907043, -19.169950857758522], [-11.596949771046638, 81.14500343799591, -19.936300814151764], [-11.698699556291103, 82.76449888944626, -20.109299570322037], [-12.968050315976143, 83.1030011177063, -19.200699403882027], [-14.922100119292736, 84.86150205135345, -20.19454911351204], [-13.760649599134922, 84.83699709177017, -19.444549456238747], [-13.128549791872501, 86.86850219964981, -19.77274939417839], [-15.034399926662445, 87.06200122833252, -19.33104917407036], [-17.25265011191368, 26.81479975581169, -19.966550171375275], [-15.189849771559238, 27.17440016567707, -19.594699144363403], [-17.289049923419952, 28.24060060083866, -20.709900185465813], [-15.791850164532661, 28.138399124145508, -20.609799772500992], [-15.088150277733803, 29.408849775791168, -20.498299971222878], [-16.799800097942352, 29.721349477767944, -20.557299256324768], [-18.410449847579002, 29.16250005364418, -20.531050860881805], [15.37530031055212, 37.69734874367714, -19.559450447559357], [-15.104150399565697, 74.64350014925003, -19.605550915002823], [-14.481550082564354, 75.65400004386902, -20.542949438095093], [-15.33610001206398, 79.3825015425682, -20.567599684000015], [-13.697950169444084, 78.67150008678436, -19.098149612545967], [-15.896100550889969, 82.47900009155273, -20.27600072324276], [-16.882499679923058, 83.23150128126144, -20.601149648427963], [-17.338700592517853, 84.8195031285286, -19.72164958715439], [-19.70534957945347, 26.836900040507317, -19.593549892306328], [-19.39455047249794, 28.221650049090385, -20.427100360393524], [-19.88914981484413, 29.6485498547554, -19.950149580836296], [-12.898550368845463, 29.47239950299263, -19.65554989874363], [-18.223950639367104, 30.048450455069542, -20.379450172185898], [-14.48609959334135, 30.112100765109062, -20.402099937200546], [-13.390500098466873, 30.129900202155113, -20.418399944901466], [19.49005015194416, 34.164149314165115, -19.979000091552734], [-15.2040496468544, 76.53599977493286, -19.700149074196815], [-13.047349639236927, 76.10999792814255, -19.52660083770752], [-17.35679991543293, 78.93600314855576, -20.00950090587139], [-17.839549109339714, 82.55550265312195, -19.97550018131733], [-21.29334956407547, 27.44870074093342, -19.327549263834953], [-17.39165000617504, 31.583648175001144, -19.7502002120018], [-15.360649675130844, 31.801700592041016, -19.914349541068077], [-12.916799634695053, 31.66535124182701, -20.19215002655983], [-13.096749782562256, 33.83930027484894, -19.93595063686371], [12.337899766862392, 35.09499877691269, -19.647499546408653], [11.218699626624584, 35.76729819178581, -19.543800503015518], [11.39924954622984, 37.608448415994644, -19.63525079190731], [-16.93199947476387, 86.72650158405304, -19.37980018556118], [-13.790150173008442, 28.158050030469894, -19.66555044054985], [-19.675899296998978, 31.640298664569855, -19.48785036802292], [-19.71055008471012, 82.73450285196304, -19.460849463939667], [-17.70945079624653, 26.509350165724754, -19.377099350094795], [-11.980299837887287, 31.4020998775959, -19.132349640130997], [-39.72340002655983, 31.634200364351273, -19.707199186086655], [-15.11014997959137, 33.369701355695724, -19.51570063829422], [-11.772600002586842, 33.61715003848076, -18.937349319458008], [14.651600271463394, 33.127300441265106, -18.882550299167633], [19.519299268722534, 35.49744933843613, -18.94490048289299], [16.07920043170452, 35.9858013689518, -19.823849201202393], [-21.659500896930695, 29.467549175024033, -19.693300127983093], [-39.48019817471504, 29.95450049638748, -19.475899636745453], [-41.583601385354996, 31.53429925441742, -19.15550045669079], [-13.117549940943718, 35.316549241542816, -19.213799387216568], [-15.160350129008293, 35.4650504887104, -19.182799383997917], [9.869850240647793, 37.12794929742813, -19.272200763225555], [-17.273249104619026, 74.86599683761597, -19.02100071310997], [-17.318399623036385, 76.8439993262291, -19.255250692367554], [-19.437050446867943, 78.78100126981735, -19.12504993379116], [-17.314350232481956, 80.9980034828186, -19.459450617432594], [-19.415700808167458, 84.77400243282318, -18.653100356459618], [-23.61314930021763, 29.617149382829666, -19.296899437904358], [-41.39905050396919, 29.75280024111271, -18.91539990901947], [-37.530649453401566, 31.56774863600731, -18.8704002648592], [-21.683750674128532, 31.63440153002739, -19.19744908809662], [9.33805014938116, 35.97160056233406, -18.94949935376644], [-16.28055050969124, 26.47409960627556, -19.05974932014942], [-23.443449288606644, 28.095200657844543, -18.859950825572014], [-38.12659904360771, 30.20630031824112, -19.01089958846569], [-23.740749806165695, 31.87450021505356, -18.94479990005493], [-41.03275015950203, 32.9090990126133, -19.0069992095232], [-39.54390063881874, 32.85465016961098, -19.00535076856613], [21.719949319958687, 35.23769974708557, -18.97595077753067], [-19.775500521063805, 81.06350153684616, -18.76864954829216], [-17.513150349259377, 33.54185074567795, -18.954450264573097], [-16.72614924609661, 34.977201372385025, -18.991300836205482], [-25.533750653266907, 29.60819937288761, -18.705250695347786], [-25.704400613904, 31.5527506172657, -18.73820088803768], [16.804449260234833, 37.09540143609047, -18.77490058541298], [-19.70995031297207, 86.3180011510849, -18.834199756383896], [-15.61800017952919, 26.447949931025505, -17.842650413513184], [-14.57470003515482, 26.66500024497509, -17.456699162721634], [-21.57454937696457, 26.68534964323044, -17.460500821471214], [-13.504049740731716, 27.66129933297634, -17.41744950413704], [-23.69995042681694, 27.51230075955391, -17.578650265932083], [-12.117399834096432, 29.997650533914566, -18.49284954369068], [18.813500180840492, 30.725600197911263, -18.839849159121513], [19.543450325727463, 31.51480108499527, -17.451100051403046], [-36.98424994945526, 31.112300232052803, -18.364299088716507], [21.80594950914383, 31.569600105285645, -17.57819950580597], [-41.32099822163582, 33.07585045695305, -17.76750013232231], [-39.44174945354462, 33.44070166349411, -17.263999208807945], [22.789500653743744, 33.275000751018524, -18.802599981427193], [23.754650726914406, 33.850301057100296, -17.435800284147263], [13.787600211799145, 34.10400077700615, -17.736099660396576], [-17.4064002931118, 35.390499979257584, -17.371149733662605], [19.581099972128868, 36.30660101771355, -18.157050013542175], [9.29384957998991, 36.28529980778694, -17.93929934501648], [17.546599730849266, 37.5107005238533, -17.473049461841583], [9.376049973070621, 36.84459999203682, -18.323250114917755], [12.793250381946564, 38.215599954128265, -17.753399908542633], [-13.979350216686726, 74.86700266599655, -17.361000180244446], [-17.15265028178692, 74.16699826717377, -17.744550481438637], [-13.759549707174301, 77.00300216674805, -17.598699778318405], [-13.709800317883492, 78.94749939441681, -17.594899982213974], [-21.719399839639664, 80.6720033288002, -17.844950780272484], [-21.24194987118244, 82.53049850463867, -18.70889961719513], [-21.586600691080093, 86.71849966049194, -17.733950167894363], [-22.956199944019318, 90.78150242567062, -18.703650683164597], [-21.623050794005394, 90.84449708461761, -17.45229959487915], [-21.577849984169006, 91.42599999904633, -18.765900284051895], [-21.2543997913599, 92.14600175619125, -18.843000754714012], [-21.22489921748638, 92.18049794435501, -18.27234961092472], [-17.294850200414658, 26.462100446224213, -17.59999990463257], [-12.586349621415138, 28.821300715208054, -17.672449350357056], [-43.032899498939514, 30.246399343013763, -18.449749797582626], [-43.3618500828743, 29.462099075317383, -17.774399369955063], [-41.8131984770298, 29.58264946937561, -16.985150054097176], [-37.56999969482422, 30.10150045156479, -17.70230010151863], [-42.298901826143265, 31.666800379753113, -17.46794953942299], [17.398150637745857, 32.094601541757584, -17.819199711084366], [-37.601400166749954, 33.552899956703186, -17.573099583387375], [-21.78025059401989, 33.0592505633831, -18.44939962029457], [-19.650649279356003, 33.03875029087067, -18.47974956035614], [15.788950026035309, 33.02590176463127, -17.68594980239868], [-12.210249900817871, 35.28260067105293, -18.44790019094944], [12.760099954903126, 34.95325148105621, -17.30014942586422], [22.57150039076805, 35.34340113401413, -18.52330006659031], [15.156400389969349, 38.1847508251667, -17.752250656485558], [-18.49140040576458, 75.4064992070198, -18.586499616503716], [-19.133949652314186, 76.47500187158585, -18.557550385594368], [-20.35989984869957, 76.49250328540802, -18.245000392198563], [-20.55085077881813, 78.42499762773514, -18.63979920744896], [-21.828049793839455, 83.1495001912117, -18.14815029501915], [-14.188000001013279, 84.48050171136856, -18.32124963402748], [-21.371399983763695, 85.2925032377243, -18.642200157046318], [-21.086499094963074, 85.77500283718109, -18.803700804710388], [-19.797300919890404, 87.16250211000443, -17.28449948132038], [-17.584199085831642, 86.90749853849411, -17.29390025138855], [-23.45149964094162, 90.52649885416031, -17.462600022554398], [-20.237550139427185, 90.79699963331223, -17.86790043115616], [-19.54065077006817, 26.468150317668915, -17.753100022673607], [-25.29424987733364, 28.09230051934719, -17.470799386501312], [-39.55544903874397, 29.38240021467209, -17.378149554133415], [-26.21540054678917, 29.058249667286873, -18.150649964809418], [-27.15279906988144, 31.65784850716591, -18.48825067281723], [-11.769399978220463, 30.182350426912308, -17.21459999680519], [-11.114549823105335, 31.693249940872192, -17.68695004284382], [-35.56229919195175, 31.531650573015213, -17.53610000014305], [23.36765080690384, 32.0092998445034, -17.260100692510605], [-35.46075150370598, 33.5954986512661, -17.45785027742386], [-23.714549839496613, 33.67124870419502, -18.033800646662712], [-18.306950107216835, 34.0302512049675, -18.159549683332443], [-10.908350348472595, 35.54245084524155, -18.035249784588814], [23.337749764323235, 35.21984815597534, -17.023000866174698], [11.184250004589558, 36.00769862532616, -17.401399090886116], [21.459750831127167, 36.351051181554794, -17.52219907939434], [-13.12359981238842, 36.29060089588165, -17.702000215649605], [-15.144850127398968, 36.29019856452942, -17.623549327254295], [11.230450123548508, 37.53200173377991, -17.209550365805626], [-17.669999971985817, 72.76750355958939, -17.62240007519722], [-19.36575025320053, 72.69600033760071, -17.23955012857914], [-19.70360055565834, 74.13499802350998, -18.149100244045258], [-15.313150361180305, 74.6074989438057, -17.224950715899467], [-21.73219993710518, 78.32399755716324, -17.839549109339714], [-13.663800433278084, 80.88800311088562, -17.726950347423553], [-20.208749920129776, 84.42749828100204, -18.167750909924507], [-21.925000473856926, 84.79849994182587, -18.239200115203857], [-15.215899795293808, 84.98650044202805, -17.333749681711197], [-15.92780090868473, 86.71200275421143, -17.692549154162407], [-23.695850744843483, 88.76899629831314, -17.416300252079964], [-27.5494996458292, 29.44899909198284, -17.514750361442566], [-28.14449928700924, 31.61795064806938, -18.207749351859093], [-25.484349578619003, 33.69459882378578, -17.79085025191307], [-13.707200065255165, 82.7919989824295, -18.001500517129898], [-27.596300467848778, 33.542901277542114, -17.646700143814087], [-21.39204926788807, 34.21664983034134, -18.023250624537468], [-19.283650442957878, 34.135349094867706, -17.750699073076248], [-10.91230008751154, 37.534650415182114, -18.047500401735306], [-10.844750329852104, 39.765551686286926, -17.917999997735023], [-25.233250111341476, 88.76699954271317, -17.340950667858124], [-29.60284985601902, 31.661201268434525, -17.709000036120415], [-29.54930067062378, 33.68379920721054, -17.26974919438362], [-10.488799773156643, 33.36134925484657, -17.660750076174736], [-23.496849462389946, 35.80955043435097, -17.943700775504112], [-21.4821994304657, 35.78995168209076, -17.370499670505524], [-25.76485089957714, 35.502199083566666, -17.778849229216576], [-25.58940090239048, 37.863701581954956, -17.945749685168266], [-23.62149953842163, 37.508051842451096, -17.49279908835888], [-13.075999915599823, 37.70525008440018, -17.30090007185936], [-27.745099738240242, 37.50874847173691, -17.951600253582], [-29.38530035316944, 37.55360096693039, -17.619749531149864], [-29.530750587582588, 39.464350789785385, -17.944449558854103], [-27.561699971556664, 39.730001240968704, -17.98889972269535], [-25.55925026535988, 39.51355069875717, -17.42894947528839], [-12.959499843418598, 39.56935182213783, -17.68440008163452], [-12.84135039895773, 41.61065071821213, -17.604999244213104], [-10.84935013204813, 41.49584844708443, -17.668599262833595], [-11.277049779891968, 43.899551033973694, -17.42120087146759], [-21.7141006141901, 76.26199722290039, -17.472250387072563], [-23.614799603819847, 84.94800329208374, -17.36314967274666], [-20.274050533771515, 89.44450318813324, -17.55649968981743], [-21.236000582575798, 88.82699906826019, -17.26374961435795], [-27.678750455379486, 35.583000630140305, -17.316250130534172], [-29.734650626778603, 41.57854989171028, -17.759699374437332], [-31.5544493496418, 41.467998176813126, -17.604250460863113], [-20.898999646306038, 73.40250164270401, -16.90795086324215], [-23.406650871038437, 82.88449794054031, -17.367949709296227], [-29.574599117040634, 30.185749754309654, -16.73934981226921], [-33.579450100660324, 33.742550760507584, -16.9357992708683], [-9.886300191283226, 33.98120030760765, -17.056100070476532], [-19.78844963014126, 35.10329872369766, -16.93674921989441], [-9.424500167369843, 35.743650048971176, -16.939949244260788], [-9.427100419998169, 37.65064850449562, -17.01200008392334], [19.682200625538826, 37.60499879717827, -16.84259995818138], [-9.565699845552444, 39.62330147624016, -16.899550333619118], [-31.884800642728806, 39.445798844099045, -17.21080020070076], [-27.54944935441017, 41.86220094561577, -17.115900292992592], [19.453000277280807, 39.41329941153526, -17.438899725675583], [19.780399277806282, 41.54660180211067, -17.54309982061386], [17.402200028300285, 41.44274815917015, -17.372049391269684], [-12.623700313270092, 43.43489930033684, -16.885649412870407], [6.830200087279081, 68.13649833202362, -17.655549570918083], [8.951949886977673, 68.13549995422363, -17.53699965775013], [4.9156202003359795, 68.17449629306793, -17.55700074136257], [6.890700198709965, 70.12499868869781, -17.577949911355972], [11.119100265204906, 70.22999972105026, -17.658349126577377], [8.954649791121483, 70.14200091362, -17.6766999065876], [13.023000210523605, 69.97600197792053, -17.584150657057762], [15.348600223660469, 70.17949968576431, -17.54149980843067], [8.837600238621235, 72.03350216150284, -17.464900389313698], [11.314949952065945, 71.99150323867798, -17.679449170827866], [13.131200335919857, 71.80149853229523, -17.72885024547577], [15.28680045157671, 72.05349951982498, -17.606349661946297], [-21.688099950551987, 74.40400123596191, -16.998300328850746], [-23.392099887132645, 79.08950001001358, -16.762850806117058], [-14.546750113368034, 81.13250136375427, -16.798749566078186], [-14.849849976599216, 83.15449953079224, -16.98240078985691], [-25.415699928998947, 87.29150146245956, -16.936300322413445], [-33.57214853167534, 31.955301761627197, -16.829900443553925], [-31.537849456071854, 31.684648245573044, -16.86294935643673], [-31.646601855754852, 33.74030068516731, -16.91179908812046], [-29.523000121116638, 35.70840135216713, -16.754750162363052], [-23.902300745248795, 39.246998727321625, -16.61139912903309], [17.6961999386549, 39.494600147008896, -17.430150881409645], [21.531999111175537, 39.68270123004913, -16.88079908490181], [-26.077700778841972, 41.33240133523941, -16.739899292588234], [-31.678348779678345, 43.86330023407936, -16.91650040447712], [-29.59280088543892, 43.44864934682846, -16.911199316382408], [17.233099788427353, 43.623700737953186, -17.127150669693947], [19.585350528359413, 43.82935166358948, -16.879649832844734], [17.482399940490723, 45.88855057954788, -17.263000831007957], [2.903915010392666, 62.15199828147888, -17.38015003502369], [2.9428349807858467, 64.21949714422226, -17.485950142145157], [4.990300163626671, 64.12199884653091, -17.376000061631203], [2.88840988650918, 66.11250340938568, -17.413349822163582], [4.90302499383688, 66.16249680519104, -17.555249854922295], [6.857399828732014, 66.07499718666077, -17.414800822734833], [9.095150046050549, 65.92799723148346, -17.038149759173393], [10.769150219857693, 68.0909976363182, -17.326099798083305], [17.37540028989315, 68.24350357055664, -17.261799424886703], [13.180100359022617, 68.2469978928566, -17.18820072710514], [4.872934892773628, 70.45549899339676, -17.166249454021454], [15.424899756908417, 67.8664967417717, -17.075899988412857], [17.549099400639534, 70.02349942922592, -17.497900873422623], [19.473500549793243, 70.26950269937515, -17.243249341845512], [6.811050232499838, 72.37400114536285, -17.075149342417717], [17.604049295186996, 72.2770020365715, -17.329800873994827], [13.317599892616272, 74.22950118780136, -17.10830070078373], [15.168399550020695, 74.50550049543381, -16.944849863648415], [11.032350361347198, 74.38500225543976, -16.9406495988369], [17.201600596308708, 32.87560120224953, -16.75174944102764], [-22.134650498628616, 37.104249000549316, -16.835549846291542], [-31.651999801397324, 37.86670044064522, -16.804000362753868], [15.434900298714638, 39.44304957985878, -17.097700387239456], [21.55965007841587, 41.43914952874184, -16.80454984307289], [-33.51235017180443, 41.769251227378845, -16.805099323391914], [13.001799583435059, 41.73574969172478, -17.103150486946106], [12.973199598491192, 43.71950030326843, -17.15949922800064], [15.15404973179102, 43.74299943447113, -17.351100221276283], [14.920299872756004, 45.9292009472847, -17.29479990899563], [-11.110249906778336, 45.41600123047829, -16.8078001588583], [17.307499423623085, 48.10820147395134, -17.34199933707714], [15.099849551916122, 48.36390167474747, -16.993800178170204], [19.517699256539345, 48.2184998691082, -17.05870032310486], [17.061399295926094, 50.17000064253807, -17.14175008237362], [19.75635066628456, 50.271499902009964, -17.2109492123127], [1.1484549613669515, 58.12999978661537, -17.146000638604164], [1.0422549676150084, 60.17649918794632, -17.301099374890327], [-0.9477150160819292, 60.175999999046326, -17.11284928023815], [0.891459989361465, 62.185999006032944, -17.315000295639038], [0.9675649926066399, 64.24999982118607, -17.220700159668922], [7.017150055617094, 64.11399692296982, -17.0089490711689], [0.9122900082729757, 66.2510022521019, -17.00199954211712], [2.9366048984229565, 68.0909976363182, -17.198549583554268], [11.116700246930122, 66.27599895000458, -16.788849607110023], [19.76119913160801, 68.14400106668472, -17.241649329662323], [19.52439919114113, 72.18100130558014, -16.95849932730198], [9.038499556481838, 74.1565003991127, -16.848700121045113], [17.413800582289696, 74.15200024843216, -16.866950318217278], [-23.68145063519478, 80.77900111675262, -16.78304933011532], [-36.45344823598862, 30.460499227046967, -16.915850341320038], [12.96200044453144, 39.695750921964645, -16.994399949908257], [15.368600375950336, 41.52974858880043, -17.194949090480804], [-33.266499638557434, 43.47220063209534, -16.728900372982025], [12.95975036919117, 46.06034979224205, -16.81080088019371], [19.75269988179207, 46.26639932394028, -16.753999516367912], [21.62794955074787, 50.16649886965752, -16.77905023097992], [17.773600295186043, 52.09000036120415, -16.922449693083763], [19.772199913859367, 52.35449969768524, -17.177099362015724], [21.723149344325066, 52.40600183606148, -16.932500526309013], [19.593000411987305, 54.25800010561943, -16.92969910800457], [21.754300221800804, 54.35999855399132, -17.06570014357567], [-1.0199949610978365, 56.35799840092659, -17.20624975860119], [-3.007699968293309, 56.329499930143356, -17.005950212478638], [1.0689250193536282, 56.13400042057037, -16.961250454187393], [-3.0913350638002157, 58.22300165891647, -16.860250383615494], [-0.9813300566747785, 58.389998972415924, -17.178850248456], [3.179005114361644, 60.12500077486038, -17.070600762963295], [21.33999951183796, 60.22850051522255, -16.988899558782578], [23.632299154996872, 60.23800000548363, -17.032800242304802], [-1.0332500096410513, 62.24000081419945, -16.91724918782711], [21.362749859690666, 62.28100135922432, -17.08490028977394], [23.681599646806717, 62.114499509334564, -17.055649310350418], [5.1993997767567635, 62.180500477552414, -16.972549259662628], [21.715300157666206, 64.24950063228607, -17.1338003128767], [23.4957505017519, 64.23249840736389, -16.987299546599388], [-0.875169993378222, 64.27150219678879, -16.746100038290024], [8.692599833011627, 64.42449986934662, -16.638999804854393], [21.75690047442913, 66.11049920320511, -17.112599685788155], [19.53515037894249, 66.07949733734131, -17.04154908657074], [1.2337800581008196, 68.12050193548203, -16.755150631070137], [21.72905020415783, 68.05100291967392, -17.05940067768097], [21.825699135661125, 70.27699798345566, -16.868000850081444], [3.1036599539220333, 70.14200091362, -16.746550798416138], [5.240350030362606, 71.99949771165848, -16.776449978351593], [-23.308249190449715, 86.83600276708603, -16.63755066692829], [-26.686500757932663, 28.547950088977814, -16.6812501847744], [21.280700340867043, 37.93204948306084, -16.61279983818531], [-32.983049750328064, 39.99809920787811, -16.788199543952942], [21.21580019593239, 43.06764900684357, -16.7130995541811], [15.536850318312645, 50.270501524209976, -16.699200496077538], [-0.9425349999219179, 52.354998886585236, -16.772300004959106], [-2.8979999478906393, 51.95000022649765, -16.841549426317215], [-4.914605058729649, 52.14900150895119, -16.79849997162819], [-0.9751649922691286, 54.365500807762146, -16.998499631881714], [-4.848570097237825, 54.41199988126755, -16.732150688767433], [-2.9965450521558523, 54.33399975299835, -16.978399828076363], [23.495299741625786, 54.029498249292374, -16.721250489354134], [0.6833799998275936, 54.42800000309944, -16.73940010368824], [19.70909908413887, 56.23399838805199, -16.6982002556324], [21.48200012743473, 56.324999779462814, -16.9747993350029], [23.785300552845, 56.274499744176865, -16.835149377584457], [23.652950301766396, 58.21099877357483, -16.958700492978096], [21.51555009186268, 58.24900045990944, -16.95214956998825], [3.1317099928855896, 58.346498757600784, -16.727199777960777], [-2.8108449187129736, 60.31949818134308, -16.755200922489166], [19.777750596404076, 64.29199874401093, -16.82169921696186], [23.750150576233864, 66.25749915838242, -16.87229983508587], [17.423249781131744, 66.31500273942947, -16.702299937605858], [23.608749732375145, 68.12400370836258, -16.794349998235703], [-22.873500362038612, 76.5715017914772, -16.60184934735298], [19.85340006649494, 32.18214958906174, -15.335150063037872], [-41.74795001745224, 33.6776003241539, -15.243150293827057], [24.573149159550667, 33.196501433849335, -16.705850139260292], [15.357499942183495, 33.42675045132637, -16.013899818062782], [-8.857750333845615, 35.65619885921478, -15.352199785411358], [-19.502250477671623, 35.82710027694702, -15.668049454689026], [-15.51750022917986, 36.4452488720417, -15.982499346137047], [11.312250047922134, 39.420150220394135, -16.582800075411797], [11.376099660992622, 41.59124940633774, -16.704900190234184], [-9.631600230932236, 41.428301483392715, -16.520099714398384], [11.554599739611149, 43.83604973554611, -16.625450924038887], [21.702300757169724, 43.95980015397072, -15.43550007045269], [-11.275799944996834, 46.12069949507713, -15.824200585484505], [13.716050423681736, 48.02050068974495, -16.60745032131672], [20.95559984445572, 48.37099835276604, -16.63210056722164], [-3.115494968369603, 50.13950169086456, -16.76665060222149], [-4.800150170922279, 50.21600052714348, -16.797300428152084], [16.290750354528427, 51.87999829649925, -16.519900411367416], [22.822000086307526, 52.209001034498215, -16.69814996421337], [18.080750480294228, 53.990498185157776, -16.58800058066845], [0.562085013370961, 52.98500135540962, -16.540100798010826], [-4.38296515494585, 56.32000043988228, -16.764050349593163], [20.19510045647621, 58.30699950456619, -16.671450808644295], [25.21350048482418, 58.50499868392944, -16.642499715089798], [25.496549904346466, 60.33200025558472, -16.61914959549904], [4.7358800657093525, 60.52650138735771, -16.659799963235855], [20.152749493718147, 60.36200001835823, -16.707850620150566], [-2.487905090674758, 62.21599876880646, -16.514649614691734], [19.80390027165413, 62.519997358322144, -16.628649085760117], [25.583850219845772, 62.34150007367134, -16.640400514006615], [6.449200212955475, 62.19150125980377, -16.519399359822273], [25.478100404143333, 64.18950110673904, -16.55000075697899], [18.316449597477913, 64.75050002336502, -16.526399180293083], [-0.6582100177183747, 65.86500257253647, -16.643749549984932], [24.931149557232857, 66.00750237703323, -16.588550060987473], [13.550249859690666, 66.90599769353867, -16.660550609230995], [15.751499682664871, 66.7480006814003, -16.695350408554077], [3.504059975966811, 71.63950055837631, -16.428299248218536], [21.461650729179382, 71.80249691009521, -16.575949266552925], [-17.409000545740128, 72.38700240850449, -15.634650364518166], [-19.842399284243584, 71.99399918317795, -15.919549390673637], [7.2003500536084175, 73.80899786949158, -16.616150736808777], [-16.549449414014816, 73.85549694299698, -16.27420075237751], [-14.665050432085991, 76.22750103473663, -15.618300065398216], [-25.36039985716343, 83.37199687957764, -16.425399109721184], [-25.701750069856644, 85.14399826526642, -15.766600146889687], [-16.343150287866592, 85.52800118923187, -16.450999304652214], [-17.61149987578392, 26.558250188827515, -15.155700035393238], [-15.866050496697426, 26.47309936583042, -15.89285023510456], [-21.774999797344208, 26.9322507083416, -15.324899926781654], [-15.02930000424385, 27.152299880981445, -15.174799598753452], [-23.600850254297256, 27.540700510144234, -15.453499741852283], [-25.556549429893494, 28.262000530958176, -15.58309979736805], [-27.665499597787857, 29.219800606369972, -15.060050413012505], [-12.910350225865841, 29.461750760674477, -15.224150381982327], [-39.493199437856674, 29.362449422478676, -15.319200232625008], [-11.911899782717228, 30.158499255776405, -15.916049480438232], [-37.531498819589615, 29.80724908411503, -15.234200283885002], [-35.94709932804108, 30.349450185894966, -15.383400022983551], [-42.51629859209061, 31.37049823999405, -15.61024971306324], [-11.085250414907932, 31.64689987897873, -15.306550078094006], [-33.50045159459114, 31.209450215101242, -15.548399649560452], [-31.835351139307022, 30.980249866843224, -15.183350071310997], [21.632449701428413, 31.58405050635338, -15.554750338196754], [23.467449471354485, 31.050100922584534, -15.559050254523754], [24.500299245119095, 32.10584819316864, -16.631949692964554], [25.547299534082413, 31.573951244354248, -15.676800161600113], [17.49804988503456, 32.90925174951553, -15.54310042411089], [25.415850803256035, 33.693499863147736, -15.247450210154057], [-9.852100163698196, 33.352650701999664, -15.535449609160423], [13.419399969279766, 33.51784870028496, -15.749199315905571], [-37.46910020709038, 34.309301525354385, -15.442900359630585], [-36.111198365688324, 34.441251307725906, -15.646949410438538], [12.328250333666801, 35.022251307964325, -16.32314920425415], [23.713450878858566, 35.60340031981468, -15.15134982764721], [22.348450496792793, 36.38409823179245, -15.922199934720993], [-31.845849007368088, 35.802651196718216, -15.888649970293045], [-21.41745015978813, 37.747450172901154, -15.208699740469456], [22.22995087504387, 37.39380091428757, -15.943499282002449], [-33.90505164861679, 39.297498762607574, -15.886649489402771], [-25.470249354839325, 42.0556515455246, -15.413950197398663], [-13.595299795269966, 41.82495176792145, -16.05845056474209], [-8.650099858641624, 41.77255183458328, -15.993250533938408], [-27.951199561357498, 43.14634948968887, -16.408799216151237], [-27.20789983868599, 42.76290163397789, -16.165899112820625], [-13.149850070476532, 43.92734915018082, -15.561000443994999], [-10.106050409376621, 43.49825158715248, -16.44054986536503], [-34.087300300598145, 44.270798563957214, -16.10570028424263], [-29.31619994342327, 44.40784826874733, -15.80044999718666], [-31.445201486349106, 45.76810076832771, -15.463350340723991], [-12.082099914550781, 44.71245035529137, -16.175249591469765], [10.753000155091286, 44.13264989852905, -16.053099185228348], [12.078800238668919, 45.03300040960312, -16.608649864792824], [-6.8720499984920025, 48.34530130028725, -16.503600403666496], [-4.94876503944397, 47.98484966158867, -16.49314910173416], [-3.2022399827837944, 48.52814972400665, -16.471799463033676], [-6.897999905049801, 50.28950050473213, -16.508499160408974], [14.484300278127193, 50.36100000143051, -16.136249527335167], [-1.419509993866086, 50.21649971604347, -16.512099653482437], [-6.537649780511856, 52.353501319885254, -16.527950763702393], [3.3648901153355837, 56.201498955488205, -15.876799821853638], [25.15145018696785, 56.22199922800064, -16.462599858641624], [2.583645051345229, 56.73149973154068, -16.58100076019764], [-4.450609907507896, 57.61599913239479, -16.61060005426407], [19.27899941802025, 60.23050099611282, -16.19729958474636], [18.858399242162704, 62.0804987847805, -16.061149537563324], [7.5158001855015755, 62.02549859881401, -15.799950808286667], [12.850400060415268, 65.73150306940079, -16.175299882888794], [0.48247649101540446, 68.70850175619125, -16.29900000989437], [23.222200572490692, 70.11000066995621, -16.581149771809578], [24.072300642728806, 70.17599791288376, -16.217000782489777], [1.4961600536480546, 69.65799629688263, -16.370100900530815], [4.643685184419155, 72.83750176429749, -16.184799373149872], [19.292300567030907, 73.60749691724777, -16.528049483895302], [-22.260649129748344, 73.70000332593918, -16.002150252461433], [11.062400415539742, 76.45750045776367, -15.33455029129982], [12.136000208556652, 75.56849718093872, -16.37819968163967], [13.080899603664875, 76.53100043535233, -15.387900173664093], [15.413199551403522, 75.64949989318848, -16.32869988679886], [15.268649905920029, 76.58649981021881, -15.349149703979492], [-23.7614493817091, 76.32800191640854, -15.679700300097466], [-14.52529989182949, 78.65750044584274, -15.510099940001965], [-14.559700153768063, 79.54549789428711, -16.41939952969551], [-15.687499195337296, 82.64999836683273, -15.47439955174923], [-25.90774931013584, 82.78899639844894, -15.844900161027908], [-24.57660064101219, 84.77749675512314, -16.44515059888363], [-16.01085066795349, 84.15249735116959, -16.097750514745712], [-17.688050866127014, 86.16799861192703, -15.590899623930454], [-25.731150060892105, 86.32300049066544, -15.985600650310516], [-26.55790001153946, 87.47400343418121, -16.41860045492649], [-25.507550686597824, 88.57899904251099, -15.294450335204601], [-23.775100708007812, 89.37250077724457, -15.172899700701237], [-23.086000233888626, 90.15200287103653, -15.933100134134293], [-22.25489914417267, 90.18749743700027, -15.922300517559052], [-20.21149918437004, 26.510100811719894, -16.29910059273243], [-32.07245096564293, 37.08679974079132, -16.23239926993847], [-33.480700105428696, 37.71565109491348, -15.447850339114666], [10.393399745225906, 41.47949814796448, -16.170350834727287], [22.16245047748089, 42.05489903688431, -16.189999878406525], [-6.670849863439798, 46.89750075340271, -16.45285077393055], [-6.840500049293041, 45.845698565244675, -16.253750771284103], [12.60450016707182, 48.12309890985489, -15.916850417852402], [21.98454923927784, 47.85750061273575, -15.95655083656311], [-1.0494999587535858, 48.13940078020096, -15.682199969887733], [23.535549640655518, 49.82985183596611, -15.677349641919136], [-7.384900003671646, 52.433498203754425, -16.229750588536263], [-0.3018440038431436, 51.04149878025055, -16.251949593424797], [15.22149983793497, 52.365999668836594, -15.597550198435783], [24.068349972367287, 51.961999386548996, -16.146600246429443], [1.2608800316229463, 52.307501435279846, -15.87270013988018], [-6.563649978488684, 53.85399982333183, -16.383200883865356], [1.520470017567277, 53.86349931359291, -16.20754972100258], [16.987500712275505, 54.43749949336052, -15.759099274873734], [-7.111750077456236, 54.546501487493515, -15.974899753928185], [25.65469965338707, 53.98450046777725, -15.75935073196888], [-5.445399787276983, 56.20099976658821, -16.321849077939987], [17.371000722050667, 56.18949979543686, -15.324600040912628], [-5.419999826699495, 58.32900106906891, -15.96280001103878], [19.1042497754097, 58.092501014471054, -16.146749258041382], [5.057400092482567, 58.25600028038025, -15.363399870693684], [-5.134350154548883, 60.31550094485283, -15.721550211310387], [5.53479976952076, 59.68799814581871, -15.886999666690826], [-3.667674958705902, 62.449999153614044, -15.953099355101585], [10.889049619436264, 64.17249888181686, -15.359049662947655], [26.246700435876846, 66.12300127744675, -16.17944985628128], [25.81785060465336, 68.01500171422958, -15.934249386191368], [-1.0502099758014083, 68.26549768447876, -15.55825024843216], [5.042300093919039, 74.3665024638176, -15.23470040410757], [20.063450559973717, 74.4979977607727, -15.818599611520767], [6.9217500276863575, 74.83749836683273, -15.783600509166718], [-23.50440062582493, 74.4514986872673, -15.616049990057945], [10.35735011100769, 75.48599690198898, -16.232699155807495], [17.36520044505596, 76.22650265693665, -15.384850092232227], [-25.682000443339348, 80.55850118398666, -15.65760001540184], [-27.274450287222862, 86.8844985961914, -15.382549725472927], [-19.76419985294342, 26.557600125670433, -15.377149917185307], [-17.324000597000122, 26.522250846028328, -16.068749129772186], [-29.34885025024414, 29.896600171923637, -15.111650340259075], [-34.661151468753815, 34.60479900240898, -16.056450083851814], [-33.52634981274605, 35.54980084300041, -15.082400292158127], [10.427449829876423, 37.65594959259033, -16.082199290394783], [-8.584249764680862, 37.53004968166351, -15.626750886440277], [-13.868199661374092, 39.7723987698555, -15.991199761629105], [10.311449877917767, 38.950350135564804, -16.16235077381134], [-8.583099581301212, 39.65720161795616, -15.904050320386887], [-35.47839820384979, 41.50170087814331, -15.26935026049614], [-35.51959991455078, 43.68999972939491, -15.28919953852892], [-8.809049613773823, 43.70199888944626, -16.064250841736794], [-27.559949085116386, 43.83635148406029, -15.177549794316292], [-6.909550167620182, 43.93380135297775, -16.09024964272976], [20.26825025677681, 44.926151633262634, -16.133299097418785], [-9.361449629068375, 45.92235013842583, -16.05845056474209], [-33.57885032892227, 45.66960036754608, -15.53419977426529], [11.032150126993656, 46.215951442718506, -15.606150031089783], [-5.019600037485361, 45.922648161649704, -16.16944931447506], [-3.1143799424171448, 46.00929841399193, -15.926249325275421], [-9.03830025345087, 48.140451312065125, -15.993449836969376], [-0.5603599711321294, 49.9889999628067, -16.1483995616436], [26.22614987194538, 56.154001504182816, -15.933800488710403], [18.494300544261932, 56.53350055217743, -16.058549284934998], [26.20824985206127, 57.862501591444016, -16.253549605607986], [27.470149099826813, 60.21549925208092, -15.720050781965256], [27.522750198841095, 62.11499869823456, -15.721550211310387], [9.008700028061867, 62.50300258398056, -15.02820011228323], [27.549199759960175, 64.17950242757797, -15.648549422621727], [-3.097265027463436, 64.12900239229202, -15.8012006431818], [17.40100048482418, 64.022496342659, -15.646200627088547], [-2.890764968469739, 66.22199714183807, -15.138099901378155], [15.183200128376484, 65.64249843358994, -15.968799591064453], [-1.602969947271049, 66.6164979338646, -15.905400738120079], [0.8596350089646876, 70.66349685192108, -15.527499839663506], [2.848939970135689, 72.40650057792664, -15.570299699902534], [23.760400712490082, 72.3389983177185, -15.511849895119667], [22.13124930858612, 72.60199636220932, -16.169600188732147], [-21.775050088763237, 72.08699733018875, -16.017049551010132], [21.7995997518301, 74.22299683094025, -15.326299704611301], [-15.182649716734886, 74.33199882507324, -15.173249877989292], [-15.03910031169653, 80.82599937915802, -15.267250128090382], [-24.25454929471016, 86.47549897432327, -16.1469504237175], [-21.167699247598648, 87.43800222873688, -15.054699964821339], [-21.663600578904152, 88.77649903297424, -15.459350310266018], [11.289400048553944, 33.621300011873245, -15.175649896264076], [10.701999999582767, 35.4420505464077, -15.6809501349926], [-23.21919985115528, 39.796698838472366, -15.308000147342682], [23.576250299811363, 39.763499051332474, -15.224199742078781], [-2.4747850839048624, 47.406699508428574, -15.986200422048569], [-9.119000285863876, 50.30300095677376, -15.603650361299515], [-9.082499891519547, 52.27449908852577, -15.249949879944324], [2.9287850484251976, 54.49650064110756, -15.252349898219109], [-7.178850006312132, 56.356001645326614, -15.415649861097336], [27.60230004787445, 58.09750035405159, -15.385299921035767], [6.740749813616276, 60.3644996881485, -15.1765001937747], [9.286699816584587, 63.67100030183792, -15.818500891327858], [-21.693449467420578, 70.61800360679626, -15.049249865114689], [-19.721349701285362, 70.14550268650055, -15.295750461518764], [9.161749854683876, 76.29799842834473, -15.118800103664398], [8.625599555671215, 75.41000097990036, -15.913499519228935], [-19.508449360728264, 86.77099645137787, -15.069699846208096], [23.651650175452232, 37.617649883031845, -15.127000398933887], [9.261500090360641, 39.701301604509354, -15.597349964082241], [-24.5046503841877, 40.70660099387169, -15.95810055732727], [-5.052550230175257, 43.83004829287529, -15.772299841046333], [21.688099950551987, 46.15899920463562, -15.445699915289879], [0.9161849739030004, 50.378501415252686, -15.213199891149998], [-4.952460061758757, 62.0109997689724, -15.15084970742464], [27.56665088236332, 66.20199978351593, -15.349100343883038], [25.567999109625816, 70.40700316429138, -15.3182502835989], [-23.562850430607796, 72.20300287008286, -15.206900425255299], [18.28780025243759, 75.24900138378143, -15.899550169706345], [-24.10624921321869, 78.55349779129028, -15.531850047409534], [-4.983790218830109, 94.95099633932114, -15.385599806904793], [-2.991779940202832, 94.9999988079071, -15.224349685013294], [-2.966139931231737, 96.47750109434128, -15.31434990465641], [-1.5606599627062678, 96.86300158500671, -15.691500157117844], [-13.845150358974934, 28.145799413323402, -15.335850417613983], [-41.60264879465103, 29.506200924515724, -14.955650083720684], [-34.86575186252594, 30.74684925377369, -14.93964996188879], [18.976500257849693, 32.68589824438095, -15.286150388419628], [-39.45085033774376, 33.94480049610138, -15.077600255608559], [-35.44740006327629, 34.89140048623085, -14.742099680006504], [-17.959950491786003, 35.799648612737656, -15.170300379395485], [-15.31280018389225, 37.56074979901314, -15.305399894714355], [8.990650065243244, 37.462398409843445, -15.064549632370472], [-14.06165026128292, 37.84295171499252, -15.722749754786491], [-15.341750346124172, 39.500199258327484, -15.224849805235863], [-7.011250127106905, 39.334751665592194, -15.084899961948395], [-15.246899798512459, 41.690051555633545, -15.042750164866447], [23.14325049519539, 41.623201221227646, -14.984999783337116], [-24.05169978737831, 41.10870137810707, -14.928050339221954], [8.834349922835827, 41.415851563215256, -15.02980012446642], [-6.953349802643061, 41.69460013508797, -15.65524935722351], [9.390749968588352, 43.609101325273514, -15.08999988436699], [-2.857780084013939, 43.84255036711693, -15.019799582660198], [9.727300144731998, 45.54729908704758, -14.759100042283535], [-29.8396497964859, 45.42459920048714, -14.904799871146679], [-13.088599778711796, 45.59744894504547, -14.834149740636349], [-1.1627100175246596, 46.18449881672859, -14.909000135958195], [-10.972750373184681, 48.07420074939728, -15.10975044220686], [11.443049646914005, 48.06319996714592, -15.037200413644314], [23.44224974513054, 47.98955097794533, -14.80565033853054], [13.05755041539669, 50.20949989557266, -15.165500342845917], [25.588899850845337, 52.18150094151497, -15.093700028955936], [15.724549070000648, 54.0505014359951, -15.035849995911121], [-8.74170009046793, 54.2214997112751, -14.870749786496162], [27.73444913327694, 56.32450059056282, -14.916700311005116], [4.433885216712952, 56.35400116443634, -14.824549667537212], [-6.907300092279911, 58.367498219013214, -14.874500222504139], [17.479749396443367, 58.17199870944023, -14.933300204575062], [17.648400738835335, 60.23800000548363, -15.013400465250015], [17.386050894856453, 62.286000698804855, -15.132100321352482], [13.214649632573128, 64.76049870252609, -15.14974981546402], [15.444999560713768, 64.73349779844284, -15.160850249230862], [1.3702999567613006, 72.31750339269638, -14.814550057053566], [3.115009982138872, 73.69299978017807, -14.703449793159962], [7.0011499337852, 75.8574977517128, -14.871650375425816], [19.101250916719437, 76.05750113725662, -14.942999929189682], [-16.9366504997015, 84.77000147104263, -14.860750176012516], [-27.607399970293045, 85.04600077867508, -14.828849583864212], [-20.433450117707253, 36.733049899339676, -15.222449786961079], [-4.884560126811266, 41.468601673841476, -15.060899779200554], [27.365999296307564, 68.30400228500366, -14.866000041365623], [-0.723504985217005, 70.0799971818924, -14.699799939990044], [-27.579650282859802, 80.8504968881607, -14.91320040076971], [-4.461809992790222, 96.07650339603424, -14.80835024267435], [-43.72059926390648, 29.839549213647842, -14.577150344848633], [-30.974000692367554, 30.54480068385601, -15.281249769032001], [23.97965081036091, 30.37315048277378, -14.596150256693363], [25.766100734472275, 30.14099970459938, -14.798450283706188], [9.218350052833557, 35.707101225852966, -14.835399575531483], [-35.24494916200638, 39.489950984716415, -14.701900072395802], [-15.067200176417828, 43.67595165967941, -14.568050391972065], [-35.347748547792435, 45.46479880809784, -14.660200104117393], [0.48072548815980554, 48.57270047068596, -14.721550047397614], [-10.54459996521473, 50.21499842405319, -14.770249836146832], [25.04269964993, 50.49249902367592, -14.820300042629242], [2.4264398962259293, 52.45950073003769, -14.758950099349022], [-4.460244905203581, 63.81600350141525, -14.832000248134136], [25.388849899172783, 71.99700176715851, -14.680149964988232], [-15.667950734496117, 72.22100347280502, -14.7598497569561], [23.38705025613308, 73.82349669933319, -14.767300337553024], [-6.859750021249056, 92.93749928474426, -14.91244975477457], [-4.963359795510769, 93.48099678754807, -14.796700328588486], [-7.005849853157997, 94.60899978876114, -14.779649674892426], [-1.9349800422787666, 95.70349752902985, -15.125400386750698], [-17.233150079846382, 37.45634853839874, -14.804249629378319], [27.173049747943878, 54.39149960875511, -14.781399630010128], [-6.432599853724241, 60.09000167250633, -14.625799842178822], [-27.764299884438515, 82.70250260829926, -14.749799855053425], [-25.928150862455368, 28.65164913237095, -14.648900367319584], [13.191649690270424, 32.131798565387726, -14.716249890625477], [15.051649883389473, 32.218050211668015, -14.778349548578262], [-5.433550104498863, 39.655499160289764, -14.639549888670444], [-3.619475057348609, 42.09284856915474, -14.761149883270264], [28.952300548553467, 60.44049933552742, -14.621799811720848], [29.033450409770012, 62.39499896764755, -14.60960041731596], [28.94660085439682, 64.08250331878662, -14.61120042949915], [-17.44074933230877, 69.99050080776215, -14.89889994263649], [-8.734500035643578, 92.85549819469452, -14.710250310599804], [-15.728000551462173, 27.94319950044155, -13.443750329315662], [-23.66805076599121, 28.149299323558807, -13.291199691593647], [-39.372749626636505, 29.29460071027279, -13.15889973193407], [-35.36750003695488, 30.28004989027977, -13.244500383734703], [26.92195028066635, 31.88975155353546, -14.626150019466877], [-33.94110128283501, 30.916599556803703, -13.651249930262566], [-43.52555051445961, 31.633999198675156, -14.608800411224365], [21.764950826764107, 31.04734979569912, -13.365199789404869], [17.08330027759075, 32.17194974422455, -14.556399546563625], [-43.085549026727676, 33.43839943408966, -14.452350325882435], [-9.077049791812897, 33.37530046701431, -13.501299545168877], [8.93229991197586, 33.425651490688324, -13.46485037356615], [-37.54635155200958, 34.81385111808777, -14.355650171637535], [-19.370099529623985, 37.60179877281189, -14.498949982225895], [-7.294150069355965, 37.66379877924919, -14.622249640524387], [-34.25614908337593, 36.958448588848114, -13.25829979032278], [-22.161200642585754, 39.06720131635666, -14.467749744653702], [-17.491549253463745, 39.72160071134567, -14.713349752128124], [8.145700208842754, 39.40805047750473, -14.496750198304653], [-17.14085042476654, 41.61275178194046, -14.531750231981277], [-23.652350530028343, 41.93570092320442, -13.574699871242046], [8.33440013229847, 42.071498930454254, -14.255549758672714], [-25.38355067372322, 42.82575100660324, -14.121750369668007], [23.36069941520691, 41.9236496090889, -13.054500333964825], [-25.968700647354126, 43.21319982409477, -14.374599792063236], [22.54059910774231, 43.23489964008331, -14.343099668622017], [-27.393650263547897, 44.43315044045448, -13.399249874055386], [-1.3372700195759535, 44.81419920921326, -14.370850287377834], [22.55295030772686, 45.789748430252075, -14.524949714541435], [-34.01919826865196, 46.90539836883545, -14.275950379669666], [-31.31899982690811, 46.73530161380768, -14.235399663448334], [-12.346300296485424, 47.59259894490242, -14.524449594318867], [10.1500004529953, 47.0210500061512, -14.425450004637241], [-33.042099326848984, 47.01890051364899, -14.353250153362751], [25.671549141407013, 49.73375052213669, -13.525299727916718], [3.212495008483529, 51.88100039958954, -13.366100378334522], [13.957049697637558, 52.228499203920364, -14.630299992859364], [13.061700388789177, 52.228499203920364, -13.311999849975109], [3.4970699343830347, 53.5379983484745, -14.05125018209219], [14.868849888443947, 54.41249907016754, -13.906399719417095], [-8.48739966750145, 55.810000747442245, -14.307700097560883], [16.160549595952034, 55.84150180220604, -14.473600313067436], [5.319300107657909, 56.14100024104118, -13.57400044798851], [6.396249867975712, 58.731500059366226, -14.364649541676044], [7.73815019056201, 59.75300073623657, -13.758550398051739], [16.202300786972046, 62.83300369977951, -14.356049709022045], [12.215799652040005, 63.751496374607086, -14.255049638450146], [-5.438949912786484, 64.24249708652496, -13.476749882102013], [29.50024977326393, 66.30299985408783, -13.39734997600317], [-2.4695799220353365, 68.15849989652634, -14.365199953317642], [28.136499226093292, 68.8060000538826, -13.991099782288074], [-19.533200189471245, 68.21350008249283, -14.594299718737602], [-17.759500071406364, 68.30199807882309, -14.61744960397482], [26.904450729489326, 69.8309987783432, -14.546600170433521], [-23.202499374747276, 71.36400043964386, -14.411100186407566], [-24.951649829745293, 72.81699776649475, -14.746399596333504], [-25.19804984331131, 74.23649728298187, -14.631450176239014], [23.882100358605385, 74.82349872589111, -13.382050208747387], [4.967025015503168, 76.22849941253662, -13.118349947035313], [20.47334983944893, 75.70800185203552, -14.686600305140018], [-25.348249822854996, 76.6804963350296, -14.650699682533741], [-14.127049595117569, 76.5490010380745, -14.414000324904919], [-14.264550060033798, 78.43200117349625, -14.425849542021751], [-25.553949177265167, 78.9944976568222, -14.580350369215012], [-14.480150304734707, 80.98100125789642, -13.790350407361984], [-29.008449986577034, 81.09550178050995, -14.358299784362316], [-14.989799819886684, 82.62249827384949, -13.425899669528008], [-27.693400159478188, 87.26000040769577, -13.790350407361984], [-21.674450486898422, 87.67849951982498, -13.848899863660336], [-7.027999963611364, 92.3914983868599, -13.06384988129139], [27.23879925906658, 30.06104938685894, -14.437899924814701], [-11.070850305259228, 31.464699655771255, -13.53325042873621], [11.263749562203884, 32.111749053001404, -14.3563998863101], [10.013050399720669, 33.74344855546951, -14.588399790227413], [8.45940038561821, 35.403549671173096, -13.997199945151806], [-35.26569902896881, 38.0590483546257, -13.190150260925293], [-31.586650758981705, 47.34715074300766, -13.265949673950672], [-13.761949725449085, 46.36780172586441, -14.03720024973154], [10.534550063312054, 48.59384894371033, -13.267000205814838], [-11.511949822306633, 50.31999945640564, -13.74175027012825], [-10.966150090098381, 52.386000752449036, -13.225900009274483], [27.354750782251358, 52.26600170135498, -13.246449641883373], [28.140699490904808, 54.52150106430054, -13.670549727976322], [-9.254800155758858, 56.361500173807144, -13.081200420856476], [28.810400515794754, 58.814000338315964, -14.5176500082016], [10.895050130784512, 62.33150139451027, -13.233699835836887], [14.844849705696106, 63.68499994277954, -13.983350247144699], [-3.091159975156188, 68.401999771595, -13.475949876010418], [-15.788750723004341, 70.16099989414215, -14.531100168824196], [-14.189300127327442, 74.66600090265274, -14.38899990171194], [2.898880047723651, 74.90299642086029, -13.261400163173676], [21.518949419260025, 76.3159990310669, -13.320550322532654], [19.843649119138718, 76.93249732255936, -13.507800176739693], [10.498049668967724, 77.31950283050537, -14.232399873435497], [15.882400795817375, 77.41499692201614, -14.180200174450874], [-8.382249623537064, 94.26400065422058, -14.412949793040752], [-19.22059990465641, 27.069000527262688, -13.31380009651184], [-25.628499686717987, 28.99784967303276, -13.226600363850594], [-13.388600200414658, 29.474399983882904, -13.204749673604965], [-44.941700994968414, 29.17500026524067, -13.958649709820747], [-43.83924975991249, 31.539548188447952, -13.532250188291073], [27.30889990925789, 33.06775167584419, -13.099250383675098], [-39.32280093431473, 33.97924825549126, -13.004199601709843], [-19.237250089645386, 39.08580169081688, -14.422450214624405], [-4.527075216174126, 39.32974860072136, -13.922849670052528], [-2.7518500573933125, 41.4731502532959, -13.817350380122662], [11.488550342619419, 50.076499581336975, -13.201099820435047], [-9.707850404083729, 54.52850088477135, -13.661449775099754], [8.964049629867077, 60.70299819111824, -13.112200424075127], [-6.072049960494041, 61.69949844479561, -14.200449921190739], [16.566550359129906, 61.72750145196915, -14.236800372600555], [13.029550202190876, 63.560500741004944, -13.740399852395058], [-4.70176013186574, 65.96550345420837, -13.168799690902233], [-27.75385044515133, 78.69499921798706, -13.671300373971462], [-10.2960504591465, 92.29099750518799, -14.398500323295593], [-5.5796499364078045, 93.09100359678268, -13.532849960029125], [-21.398499608039856, 27.529550716280937, -13.176100328564644], [25.541599839925766, 29.174799099564552, -13.27965036034584], [27.681199833750725, 29.479099437594414, -13.771950267255306], [-30.62400035560131, 30.52780032157898, -14.231249690055847], [12.906650081276894, 31.15849941968918, -14.150049537420273], [15.537249855697155, 31.058449298143387, -13.917099684476852], [10.789750143885612, 31.59330040216446, -13.73514998704195], [-41.783448308706284, 34.117698669433594, -13.201500289142132], [-8.485999889671803, 34.98684987425804, -14.143100008368492], [25.689249858260155, 35.51650047302246, -13.285700231790543], [-7.042150013148785, 35.469699651002884, -13.424850068986416], [-6.52319984510541, 37.19649836421013, -14.101950451731682], [25.334199890494347, 37.63590008020401, -13.341549783945084], [-21.707650274038315, 40.07035121321678, -14.057899825274944], [-5.048399791121483, 37.54495084285736, -13.19964975118637], [-20.083049312233925, 39.8576483130455, -14.160700142383575], [-19.291600212454796, 41.93640127778053, -13.669000007212162], [-17.695950344204903, 42.4082987010479, -14.01865016669035], [-37.209898233413696, 43.28560084104538, -13.163849711418152], [-25.705350562930107, 43.510399758815765, -13.020750135183334], [-15.683349221944809, 44.264499098062515, -14.023150317370892], [8.585349656641483, 44.304199516773224, -13.699200004339218], [-36.69055178761482, 44.31400075554848, -14.004699885845184], [-0.7517799967899919, 43.605148792266846, -13.230299577116966], [-0.49324851715937257, 45.58515176177025, -13.973300345242023], [-29.891999438405037, 46.305101364851, -13.263699598610401], [23.384949192404747, 45.9257997572422, -13.265850022435188], [-36.04875132441521, 46.23445123434067, -13.381349854171276], [1.226964988745749, 47.85804823040962, -13.51344957947731], [-12.110699899494648, 48.92915114760399, -14.070450328290462], [12.483649887144566, 50.73799937963486, -14.132849872112274], [2.6221650186926126, 50.15949904918671, -13.098100200295448], [-10.023299604654312, 52.910998463630676, -14.234649948775768], [4.66425996273756, 54.32949960231781, -13.043650425970554], [15.238399617373943, 56.078001856803894, -13.103899545967579], [16.50650054216385, 58.241501450538635, -13.733400031924248], [29.71234917640686, 58.08750167489052, -13.105349615216255], [-7.972249761223793, 58.44150111079216, -13.630850240588188], [-7.353499997407198, 60.2790005505085, -13.32040037959814], [-20.23879997432232, 66.69849902391434, -14.296400360763073], [-21.760450676083565, 66.09000265598297, -13.976049609482288], [-19.60105076432228, 65.95300137996674, -14.173599891364574], [-15.169999562203884, 68.1070014834404, -13.741900213062763], [-16.307499259710312, 68.66099685430527, -14.371399767696857], [-21.723199635744095, 68.12799721956253, -14.111150056123734], [-1.2861599680036306, 70.5690011382103, -13.771849684417248], [27.680449187755585, 70.72599977254868, -13.370749540627003], [-14.37814999371767, 72.08450138568878, -14.126400463283062], [-25.935349985957146, 71.84600085020065, -14.118299819529057], [0.8589749922975898, 72.99000024795532, -13.740899972617626], [-26.196900755167007, 74.09349828958511, -14.147049747407436], [25.837799534201622, 72.76050001382828, -13.66764958947897], [4.593589808791876, 75.35500079393387, -14.11729957908392], [22.270599380135536, 75.3529965877533, -14.037800021469593], [-26.17719955742359, 75.52900165319443, -14.10175021737814], [6.797600071877241, 76.88699662685394, -13.398399576544762], [8.694199845194817, 77.25399732589722, -13.733900152146816], [17.69915036857128, 77.21450179815292, -14.049050398170948], [-29.870299622416496, 80.5089995265007, -13.609049841761589], [-29.511749744415283, 82.9085037112236, -13.7491999194026], [-29.56629917025566, 84.85250174999237, -13.813399709761143], [-23.587599396705627, 88.5080024600029, -13.466999866068363], [-8.978749625384808, 91.33200347423553, -13.389850035309792], [-11.088049970567226, 90.93599766492844, -13.540299609303474], [-11.210749857127666, 93.16900372505188, -13.669449836015701], [-9.242850355803967, 94.2464992403984, -13.250250369310379], [-4.923595115542412, 94.85699981451035, -13.508600182831287], [-3.539355006068945, 95.3345000743866, -13.945650309324265], [-17.32189953327179, 27.409100905060768, -13.168550096452236], [-36.170098930597305, 39.650000631809235, -13.24365008622408], [-3.181695006787777, 39.84389826655388, -13.18410038948059], [29.02740053832531, 56.23149871826172, -13.300550170242786], [6.058149971067905, 57.757001370191574, -13.999899849295616], [7.222549989819527, 58.39800089597702, -13.025449588894844], [-17.454050481319427, 66.15450233221054, -14.002700336277485], [-22.231800481677055, 69.64550167322159, -14.011800289154053], [-14.51804954558611, 70.26000320911407, -14.033850282430649], [-27.731850743293762, 76.63950324058533, -13.59730027616024], [-43.62395033240318, 29.88935075700283, -13.302150182425976], [-41.63609817624092, 29.3917004019022, -12.880399823188782], [-27.545100077986717, 29.829049482941628, -12.937299907207489], [-37.46534883975983, 29.6548493206501, -13.105549849569798], [23.58425036072731, 30.025750398635864, -12.917700223624706], [-29.58099916577339, 30.415600165724754, -13.491399586200714], [13.054749928414822, 29.765300452709198, -13.227400369942188], [22.794749587774277, 30.687350779771805, -13.758200220763683], [28.042050078511238, 31.797301024198532, -13.381949625909328], [-31.647399067878723, 31.23144991695881, -12.816299684345722], [17.553599551320076, 31.159749254584312, -13.649599626660347], [-43.07875037193298, 33.1309512257576, -13.420600444078445], [26.066699996590614, 34.23105180263519, -13.258550316095352], [-37.828151136636734, 34.32735055685043, -13.22139985859394], [-37.13719919323921, 34.775249660015106, -13.717950321733952], [-35.62435135245323, 34.78804975748062, -13.586750254034996], [-33.66050124168396, 35.84875166416168, -13.150399550795555], [7.642900105565786, 35.70394963026047, -12.977899983525276], [7.513950113207102, 39.619751274585724, -13.254649937152863], [24.472899734973907, 40.04095122218132, -13.337450101971626], [-36.628298461437225, 41.76250100135803, -13.9164999127388], [-1.5495149418711662, 41.823748499155045, -12.992200441658497], [22.700950503349304, 44.08879950642586, -13.004500418901443], [-37.09530085325241, 45.256100594997406, -12.669799849390984], [-15.139100141823292, 45.9464006125927, -13.181700371205807], [0.9273050236515701, 46.07750102877617, -12.877600267529488], [-35.336799919605255, 47.2959503531456, -12.716149911284447], [-13.560649938881397, 47.90575057268143, -13.18180002272129], [24.130700156092644, 47.37500101327896, -13.598100282251835], [9.679500013589859, 47.56304994225502, -12.97254953533411], [24.982700124382973, 48.11809957027435, -12.8754498437047], [-12.53880001604557, 49.85164850950241, -12.960500083863735], [26.506250724196434, 51.09050124883652, -13.61520029604435], [14.00614995509386, 53.92200127243996, -12.977199628949165], [-8.63569974899292, 58.06349962949753, -12.856850400567055], [16.638899222016335, 60.21999940276146, -13.71384970843792], [30.150750651955605, 60.23950129747391, -13.108599931001663], [16.161199659109116, 60.30350178480148, -12.673749588429928], [-6.819650065153837, 62.05400079488754, -12.87010032683611], [15.376050025224686, 62.48350068926811, -13.182749971747398], [30.067050829529762, 62.0109997689724, -13.302749954164028], [29.985450208187103, 64.37700241804123, -13.161749579012394], [-19.47689987719059, 64.16749954223633, -13.821950182318687], [-3.9492850191891193, 66.46949797868729, -13.846349902451038], [29.177499935030937, 68.32999736070633, -12.951199896633625], [-23.493599146604538, 70.29350101947784, -13.517599552869797], [-25.44119954109192, 70.4284980893135, -12.88795005530119], [-27.5736004114151, 72.30599969625473, -13.600350357592106], [-13.21529969573021, 74.24599677324295, -13.55534978210926], [-27.263300493359566, 74.33900237083435, -13.657149858772755], [25.26180073618889, 74.24899935722351, -12.775249779224396], [1.1674950364977121, 74.09299910068512, -12.864800170063972], [23.28445017337799, 75.75800269842148, -12.777600437402725], [-13.088500127196312, 76.47550106048584, -13.505250215530396], [9.258899837732315, 77.80449837446213, -12.85105012357235], [10.888099670410156, 78.05050164461136, -13.012349605560303], [12.848550453782082, 78.1404972076416, -13.064499944448471], [-13.180200010538101, 78.90400290489197, -13.278200291097164], [-13.179300352931023, 80.75600117444992, -12.845800258219242], [-15.784500166773796, 84.40999686717987, -12.844599783420563], [-16.853850334882736, 85.10799705982208, -13.336899690330029], [-17.75454916059971, 86.40850335359573, -12.819199822843075], [-29.54605035483837, 86.64499968290329, -13.16909957677126], [-19.467800855636597, 87.21049875020981, -13.16864974796772], [-21.876700222492218, 87.92950212955475, -13.228950090706348], [-25.74249915778637, 88.33149820566177, -12.82500009983778], [-10.400050319731236, 93.96349638700485, -13.251150026917458], [-6.892750039696693, 94.74200010299683, -12.922150082886219], [-14.754850417375565, 29.019750654697418, -13.338100165128708], [15.261399559676647, 29.622599482536316, -13.044250197708607], [19.897300750017166, 31.07919916510582, -13.154850341379642], [9.572549723088741, 31.7191481590271, -12.873049825429916], [7.297900039702654, 37.57454827427864, -12.856749817728996], [24.80825036764145, 39.42130133509636, -12.69179955124855], [-21.576549857854843, 41.723500937223434, -13.449200429022312], [7.747400086373091, 41.53215140104294, -13.215499930083752], [-37.07754984498024, 41.64630174636841, -12.925350107252598], [-17.3116996884346, 43.98655146360397, -13.105999678373337], [7.869900204241276, 43.16980019211769, -12.842699885368347], [8.922549895942211, 46.07114940881729, -13.045050203800201], [6.339250132441521, 56.84550106525421, -12.774400413036346], [15.920400619506836, 57.86599963903427, -12.836449779570103], [9.751450270414352, 61.778999865055084, -13.692350126802921], [-21.58614993095398, 64.33849781751633, -13.79809994250536], [-17.24899932742119, 64.36850130558014, -13.149900361895561], [-23.604849353432655, 66.21100008487701, -13.505199924111366], [-15.365500003099442, 66.30200147628784, -12.951299548149109], [-23.464249446988106, 68.0219978094101, -13.44310026615858], [-13.383599929511547, 70.18399983644485, -13.275249861180782], [27.21790038049221, 72.15700298547745, -12.76249997317791], [-27.546100318431854, 70.94799727201462, -12.888450175523758], [-0.8665199857205153, 72.0214992761612, -12.870649807155132], [-12.996199540793896, 72.29749858379364, -13.221349567174911], [15.164550393819809, 78.16649973392487, -13.121649622917175], [-31.59024938941002, 80.72199672460556, -13.12205009162426], [-13.157499954104424, 90.7519981265068, -13.360749930143356], [-13.044450432062149, 92.97250211238861, -12.908199802041054], [-28.02469953894615, 44.954750686883926, -12.783000245690346], [1.9714550580829382, 49.58970099687576, -13.651600107550621], [-10.469700209796429, 54.2295016348362, -12.697599828243256], [-21.71345055103302, 62.25550174713135, -13.427349738776684], [-23.6246008425951, 62.19099834561348, -13.228850439190865], [-23.659300059080124, 64.23850357532501, -13.476350344717503], [17.60205067694187, 77.91750133037567, -13.032999821007252], [29.167549684643745, 29.656950384378433, -12.903599999845028], [11.162050068378448, 29.943950474262238, -12.64095026999712], [17.409199848771095, 29.963500797748566, -12.878349982202053], [-30.00500053167343, 30.818799510598183, -12.81139999628067], [-35.94129905104637, 34.43555161356926, -12.836149893701077], [-33.91110152006149, 47.70340025424957, -12.934500351548195], [28.840700164437294, 54.57400158047676, -12.698750011622906], [-19.65159922838211, 62.05900013446808, -13.076050207018852], [13.03774956613779, 62.78400123119354, -12.720700353384018], [-18.03554967045784, 62.43950128555298, -12.606499716639519], [-2.555360086262226, 70.1265037059784, -12.657550163567066], [-29.409950599074364, 76.41299813985825, -12.68870010972023], [-29.698550701141357, 78.7699967622757, -12.711450457572937], [-31.537648290395737, 85.05000174045563, -12.776950374245644], [-25.276150554418564, 66.24200195074081, -12.793850153684616], [-15.26974979788065, 90.97900241613388, -12.856650166213512], [-24.387700483202934, 28.752250596880913, -12.960650026798248], [27.661899104714394, 28.204649686813354, -12.60984968394041], [-11.669999919831753, 29.925450682640076, -12.5753004103899], [19.19260062277317, 30.303100124001503, -12.589000165462494], [28.989600017666817, 31.195100396871567, -12.663999572396278], [-7.409750018268824, 34.08975154161453, -12.786449864506721], [-5.374350119382143, 36.35615110397339, -12.653299607336521], [-16.51415042579174, 45.24324834346771, -12.601549737155437], [-21.84540033340454, 60.12149900197983, -12.833899818360806], [-25.74240043759346, 62.01700121164322, -12.82539963722229], [-25.608399882912636, 64.16100263595581, -12.821200303733349], [-4.103145096451044, 67.4624964594841, -12.957549653947353], [-13.420900329947472, 68.29400360584259, -12.601150199770927], [-29.343700036406517, 72.19649851322174, -12.724650092422962], [-31.617499887943268, 79.44100350141525, -12.3752998188138], [-31.56055137515068, 82.61449635028839, -12.746649794280529], [-27.439650148153305, 88.21800351142883, -12.582999654114246], [-14.759750105440617, 92.38249808549881, -12.722699902951717], [29.101699590682983, 28.121450915932655, -12.448850087821484], [26.236150413751602, 28.439199551939964, -12.406899593770504], [-9.596900083124638, 31.9877490401268, -12.746449559926987], [-19.864900037646294, 43.174199759960175, -12.473849579691887], [0.4212814965285361, 44.42699998617172, -12.460149824619293], [-23.600300773978233, 59.98700112104416, -12.869349680840969], [-19.931400194764137, 60.711998492479324, -12.636150233447552], [-25.508899241685867, 60.444001108407974, -12.643599882721901], [-16.129599884152412, 64.6205022931099, -12.611250393092632], [-24.995099753141403, 68.32899898290634, -12.575550004839897], [-11.50204986333847, 70.26749849319458, -12.42849975824356], [-28.948800638318062, 70.74149698019028, -12.3434504494071], [-29.130900278687477, 74.5450034737587, -12.71315012127161], [3.496315097436309, 75.80450177192688, -12.62119971215725], [-11.165999807417393, 76.39499753713608, -12.711799703538418], [21.53255045413971, 77.20299810171127, -12.042299844324589], [18.892550840973854, 77.86150276660919, -12.68364954739809], [-11.131149716675282, 78.7615031003952, -12.602199800312519], [-13.78989964723587, 82.1864977478981, -12.590750120580196], [-15.342749655246735, 89.40450102090836, -12.448200024664402], [-19.56705003976822, 27.084799483418465, -11.047150008380413], [-42.39324852824211, 31.50010108947754, -12.407549656927586], [7.799049839377403, 33.97955000400543, -12.471050024032593], [-3.5366748925298452, 38.07784989476204, -12.341500259935856], [6.937350146472454, 41.53145104646683, -11.154050007462502], [-0.46374500379897654, 41.544098407030106, -11.325550265610218], [-23.575499653816223, 43.0418998003006, -12.546850368380547], [-21.770650520920753, 42.92700067162514, -12.34589982777834], [8.142950013279915, 44.91319879889488, -12.351100333034992], [-16.10654965043068, 46.22054845094681, -11.712850071489811], [-14.802600257098675, 47.09719866514206, -12.5345503911376], [-12.00919970870018, 52.306998521089554, -11.734750121831894], [11.90195046365261, 51.94300040602684, -11.145750060677528], [-8.317350409924984, 59.63300168514252, -12.26465031504631], [-6.419450044631958, 63.69300186634064, -12.308400124311447], [-6.951199844479561, 64.31650370359421, -11.216050013899803], [-14.10644967108965, 67.25800037384033, -12.584649957716465], [29.097450897097588, 69.61250305175781, -12.331550009548664], [-11.753500439226627, 72.3159983754158, -12.572499923408031], [-11.242999695241451, 74.29700344800949, -12.595799751579762], [-10.186250321567059, 76.55049860477448, -12.53610011190176], [-10.107900016009808, 77.77749747037888, -12.568449601531029], [-9.771750308573246, 77.01300084590912, -12.195499613881111], [-33.03325176239014, 80.14900237321854, -12.434350326657295], [-29.63005006313324, 88.12449872493744, -12.476700358092785], [-12.857000343501568, 89.56699818372726, -12.28955015540123], [-11.221400462090969, 90.60049802064896, -11.20030041784048], [-16.99190028011799, 90.83399921655655, -12.445200234651566], [-8.754800073802471, 94.08500045537949, -11.817499995231628], [29.74884957075119, 27.477499097585678, -11.313499882817268], [-15.450350008904934, 27.156250551342964, -11.165999807417393], [30.19844926893711, 29.742149636149406, -11.936349794268608], [-25.823449715971947, 28.89605052769184, -11.932100169360638], [23.71330000460148, 29.468849301338196, -11.137199588119984], [-37.872251123189926, 29.42110039293766, -11.164999566972256], [-41.80515184998512, 29.644349589943886, -11.191699653863907], [-35.63779965043068, 29.956599697470665, -11.141099967062473], [18.247250467538834, 28.9380494505167, -11.89970038831234], [-29.305249452590942, 29.640400782227516, -11.291500180959702], [20.10449953377247, 29.56569939851761, -11.636950075626373], [21.543949842453003, 29.612699523568153, -11.18400041013956], [-33.409249037504196, 30.891649425029755, -11.75064966082573], [-29.418399557471275, 30.690250918269157, -12.210099957883358], [-8.931799791753292, 31.38909861445427, -11.832700110971928], [8.796799927949905, 31.33605048060417, -11.562449857592583], [-6.697149947285652, 33.330898731946945, -11.519400402903557], [27.884049341082573, 33.842701464891434, -11.41194999217987], [-37.63055056333542, 34.09085050225258, -11.153199709951878], [-35.53919866681099, 35.595450550317764, -11.110150255262852], [-34.06289964914322, 35.72800010442734, -11.865600012242794], [-35.71594879031181, 37.661951035261154, -11.503449641168118], [-36.77795082330704, 40.02254828810692, -12.277349829673767], [-1.399144995957613, 39.8501493036747, -11.160650290548801], [-37.7422496676445, 41.27335175871849, -11.235999874770641], [22.91419915854931, 43.69004815816879, -11.161400005221367], [-17.40580052137375, 45.51694914698601, -11.201350018382072], [-27.316950261592865, 44.65844854712486, -12.117300182580948], [-29.1725005954504, 46.28169909119606, -11.85075007379055], [23.989999666810036, 45.79859972000122, -11.369099840521812], [-31.72200173139572, 48.4342984855175, -11.626649647951126], [9.280749596655369, 48.057250678539276, -11.038550175726414], [2.422640100121498, 48.67500066757202, -12.49490026384592], [26.1098500341177, 49.07039925456047, -12.13034987449646], [-13.674999587237835, 50.13500154018402, -11.010999791324139], [10.874849744141102, 50.30199885368347, -11.211750097572803], [26.85914933681488, 50.57549849152565, -12.345099821686745], [11.974750086665154, 51.33099853992462, -12.454750016331673], [-11.40925008803606, 54.185498505830765, -11.196300387382507], [29.364600777626038, 54.32499945163727, -11.153250001370907], [30.071599408984184, 56.359998881816864, -11.275350116193295], [-9.539850056171417, 58.21549892425537, -11.267700232565403], [-25.47984942793846, 58.397501707077026, -12.388399802148342], [-22.313300520181656, 58.74650180339813, -12.428750284016132], [-23.8779503852129, 58.49099904298782, -12.451499700546265], [-19.29605007171631, 59.950001537799835, -11.757100000977516], [31.17549978196621, 60.313500463962555, -11.124449782073498], [31.307600438594818, 62.37750127911568, -11.25395018607378], [-27.13330090045929, 62.28199973702431, -12.39595003426075], [13.295399956405163, 62.294501811265945, -11.366150341928005], [31.36495128273964, 64.36599791049957, -11.140000075101852], [-16.32704958319664, 63.871003687381744, -12.234900146722794], [-15.051299706101418, 64.02400135993958, -11.332900263369083], [-26.1307992041111, 66.51700288057327, -12.222950346767902], [-5.567649845033884, 66.40949845314026, -11.715750209987164], [30.161449685692787, 68.09599697589874, -11.81770022958517], [-12.429499998688698, 68.17150115966797, -12.091400101780891], [-29.832299798727036, 70.50199806690216, -11.384150013327599], [-1.109460019506514, 72.74200022220612, -11.977950111031532], [0.8938750252127647, 74.7309997677803, -11.8860499933362], [2.878089901059866, 76.80950313806534, -11.360250413417816], [23.526350036263466, 76.86249911785126, -11.47644966840744], [5.10590011253953, 77.39999890327454, -11.8220504373312], [19.763100892305374, 78.62850278615952, -11.593650095164776], [7.1263001300394535, 77.70449668169022, -12.363250367343426], [8.945999667048454, 78.87350022792816, -11.815049685537815], [17.669200897216797, 78.88100296258926, -11.935300193727016], [-11.310850270092487, 80.61499893665314, -12.537949718534946], [-31.16079978644848, 86.89150214195251, -12.337200343608856], [-20.13860084116459, 87.97600120306015, -12.451349757611752], [-21.738100796937943, 88.9509990811348, -11.747250333428383], [-23.72325025498867, 89.11100029945374, -11.28540001809597], [-9.497200138866901, 91.21549874544144, -11.677349917590618], [-17.424000427126884, 92.6159992814064, -11.380149982869625], [-10.825499892234802, 93.31650286912918, -11.065050028264523], [-10.439200326800346, 93.96149963140488, -11.839250102639198], [13.10035027563572, 27.758050709962845, -11.153549887239933], [15.351000241935253, 27.53799967467785, -11.38909999281168], [27.32989937067032, 35.71594879031181, -11.095549911260605], [-2.9937250073999166, 37.47415170073509, -11.08929980546236], [-2.4228650145232677, 39.06349837779999, -11.877399869263172], [-37.86414861679077, 44.02780160307884, -11.567999608814716], [-19.34009976685047, 44.11900043487549, -11.336450465023518], [-17.861800268292427, 44.59574818611145, -12.154899537563324], [-14.95909970253706, 47.992050647735596, -11.130999773740768], [4.594579804688692, 52.40749940276146, -11.301400139927864], [5.4107001051306725, 54.09349873661995, -11.105550453066826], [14.59490042179823, 56.37349933385849, -11.308950372040272], [6.033449899405241, 55.59350177645683, -11.527899652719498], [-23.020800203084946, 57.79850110411644, -12.207649648189545], [-27.173299342393875, 60.25749817490578, -12.300100177526474], [-27.6528000831604, 64.18850272893906, -11.86749991029501], [-14.652700163424015, 65.81749767065048, -12.08414975553751], [-10.147900320589542, 73.92950356006622, -11.61350030452013], [11.452849954366684, 79.11600172519684, -11.818249709904194], [12.980500236153603, 78.84149998426437, -12.069899588823318], [-33.946748822927475, 80.66599816083908, -11.851250194013119], [-11.103100143373013, 80.66249638795853, -11.28854975104332], [-12.589899823069572, 82.9394981265068, -11.515949852764606], [-33.65445137023926, 85.0059986114502, -11.226899921894073], [-17.285749316215515, 89.35750275850296, -12.309250421822071], [-13.307999819517136, 27.62800082564354, -11.128200218081474], [12.513750232756138, 28.577350080013275, -12.043650262057781], [-11.1347995698452, 29.260700568556786, -11.69629953801632], [29.68195080757141, 31.741049140691757, -11.190749704837799], [-41.31989926099777, 33.2942008972168, -11.096050031483173], [-39.72199931740761, 33.710598945617676, -10.988649912178516], [-35.94585135579109, 34.564949572086334, -11.494300328195095], [25.847099721431732, 37.73605078458786, -11.000249534845352], [23.02989922463894, 41.777901351451874, -11.020850390195847], [0.7967600249685347, 43.73544827103615, -11.144700460135937], [-23.727400228381157, 44.016849249601364, -11.16579957306385], [7.360449992120266, 43.82390156388283, -10.906250216066837], [-27.541199699044228, 45.59649899601936, -11.30754966288805], [8.491749875247478, 46.53824865818024, -11.250150389969349], [2.816889900714159, 48.05535078048706, -11.080699972808361], [-33.578649163246155, 48.61694946885109, -11.623349972069263], [3.564164973795414, 49.96684938669205, -11.244350112974644], [28.010299429297447, 51.80500075221062, -11.19139976799488], [13.401900418102741, 54.12599816918373, -11.161450296640396], [-27.729200199246407, 58.12250077724457, -12.008599936962128], [-21.593300625681877, 58.054499328136444, -11.844250373542309], [-7.956000044941902, 60.68599969148636, -11.970849707722664], [-28.062349185347557, 60.29500067234039, -12.052900157868862], [-28.132950887084007, 62.463000416755676, -12.012300081551075], [14.785599894821644, 61.72249838709831, -11.20235025882721], [-7.651249878108501, 62.34300136566162, -11.347400024533272], [-17.045550048351288, 62.03949823975563, -11.43679954111576], [31.24544955790043, 66.12949818372726, -11.061149649322033], [-26.102900505065918, 68.10399889945984, -11.791699565947056], [-5.010600201785564, 68.0909976363182, -11.408300139009953], [-11.009699665009975, 68.14000010490417, -11.256200261414051], [29.636800289154053, 70.41449844837189, -11.213250458240509], [27.786249294877052, 72.6805031299591, -11.592299677431583], [-30.229749158024788, 73.95750284194946, -12.007799930870533], [25.773800909519196, 74.92399960756302, -11.638299562036991], [-31.55529871582985, 76.07600092887878, -11.222699657082558], [-31.654201447963715, 78.25300097465515, -11.050499975681305], [-33.63725170493126, 82.93750137090683, -11.32499985396862], [-14.861649833619595, 85.08750051259995, -11.733249761164188], [-32.25509822368622, 87.02699840068817, -11.27410028129816], [-17.18199998140335, 87.04949915409088, -11.585850268602371], [-19.60109919309616, 88.93749862909317, -11.889999732375145], [-15.54575003683567, 88.49100023508072, -11.182799935340881], [-17.70794950425625, 88.49850296974182, -11.890700086951256], [-18.186699599027634, 91.0945013165474, -12.188299559056759], [-7.748750038444996, 92.74300187826157, -11.867649853229523], [17.616750672459602, 27.670249342918396, -11.073900386691093], [-27.495350688695908, 29.153399169445038, -11.687999591231346], [-4.772999789565802, 35.457201302051544, -11.416349560022354], [6.651800125837326, 37.56145015358925, -11.306899599730968], [-35.84745153784752, 48.03809896111488, -11.383449658751488], [-13.96539993584156, 48.67459833621979, -11.955950409173965], [-25.663599371910095, 56.06050044298172, -11.922299861907959], [-23.467350751161575, 56.115999817848206, -11.434749700129032], [-26.270849630236626, 57.46849998831749, -12.196299619972706], [15.323550440371037, 58.19400027394295, -11.034499853849411], [-20.419999957084656, 59.19799953699112, -11.962699703872204], [15.536550432443619, 60.36049872636795, -11.067399755120277], [-27.726400643587112, 66.07100367546082, -11.165549978613853], [-13.140950351953506, 66.26400351524353, -11.655599810183048], [-10.523850098252296, 70.18350064754486, -11.280200444161892], [-31.615450978279114, 70.21699845790863, -11.30445022135973], [-31.475048512220383, 72.05899804830551, -11.640300042927265], [-27.4835005402565, 71.25499844551086, -11.89965009689331], [-25.983300060033798, 70.34149765968323, -11.198650114238262], [-10.596499778330326, 72.02299684286118, -11.318850331008434], [-3.0332200694829226, 71.94899767637253, -11.149999685585499], [6.878950167447329, 78.81399989128113, -11.603400111198425], [15.370099805295467, 79.42900061607361, -11.63989957422018], [-13.252399861812592, 84.7335010766983, -11.025049723684788], [-33.592451363801956, 86.70499920845032, -11.206050403416157], [-31.412851065397263, 88.26649934053421, -11.088250204920769], [-19.495299085974693, 91.22200310230255, -11.835100129246712], [-15.567399561405182, 92.88600087165833, -11.11880037933588], [-23.610850796103477, 27.49755047261715, -11.029450222849846], [-25.62814950942993, 27.869850397109985, -10.971450246870518], [6.682150065898895, 39.481498301029205, -11.172699742019176], [-25.74934996664524, 44.51470077037811, -11.329550296068192], [-27.549250051379204, 56.23349919915199, -11.84650044888258], [-29.352400451898575, 60.30450016260147, -11.657699942588806], [-29.59340065717697, 62.19400092959404, -11.338099837303162], [-3.4172451123595238, 70.58349996805191, -11.437700130045414], [-26.236649602651596, 71.59800082445145, -10.843650437891483], [-29.57735024392605, 78.35949957370758, -10.871750302612782], [15.045249834656715, 80.72999864816666, -10.891550220549107], [10.928500443696976, 80.66350221633911, -11.115949600934982], [-11.735750362277031, 82.78950303792953, -11.42484974116087], [-12.206600047647953, 84.03649926185608, -11.90869975835085], [-13.510449789464474, 89.34350311756134, -10.948649607598782], [-17.547449097037315, 26.90120041370392, -10.949550196528435], [-21.555500105023384, 27.382949367165565, -11.139050126075745], [27.626749128103256, 27.59449928998947, -11.064499616622925], [25.84034949541092, 28.26559916138649, -10.841449722647667], [31.562551856040955, 27.67989970743656, -10.661650449037552], [10.746650397777557, 28.93250063061714, -11.119949631392956], [31.33324906229973, 29.460899531841278, -10.716649703681469], [24.909349158406258, 28.811749070882797, -10.94914972782135], [-39.60629925131798, 29.272500425577164, -10.606150142848492], [-9.442999958992004, 29.736999422311783, -10.756400413811207], [9.422499686479568, 29.9236997961998, -10.779050178825855], [-42.472049593925476, 31.685199588537216, -10.955249890685081], [-31.33530169725418, 31.0092493891716, -11.511499993503094], [-7.522400002926588, 31.698450446128845, -10.789950378239155], [7.859149947762489, 32.01274946331978, -10.829250328242779], [7.193149998784065, 33.511098474264145, -10.929649695754051], [-5.311000160872936, 33.93565118312836, -10.579699650406837], [6.71715009957552, 35.53155064582825, -11.091349646449089], [24.820400401949883, 39.11624848842621, -10.93559991568327], [-37.59489953517914, 39.53329846262932, -10.932100005447865], [23.976799100637436, 40.2725487947464, -10.996299795806408], [-21.313399076461792, 43.991949409246445, -10.903250426054], [7.889649830758572, 45.62839865684509, -10.724400170147419], [1.7714350251480937, 45.43574899435043, -10.835300199687481], [-37.5560000538826, 46.21409997344017, -11.1006498336792], [-29.67430092394352, 48.12460020184517, -11.26480009406805], [24.600349366664886, 46.56194895505905, -10.840900242328644], [25.602849200367928, 48.011649399995804, -10.846099816262722], [10.136250406503677, 49.19999837875366, -11.343750171363354], [27.087949216365814, 50.1055009663105, -10.826149955391884], [-12.642850168049335, 51.98249965906143, -10.79775020480156], [3.963179886341095, 51.134999841451645, -11.355250142514706], [12.41180021315813, 52.78699845075607, -10.842500254511833], [28.731700032949448, 52.96500027179718, -10.903649963438511], [-27.69945003092289, 54.12599816918373, -11.493350379168987], [-25.390949100255966, 54.127998650074005, -11.14645041525364], [-29.751000925898552, 54.0659986436367, -11.380200274288654], [-10.814099572598934, 56.049998849630356, -10.717649944126606], [-29.778599739074707, 56.23599886894226, -11.488749645650387], [6.630599964410067, 56.34799972176552, -10.781900025904179], [-10.08475013077259, 56.887999176979065, -11.360700242221355], [-21.581200882792473, 56.42849951982498, -10.69835014641285], [7.446799892932177, 57.79549852013588, -11.232949793338776], [-29.390400275588036, 58.13249945640564, -11.685799807310104], [-19.80309933423996, 58.28249827027321, -10.8194500207901], [8.296550251543522, 58.931998908519745, -11.39719970524311], [-8.905950002372265, 60.240499675273895, -10.860400274395943], [9.176700375974178, 60.053501278162, -10.977800004184246], [-17.78304949402809, 60.458000749349594, -10.806149803102016], [10.258999653160572, 60.99599972367287, -10.973099619150162], [11.399799957871437, 61.62349879741669, -10.884799994528294], [-15.625599771738052, 62.470000237226486, -10.66564954817295], [-6.695750169456005, 66.19550287723541, -10.808300226926804], [-27.101749554276466, 67.93349981307983, -10.85904985666275], [-27.42215059697628, 72.0990002155304, -10.842500254511833], [-1.1346950195729733, 74.3900015950203, -11.182649992406368], [27.16274932026863, 74.3350014090538, -10.997449979186058], [-31.835950911045074, 74.18400049209595, -11.129249818623066], [1.0992749594151974, 76.66400074958801, -11.064049787819386], [25.367900729179382, 76.05499774217606, -10.892399586737156], [-10.748550295829773, 76.3934999704361, -10.781900025904179], [-29.74884957075119, 77.13250070810318, -10.763900354504585], [21.769750863313675, 78.39050143957138, -11.27185020595789], [5.1668500527739525, 78.65700125694275, -11.064600199460983], [-28.503399342298508, 77.9770016670227, -11.53464987874031], [-10.93745045363903, 78.29099893569946, -10.914900340139866], [-33.5577018558979, 78.62299680709839, -11.102699674665928], [13.239599764347076, 80.43500036001205, -10.960149578750134], [17.417050898075104, 80.23250102996826, -10.975649580359459], [-35.41655093431473, 79.08350229263306, -10.73244959115982], [-35.54049879312515, 80.5630013346672, -10.811899788677692], [-15.620799735188484, 86.42750233411789, -10.92199981212616], [-29.529400169849396, 88.95199745893478, -10.9655000269413], [-27.698099613189697, 89.00699764490128, -10.991450399160385], [-19.337600097060204, 93.02149713039398, -11.340400204062462], [-9.225299581885338, 92.73599833250046, -11.118150316178799], [-13.056750409305096, 93.2840034365654, -10.962500236928463], [11.407350189983845, 28.287850320339203, -10.79929992556572], [-43.49225014448166, 29.79169972240925, -10.680150240659714], [30.5208507925272, 57.92099982500076, -11.373399756848812], [30.85930086672306, 58.40950086712837, -10.791650041937828], [-29.398899525403976, 64.17399644851685, -10.787149891257286], [-11.361800134181976, 66.11549854278564, -10.747049935162067], [-4.905929788947105, 70.12899965047836, -10.866650380194187], [-2.7444250881671906, 74.39050078392029, -10.634000413119793], [-35.01395136117935, 85.55950224399567, -10.819200426340103], [-35.40955111384392, 86.51000261306763, -10.549799539148808], [-25.73464997112751, 89.06950056552887, -11.018199846148491], [-21.606050431728363, 91.01299941539764, -11.06830034404993], [-21.38639986515045, 92.74650365114212, -10.788599960505962], [-17.360549420118332, 96.89900279045105, -11.095399968326092], [-17.34359934926033, 98.17150235176086, -10.821499861776829], [-33.74509885907173, 30.37079982459545, -10.629200376570225], [-3.7172550801187754, 36.2561009824276, -10.803350247442722], [-33.530350774526596, 50.25799944996834, -11.287650093436241], [-31.737301498651505, 50.23200064897537, -11.303050443530083], [-31.751848757267, 54.13850024342537, -11.20929978787899], [-23.623250424861908, 54.341498762369156, -10.630999691784382], [-31.853899359703064, 56.403998285532, -11.109749786555767], [-31.770549714565277, 58.37149918079376, -10.971000418066978], [-12.990499846637249, 64.18099999427795, -10.74334979057312], [-33.35890173912048, 70.17699629068375, -10.655649937689304], [-33.37239846587181, 72.00200110673904, -10.744350031018257], [3.29177500680089, 78.6214992403984, -10.597649961709976], [6.8870000541210175, 80.1595002412796, -10.570649988949299], [-19.504450261592865, 94.69050168991089, -11.212349869310856], [-18.052000552415848, 95.12399882078171, -10.601899586617947], [-19.601650536060333, 96.70449793338776, -10.777950286865234], [19.376050680875778, 28.074350208044052, -10.70914976298809], [-27.60539948940277, 28.262700885534286, -10.811650194227695], [-11.531500145792961, 28.101200237870216, -10.746249929070473], [-31.518500298261642, 29.953399673104286, -10.720199905335903], [28.95529940724373, 33.26505050063133, -10.536650195717812], [0.18651450227480382, 42.20480099320412, -10.659299790859222], [-35.62925010919571, 50.30849948525429, -10.887599550187588], [-29.39154952764511, 50.232499837875366, -11.0360998660326], [-33.76689925789833, 52.4899996817112, -10.957499966025352], [-29.5136496424675, 52.2255003452301, -11.19530014693737], [-31.53020143508911, 52.223000675439835, -11.248700320720673], [-27.571650221943855, 51.96499824523926, -10.968349874019623], [-31.5263494849205, 60.277000069618225, -10.745099745690823], [31.020749360322952, 68.00749897956848, -10.815300047397614], [8.874700404703617, 80.39849996566772, -10.74874959886074], [19.668450579047203, 80.25950193405151, -10.559700429439545], [-37.28419914841652, 38.033898919820786, -10.728949680924416], [2.3282950278371572, 46.3145487010479, -10.55539958178997], [-27.821499854326248, 47.87220060825348, -10.613749735057354], [-25.882750749588013, 52.58350074291229, -10.739199817180634], [-33.475201576948166, 54.34200167655945, -10.866150259971619], [-33.406201750040054, 56.19049817323685, -10.676800273358822], [-31.126350164413452, 61.91850081086159, -10.541300289332867], [-11.852400377392769, 65.08299708366394, -10.73320023715496], [29.357900843024254, 71.98449969291687, -10.611699894070625], [-32.94900059700012, 74.58549737930298, -10.765399783849716], [-0.7632349734194577, 76.11949741840363, -10.61095017939806], [-43.39829832315445, 31.011300161480904, -10.352700017392635], [30.909700319170952, 31.02869912981987, -10.3150000795722], [-39.00985047221184, 41.529200971126556, -10.372250340878963], [-39.049651473760605, 43.93500089645386, -10.521999560296535], [-25.91479942202568, 45.32885178923607, -10.522199794650078], [-18.420100212097168, 45.173950493335724, -10.43890044093132], [-16.40014909207821, 46.98535054922104, -10.399449616670609], [-37.57914900779724, 47.95515164732933, -10.552150197327137], [-27.600349858403206, 50.296999514102936, -10.502450168132782], [-35.433799028396606, 52.179500460624695, -10.606000199913979], [4.299764987081289, 50.95599964261055, -10.375450365245342], [13.899199664592743, 55.60849979519844, -10.363999754190445], [-33.12255069613457, 58.18599835038185, -10.5359498411417], [-10.221850126981735, 57.751499116420746, -10.338399559259415], [-8.459200151264668, 62.26449832320213, -10.359750129282475], [-13.290300033986568, 62.81200051307678, -10.315599851310253], [-29.337450861930847, 66.01300090551376, -9.267199784517288], [-6.674299947917461, 67.94600188732147, -10.352199897170067], [31.10790066421032, 69.64650005102158, -10.369949974119663], [-10.588949546217918, 74.11450147628784, -10.5876000598073], [29.16629984974861, 73.58899712562561, -10.335800237953663], [-33.14660117030144, 75.55750012397766, -10.418849997222424], [27.129599824547768, 75.63149929046631, -10.572950355708599], [25.19015036523342, 77.90999859571457, -10.402250103652477], [0.7407300290651619, 77.91599631309509, -10.537750087678432], [23.466600105166435, 78.51599901914597, -10.587800294160843], [21.844249218702316, 79.64500039815903, -10.392149910330772], [-37.1212512254715, 80.13200014829636, -10.387049987912178], [15.037650242447853, 80.5554986000061, -9.862300008535385], [11.127750389277935, 80.30849695205688, -9.932249784469604], [-34.73670035600662, 82.15150237083435, -10.338599793612957], [-12.377900071442127, 90.11449664831161, -10.565550066530704], [-22.842150181531906, 90.39150178432465, -10.47189999371767], [-20.941000431776047, 94.76649761199951, -10.581400245428085], [-29.1460994631052, 28.351349756121635, -10.247649624943733], [-38.99639844894409, 45.920100063085556, -10.302100330591202], [-37.12094947695732, 50.309501588344574, -10.340499691665173], [-25.115899741649628, 51.683999598026276, -9.92560014128685], [-34.98705103993416, 54.26650121808052, -10.501449927687645], [-29.340799897909164, 71.91350311040878, -10.327300056815147], [-4.924514796584845, 71.74500077962875, -10.440999642014503], [27.911249548196793, 74.76949691772461, -9.313349612057209], [-12.31675036251545, 81.5190002322197, -10.301100090146065], [-10.806400328874588, 27.642350643873215, -9.247600100934505], [6.667550187557936, 33.49504992365837, -9.20180045068264], [-36.926548928022385, 35.96064820885658, -10.333850048482418], [-0.5858949734829366, 39.79974985122681, -9.347449988126755], [-14.683900400996208, 49.1134487092495, -10.386049747467041], [-23.657049983739853, 52.27850005030632, -9.274049662053585], [8.298899978399277, 58.96199867129326, -9.236600250005722], [9.06634982675314, 60.004498809576035, -9.059100411832333], [-13.515099883079529, 62.37449869513512, -9.13000013679266], [32.45149925351143, 65.97699970006943, -10.057950392365456], [-36.26269847154617, 86.99800074100494, -9.21849999576807], [-13.307349756360054, 90.7839983701706, -9.669399820268154], [-17.320100218057632, 26.742849498987198, -9.144599549472332], [-15.483549796044827, 26.70864947140217, -9.022049605846405], [15.7670509070158, 26.599949225783348, -10.143149644136429], [19.76259984076023, 27.275249361991882, -9.735849685966969], [-27.61255018413067, 27.2777508944273, -9.281899780035019], [13.05409986525774, 26.91509947180748, -9.323449805378914], [11.01830042898655, 27.69945003092289, -8.936749771237373], [21.511150524020195, 27.58209966123104, -9.061750024557114], [-37.71749883890152, 35.49090027809143, -9.884949773550034], [-38.32520171999931, 37.57530078291893, -10.124250315129757], [-1.429855008609593, 38.00459951162338, -8.991849608719349], [-39.93314877152443, 39.744000881910324, -9.437999688088894], [23.50570075213909, 39.67040032148361, -9.137400425970554], [-40.050748735666275, 43.740350753068924, -9.666450321674347], [-20.142700523138046, 44.65530067682266, -9.834500029683113], [-39.72560167312622, 47.98005148768425, -9.251650422811508], [-17.614249140024185, 46.34125158190727, -9.155799634754658], [-27.043750509619713, 47.88750037550926, -10.147400200366974], [-37.98019886016846, 50.08799955248833, -9.939800016582012], [-25.61740018427372, 49.97045174241066, -9.510399773716927], [10.67274995148182, 50.68250000476837, -9.414049796760082], [-37.771400064229965, 52.353501319885254, -9.554600343108177], [5.011099856346846, 52.19849944114685, -9.121149778366089], [12.857500463724136, 54.1204996407032, -9.251300245523453], [-36.17655113339424, 54.28000167012215, -9.97494999319315], [-21.639449521899223, 54.44749817252159, -9.054100140929222], [-35.799700766801834, 56.203000247478485, -9.625149890780449], [30.70089966058731, 57.028498500585556, -10.211300104856491], [-34.005798399448395, 58.48199874162674, -9.914199821650982], [-9.935850277543068, 58.8034987449646, -10.08905004709959], [-18.736500293016434, 58.019500225782394, -9.609649889171124], [-33.77595171332359, 60.18399819731712, -9.262749925255775], [-17.022449523210526, 60.03750115633011, -9.875199757516384], [-31.928651034832, 62.479499727487564, -9.416449815034866], [32.19344839453697, 61.97800114750862, -9.836049750447273], [-9.113499894738197, 64.22849744558334, -9.265299886465073], [-30.297350138425827, 64.61849808692932, -9.474500082433224], [32.15264901518822, 68.34950298070908, -9.982299990952015], [-6.32070004940033, 69.64050233364105, -9.73065011203289], [-31.759098172187805, 70.90900093317032, -9.909099899232388], [-5.4557002149522305, 70.45649737119675, -9.090850129723549], [-35.68210080265999, 70.44199854135513, -9.23524983227253], [-11.6200502961874, 70.09399682283401, -9.208000265061855], [-11.306400410830975, 72.03249633312225, -9.297399781644344], [-4.904144909232855, 72.01399654150009, -9.71280038356781], [-33.55655074119568, 72.48850166797638, -9.217849932610989], [-34.195348620414734, 74.70499724149704, -9.80675034224987], [27.601899579167366, 75.89550316333771, -9.255100041627884], [25.713549926877022, 76.58799737691879, -9.03285015374422], [-33.527400344610214, 78.25499773025513, -9.349900297820568], [-35.593751817941666, 78.27749848365784, -9.238299913704395], [-12.091699987649918, 78.79749685525894, -9.323650039732456], [-37.84840181469917, 80.84800094366074, -9.762600064277649], [8.898800238966942, 79.7709971666336, -9.994049556553364], [-12.120500206947327, 80.66099882125854, -10.165500454604626], [-13.420149683952332, 83.01849663257599, -9.173600003123283], [-33.50545093417168, 88.21050077676773, -9.349600411951542], [-11.777300387620926, 92.39999949932098, -10.065199807286263], [-17.743200063705444, 96.94249927997589, -9.694499894976616], [-29.534999281167984, 27.678700163960457, -9.228049777448177], [24.52315017580986, 39.18125107884407, -10.141399689018726], [-40.22995010018349, 41.84434935450554, -9.550349786877632], [-25.5196001380682, 46.140000224113464, -9.716849774122238], [2.558730076998472, 45.83379998803139, -9.043499827384949], [4.028819967061281, 49.70179870724678, -9.44804958999157], [28.960999101400375, 52.45549976825714, -9.157950058579445], [7.601200137287378, 58.00599977374077, -9.033399634063244], [-14.55955021083355, 61.849500983953476, -9.976300410926342], [35.57555004954338, 62.24500015377998, -9.85225010663271], [35.264451056718826, 64.48999792337418, -9.967549704015255], [36.226000636816025, 63.872501254081726, -10.233149863779545], [37.69565001130104, 64.13350254297256, -10.004599578678608], [37.83734887838364, 66.22499972581863, -9.97950043529272], [35.444699227809906, 66.2430003285408, -9.876199997961521], [-7.87969958037138, 66.47299975156784, -9.244699962437153], [-7.143800146877766, 68.1850016117096, -9.07064974308014], [-26.84449963271618, 70.06850093603134, -9.094350039958954], [-29.642950743436813, 72.3785012960434, -9.166750125586987], [-11.195000261068344, 74.06000047922134, -9.337999857962132], [-12.150250375270844, 91.30900353193283, -9.970099665224552], [-14.823749661445618, 26.491999626159668, -9.113050065934658], [15.018150210380554, 26.45689994096756, -9.048249572515488], [17.103100195527077, 26.422349736094475, -8.724650368094444], [-19.74545046687126, 26.735899969935417, -9.070799686014652], [-12.914399616420269, 26.710249483585358, -9.026099927723408], [18.28470081090927, 26.666900143027306, -9.546900168061256], [-23.57419952750206, 26.713749393820763, -8.723899722099304], [31.93499892950058, 27.17900089919567, -9.167949669063091], [-25.536350905895233, 26.80025063455105, -8.830149658024311], [27.372749522328377, 27.367450296878815, -8.844399824738503], [25.6888996809721, 28.116650879383087, -8.89539998024702], [-31.429149210453033, 28.84339913725853, -9.703800082206726], [32.08104893565178, 30.060699209570885, -9.373449720442295], [-8.719149976968765, 29.273249208927155, -9.142800234258175], [9.104249998927116, 29.375599697232246, -9.089949540793896], [22.212199866771698, 28.729500249028206, -9.847999550402164], [23.778149858117104, 28.859199956059456, -9.296899661421776], [-43.497100472450256, 29.63555045425892, -9.785549715161324], [-41.581399738788605, 30.141999945044518, -9.564650245010853], [-39.68074917793274, 29.732249677181244, -9.489900432527065], [-37.73225098848343, 29.93514947593212, -9.018300101161003], [-35.55414825677872, 29.695499688386917, -8.836899884045124], [-33.57364982366562, 29.347149655222893, -9.104950353503227], [31.48769959807396, 31.658150255680084, -9.049749933183193], [-6.693299859762192, 31.3369482755661, -9.062100201845169], [7.5576999224722385, 31.50619938969612, -9.044099599123001], [-41.710350662469864, 31.57695010304451, -9.44720022380352], [30.37099912762642, 32.29235112667084, -9.57425031810999], [-41.34345054626465, 33.08555111289024, -9.542400017380714], [-4.748514853417873, 33.60304981470108, -9.100549854338169], [29.792899265885353, 33.694300800561905, -8.981299586594105], [-39.65580090880394, 33.45035016536713, -9.074949659407139], [-38.30984979867935, 34.28500145673752, -9.60609968751669], [6.229199934750795, 35.27455031871796, -9.146999567747116], [28.859850019216537, 34.80495139956474, -8.982500061392784], [-3.16408509388566, 35.62590107321739, -9.122500196099281], [27.52479910850525, 35.96245124936104, -9.005299769341946], [-2.186229918152094, 36.86340153217316, -8.846649900078773], [25.459999218583107, 37.682849913835526, -8.941950276494026], [-39.94610160589218, 37.63340041041374, -8.960699662566185], [6.179300136864185, 39.59539905190468, -9.054499678313732], [22.667549550533295, 41.298750787973404, -9.10934992134571], [0.5427399883046746, 41.822999715805054, -8.887549862265587], [23.212049156427383, 43.81474852561951, -8.889400400221348], [1.5385049628093839, 43.82704943418503, -9.06750001013279], [6.844049785286188, 43.55045035481453, -8.969149552285671], [-23.76065030694008, 45.54219916462898, -8.792299777269363], [-23.138700053095818, 44.75324973464012, -9.396100416779518], [-21.763350814580917, 44.60030049085617, -9.453649632632732], [7.584750186651945, 45.627448707818985, -8.990149945020676], [-19.369499757885933, 45.28899863362312, -8.8724996894598], [24.030650034546852, 45.48085108399391, -8.858850225806236], [-40.115151554346085, 45.53909972310066, -9.491500444710255], [25.08074976503849, 46.858400106430054, -8.850649930536747], [-16.4551492780447, 47.68545180559158, -8.89385025948286], [-25.510000064969063, 47.95125126838684, -9.141700342297554], [-15.724599361419678, 48.41715097427368, -9.163900278508663], [9.00185015052557, 48.30535128712654, -9.03400033712387], [25.807900354266167, 47.94264957308769, -9.132199920713902], [-14.880199916660786, 49.803148955106735, -8.943499997258186], [10.0662000477314, 49.86029863357544, -8.755650371313095], [27.398500591516495, 50.00850185751915, -9.003750048577785], [-14.05125018209219, 50.595998764038086, -9.555299766361713], [4.295635037124157, 50.439998507499695, -8.768299594521523], [-13.555100187659264, 52.12150141596794, -8.946550078690052], [28.454450890421867, 51.60149931907654, -9.115350432693958], [11.577799916267395, 52.15999856591225, -8.797249756753445], [-22.736800834536552, 53.53099852800369, -9.384050033986568], [5.7982997968792915, 54.43299934267998, -8.989199995994568], [29.97254952788353, 54.151501506567, -9.050150401890278], [-12.877750210464, 54.05449867248535, -8.885649964213371], [-12.217650189995766, 54.803501814603806, -9.18314978480339], [-11.57859992235899, 56.154001504182816, -9.149700403213501], [6.638550199568272, 56.33949860930443, -9.039100259542465], [30.402900651097298, 55.68550154566765, -9.533500298857689], [-19.637400284409523, 56.23149871826172, -8.933399803936481], [31.01935051381588, 56.26500025391579, -8.881050162017345], [-35.52110120654106, 58.09599906206131, -8.995549753308296], [-10.99220011383295, 58.45849961042404, -9.206649847328663], [14.93079960346222, 58.13299864530563, -8.986850269138813], [31.795449554920197, 58.182500302791595, -9.05575044453144], [-17.31180027127266, 58.219000697135925, -8.925650268793106], [31.93660080432892, 60.09649857878685, -9.538150392472744], [15.250200405716896, 60.261499136686325, -8.927600458264351], [-15.229799784719944, 60.3254996240139, -9.166699834167957], [-9.610350243747234, 60.75749918818474, -9.779499843716621], [-9.545300155878067, 62.562502920627594, -9.398999623954296], [10.212100110948086, 61.00299954414368, -9.492600336670876], [14.345649629831314, 61.563000082969666, -8.954299613833427], [13.012150302529335, 61.88900023698807, -9.163649752736092], [-13.044649735093117, 64.10250067710876, -8.960450068116188], [-31.11420013010502, 64.03099745512009, -8.842400275170803], [33.752501010894775, 66.19550287723541, -9.211099706590176], [-27.870450168848038, 68.35900247097015, -9.00224968791008], [-11.899949982762337, 68.31750273704529, -9.526650421321392], [31.501401215791702, 70.45850157737732, -9.096549823880196], [-33.64564850926399, 70.53600251674652, -9.123099967837334], [-26.356549933552742, 70.73599845170975, -9.503000415861607], [31.142249703407288, 71.58900052309036, -8.96649993956089], [-35.57020053267479, 72.42149859666824, -9.315099567174911], [29.97625060379505, 72.55549728870392, -9.20450035482645], [-27.467550709843636, 72.36050069332123, -8.80375038832426], [-2.9821849893778563, 72.33799993991852, -8.820350281894207], [-2.6857301127165556, 73.97600263357162, -9.411349892616272], [29.192950576543808, 73.96300137042999, -9.114500135183334], [-33.33739936351776, 75.87850093841553, -9.004799649119377], [-11.69584970921278, 76.6569972038269, -8.799400180578232], [-1.0160199599340558, 74.522003531456, -9.228100068867207], [-0.33293600426986814, 76.02199912071228, -9.59755014628172], [-31.684301793575287, 76.36100053787231, -8.928350172936916], [-29.544100165367126, 77.02399790287018, -8.891049772500992], [25.487450882792473, 77.80899852514267, -9.421099908649921], [0.8862150134518743, 76.40500366687775, -9.400949813425541], [2.859510015696287, 76.66949927806854, -8.867849595844746], [-31.64694830775261, 78.80750298500061, -9.271150454878807], [-29.386049136519432, 78.94500344991684, -9.134200401604176], [3.353864885866642, 78.53499799966812, -9.654900059103966], [23.633800446987152, 78.47099751234055, -9.363049641251564], [4.994300194084644, 78.26700061559677, -9.593450464308262], [-37.57699951529503, 78.76399904489517, -9.0616000816226], [-12.425900436937809, 79.50150221586227, -8.917950093746185], [8.917099796235561, 78.79000157117844, -9.12955030798912], [6.917899940162897, 78.62450182437897, -9.170600213110447], [19.69360001385212, 78.85649800300598, -9.028799831867218], [21.514400839805603, 78.62599939107895, -9.029700420796871], [-39.84155133366585, 80.53749799728394, -9.13309957832098], [7.659549824893475, 80.15350252389908, -9.890899993479252], [13.07045016437769, 78.96649837493896, -8.848600089550018], [-12.898200191557407, 81.0990035533905, -9.065349586308002], [19.176200032234192, 80.52550256252289, -9.717850014567375], [13.333950191736221, 79.92900162935257, -9.516599588096142], [17.246700823307037, 80.30399680137634, -9.603249840438366], [-35.9501987695694, 81.33699744939804, -9.783649817109108], [-35.585448145866394, 82.64599740505219, -8.969450369477272], [-34.38179939985275, 83.5615023970604, -9.60635021328926], [-34.372299909591675, 84.3454971909523, -9.675850160419941], [-13.922049663960934, 84.55599844455719, -9.6627501770854], [-35.64969822764397, 84.83149856328964, -9.016149677336216], [-14.777050353586674, 85.23599803447723, -8.826250210404396], [-15.862999483942986, 86.70350164175034, -9.033950045704842], [-15.200300142168999, 88.99600058794022, -9.352399967610836], [-31.53429925441742, 88.81799876689911, -9.047550149261951], [-29.739849269390106, 89.46099877357483, -9.057600051164627], [-27.622200548648834, 89.63499963283539, -9.526100009679794], [-25.528499856591225, 90.12100100517273, -9.065000340342522], [-23.234449326992035, 90.92400223016739, -8.8644502684474], [-21.91684953868389, 92.90450066328049, -8.813099935650826], [-13.073249720036983, 92.51049906015396, -9.77845024317503], [-15.475999563932419, 92.6084965467453, -9.276649914681911], [-17.642799764871597, 93.07549893856049, -8.841400034725666], [-18.01224984228611, 95.0699970126152, -9.500049985945225], [-21.008750423789024, 94.79500353336334, -9.098449721932411], [-19.510649144649506, 96.59349918365479, -9.389500133693218], [-21.66295051574707, 26.71149931848049, -8.777099661529064], [33.39939936995506, 27.680600062012672, -8.73200036585331], [6.034799851477146, 37.56999969482422, -8.909200318157673], [6.4027998596429825, 41.4000004529953, -8.9009003713727], [3.3576600253582, 47.86524921655655, -8.976450189948082], [-39.55245018005371, 50.31849816441536, -8.876550011336803], [-37.60385140776634, 54.45300042629242, -8.993200026452541], [13.886949978768826, 56.052498519420624, -9.130200371146202], [-20.773449912667274, 55.759500712156296, -9.47870034724474], [-11.12465001642704, 60.171499848365784, -8.91914963722229], [-32.95154869556427, 61.93849816918373, -8.663349784910679], [11.180100031197071, 61.723001301288605, -8.856049738824368], [37.73310035467148, 62.35099956393242, -9.377099573612213], [33.58655050396919, 64.24400210380554, -9.374899789690971], [39.52350094914436, 64.21750038862228, -8.951149880886078], [32.463498413562775, 64.94999676942825, -9.858899749815464], [-8.751749992370605, 65.91899693012238, -9.074199944734573], [-12.788349762558937, 66.40250235795975, -8.797000162303448], [39.919499307870865, 66.20749831199646, -9.367450140416622], [-11.671899817883968, 66.33350253105164, -9.828699752688408], [33.69339928030968, 68.24050098657608, -8.898399770259857], [35.58345139026642, 68.4870034456253, -9.266049601137638], [37.42444887757301, 68.24850291013718, -9.502450004220009], [39.766449481248856, 68.29699873924255, -9.124750271439552], [-31.6770002245903, 72.04899936914444, -8.938649669289589], [-26.374399662017822, 71.51799649000168, -9.004799649119377], [-35.40024906396866, 74.3900015950203, -8.833999745547771], [11.017650365829468, 78.94250005483627, -9.012400172650814], [15.279149636626244, 79.0340006351471, -8.917300030589104], [-36.773551255464554, 87.33350038528442, -8.873499929904938], [-26.20524913072586, 89.78749811649323, -9.706949815154076], [-31.54049813747406, 28.02935056388378, -8.739699609577656], [-5.805999971926212, 32.09029883146286, -8.860450237989426], [-39.38554972410202, 35.65270081162453, -8.876100182533264], [35.5350486934185, 60.221001505851746, -9.349299594759941], [33.51270034909248, 62.13099882006645, -9.360499680042267], [-12.443800456821918, 67.94550269842148, -8.705000393092632], [29.57789972424507, 27.073049917817116, -8.770650252699852], [-9.76139958947897, 28.144750744104385, -8.745449595153332], [23.49640056490898, 28.29729951918125, -8.640299551188946], [-7.7194999903440475, 29.929399490356445, -8.695799857378006], [37.345051765441895, 60.325998812913895, -8.875399827957153], [-10.783500038087368, 61.72649934887886, -8.780550211668015], [17.587000504136086, 79.06799763441086, -8.893200196325779], [-35.28150171041489, 88.02799880504608, -8.624750189483166], [-14.930100180208683, 90.76549857854843, -8.832300081849098], [33.54185074567795, 60.157500207424164, -8.928749710321426], [-37.545301020145416, 82.44749903678894, -8.788649924099445], [32.91115164756775, 29.345350340008736, -8.59019998461008], [14.365499839186668, 56.9319985806942, -8.607899770140648], [35.609349608421326, 58.48050117492676, -8.737649768590927], [37.55364939570427, 69.96650248765945, -8.779199793934822], [-27.54184976220131, 90.0299996137619, -8.57979990541935], [19.82484944164753, 26.4894999563694, -8.317150175571442], [24.702750146389008, 28.65315042436123, -8.823749609291553], [-39.70799967646599, 31.612299382686615, -8.679499849677086], [30.84379993379116, 33.02345052361488, -8.329300209879875], [-3.780259983614087, 34.36579927802086, -8.429249748587608], [6.022249814122915, 36.03589907288551, -8.570199832320213], [24.230699986219406, 38.30819949507713, -8.249600417912006], [-40.9960001707077, 40.000900626182556, -8.43065045773983], [-41.297849267721176, 41.71130061149597, -8.477150462567806], [-41.185300797224045, 43.894700706005096, -8.619200438261032], [2.2281750570982695, 44.872451573610306, -8.576150052249432], [-21.741649135947227, 45.05079984664917, -8.506749756634235], [-41.07224941253662, 45.93275114893913, -8.459949865937233], [26.54144912958145, 48.71105030179024, -8.404799737036228], [-24.17049929499626, 50.316501408815384, -8.425399661064148], [-39.34524953365326, 52.16199904680252, -8.484800346195698], [-22.259749472141266, 52.786000072956085, -8.340599946677685], [-37.3384989798069, 56.07299879193306, -8.436299860477448], [-12.596949934959412, 56.111499667167664, -8.436749689280987], [-18.22805032134056, 56.88349902629852, -8.421050384640694], [-15.884850174188614, 58.76550078392029, -8.350100368261337], [33.493999391794205, 58.283500373363495, -8.386650122702122], [38.911499083042145, 62.7174973487854, -8.460599929094315], [41.29695147275925, 66.25449657440186, -8.454649709165096], [-28.78524921834469, 67.40699708461761, -8.312899619340897], [35.67714989185333, 69.72599774599075, -8.484099991619587], [-37.341050803661346, 70.43299823999405, -8.427450433373451], [-3.4589949063956738, 71.06450200080872, -8.36739968508482], [-1.3299150159582496, 73.07650148868561, -8.498050272464752], [0.9495699778199196, 75.03949850797653, -8.520849980413914], [4.837890155613422, 77.0924985408783, -8.588500320911407], [21.731749176979065, 77.34549790620804, -8.514399640262127], [23.783499374985695, 77.11400091648102, -8.583500050008297], [-39.34844955801964, 79.14800196886063, -8.426600135862827], [-31.047150492668152, 79.73500341176987, -8.579649962484837], [-29.903650283813477, 79.7400027513504, -8.643600158393383], [-41.590701788663864, 80.98500221967697, -8.404949679970741], [-39.37260061502457, 81.95149898529053, -8.482149802148342], [-16.71620085835457, 87.54400163888931, -8.359399624168873], [-16.579650342464447, 88.69750052690506, -8.38600005954504], [-28.956200927495956, 89.86999839544296, -8.545700460672379], [-19.155049696564674, 94.77200359106064, -8.588450029492378], [-33.04015100002289, 28.271600604057312, -8.27960018068552], [6.042750086635351, 39.1337014734745, -8.572350256145], [8.180700242519379, 46.92775011062622, -8.361900225281715], [-38.85985165834427, 53.72750014066696, -8.33974964916706], [30.87420016527176, 54.98950183391571, -8.331749588251114], [-12.298749759793282, 58.3919994533062, -8.404750376939774], [37.10684925317764, 58.884501457214355, -8.496450260281563], [-34.91244837641716, 59.812501072883606, -8.34755040705204], [41.60115122795105, 68.06699931621552, -8.533350192010403], [39.30079936981201, 70.12499868869781, -8.481400087475777], [-37.03190013766289, 72.17449694871902, -8.357900194823742], [14.146850444376469, 26.42204985022545, -8.310399949550629], [-15.283400192856789, 26.988249272108078, -7.119100075215101], [9.638549759984016, 28.369400650262833, -8.281799964606762], [7.846849970519543, 30.60084953904152, -8.324350230395794], [-40.4512993991375, 35.40809825062752, -7.7935499139130116], [-2.6898649521172047, 35.42130067944527, -7.171799894422293], [-40.87644815444946, 37.8573015332222, -8.212050423026085], [22.96300046145916, 41.67195037007332, -7.1367002092301846], [-42.227499186992645, 43.935101479291916, -7.224550005048513], [-40.97364842891693, 47.47600108385086, -8.209999650716782], [-24.407150223851204, 48.05564880371094, -8.1794997677207], [30.236700549721718, 53.365498781204224, -7.847250439226627], [-18.94170045852661, 55.48600107431412, -8.035499602556229], [32.12819993495941, 56.178998202085495, -7.550150156021118], [38.23160007596016, 60.03350019454956, -7.450900040566921], [-33.86874869465828, 62.08749860525131, -6.995650008320808], [-29.82570044696331, 66.32550060749054, -7.056300062686205], [33.73584896326065, 67.86850094795227, -7.164150010794401], [40.99214822053909, 69.63349878787994, -8.309099823236465], [-35.777900367975235, 70.75800001621246, -7.317999843508005], [-11.934899725019932, 70.91650366783142, -7.542000152170658], [25.3503005951643, 75.50100237131119, -8.200399577617645], [23.311449214816093, 76.05700194835663, -7.445049937814474], [7.274750154465437, 77.7755007147789, -7.705000229179859], [-33.948298543691635, 79.19999957084656, -8.033749647438526], [-40.57694971561432, 79.72999662160873, -8.118550293147564], [-12.633400037884712, 80.90750128030777, -7.19395000487566], [-31.89004957675934, 89.48399871587753, -7.484850008040667], [-16.331849619746208, 91.45700186491013, -8.262399584054947], [23.61389994621277, 27.232550084590912, -7.339150179177523], [33.94414857029915, 29.720349237322807, -7.463099900633097], [32.80625119805336, 31.12740069627762, -8.184850215911865], [2.67530488781631, 45.9071509540081, -7.078949827700853], [27.843749150633812, 49.663349986076355, -7.593200076371431], [-12.978999875485897, 56.218501180410385, -7.148650009185076], [38.03424909710884, 58.27150121331215, -7.193149998784065], [-14.051600359380245, 64.72949683666229, -7.770549971610308], [41.83129966259003, 64.16449695825577, -7.168550044298172], [-5.555150099098682, 68.58649849891663, -8.168100379407406], [31.660448759794235, 68.23199987411499, -7.856350392103195], [34.34690088033676, 69.45300102233887, -7.334399968385696], [35.55845096707344, 70.45599818229675, -7.141049951314926], [39.916250854730606, 70.79750299453735, -8.02375003695488], [-38.015399128198624, 72.24900275468826, -7.704849820584059], [-33.297598361968994, 71.99449837207794, -7.1807000786066055], [27.322549372911453, 73.88900220394135, -7.974750362336636], [19.3315502256155, 77.71699875593185, -7.699649780988693], [-31.648900359869003, 80.37800341844559, -7.223949767649174], [-20.326899364590645, 94.27150338888168, -8.100450038909912], [-38.4337492287159, 30.953800305724144, -7.201150059700012], [7.125500123947859, 43.74359920620918, -7.068450096994638], [-22.910699248313904, 51.56800150871277, -8.032949641346931], [-38.62304985523224, 54.55249920487404, -8.089800365269184], [35.63360124826431, 56.41400068998337, -7.83194974064827], [-11.165300384163857, 60.15300005674362, -7.281249854713678], [-15.664549544453621, 60.33800169825554, -7.541149854660034], [13.196500018239021, 62.61099874973297, -7.142200134694576], [41.85919836163521, 70.21349668502808, -7.7819498255848885], [-4.495684988796711, 69.64900344610214, -7.881850004196167], [37.40435093641281, 71.23350352048874, -8.131500333547592], [-27.646800503134727, 71.98049873113632, -6.953000091016293], [-31.638100743293762, 72.331503033638, -6.92619988694787], [-37.45904937386513, 73.96800071001053, -7.0373499765992165], [-35.72285175323486, 74.79099929332733, -7.194050122052431], [-30.194450169801712, 77.0144984126091, -6.977899931371212], [21.59070037305355, 76.66199654340744, -7.229050155729055], [-43.601248413324356, 81.05800300836563, -6.9771502166986465], [-39.614200592041016, 82.9090029001236, -7.407300174236298], [-17.42440089583397, 90.88350087404251, -7.765349932014942], [-18.14825087785721, 92.47799962759018, -7.970199920237064], [21.787650883197784, 26.722799986600876, -7.909799925982952], [-23.673249408602715, 27.081599459052086, -6.871100049465895], [12.570999562740326, 26.539599522948265, -7.594650145620108], [-21.74445055425167, 27.60305069386959, -6.7818001843988895], [-29.55544926226139, 26.78835019469261, -6.712149828672409], [33.80110114812851, 27.15655043721199, -7.124700117856264], [-31.70190006494522, 27.369199320673943, -7.097550202161074], [-33.66075083613396, 27.971049770712852, -7.002399768680334], [-35.95145046710968, 29.220400378108025, -7.17665022239089], [-7.273649796843529, 29.69514951109886, -7.053050212562084], [8.680200204253197, 29.27670069038868, -7.22324987873435], [7.901900447905064, 30.382750555872917, -6.667799782007933], [-6.312000099569559, 30.868899077177048, -6.976299919188023], [33.57170149683952, 31.529098749160767, -6.8883998319506645], [-5.30195003375411, 31.85170143842697, -7.012200076133013], [7.201349828392267, 31.783800572156906, -6.953500211238861], [32.34805166721344, 32.411299645900726, -7.0524499751627445], [-40.11420160531998, 33.61370041966438, -7.1911499835550785], [29.502149671316147, 34.22684967517853, -6.767999846488237], [24.053199216723442, 38.21654990315437, -6.738400086760521], [-42.28055104613304, 41.429001837968826, -7.017150055617094], [1.6758199781179428, 43.57580095529556, -6.893500220030546], [23.81264977157116, 43.78949850797653, -6.895300000905991], [2.2334749810397625, 44.89469900727272, -7.45740020647645], [-42.2075018286705, 45.99044844508171, -6.919700186699629], [-22.76564948260784, 45.7894504070282, -7.833350449800491], [-21.77415043115616, 46.02774977684021, -7.328450214117765], [-19.814299419522285, 46.19140177965164, -7.336500100791454], [7.972650229930878, 45.8517000079155, -7.28575000539422], [-18.168650567531586, 46.60319909453392, -7.812099996954203], [25.354299694299698, 45.98819836974144, -6.85515021905303], [-17.339199781417847, 48.14400151371956, -7.406299933791161], [9.116950444877148, 47.749899327754974, -7.198399864137173], [3.4189100842922926, 47.974199056625366, -6.842250004410744], [26.197200641036034, 47.56449908018112, -7.438300177454948], [-40.61020165681839, 50.47899857163429, -7.733500096946955], [-15.764899551868439, 50.57799816131592, -7.218599785119295], [29.931649565696716, 52.03549936413765, -7.072850130498409], [-14.841250143945217, 52.44649946689606, -6.996899843215942], [4.764684941619635, 52.07949876785278, -7.146600168198347], [-40.30120000243187, 52.37999930977821, -7.1494500152766705], [-13.915049843490124, 52.834998816251755, -7.993149571120739], [-39.45029899477959, 54.12450060248375, -7.068050093948841], [-21.042050793766975, 53.66000160574913, -7.975350134074688], [31.286101788282394, 54.200999438762665, -6.9657498970627785], [13.257450424134731, 54.322000592947006, -6.99960021302104], [-19.3387009203434, 54.31799963116646, -6.943350192159414], [5.31555013731122, 54.09950017929077, -6.803050171583891], [-38.090549409389496, 56.43549934029579, -7.196149788796902], [-37.25019842386246, 57.93150141835213, -6.966900080442429], [-17.167849466204643, 58.057498186826706, -7.16619985178113], [-12.698049657046795, 58.12149867415428, -7.421750109642744], [33.64510089159012, 56.21949955821037, -7.352349814027548], [33.60224887728691, 57.18649923801422, -8.024799637496471], [36.57599911093712, 57.2500005364418, -8.114100433886051], [-15.92789962887764, 58.90800058841705, -7.50515004619956], [7.182400207966566, 58.33350121974945, -7.095050066709518], [-35.5740487575531, 60.03149971365929, -7.113299798220396], [14.93894960731268, 61.81950122117996, -6.940649822354317], [9.73424967378378, 61.63400039076805, -6.995900068432093], [-10.722249746322632, 61.53399869799614, -7.674249820411205], [10.94105001538992, 62.334999442100525, -7.074600085616112], [38.568250834941864, 61.63949891924858, -6.859099958091974], [-15.385350212454796, 62.12649866938591, -6.9935498759150505], [39.470650255680084, 62.52899765968323, -7.229499984532595], [-9.037449955940247, 62.35149875283241, -6.980699952691793], [-31.77719935774803, 64.28249925374985, -6.817750167101622], [-14.784250408411026, 63.89550119638443, -6.8604000844061375], [-8.763650432229042, 63.74350190162659, -7.770999800413847], [40.48305004835129, 63.858501613140106, -7.907349616289139], [42.06885024905205, 65.85749983787537, -7.846199907362461], [-13.786500319838524, 66.04500114917755, -6.989100016653538], [-6.6963499411940575, 66.19749963283539, -7.394100073724985], [-12.86575011909008, 68.22150200605392, -7.073749788105488], [-5.02610020339489, 68.18199902772903, -7.0383502170443535], [43.637849390506744, 68.15999746322632, -7.612400222569704], [42.73014888167381, 69.1789984703064, -7.970049977302551], [31.006649136543274, 69.41650062799454, -7.811900228261948], [29.71065044403076, 70.36250084638596, -7.3574502021074295], [29.04280088841915, 71.91549986600876, -7.817300036549568], [-1.0922349756583571, 72.44350016117096, -6.966799963265657], [-29.6167004853487, 72.45050370693207, -6.892649922519922], [1.0482750367373228, 74.30200278759003, -7.1923998184502125], [25.704199448227882, 74.41700249910355, -7.046299986541271], [2.37878505140543, 75.04600286483765, -6.869549863040447], [-33.85945037007332, 75.16349852085114, -6.75344979390502], [24.149950593709946, 75.34100115299225, -6.993500050157309], [-31.571250408887863, 76.17899775505066, -6.950300186872482], [5.059400107711554, 76.67800039052963, -7.018299773335457], [-28.97145040333271, 78.18900048732758, -7.113399915397167], [6.597450003027916, 77.20249891281128, -6.605899892747402], [-37.7206988632679, 78.9484977722168, -7.073800079524517], [15.575299970805645, 78.1169980764389, -7.009549997746944], [-39.55424949526787, 79.04250174760818, -7.094500120729208], [-29.520699754357338, 80.26999980211258, -7.3413001373410225], [-41.87909886240959, 79.97050136327744, -7.1508497931063175], [-43.83169859647751, 82.73950219154358, -7.264900021255016], [-41.5615513920784, 82.72799849510193, -7.131699938327074], [-37.71689906716347, 83.38700234889984, -7.324900012463331], [-36.8649996817112, 84.45599675178528, -6.870250217616558], [-36.52910143136978, 85.10000258684158, -7.463550195097923], [-16.77289977669716, 87.45899796485901, -6.856199819594622], [-36.47284954786301, 86.9785025715828, -7.004899904131889], [-33.5858017206192, 89.01400119066238, -6.989949848502874], [-17.677349969744682, 88.7639969587326, -7.2073498740792274], [-29.632650315761566, 90.17550200223923, -7.122050039470196], [-23.575399070978165, 90.488001704216, -6.943000014871359], [-21.614249795675278, 90.84050357341766, -6.757999770343304], [-21.48755080997944, 92.55000203847885, -7.627100218087435], [-19.615650177001953, 92.9424986243248, -7.651600055396557], [13.307750225067139, 26.43820084631443, -6.572300102561712], [14.456500299274921, 26.446500793099403, -7.308050058782101], [15.358650125563145, 26.73020027577877, -6.796000059694052], [17.31489971280098, 26.785099878907204, -6.9481502287089825], [18.09309981763363, 26.50110051035881, -7.457850035279989], [19.697699695825577, 26.48019976913929, -7.014799863100052], [-27.641650289297104, 26.669349521398544, -6.850500125437975], [-25.573400780558586, 26.73020027577877, -7.1056499145925045], [-11.164399795234203, 26.927150785923004, -7.052700035274029], [11.275350116193295, 26.978500187397003, -6.940249819308519], [31.466498970985413, 26.906799525022507, -6.889500189572573], [31.602848321199417, 33.04089978337288, -6.749200168997049], [6.6904001869261265, 33.41050073504448, -6.767699960619211], [28.773000463843346, 34.8007008433342, -7.427149917930365], [27.547450736165047, 35.40299832820892, -6.776600144803524], [25.03030002117157, 37.180300801992416, -7.088200189173222], [-1.1746400268748403, 37.671200931072235, -6.881500128656626], [6.033900193870068, 37.614598870277405, -6.9738999009132385], [-42.14410111308098, 39.37605023384094, -6.949500180780888], [6.064999848604202, 39.14244845509529, -7.565749809145927], [-0.2945105079561472, 39.35600072145462, -6.836850196123123], [6.583349779248238, 41.579149663448334, -6.969649810343981], [0.6998599856160581, 41.68215021491051, -6.919099949300289], [-23.360449820756912, 47.7849505841732, -7.187800016254187], [-41.7916513979435, 48.088401556015015, -7.026250008493662], [27.25440077483654, 48.21684956550598, -6.750899832695723], [10.95774956047535, 50.25799944996834, -6.726049818098545], [-23.357750847935677, 49.70559850335121, -7.3562501929700375], [29.180599376559258, 50.618499517440796, -6.88060000538826], [-21.248050034046173, 52.03849822282791, -7.039499934762716], [-13.826649636030197, 54.36449870467186, -7.228800095617771], [5.917749833315611, 55.63800036907196, -7.008349988609552], [13.984349556267262, 55.61849847435951, -7.256649900227785], [14.700849540531635, 56.786999106407166, -6.710149813443422], [37.697501480579376, 56.204501539468765, -6.9761499762535095], [6.291300058364868, 56.95199966430664, -6.802900228649378], [-36.57035157084465, 58.66900086402893, -7.382750045508146], [8.770150132477283, 60.56550145149231, -7.053900044411421], [-7.380050141364336, 64.45199996232986, -6.753149908035994], [31.471099704504013, 66.27099961042404, -7.269000168889761], [33.708199858665466, 66.14150106906891, -7.08540016785264], [-28.197649866342545, 68.40699911117554, -6.918950006365776], [43.763499706983566, 70.28750330209732, -6.993450224399567], [-37.75455057621002, 70.13549655675888, -6.922150030732155], [-3.01109510473907, 70.4915001988411, -6.738650146871805], [35.877350717782974, 72.11250066757202, -6.920250132679939], [39.4463986158371, 72.35550135374069, -7.2142998687922955], [37.53814846277237, 72.54700362682343, -7.128649856895208], [-11.916549876332283, 72.57349789142609, -6.937750149518251], [27.613399550318718, 72.63000309467316, -7.001200225204229], [-11.773950420320034, 74.1174966096878, -6.8513997830450535], [-33.065300434827805, 75.58750361204147, -7.366249803453684], [-11.83874998241663, 76.30299776792526, -6.866250187158585], [9.266350418329239, 77.92250066995621, -7.188349962234497], [17.209649085998535, 77.99900323152542, -7.20309978350997], [10.91775018721819, 78.07499915361404, -6.907950155436993], [-35.676948726177216, 79.14099842309952, -7.506850175559521], [-33.48039835691452, 80.10450005531311, -7.045149803161621], [-41.000500321388245, 79.4299989938736, -6.831150036305189], [-13.508300296962261, 83.0100029706955, -7.0395502261817455], [-14.765650033950806, 85.1685032248497, -7.005599793046713], [-35.55480018258095, 88.40599656105042, -6.845950148999691], [-27.664149180054665, 90.3329998254776, -7.012200076133013], [-25.651700794696808, 90.45100212097168, -6.910750176757574], [-13.276499696075916, 26.5944991260767, -6.973249837756157], [-13.21869995445013, 26.522399857640266, -7.067199796438217], [21.46965079009533, 26.430750265717506, -6.865350063890219], [-19.55444924533367, 27.69559994339943, -7.016799878329039], [-17.216850072145462, 27.628449723124504, -6.633799988776445], [27.35459990799427, 27.33365073800087, -6.940550170838833], [35.17819941043854, 27.766399085521698, -6.745549850165844], [-9.126249700784683, 27.948999777436256, -6.770499981939793], [9.75119974464178, 28.05970050394535, -6.795850116759539], [25.693750008940697, 27.678100392222404, -6.705599837005138], [34.97444838285446, 29.546750709414482, -6.640499923378229], [-37.408750504255295, 29.939699918031693, -6.681050173938274], [-39.40904885530472, 31.979799270629883, -6.652299780398607], [-4.270065110176802, 33.296849578619, -7.027800194919109], [-3.4411849919706583, 34.23570096492767, -6.719099823385477], [6.222900003194809, 35.33070161938667, -6.694700103253126], [-41.397448629140854, 35.643551498651505, -6.6222501918673515], [6.011799909174442, 36.003999412059784, -7.223600056022406], [26.013299822807312, 36.30569949746132, -6.717599928379059], [-41.70665144920349, 37.50690072774887, -7.058550138026476], [23.24414998292923, 39.48745131492615, -6.862250156700611], [9.99240018427372, 49.10225048661232, -7.3022497817873955], [-41.30909964442253, 50.22500082850456, -6.699650082737207], [4.176994785666466, 50.21800100803375, -6.940000224858522], [11.949749663472176, 52.06549912691116, -6.937250029295683], [-17.959600314497948, 56.31349980831146, -6.914250086992979], [15.24754986166954, 58.17500129342079, -6.99960021302104], [15.740400180220604, 60.21450087428093, -6.683750078082085], [41.397351771593094, 62.63100355863571, -6.770149804651737], [43.94324868917465, 66.07349961996078, -7.012649904936552], [-5.930500105023384, 66.73400104045868, -6.807050202041864], [-28.969550505280495, 67.43200123310089, -6.713449954986572], [-26.99740044772625, 70.4675018787384, -6.594549864530563], [-12.457050383090973, 70.05900144577026, -6.731899920850992], [-39.375949651002884, 70.74149698019028, -6.759149953722954], [-2.3881399538367987, 71.50600105524063, -7.433149963617325], [-39.3838994204998, 72.41649925708771, -6.674150004982948], [3.558934899047017, 75.94099640846252, -7.012399844825268], [19.908949732780457, 77.12549716234207, -6.7780502140522], [-11.92064955830574, 78.63149791955948, -6.588149815797806], [-28.358150273561478, 79.12950217723846, -6.840450223535299], [-12.44909968227148, 79.58699762821198, -7.316200062632561], [-15.726149082183838, 86.47099882364273, -6.7900000140070915], [-21.76854945719242, 50.314001739025116, -6.685200147330761], [-20.24644985795021, 52.83449962735176, -6.836500018835068], [-32.770898193120956, 63.44400346279144, -6.77420012652874], [41.430000215768814, 72.27350026369095, -6.8317498080432415], [-19.73690092563629, 90.7370001077652, -6.974199786782265], [29.56170029938221, 27.038149535655975, -6.782650016248226], [6.271000020205975, 39.65970128774643, -6.599599961191416], [0.08060200343606994, 40.16625136137009, -6.724949926137924], [35.692449659109116, 54.23299968242645, -6.740599870681763], [-11.248650029301643, 58.23750048875809, -6.724350154399872], [33.34935009479523, 64.47599828243256, -6.799099966883659], [31.594499945640564, 64.41749632358551, -6.804899778217077], [-30.79815022647381, 65.38250297307968, -6.732699926942587], [13.380450196564198, 78.09949666261673, -6.6210501827299595], [19.50494945049286, 26.69614925980568, -6.549399811774492], [7.828200235962868, 59.59250032901764, -6.672699935734272], [-9.765650145709515, 60.53449958562851, -6.5817502327263355], [43.67474839091301, 64.70850110054016, -6.5531497821211815], [30.065450817346573, 68.22600215673447, -6.727899890393019], [-35.70979833602905, 80.03950119018555, -6.56840018928051], [-28.41714955866337, 80.10700345039368, -6.785950157791376], [-31.439051032066345, 89.93099629878998, -6.606350187212229], [23.13854917883873, 26.47314965724945, -6.433200091123581], [-19.285399466753006, 47.90965095162392, -6.508800201117992], [-17.24354922771454, 49.43329840898514, -6.472350098192692], [3.948620054870844, 49.70544949173927, -6.402850151062012], [37.312351167201996, 54.171498864889145, -6.463599856942892], [-16.700850799679756, 60.04000082612038, -6.4907497726380825], [32.82894939184189, 62.238000333309174, -6.396499928086996], [31.778451055288315, 62.524497509002686, -6.649299990385771], [45.44714838266373, 68.09750199317932, -6.529950071126223], [43.65440085530281, 71.87949866056442, -6.4165000803768635], [18.223049119114876, 77.52849906682968, -6.335299927741289], [-37.13599964976311, 79.61300015449524, -6.607300136238337], [-45.42575031518936, 82.94499665498734, -6.49929977953434], [-43.964799493551254, 83.97349715232849, -6.379200145602226], [-19.27190087735653, 89.20200169086456, -6.421899888664484], [8.536700159311295, 46.195849776268005, -6.596399936825037], [-21.864699199795723, 48.19989949464798, -6.5253498032689095], [33.78190100193024, 54.58199977874756, -6.3911001197993755], [-39.081450551748276, 55.74150010943413, -6.428400054574013], [44.93295028805733, 69.71850246191025, -6.56779995188117], [-35.06860136985779, 71.57500088214874, -6.295099854469299], [-35.01655161380768, 28.399750590324402, -6.296650040894747], [-1.9528650445863605, 36.445751786231995, -6.338649895042181], [10.264400392770767, 48.93435165286064, -6.3612498342990875], [-40.82075133919716, 51.87249928712845, -6.333949975669384], [12.574249878525734, 52.81750112771988, -6.414500065147877], [32.03950077295303, 60.83650141954422, -6.246849894523621], [30.292199924588203, 66.67699664831161, -6.302650086581707], [-3.961570095270872, 69.23750042915344, -6.487200036644936], [-12.262949720025063, 71.68199867010117, -6.210850086063147], [36.13084927201271, 73.54749739170074, -6.261699832975864], [39.462100714445114, 73.57999682426453, -6.308650132268667], [8.43810010701418, 77.5114968419075, -6.286200135946274], [-38.91110047698021, 83.71850103139877, -6.324150133877993], [-45.31639814376831, 84.30449664592743, -6.296849809587002], [-14.08930029720068, 84.48600023984909, -6.328199990093708], [-12.240899726748466, 54.80150133371353, -6.164750084280968], [-34.825049340724945, 61.59700080752373, -6.205849815160036], [28.493499383330345, 70.92849910259247, -6.313450168818235], [-40.9184992313385, 71.58199697732925, -6.190250162035227], [-11.350049637258053, 82.48600363731384, -6.267650052905083], [23.4693493694067, 26.63465030491352, -5.007000174373388], [19.865399226546288, 27.41589955985546, -4.878699779510498], [36.03215143084526, 29.54990044236183, -5.15265017747879], [34.19100120663643, 31.75869956612587, -5.799849983304739], [33.6638018488884, 33.56349840760231, -5.077349953353405], [7.452699821442366, 41.535601019859314, -5.221100058406591], [2.5649250019341707, 46.261951327323914, -5.376049783080816], [9.350050240755081, 45.969150960445404, -5.1644002087414265], [9.934850037097931, 47.76174947619438, -5.6604500859975815], [27.63034962117672, 48.254698514938354, -5.196500103920698], [-13.372349552810192, 52.03250050544739, -5.388250108808279], [-40.676049888134, 52.78149992227554, -6.093749776482582], [35.41775047779083, 53.1185008585453, -6.063200067728758], [-11.335249990224838, 56.81199952960014, -6.138850003480911], [-18.04804988205433, 58.4929995238781, -5.889249965548515], [31.796548515558243, 59.969499707221985, -5.7044499553740025], [-17.52525009214878, 60.166001319885254, -5.211700219660997], [38.44984993338585, 60.13049930334091, -5.183700006455183], [15.53369965404272, 62.477000057697296, -5.269149783998728], [41.94454848766327, 62.61499971151352, -5.725549999624491], [33.842798322439194, 63.93449753522873, -5.688299890607595], [29.78234924376011, 65.94649702310562, -5.068750120699406], [45.851901173591614, 66.09649956226349, -5.231100134551525], [-13.938849791884422, 66.83100014925003, -5.573850125074387], [-4.435374867171049, 67.69999861717224, -5.3611500188708305], [-3.4944249782711267, 68.681500852108, -5.023700185120106], [34.57149863243103, 68.87649744749069, -5.969949997961521], [45.49245163798332, 70.13150304555893, -5.123599898070097], [-37.511348724365234, 70.75300067663193, -5.250450223684311], [-40.90160131454468, 70.72649896144867, -6.153599824756384], [35.54454818367958, 72.23200052976608, -5.35944988951087], [-31.815901398658752, 72.14149832725525, -5.243950057774782], [-40.07440060377121, 72.78650254011154, -6.070349831134081], [43.88809949159622, 72.90449738502502, -5.4951501078903675], [25.929100811481476, 72.7355033159256, -4.971425049006939], [25.242550298571587, 74.00199770927429, -5.685300100594759], [1.5688750427216291, 73.89000058174133, -5.575300194323063], [21.587349474430084, 75.89799910783768, -5.508400034159422], [-10.900549590587616, 76.77599787712097, -5.799099802970886], [14.448249712586403, 77.8995007276535, -6.093349773436785], [-37.53269836306572, 80.78499883413315, -5.090299993753433], [-11.061900295317173, 81.20200037956238, -6.2743001617491245], [-43.911151587963104, 84.97100323438644, -5.240549799054861], [-41.643548756837845, 84.42199975252151, -5.119800101965666], [-12.958900071680546, 84.60649847984314, -5.914149805903435], [-34.01770070195198, 89.43150192499161, -5.3865001536905766], [31.938500702381134, 26.920149102807045, -5.207600072026253], [-23.63624982535839, 27.845600619912148, -5.196699872612953], [24.941250681877136, 44.153548777103424, -5.431199911981821], [-20.63789963722229, 48.66094887256622, -5.951149854809046], [-15.276449732482433, 49.92635175585747, -5.455249920487404], [-42.026400566101074, 50.269000232219696, -5.10959979146719], [13.782449997961521, 53.79850044846535, -5.172300152480602], [-12.60489970445633, 53.677998483181, -5.73629979044199], [38.147199898958206, 53.982000797986984, -5.938149988651276], [-19.380200654268265, 56.12749978899956, -5.400899797677994], [-11.00310031324625, 56.173499673604965, -5.131000187247992], [38.66805136203766, 55.73999881744385, -6.03235000744462], [5.402400158345699, 56.164998561143875, -5.08899986743927], [6.522350013256073, 58.499500155448914, -5.2893501706421375], [46.097248792648315, 64.72799926996231, -5.172349978238344], [46.56060039997101, 68.42300295829773, -4.944575019180775], [-31.749699264764786, 77.00599730014801, -5.116850137710571], [-10.430400259792805, 80.27700334787369, -6.019500084221363], [-8.79490002989769, 80.66850155591965, -5.976850166916847], [-9.400400333106518, 81.42899721860886, -6.1286999844014645], [-9.020250290632248, 82.98750221729279, -5.499499849975109], [-11.18605025112629, 83.34600180387497, -6.064250133931637], [-36.470599472522736, 85.25550365447998, -5.808949936181307], [-13.115949928760529, 26.6097504645586, -4.9813902005553246], [10.885999538004398, 26.9009992480278, -5.12159988284111], [-27.57829986512661, 27.04720012843609, -4.972605034708977], [-25.782199576497078, 27.510900050401688, -4.878255072981119], [15.129650011658669, 27.173250913619995, -5.080449860543013], [17.54789985716343, 27.501899749040604, -4.68192994594574], [-21.748950704932213, 28.161749243736267, -5.0604501739144325], [-19.48465034365654, 28.284849599003792, -5.180350039154291], [-9.126399643719196, 27.669599279761314, -5.0225998274981976], [8.753550238907337, 29.33714911341667, -4.915184807032347], [-36.38089820742607, 28.801949694752693, -5.618299823254347], [-6.964900065213442, 29.461899772286415, -5.154099781066179], [-39.85150158405304, 31.559698283672333, -4.996755160391331], [-5.205200053751469, 31.51325136423111, -5.074049811810255], [-2.373320050537586, 35.4793481528759, -4.986070096492767], [6.716949865221977, 35.42035073041916, -5.17710018903017], [-41.9529490172863, 35.58855131268501, -4.976455122232437], [6.830949801951647, 37.58484870195389, -4.936459939926863], [-42.70464926958084, 38.93269971013069, -5.468349903821945], [23.643599823117256, 39.56194967031479, -4.903795197606087], [23.654699325561523, 41.5072999894619, -4.984620027244091], [8.735899813473225, 44.07219961285591, -4.769455175846815], [-42.52434894442558, 48.21205139160156, -5.194900091737509], [3.7720000836998224, 50.364501774311066, -5.180899985134602], [-20.92920057475567, 52.163999527692795, -4.802349954843521], [11.602950282394886, 49.82535168528557, -5.108850076794624], [-20.25654911994934, 52.43850126862526, -5.4616001434624195], [-41.27990081906319, 52.2180013358593, -4.928459879010916], [37.53669932484627, 51.89700052142143, -5.37189980968833], [4.338964819908142, 52.607499063014984, -5.120499990880489], [35.52180156111717, 52.144501358270645, -5.3415498696267605], [-19.840799272060394, 54.33500185608864, -5.330250132828951], [33.306799829006195, 53.78900095820427, -5.564600229263306], [31.472649425268173, 54.072000086307526, -5.007450003176928], [-40.35814851522446, 54.188501089811325, -4.995754919946194], [-11.720400303602219, 54.31849882006645, -4.9614449962973595], [-39.31615129113197, 56.17149919271469, -4.987949971109629], [14.918600209057331, 55.98000064492226, -4.9582901410758495], [-18.964150920510292, 57.967498898506165, -4.804554861038923], [39.42304849624634, 56.28649890422821, -5.012399982661009], [15.869349241256714, 58.22800099849701, -5.041900090873241], [31.75780177116394, 58.22199955582619, -5.368350073695183], [16.1857008934021, 60.24099886417389, -5.428750067949295], [-36.98424994945526, 59.517499059438705, -5.049599800258875], [32.87665173411369, 60.39850041270256, -4.741195123642683], [-8.91529954969883, 60.277000069618225, -4.91840997710824], [33.470701426267624, 62.291499227285385, -4.945725202560425], [-35.04965081810951, 61.7544986307621, -4.9390350468456745], [37.563201040029526, 62.22499907016754, -4.857224877923727], [11.165999807417393, 62.99050152301788, -5.710749886929989], [39.47275131940842, 62.84099817276001, -5.657599773257971], [-7.74630019441247, 62.53249943256378, -4.930795170366764], [30.70555068552494, 63.69800120592117, -5.810449831187725], [-15.347249805927277, 64.27600234746933, -4.952054936438799], [44.06164959073067, 64.49099630117416, -5.244750063866377], [-31.978800892829895, 64.47549909353256, -5.002549849450588], [-30.790049582719803, 65.48500061035156, -5.01520000398159], [-6.176500115543604, 65.42950123548508, -5.6350501254200935], [34.45360064506531, 65.58600068092346, -5.841949954628944], [-29.707549139857292, 66.48150086402893, -4.927199799567461], [-5.245049949735403, 66.33800268173218, -5.091649945825338], [29.14544939994812, 67.89900362491608, -4.9947951920330524], [35.64370051026344, 68.27700138092041, -5.208049900829792], [47.55609855055809, 68.31800192594528, -5.008149892091751], [-13.798600062727928, 68.2855024933815, -4.897605162113905], [-13.168049976229668, 70.29999792575836, -5.062450189143419], [-39.43625092506409, 70.13899832963943, -5.235900171101093], [44.87524926662445, 70.29300183057785, -4.938185214996338], [-41.730351746082306, 70.03050297498703, -5.138350185006857], [-41.837550699710846, 72.62949645519257, -5.164649803191423], [45.53275182843208, 72.11899757385254, -5.123449955135584], [27.126500383019447, 71.98899984359741, -5.462099798023701], [-27.443349361419678, 72.21049815416336, -4.929445218294859], [-0.4678555123973638, 71.90550118684769, -5.1703001372516155], [42.11195185780525, 73.05250316858292, -5.244450177997351], [-39.446450769901276, 73.81650060415268, -4.999700002372265], [38.1680503487587, 73.80100339651108, -5.168850068002939], [41.30059853196144, 74.11299645900726, -4.9614799208939075], [-11.102399788796902, 74.3660032749176, -4.924735054373741], [23.731650784611702, 74.65700060129166, -5.094300024211407], [-33.53365138173103, 76.1445015668869, -4.985250066965818], [3.158325096592307, 74.4910016655922, -4.8866900615394115], [5.2085998468101025, 75.86699724197388, -5.15695009380579], [19.673550501465797, 76.32949948310852, -4.924700129777193], [8.939900435507298, 76.94599777460098, -5.012750159949064], [11.22019998729229, 77.12650299072266, -4.701110068708658], [12.796949595212936, 77.6669979095459, -5.47575019299984], [15.28444979339838, 77.18849927186966, -4.814814776182175], [-29.321299865841866, 77.90400087833405, -4.991544876247644], [-10.385749861598015, 78.99150252342224, -5.849150009453297], [-41.56440123915672, 80.12349903583527, -5.090250167995691], [-39.67839851975441, 80.76699823141098, -4.87020518630743], [-27.896199375391006, 78.97450029850006, -4.985244944691658], [-27.830200269818306, 80.33300191164017, -4.869794938713312], [-6.864749826490879, 80.40550351142883, -5.460300017148256], [-31.42695128917694, 81.1299979686737, -5.0361501052975655], [-5.067550111562014, 81.05050027370453, -5.028900224715471], [-45.32545059919357, 81.5265029668808, -5.048300139605999], [-7.163649890571833, 82.60449767112732, -5.314650014042854], [-10.976449586451054, 84.75600183010101, -5.7854498736560345], [-39.39510136842728, 84.29650217294693, -4.996324889361858], [-45.87534815073013, 85.06999909877777, -5.17110014334321], [-15.250450000166893, 86.75549924373627, -5.150999873876572], [-17.981549724936485, 88.13949674367905, -5.127800162881613], [-31.63595125079155, 90.15949815511703, -4.979135002940893], [-29.56715039908886, 90.44750034809113, -4.9584549851715565], [-27.62709930539131, 90.36049991846085, -4.910665098577738], [-23.693649098277092, 90.1859998703003, -5.072250030934811], [11.90285012125969, 26.460399851202965, -5.038300063461065], [12.743949890136719, 26.44124999642372, -4.840509966015816], [13.628450222313404, 26.6464501619339, -5.007800180464983], [21.70890010893345, 26.857800781726837, -5.123950075358152], [23.786449804902077, 26.462949812412262, -5.12220012024045], [-29.62370030581951, 26.675749570131302, -4.982585087418556], [-15.246500261127949, 27.293449267745018, -4.986134823411703], [25.588100776076317, 26.819299906492233, -5.094099789857864], [-31.720198690891266, 26.801250874996185, -5.06669981405139], [33.531200140714645, 26.86380036175251, -5.052150227129459], [35.88365018367767, 27.54325047135353, -4.904884845018387], [-10.97480021417141, 26.8412996083498, -4.911310039460659], [29.48470041155815, 27.003800496459007, -4.918240010738373], [-33.63934904336929, 27.32120081782341, -5.113500170409679], [27.602599933743477, 27.25300006568432, -4.90156002342701], [-17.494499683380127, 28.041500598192215, -4.855410195887089], [9.761650115251541, 28.14294956624508, -5.011749919503927], [-35.35439819097519, 27.876049280166626, -4.939049948006868], [-37.51615062355995, 29.194949194788933, -4.933495074510574], [8.130749687552452, 30.198149383068085, -5.448650103062391], [-38.864098489284515, 30.246850103139877, -4.962345119565725], [35.239651799201965, 31.506549566984177, -4.854459781199694], [7.700449787080288, 31.605150550603867, -4.873780068010092], [-40.524400770664215, 33.06424990296364, -5.5195000022649765], [-4.126360174268484, 32.95920044183731, -5.029300227761269], [7.1089500561356544, 33.643048256635666, -5.028500221669674], [31.689200550317764, 33.65530073642731, -4.901220090687275], [29.59359996020794, 33.980801701545715, -4.993794951587915], [-41.31925106048584, 34.01299938559532, -4.863865207880735], [-3.5861150827258825, 33.711548894643784, -4.944114945828915], [27.414599433541298, 35.206351429224014, -4.816154949367046], [26.06325037777424, 36.259450018405914, -5.288249813020229], [-1.8312500324100256, 36.490298807621, -4.998169839382172], [-42.502500116825104, 37.503551691770554, -4.941780120134354], [-1.0887749958783388, 37.649448961019516, -5.1194000989198685], [25.17174929380417, 37.47415170073509, -4.775165114551783], [24.129100143909454, 38.37670013308525, -5.476600024849176], [-0.30651901033706963, 39.44125026464462, -4.945565015077591], [-43.06425154209137, 39.6435484290123, -4.846340045332909], [0.05775200042990036, 40.19850119948387, -5.68540021777153], [7.07395002245903, 39.56194967031479, -5.012650042772293], [0.6272000027820468, 41.906699538230896, -5.062699783593416], [-43.23180019855499, 41.653551161289215, -4.9209450371563435], [7.829849608242512, 43.322399258613586, -5.426549818366766], [23.665549233555794, 44.03020069003105, -4.443630110472441], [1.5087949577718973, 43.75524818897247, -4.8762052319943905], [-43.262798339128494, 43.89125108718872, -4.923515021800995], [2.083755098283291, 44.79119926691055, -5.436699837446213], [-43.28399896621704, 45.65894976258278, -4.525105003267527], [25.635499507188797, 45.74200138449669, -4.872934892773628], [26.656800881028175, 46.66249826550484, -5.743749905377626], [3.0169449746608734, 48.03229868412018, -4.969969857484102], [11.092299595475197, 48.349399119615555, -4.756985232234001], [-20.214300602674484, 48.986900597810745, -5.58369979262352], [-19.276399165391922, 48.521049320697784, -4.797299858182669], [-17.39729940891266, 48.40010032057762, -5.0245001912117], [29.355600476264954, 50.188999623060226, -5.432350095361471], [-20.81499993801117, 50.07550120353699, -5.052399821579456], [-17.113149166107178, 49.54079911112785, -5.76250022277236], [12.051950208842754, 51.033999770879745, -5.40135009214282], [29.524249956011772, 52.264001220464706, -5.092550069093704], [-14.374599792063236, 51.5579991042614, -5.671950057148933], [13.038299977779388, 52.17200145125389, -4.986769985407591], [33.75454992055893, 52.58199945092201, -4.7300951555371284], [4.786000121384859, 54.31250110268593, -5.119049921631813], [39.43140059709549, 54.25550043582916, -4.904014989733696], [-37.79755160212517, 58.30850079655647, -5.075749941170216], [39.04874995350838, 58.393001556396484, -4.990764893591404], [-10.393049567937851, 57.785000652074814, -5.332650151103735], [-9.825550019741058, 58.47200006246567, -4.745385143905878], [7.253849878907204, 60.11899933218956, -4.892794881016016], [-35.962000489234924, 60.50899997353554, -5.0940001383423805], [8.173000067472458, 60.755498707294464, -5.544200073927641], [-16.647400334477425, 61.795998364686966, -4.817144945263863], [-8.324550464749336, 61.618998646736145, -5.074600223451853], [9.083000011742115, 62.28049844503403, -4.94647491723299], [30.746400356292725, 62.18649819493294, -5.688500124961138], [-33.87885168194771, 62.63600289821625, -5.164300091564655], [-15.971150249242783, 62.80999630689621, -5.054200068116188], [11.316600255668163, 63.579000532627106, -4.9017551355063915], [13.16550001502037, 64.0069991350174, -4.704840015619993], [41.847001761198044, 64.31899964809418, -5.329300183802843], [-32.90925174951553, 63.759997487068176, -4.966705106198788], [-6.799850147217512, 64.12799656391144, -4.978740122169256], [29.946299269795418, 64.38499689102173, -4.85421484336257], [35.79365089535713, 66.17649644613266, -5.1543498411774635], [-28.885100036859512, 67.40300357341766, -5.470450036227703], [-27.938250452280045, 68.39299947023392, -4.912460222840309], [-2.5708600878715515, 69.95200365781784, -5.164749920368195], [28.873249888420105, 69.45650279521942, -5.5113499984145164], [-26.82814933359623, 70.1799988746643, -4.976565018296242], [35.84295138716698, 70.41549682617188, -5.0246999599039555], [27.690600603818893, 70.52150368690491, -4.860084969550371], [-26.388999074697495, 71.59899920225143, -5.003300029784441], [-1.5615649754181504, 70.8014965057373, -4.85367001965642], [-35.89500114321709, 71.20499759912491, -4.721054807305336], [-34.81470048427582, 71.4695006608963, -5.49690006300807], [-12.844800017774105, 72.13950157165527, -4.8230797983706], [-33.52100029587746, 71.75599783658981, -4.935734905302525], [-29.595300555229187, 72.36400246620178, -4.972055088728666], [0.8438850054517388, 72.78700172901154, -4.830060061067343], [-12.148049660027027, 73.38249683380127, -5.0246501341462135], [37.765249609947205, 73.09350371360779, -4.777824971824884], [35.939548164606094, 73.91949743032455, -4.992059897631407], [-37.587400525808334, 74.10749793052673, -4.982059821486473], [39.71545025706291, 74.95500147342682, -4.872415214776993], [-35.726550966501236, 74.59449768066406, -4.976029973477125], [-34.162599593400955, 75.12550055980682, -5.471149925142527], [-8.707299828529358, 76.52950286865234, -5.33345015719533], [-9.01809986680746, 78.67100089788437, -5.056249909102917], [6.8709999322891235, 76.36000216007233, -4.919929895550013], [17.45929941534996, 76.92249864339828, -5.012250039726496], [-43.7716506421566, 80.4084986448288, -4.948215093463659], [-35.718850791454315, 81.0369998216629, -4.9921199679374695], [-33.79274904727936, 81.13449811935425, -4.970194771885872], [-29.613850638270378, 81.01049810647964, -4.8286197707057], [-5.33945020288229, 82.15299993753433, -5.052550230175257], [-46.35154828429222, 82.2950005531311, -4.968875087797642], [-37.567999213933945, 84.55149829387665, -5.003400146961212], [-8.939100429415703, 84.84199643135071, -5.252650007605553], [-7.231050170958042, 85.29999852180481, -5.146250128746033], [-36.361951380968094, 86.7374986410141, -4.94953989982605], [-6.703750230371952, 86.76250278949738, -5.011199973523617], [-5.335149820894003, 86.94849908351898, -5.064699798822403], [-17.249900847673416, 87.67350018024445, -4.9275849014520645], [-35.44804826378822, 88.82500231266022, -4.938684869557619], [-19.622400403022766, 88.8655036687851, -5.031750071793795], [-21.455999463796616, 89.41800147294998, -4.867555107921362], [-22.33774960041046, 89.97300267219543, -5.576900206506252], [-25.68270079791546, 90.31099826097488, -4.996605217456818], [28.31064909696579, 34.439899027347565, -4.9330098554492], [39.31950032711029, 52.48900130391121, -4.598109982907772], [35.520099103450775, 64.06749784946442, -5.022900179028511], [-14.721550047397614, 65.85849821567535, -4.772670101374388], [-11.111400090157986, 86.80599927902222, -4.664274863898754], [-8.857499808073044, 86.90249919891357, -5.078949965536594], [29.709599912166595, 56.22150003910065, -4.8619951121509075], [31.595800071954727, 56.25050142407417, -4.853580147027969], [29.97720055282116, 58.072999119758606, -4.769625142216682], [30.246449634432793, 60.32650172710419, -4.86451992765069], [30.174799263477325, 62.1194988489151, -4.893905017524958], [39.482299238443375, 64.52549993991852, -5.228499881923199], [-43.70354861021042, 70.22649794816971, -4.661890212446451], [-43.607551604509354, 71.8970000743866, -4.662595223635435], [-8.834750391542912, 74.4670033454895, -4.807864781469107], [-6.845499854534864, 74.92300122976303, -4.88997483626008], [-7.077500224113464, 76.28849893808365, -4.884264897555113], [-47.86450043320656, 83.31699669361115, -4.7550201416015625], [-47.81140014529228, 84.7800001502037, -4.623760003596544], [-13.21639958769083, 86.70199662446976, -4.761859774589539], [-32.98554942011833, 89.88100290298462, -4.70638507977128], [37.439100444316864, 64.17050212621689, -5.093750078231096], [27.61550061404705, 50.14749988913536, -4.965054802596569], [27.6783499866724, 52.29150131344795, -4.751239903271198], [29.32005003094673, 54.35049906373024, -4.955430049449205], [41.464198380708694, 66.09699875116348, -4.774259869009256], [25.120800361037254, 26.462599635124207, -4.4567701406776905], [-7.830250076949596, 28.498249128460884, -4.606250207871199], [32.13239833712578, 34.89924967288971, -4.340014886111021], [33.410198986530304, 35.383351147174835, -4.367220215499401], [8.181699551641941, 42.14470088481903, -4.419909790158272], [1.996465027332306, 45.035701245069504, -4.750545136630535], [-43.02775114774704, 46.99534922838211, -4.5977202244102955], [25.666050612926483, 48.17755147814751, -4.739705007523298], [10.335800237953663, 46.762898564338684, -4.4508748687803745], [-15.711350366473198, 48.37324842810631, -4.52602980658412], [-13.830100186169147, 50.32850056886673, -4.577165003865957], [26.024900376796722, 50.031501799821854, -4.575090017169714], [12.505399994552135, 50.80400034785271, -4.64027002453804], [35.76809912919998, 50.48099905252457, -4.306055139750242], [37.57745027542114, 50.32699927687645, -4.566664807498455], [3.8893551100045443, 51.86700075864792, -4.504790063947439], [-12.23789993673563, 52.83350124955177, -4.554145038127899], [32.12425112724304, 52.97650024294853, -4.4260649010539055], [-20.834850147366524, 54.34099957346916, -4.606645088642836], [28.255699202418327, 54.30600047111511, -4.327970091253519], [14.56919964402914, 54.7964982688427, -4.545920062810183], [16.708100214600563, 60.43799966573715, -4.41986508667469], [16.692500561475754, 61.67399883270264, -4.388289991766214], [15.13685006648302, 63.97649645805359, -4.324834793806076], [37.61399909853935, 66.1659985780716, -4.679275210946798], [43.71355101466179, 66.2275031208992, -4.528020042926073], [39.56004977226257, 66.4450004696846, -4.7094798646867275], [28.314150869846344, 68.85399669408798, -4.35067480430007], [-26.401899755001068, 70.73699682950974, -4.50973492115736], [46.21734842658043, 73.60199838876724, -4.4193752110004425], [-40.89925065636635, 73.68150353431702, -4.520244896411896], [44.4442518055439, 73.75449687242508, -4.529760219156742], [-35.0460484623909, 75.66949725151062, -4.392324946820736], [4.72167506814003, 74.93499666452408, -4.370030015707016], [21.840650588274002, 75.14700293540955, -4.466920159757137], [13.65474984049797, 77.1695002913475, -4.514215048402548], [23.744700476527214, 45.935798436403275, -4.449720028787851], [24.28244985640049, 47.5086010992527, -4.407770000398159], [35.46920046210289, 62.882497906684875, -4.403499886393547], [-23.14385026693344, 89.75800126791, -4.279599990695715], [34.790750592947006, 33.01884979009628, -4.291200079023838], [39.03834894299507, 50.85299909114838, -4.330589901655912], [26.500549167394638, 51.596499979496, -4.194760229438543], [5.557499825954437, 57.72149935364723, -4.225519951432943], [9.583299979567528, 63.35949897766113, -4.278149921447039], [-5.827850196510553, 65.00999629497528, -4.439310170710087], [37.3772494494915, 67.8505003452301, -4.293494857847691], [43.92920061945915, 67.43449717760086, -4.122484941035509], [-44.993799179792404, 70.72500139474869, -4.296349827200174], [-43.005749583244324, 73.73650372028351, -4.182119853794575], [-36.85494884848595, 86.35249733924866, -4.223810043185949], [39.95424881577492, 49.952950328588486, -3.2857649493962526], [-20.891400054097176, 55.42450025677681, -4.221600014716387], [32.65494853258133, 58.775000274181366, -4.478320013731718], [7.613500114530325, 61.37499958276749, -4.286524839699268], [39.354849606752396, 67.4939975142479, -4.31107496842742], [41.53034836053848, 67.63750314712524, -4.197615198791027], [-21.82525023818016, 27.983849868178368, -2.8586850967258215], [-23.574799299240112, 28.257999569177628, -3.0518199782818556], [29.606150463223457, 34.26875174045563, -3.6334949545562267], [22.986799478530884, 46.10859975218773, -3.9763799868524075], [37.68400102853775, 68.85000318288803, -4.00304002687335], [-44.00414973497391, 74.43799823522568, -3.313085064291954], [-11.198800057172775, 73.37100058794022, -3.5944851115345955], [-11.15384977310896, 74.2105022072792, -2.658205106854439], [-35.898301750421524, 75.40050148963928, -4.06576506793499], [-42.89780184626579, 79.56250011920929, -3.364739939570427], [-41.03019833564758, 85.29900014400482, -4.054345190525055], [-48.861801624298096, 86.1705020070076, -4.103194922208786], [10.968349874019623, 27.2364504635334, -2.9796950984746218], [12.753300368785858, 26.468699797987938, -3.0048249755054712], [23.606350645422935, 27.114950120449066, -3.0895851086825132], [25.902999565005302, 26.464950293302536, -3.144690068438649], [-13.464650139212608, 26.776699349284172, -3.12133994884789], [-29.60829995572567, 26.848899200558662, -3.0573999974876642], [33.6698517203331, 26.844050735235214, -2.953419927507639], [35.90960055589676, 27.357399463653564, -3.062434960156679], [-33.50704908370972, 27.01679989695549, -3.0239499174058437], [13.952000066637993, 26.87009982764721, -2.9877100605517626], [29.663000255823135, 27.106299996376038, -2.9877549968659878], [-27.760449796915054, 27.477649971842766, -2.9218399431556463], [-8.86439997702837, 27.75770053267479, -2.9477050993591547], [-35.623349249362946, 27.62329950928688, -3.066950011998415], [-15.349499881267548, 27.44939923286438, -2.930595073848963], [15.713950619101524, 27.496900409460068, -3.052139887586236], [21.59244939684868, 27.667799964547157, -3.054064931347966], [27.628550305962563, 26.81634947657585, -3.2628399785608053], [-17.30019971728325, 28.2126497477293, -2.969420049339533], [9.911100380122662, 28.22449989616871, -3.6036649253219366], [17.472650855779648, 27.81130000948906, -2.7928201016038656], [19.6359995752573, 27.880650013685226, -2.9482650570571423], [-19.716599956154823, 28.261449187994003, -3.1701799016445875], [-37.046950310468674, 28.34930084645748, -2.920974977314472], [9.38894972205162, 29.617050662636757, -2.8484249487519264], [37.09099814295769, 29.549049213528633, -2.9445900581777096], [-37.824951112270355, 28.845300897955894, -3.2560350373387337], [-7.062749937176704, 29.35349941253662, -2.9657799750566483], [-39.307549595832825, 30.230650678277016, -2.8699850663542747], [-40.358200669288635, 31.251050531864166, -2.852550009265542], [-5.046050064265728, 31.654149293899536, -3.1849900260567665], [36.48129850625992, 30.60624934732914, -3.82791506126523], [8.60155001282692, 31.56450018286705, -2.876390004530549], [36.166101694107056, 31.8806990981102, -3.40009992942214], [7.857699878513813, 32.404251396656036, -3.9026099257171154], [7.9369498416781425, 33.54870155453682, -3.2161399722099304], [-41.59329831600189, 33.476151525974274, -2.8752500656992197], [35.73039919137955, 33.51005166769028, -2.8991049621254206], [-3.7496050354093313, 33.537451177835464, -3.0344899278134108], [30.837949365377426, 34.36575084924698, -3.5847548861056566], [-2.5913899298757315, 35.376399755477905, -2.8396251145750284], [27.720250189304352, 36.129798740148544, -3.0241101048886776], [33.62264856696129, 36.16030141711235, -2.9292749240994453], [-42.48030111193657, 35.58430075645447, -3.0755349434912205], [31.581051647663116, 35.59200093150139, -3.0183750204741955], [-1.3207850279286504, 37.85555064678192, -2.950740046799183], [25.663699954748154, 37.796951830387115, -3.0489149503409863], [-42.84074902534485, 37.134598940610886, -3.5019901115447283], [7.814199663698673, 37.793248891830444, -2.82836495898664], [-43.369799852371216, 37.852950394153595, -2.7442399878054857], [-0.6750900065526366, 39.53830152750015, -2.988375024870038], [23.927349597215652, 39.8377999663353, -2.9403900261968374], [-43.43879967927933, 39.618149399757385, -3.222449915483594], [7.783649954944849, 39.25130143761635, -3.94461490213871], [8.534500375390053, 39.7709496319294, -2.8541500214487314], [-0.260288012214005, 41.29600152373314, -2.7299500070512295], [9.186499752104282, 41.503649204969406, -3.0304400715976954], [23.46239984035492, 41.45050048828125, -3.381625050678849], [-43.74970123171806, 41.583698242902756, -2.9512199107557535], [0.15330349560827017, 41.86829924583435, -3.3063599839806557], [-43.587248772382736, 44.0140999853611, -3.263235092163086], [0.9554650168865919, 43.85890066623688, -3.144599962979555], [23.56564998626709, 43.317750096321106, -3.8159850519150496], [21.8813493847847, 43.80805045366287, -3.663900075480342], [9.54500027000904, 43.54434832930565, -3.6126149352639914], [11.118249967694283, 44.02405023574829, -2.659430028870702], [-43.472401797771454, 46.22089862823486, -2.884760033339262], [1.3546249829232693, 45.959748327732086, -2.656920114532113], [11.274400167167187, 45.95065116882324, -3.440564963966608], [2.420980017632246, 48.08714985847473, -3.473609918728471], [23.365600034594536, 48.23154956102371, -3.273080103099346], [11.186400428414345, 47.34304919838905, -3.9893900975584984], [-42.98185184597969, 48.093099147081375, -2.8993450105190277], [-19.909599795937538, 47.546401619911194, -3.109860001131892], [-17.234349623322487, 47.30429872870445, -3.190584946423769], [-15.057800337672234, 48.341698944568634, -2.9021298978477716], [13.260100036859512, 48.02265018224716, -3.016730071976781], [-21.546799689531326, 48.40565100312233, -2.7579849120229483], [37.56454959511757, 49.19774830341339, -4.044414963573217], [37.46980056166649, 48.07424917817116, -3.303299890831113], [2.676134929060936, 50.069499760866165, -3.046090016141534], [24.899300187826157, 50.371501594781876, -3.5168048925697803], [13.53165041655302, 50.24050176143646, -3.5095999483019114], [35.22145003080368, 49.80364814400673, -3.5103450063616037], [-21.939000114798546, 49.84449967741966, -3.435370046645403], [-42.36074909567833, 50.25149881839752, -2.901040017604828], [-13.543699868023396, 50.10800063610077, -3.1597299966961145], [-22.196950390934944, 52.360501140356064, -3.455864964053035], [25.54750069975853, 52.42300033569336, -2.901349915191531], [-12.5730000436306, 51.38149857521057, -2.9938449151813984], [3.029200015589595, 52.34299972653389, -2.922164974734187], [-41.607748717069626, 52.339501678943634, -2.962864935398102], [40.42875021696091, 52.328500896692276, -3.2179849222302437], [26.862099766731262, 52.95649915933609, -3.64071992225945], [33.13624858856201, 52.08300054073334, -3.376489970833063], [-11.829949915409088, 52.33050137758255, -2.748805098235607], [-41.179850697517395, 53.516000509262085, -3.026715014129877], [15.405000187456608, 53.85550111532211, -3.166710026562214], [32.16705098748207, 52.10699886083603, -3.0525950714945793], [32.00174868106842, 53.89950051903725, -3.5387349780648947], [-11.041199788451195, 54.00549992918968, -3.0280048958957195], [3.492414951324463, 54.17799949645996, -2.94498004950583], [27.287550270557404, 54.2760007083416, -3.3774450421333313], [40.46269878745079, 54.27850037813187, -2.850945107638836], [-21.875249221920967, 54.47449907660484, -2.93330498971045], [4.161950200796127, 54.88850176334381, -3.613654989749193], [-40.3238981962204, 54.701000452041626, -2.7189450338482857], [32.515451312065125, 55.876001715660095, -3.8552850019186735], [-39.50899839401245, 56.33600056171417, -3.06560005992651], [-20.98339982330799, 56.20250105857849, -2.939679892733693], [-10.524850338697433, 55.47399818897247, -3.441894892603159], [15.83850011229515, 56.2095008790493, -3.5563549026846886], [28.68190035223961, 56.062500923871994, -3.7929851096123457], [4.339649807661772, 56.46950006484985, -3.2442749943584204], [-20.330749452114105, 56.78800120949745, -3.485729917883873], [40.05245119333267, 56.269001215696335, -3.0564700718969107], [5.032599903643131, 58.2364983856678, -3.221960039809346], [29.107600450515747, 58.371998369693756, -3.557885065674782], [39.3127016723156, 57.79150128364563, -3.0314200557768345], [-19.571300595998764, 58.30749869346619, -3.138310043141246], [17.209699377417564, 58.35049971938133, -2.849075011909008], [-38.06224837899208, 58.208998292684555, -2.8263500425964594], [-9.034549817442894, 57.92950093746185, -2.969050081446767], [33.30865129828453, 58.42150002717972, -2.8205299749970436], [-37.19799965620041, 59.588998556137085, -3.2535300124436617], [-18.685849383473396, 60.03199890255928, -2.7256449684500694], [6.601499859243631, 60.54199859499931, -3.7816250696778297], [33.66215154528618, 60.14150008559227, -3.304810030385852], [17.660800367593765, 60.23550033569336, -2.8315449599176645], [-8.393200114369392, 59.82249975204468, -3.59243992716074], [37.55350038409233, 60.063499957323074, -3.114470047876239], [-35.83889827132225, 60.67550182342529, -2.94690509326756], [-17.850499600172043, 60.64699962735176, -3.5780149046331644], [-7.503849919885397, 60.36350131034851, -2.859130036085844], [29.036149382591248, 60.263000428676605, -3.2158500980585814], [-6.70079980045557, 62.18000128865242, -3.3126301132142544], [7.01574981212616, 62.33049929141998, -3.0398250091820955], [34.432198852300644, 61.822500079870224, -3.8600200787186623], [-34.94369983673096, 61.71949952840805, -2.975224982947111], [36.92144900560379, 61.35300174355507, -3.80330509506166], [-17.414700239896774, 62.305498868227005, -2.8856350108981133], [35.39605066180229, 61.870500445365906, -3.7010149098932743], [-33.79660099744797, 62.61549890041351, -2.8220899403095245], [17.723649740219116, 62.15500086545944, -2.8651400934904814], [17.16490089893341, 64.11050260066986, -2.8264999855309725], [-15.98840020596981, 64.51349705457687, -3.529229899868369], [29.04984913766384, 63.98849934339523, -3.5610098857432604], [-32.77340158820152, 63.553497195243835, -3.0921949073672295], [8.880600333213806, 64.2549991607666, -3.0712198931723833], [-31.70285001397133, 64.53800201416016, -3.132190089672804], [-6.160899996757507, 63.67350369691849, -3.4619849175214767], [11.233200319111347, 64.81000036001205, -3.7961099296808243], [-5.210299976170063, 64.37049806118011, -2.935385098680854], [15.37409983575344, 64.78799879550934, -3.6096100229769945], [13.806100003421307, 64.94999676942825, -3.9191199466586113], [-4.500444978475571, 65.81900268793106, -3.3611799590289593], [-29.536200687289238, 66.10400229692459, -2.9992801137268543], [-15.415050089359283, 66.3755014538765, -3.3167500514537096], [-15.381249599158764, 68.06950271129608, -2.9228751081973314], [-27.24055014550686, 68.28799843788147, -3.171750111505389], [-2.477214904502034, 68.21999698877335, -3.2391599379479885], [43.96265000104904, 68.50700080394745, -3.798780031502247], [46.030350029468536, 68.35900247097015, -3.7793300580233335], [41.44579917192459, 68.64549964666367, -3.819015109911561], [47.617848962545395, 68.21999698877335, -3.8694250397384167], [39.39874842762947, 68.58699768781662, -3.8697500713169575], [27.431350201368332, 68.09650361537933, -3.2150400802493095], [-15.187400393188, 70.08200138807297, -2.9355750884860754], [-0.7905749953351915, 70.36250084638596, -3.5031400620937347], [-43.68950054049492, 69.98399645090103, -2.7404900174587965], [27.078399434685707, 69.9549987912178, -3.8144849240779877], [45.46064883470535, 70.37699967622757, -3.5573949571698904], [-45.91380059719086, 70.28850167989731, -3.2345750369131565], [-41.54285043478012, 69.90650296211243, -3.1232149340212345], [-25.605149567127228, 70.30700147151947, -2.8254699427634478], [-13.911000452935696, 69.93550062179565, -3.9955549873411655], [-39.557598531246185, 70.19700109958649, -2.991134999319911], [43.680500239133835, 70.3594982624054, -3.249394940212369], [36.44169867038727, 70.68800181150436, -3.9133098907768726], [-35.490501672029495, 71.02199643850327, -2.9253100510686636], [25.62505006790161, 70.27699798345566, -2.9454100877046585], [-25.727149099111557, 71.9825029373169, -2.9359098989516497], [46.040598303079605, 72.36149907112122, -3.1916298903524876], [-33.27760100364685, 71.56500220298767, -3.2568350434303284], [-15.176200307905674, 71.98599725961685, -2.5697199162095785], [-13.04479967802763, 72.782501578331, -3.195360070094466], [37.63144835829735, 72.00899720191956, -3.8398050237447023], [-31.73699975013733, 72.14199751615524, -2.7688450645655394], [-45.894600450992584, 72.28449732065201, -3.4870749805122614], [1.1271650437265635, 71.87499850988388, -3.329284954816103], [36.39540076255798, 72.07150012254715, -3.7993649020791054], [-29.563400894403458, 72.61350005865097, -2.9258099384605885], [-27.581600472331047, 72.56700098514557, -2.942345105111599], [24.901200085878372, 72.00949639081955, -3.339444985613227], [2.8664949350059032, 72.35849648714066, -2.962609985843301], [41.850849986076355, 72.38549739122391, -3.2413199078291655], [46.9743013381958, 73.66249710321426, -3.5004750825464725], [23.576749488711357, 72.49400019645691, -3.0296898912638426], [39.78224843740463, 74.54150170087814, -3.5630250349640846], [40.92954844236374, 74.21550154685974, -3.5551399923861027], [43.78015175461769, 72.43700325489044, -2.79430509544909], [3.5431499127298594, 73.58449697494507, -3.6335999611765146], [-41.627950966358185, 74.45300370454788, -2.9909349977970123], [-39.37384858727455, 74.35649633407593, -2.917614998295903], [44.3168506026268, 73.81950318813324, -3.491780022159219], [-37.74325177073479, 74.78249818086624, -3.372010076418519], [45.99969834089279, 74.09600168466568, -2.9853449668735266], [-9.373200125992298, 74.90549981594086, -3.3808299340307713], [5.092049948871136, 73.9934965968132, -3.4137601032853127], [21.804099902510643, 74.11900162696838, -3.352255094796419], [-7.309849839657545, 74.92200285196304, -3.7484399508684874], [-35.629648715257645, 76.06799900531769, -3.0819301027804613], [19.74949985742569, 74.54050332307816, -3.0195401050150394], [6.890799850225449, 74.42550361156464, -3.1853700056672096], [9.056700393557549, 75.81450045108795, -3.602979937568307], [-7.385550066828728, 75.99999755620956, -3.63902491517365], [-33.551450818777084, 76.63550227880478, -2.9928949661552906], [17.57895015180111, 75.84399729967117, -3.4720399416983128], [10.917999781668186, 76.01799815893173, -3.45236505381763], [13.163399882614613, 76.04049891233444, -3.1727850437164307], [15.51584992557764, 76.13000273704529, -3.4087649546563625], [-9.061800315976143, 76.69249922037125, -3.1601600348949432], [-31.85965120792389, 77.2090032696724, -2.8855199925601482], [-29.442699626088142, 77.87050306797028, -3.038134891539812], [-27.37485058605671, 78.7770003080368, -3.0071348883211613], [-9.229250252246857, 79.06150072813034, -3.1560349743813276], [-43.818000704050064, 80.63499629497528, -2.9245950281620026], [-41.71665012836456, 80.827496945858, -3.492170013487339], [-6.993249990046024, 80.73049783706665, -3.5319048911333084], [-27.327200397849083, 80.49099892377853, -2.9061450622975826], [-5.66894980147481, 80.98900318145752, -3.906494937837124], [-45.42350023984909, 81.45149797201157, -3.1259150709956884], [-31.614050269126892, 81.26349747180939, -2.92238499969244], [-37.54755109548569, 81.95549994707108, -2.948279958218336], [-35.591550171375275, 81.6200003027916, -3.4711849875748158], [-33.530499786138535, 81.47849887609482, -2.9403800144791603], [-46.41775041818619, 82.57099986076355, -3.024300094693899], [-6.922299973666668, 82.27550238370895, -3.6597950384020805], [-47.33565077185631, 83.39150249958038, -3.1282349955290556], [-9.17190033942461, 82.75499939918518, -3.111860016360879], [-48.38104918599129, 84.35100317001343, -2.8540799394249916], [-8.979950100183487, 85.0749984383583, -3.511834889650345], [-49.619998782873154, 85.25250107049942, -3.2438200432807207], [-39.663951843976974, 85.39199829101562, -3.8036650512367487], [-42.900148779153824, 85.68049967288971, -3.7644400727003813], [-45.89495062828064, 86.64800226688385, -2.999885007739067], [-44.00105029344559, 86.61500364542007, -3.45828989520669], [-37.60505095124245, 86.65599673986435, -3.1048699747771025], [-7.172300014644861, 86.53649687767029, -3.7994799204170704], [-48.06140065193176, 86.8925005197525, -3.514345036819577], [-11.212450452148914, 86.93800121545792, -3.0258100014179945], [-9.150650352239609, 86.51100099086761, -3.3356898929923773], [-36.5445502102375, 87.42000162601471, -3.0938549898564816], [-16.77210070192814, 87.6460000872612, -3.5419301129877567], [-17.287850379943848, 88.78350257873535, -3.402685048058629], [-35.69604828953743, 88.99550139904022, -3.001315053552389], [-19.66020092368126, 89.23400193452835, -3.744299989193678], [-21.490750834345818, 89.33699876070023, -2.8564399108290672], [-33.74684974551201, 89.6885022521019, -2.8341200668364763], [-23.67429994046688, 89.27399665117264, -2.926464891061187], [-33.033549785614014, 89.8749977350235, -3.407810116186738], [-31.760700047016144, 90.02500027418137, -3.200765000656247], [-25.82854963839054, 89.93549644947052, -3.440770087763667], [-24.27149936556816, 89.88449722528458, -3.8187499158084393], [-29.58020009100437, 90.12150019407272, -2.899979939684272], [-27.755599468946457, 90.11650085449219, -3.1361649744212627], [-31.445801258087158, 26.703400537371635, -3.076845081523061], [-11.335249990224838, 26.774099096655846, -2.961569931358099], [-25.872500613331795, 27.73124910891056, -3.1101598870009184], [19.635550677776337, 29.63794954121113, -2.8510550037026405], [7.783299777656794, 35.46639904379845, -2.892544958740473], [-1.9348949426785111, 36.44439950585365, -3.7020801100879908], [21.338850259780884, 41.42490029335022, -2.9750450048595667], [21.780699491500854, 45.83679884672165, -2.987094921991229], [35.795800387859344, 48.17444831132889, -2.717080060392618], [39.69144821166992, 48.212699592113495, -2.7518500573933125], [13.825999572873116, 51.73749849200249, -3.8811499252915382], [15.369550324976444, 52.12600156664848, -2.7435950469225645], [27.741700410842896, 56.21350184082985, -2.808195073157549], [32.919298857450485, 56.19249865412712, -2.83075007610023], [-9.771349839866161, 55.98000064492226, -2.5608050636947155], [29.007399454712868, 61.88400089740753, -3.277669893577695], [28.76969985663891, 66.21850281953812, -3.7328898906707764], [37.62980177998543, 70.27050107717514, -3.7592200096696615], [-37.49009966850281, 70.62699645757675, -3.0067849438637495], [-44.624000787734985, 72.6500004529953, -3.965740092098713], [22.86135032773018, 74.09150153398514, -3.786930115893483], [-43.42665150761604, 75.78299939632416, -3.1747049652040005], [-29.54009920358658, 80.9670016169548, -3.0747249256819487], [-38.96860033273697, 81.62949979305267, -3.6658700555562973], [-39.766550064086914, 82.20399916172028, -2.8363200835883617], [-10.803299956023693, 83.06899666786194, -2.682874910533428], [-11.041649617254734, 85.03799885511398, -2.72196508012712], [-41.4125993847847, 86.62749826908112, -3.3982601016759872], [-49.656350165605545, 87.04700320959091, -2.8872399125248194], [-14.856849797070026, 87.54649758338928, -2.981635043397546], [-13.023150153458118, 87.6694992184639, -2.857609884813428], [31.574249267578125, 26.978449895977974, -2.979324897751212], [-40.86954891681671, 32.07644820213318, -2.7443799190223217], [29.555749148130417, 35.08175164461136, -2.6999549008905888], [32.833848148584366, 54.47550117969513, -2.6213049422949553], [5.381799768656492, 60.06250157952309, -2.703309990465641], [15.139199793338776, 66.1109983921051, -2.69644008949399], [13.074399903416634, 66.27900153398514, -2.714104950428009], [-48.325348645448685, 70.10199874639511, -3.0256749596446753], [-17.560649663209915, 90.91649949550629, -3.0484648887068033], [-15.053300186991692, 90.99700301885605, -2.9276199638843536], [21.059950813651085, 30.011450871825218, -3.0611450783908367], [36.955200135707855, 31.35170042514801, -2.628220012411475], [35.09579971432686, 35.310350358486176, -2.724624937400222], [23.54324981570244, 50.21049827337265, -2.606784924864769], [33.78940001130104, 49.886949360370636, -2.7676450554281473], [35.516951233148575, 60.459498316049576, -2.6852800510823727], [11.051050387322903, 65.96700102090836, -2.739665098488331], [27.60235033929348, 66.23250246047974, -2.715524984523654], [-3.2426901161670685, 66.61350280046463, -2.6926349382847548], [-48.345599323511124, 69.07849758863449, -3.0472499784082174], [-26.453400030732155, 68.91000270843506, -2.84366006962955], [41.70624911785126, 70.47949731349945, -3.191265044733882], [39.4306518137455, 70.1645016670227, -3.397200023755431], [39.41835090517998, 72.05449789762497, -3.3224199432879686], [-39.46169838309288, 86.77399903535843, -2.7441899292171], [-19.463449716567993, 90.38899838924408, -2.7335449121892452], [-25.538399815559387, 89.56199884414673, -2.620300045236945], [-15.013099648058414, 92.58750081062317, -2.7508349157869816], [18.3105506002903, 28.960250318050385, -2.8889349196106195], [12.947900220751762, 46.03014886379242, -2.5493749417364597], [-49.99009892344475, 70.21050155162811, -2.6524949353188276], [0.8006750140339136, 70.66749781370163, -2.664565108716488], [8.818699978291988, 74.22249764204025, -2.629674971103668], [25.31054988503456, 26.70064941048622, -2.415795112028718], [27.598250657320023, 26.4871995896101, -2.349874936044216], [36.80809959769249, 28.4000001847744, -2.524120034649968], [21.362900733947754, 31.48144856095314, -2.7709100395441055], [8.281650021672249, 33.14590081572533, -2.5051350239664316], [27.024749666452408, 36.955349147319794, -2.444060053676367], [24.77704919874668, 39.25300016999245, -2.2627951111644506], [32.2096012532711, 50.283998250961304, -2.3409801069647074], [40.84260016679764, 51.94149911403656, -2.5300749111920595], [-22.686300799250603, 52.13949829339981, -2.4001048877835274], [3.7132299039512873, 56.001000106334686, -2.527110045775771], [16.848549246788025, 56.29799887537956, -2.508060075342655], [38.45055028796196, 58.678001165390015, -2.556249964982271], [7.606950122863054, 63.478000462055206, -2.7536998968571424], [-16.76899939775467, 64.28050249814987, -2.5697550736367702], [-16.36289991438389, 65.67800045013428, -2.504209987819195], [-27.9985498636961, 67.01599806547165, -2.638600068166852], [-1.3131400337442756, 68.61650198698044, -2.5349499192088842], [-34.068599343299866, 71.4154988527298, -2.4683300871402025], [-12.281999923288822, 73.72249662876129, -2.5237349327653646], [-37.525251507759094, 75.69050043821335, -2.491794992238283], [-8.877400308847427, 80.70450276136398, -2.9625899624079466], [-43.62820088863373, 88.51300179958344, -2.615914912894368], [19.914250820875168, 31.571149826049805, -2.437639981508255], [21.931400522589684, 40.362950414419174, -2.5199949741363525], [20.322799682617188, 42.11780056357384, -2.440159907564521], [20.252499729394913, 43.85650157928467, -2.3422399535775185], [21.601099520921707, 47.61055111885071, -2.396990079432726], [37.55135089159012, 46.47374898195267, -2.4348050355911255], [38.97760063409805, 46.53380066156387, -2.359640086069703], [-22.71449938416481, 50.16399919986725, -2.2427949588745832], [15.168550424277782, 50.41550099849701, -2.4910049978643656], [25.94755031168461, 54.17649820446968, -2.3421149235218763], [27.862999588251114, 58.07949975132942, -2.4196200538426638], [-7.909400388598442, 58.8424988090992, -2.2950449492782354], [27.75000035762787, 64.26949799060822, -2.4059799034148455], [16.75104908645153, 65.69600105285645, -2.3902400862425566], [25.880450382828712, 68.21049749851227, -2.269099932163954], [-48.266101628541946, 72.34349846839905, -2.525855088606477], [-46.171750873327255, 74.65849816799164, -2.4704199749976397], [21.77559956908226, 72.51700013875961, -2.453790046274662], [5.091900005936623, 72.27899879217148, -2.3894549813121557], [-11.074000038206577, 76.6495019197464, -2.4598250165581703], [15.304500237107277, 74.9640017747879, -2.540044952183962], [11.116250418126583, 74.59750026464462, -2.458419883623719], [-26.408350095152855, 79.67399805784225, -2.3137200623750687], [-41.89775139093399, 82.42149651050568, -2.529744990170002], [-35.552650690078735, 81.90350234508514, -2.4903600569814444], [-15.7756507396698, 88.79750221967697, -2.7101049199700356], [-48.00080135464668, 88.09249848127365, -2.3618401028215885], [-41.63705185055733, 88.77649903297424, -2.322999993339181], [-23.527199402451515, 28.71819958090782, -2.2703749127686024], [-4.1187601163983345, 32.983798533678055, -2.434094902127981], [14.729799702763557, 48.540301620960236, -2.361780032515526], [40.949251502752304, 50.958000123500824, -2.3768949322402477], [28.08764949440956, 62.17750161886215, -2.476559951901436], [9.136700071394444, 65.7769963145256, -2.2042749915271997], [-50.32049864530563, 71.51400297880173, -2.246239921078086], [17.466150224208832, 74.22850281000137, -2.243754919618368], [12.860850431025028, 74.81549680233002, -2.443850040435791], [-10.62885019928217, 78.72150093317032, -2.2678349632769823], [-11.28149963915348, 80.87150007486343, -2.327929949387908], [21.702349185943604, 33.56369957327843, -2.2253699135035276], [1.708419993519783, 48.41554909944534, -2.290640026330948], [23.825999349355698, 51.702000200748444, -2.217514906078577], [28.137950226664543, 60.25699898600578, -2.3334650322794914], [5.788050126284361, 61.69499829411507, -2.2406699135899544], [-5.676050204783678, 62.39499896764755, -2.1875849924981594], [-30.490050092339516, 64.89899754524231, -2.268590033054352], [23.854099214076996, 70.63750177621841, -2.243210095912218], [-47.80985042452812, 73.48649948835373, -2.2570600267499685], [-43.68655011057854, 82.74649828672409, -2.1870050113648176], [-31.669050455093384, 89.75899964570999, -2.2006051149219275], [-27.559949085116386, 89.7504985332489, -2.2622200194746256], [-16.914449632167816, 92.0334979891777, -2.2437500301748514], [22.929150611162186, 33.94220024347305, -2.1193900611251593], [10.241099633276463, 42.13225096464157, -2.251330064609647], [20.266899839043617, 45.86545005440712, -2.1683399099856615], [16.6749507188797, 54.26749959588051, -2.2448799572885036], [-16.339050605893135, 70.67050039768219, -2.259755041450262], [-12.68364954739809, 83.1025019288063, -2.154499990865588], [-12.862649746239185, 84.77400243282318, -2.1813700441271067], [-49.51120167970657, 87.99699693918228, -2.224245108664036], [19.425049424171448, 31.605251133441925, -1.125980052165687], [-5.510149989277124, 31.740300357341766, -1.1692499974742532], [21.785149350762367, 35.55665165185928, -1.0702100116759539], [-2.478349953889847, 37.33174875378609, -0.9798150276765227], [22.2936999052763, 37.30574995279312, -0.8125050226226449], [7.516299840062857, 37.76689991354942, -1.156529993750155], [36.4999994635582, 46.41614854335785, -2.136145019903779], [-16.65619947016239, 47.18190059065819, -1.0921399807557464], [1.9450349500402808, 49.748651683330536, -2.199999988079071], [1.1634050169959664, 50.41100084781647, -0.994520029053092], [-23.049049079418182, 52.56599932909012, -1.175279961898923], [26.52765065431595, 55.769000202417374, -2.096255077049136], [3.1002399045974016, 58.15050005912781, -1.1604049941524863], [37.581201642751694, 58.219000697135925, -1.2277349596843123], [-25.732150301337242, 68.08499991893768, -1.321690040640533], [-46.0391491651535, 70.68850100040436, -1.1251099640503526], [2.721264958381653, 70.81200182437897, -2.1350099705159664], [-24.47439916431904, 71.68350368738174, -2.119279932230711], [6.879750173538923, 72.62349873781204, -2.135304966941476], [-41.974298655986786, 75.0180035829544, -1.269795000553131], [-45.585550367832184, 74.9569982290268, -1.1181849986314774], [-41.12214967608452, 83.21850001811981, -1.6826150240376592], [-37.78684884309769, 87.16650307178497, -0.839230022393167], [-40.330298244953156, 88.21699768304825, -2.0988150499761105], [-23.53844977915287, 88.73149752616882, -1.1416750494390726], [-30.351949855685234, 89.76449817419052, -2.1388051100075245], [29.689550399780273, 26.738150045275688, -1.1741600465029478], [17.492949962615967, 27.621550485491753, -0.9341749828308821], [31.675901263952255, 27.122050523757935, -0.924870022572577], [35.46055033802986, 27.846649289131165, -1.1747650569304824], [15.538400039076805, 27.418699115514755, -0.9611800196580589], [-17.341449856758118, 27.880800887942314, -0.9998950408771634], [23.69469963014126, 27.654049918055534, -1.041590003296733], [21.55184932053089, 28.108499944210052, -0.8356149774044752], [-39.18749839067459, 30.22249974310398, -1.1247099610045552], [17.501100897789, 29.56550009548664, -0.6344600114971399], [37.1643491089344, 31.679999083280563, -0.9467899799346924], [19.98724974691868, 32.99374878406525, -1.109529985114932], [36.96484863758087, 33.354949206113815, -0.724659999832511], [21.145200356841087, 33.86490046977997, -1.2508300133049488], [36.57114878296852, 34.04029831290245, -1.5061800368130207], [22.884149104356766, 34.81154888868332, -2.0415550097823143], [23.25735054910183, 35.87004914879799, -1.2529200175777078], [27.455700561404228, 37.59140148758888, -0.8959550177678466], [25.98940022289753, 38.41190040111542, -1.4726449735462666], [25.652950629591942, 39.384301751852036, -0.6225749966688454], [-1.5297849895432591, 39.55719992518425, -1.2748100562021136], [21.54890075325966, 39.694398641586304, -0.9750999743118882], [19.352950155735016, 41.801851242780685, -1.415814971551299], [-0.9497500141151249, 41.63629934191704, -1.1827950365841389], [10.938350111246109, 41.69980064034462, -0.9705550037324429], [-43.55794936418533, 44.032301753759384, -0.7456300081685185], [0.24570600362494588, 45.89080065488815, -1.0999100049957633], [37.16665133833885, 45.20940035581589, -1.754635013639927], [39.88815099000931, 46.179648488759995, -1.7046249704435468], [-15.220699831843376, 47.75939881801605, -0.9068499784916639], [15.813799574971199, 48.07145148515701, -1.8253399757668376], [20.820550620555878, 48.49810153245926, -1.9407400395721197], [-14.005550183355808, 48.49585145711899, -0.7789349765516818], [32.32739865779877, 49.65230077505112, -1.2241499498486519], [-12.84290011972189, 49.66479912400246, -0.9372449712827802], [32.37830102443695, 51.4025017619133, -1.8370699835941195], [33.0999493598938, 52.45999991893768, -0.9602999780327082], [17.585650086402893, 54.27049845457077, -1.7056900542229414], [2.5409350637346506, 54.388999938964844, -1.5111200045794249], [33.65129977464676, 56.35949969291687, -1.0096400510519743], [-21.841900423169136, 56.25100061297417, -1.0960249928757548], [-39.33069854974747, 56.11100047826767, -0.98559504840523], [-8.692449890077114, 56.14599958062172, -1.3539900537580252], [25.68564936518669, 56.379999965429306, -1.5808299649506807], [38.8639010488987, 57.50250071287155, -1.545730046927929], [27.198350057005882, 58.483000844717026, -1.8841050332412124], [-6.876800209283829, 58.382999151945114, -0.9884099708870053], [36.947350949048996, 59.27349999547005, -1.968594966456294], [-36.97355091571808, 59.57400053739548, -1.5422300202772021], [35.7014499604702, 59.507500380277634, -1.8509499495849013], [-6.543050054460764, 60.00249832868576, -1.6993599710986018], [4.683940205723047, 62.25999817252159, -1.2299149530008435], [-19.391050562262535, 62.065500766038895, -0.7513849996030331], [27.154050767421722, 62.369998544454575, -1.880299998447299], [-5.041650030761957, 61.96799874305725, -1.4157999539747834], [-18.209099769592285, 62.65850365161896, -1.6651799669489264], [6.991500034928322, 64.36800211668015, -1.8022849690169096], [-31.474851071834564, 63.85800242424011, -1.1058900272473693], [-29.630349949002266, 64.7754967212677, -0.9336199727840722], [-17.372699454426765, 66.12350046634674, -1.5437400434166193], [-2.6830900460481644, 65.86150079965591, -1.839870004914701], [17.39400066435337, 66.37299805879593, -1.7267550574615598], [25.620250031352043, 66.07700139284134, -1.6502150101587176], [9.031450375914574, 66.51149690151215, -1.7692949622869492], [-27.62174978852272, 66.23899936676025, -1.1134400265291333], [-1.8364950083196163, 67.13750213384628, -2.1768698934465647], [11.58014964312315, 67.16799736022949, -2.027269918471575], [12.391950003802776, 67.22699850797653, -2.0335649605840445], [15.313499607145786, 67.18149781227112, -1.9877851009368896], [-17.363350838422775, 68.13950091600418, -1.5742500545457006], [0.865160021930933, 68.27250123023987, -1.6017700545489788], [-25.00779926776886, 69.50099766254425, -1.7392999725416303], [-48.09274896979332, 70.78450173139572, -1.229319954290986], [1.1587300105020404, 69.63100284337997, -1.9126549595966935], [-37.49949857592583, 70.52099704742432, -1.0146050481125712], [3.068865044042468, 70.1024979352951, -1.7399350181221962], [-17.086099833250046, 72.12299853563309, -0.7733650272712111], [-50.296999514102936, 72.57699966430664, -1.4053400373086333], [-25.59169940650463, 72.9840025305748, -0.7662450079806149], [19.6540504693985, 72.2535029053688, -1.7012599855661392], [-15.345449559390545, 72.8904977440834, -1.498879981227219], [20.38850076496601, 72.67899811267853, -2.0662350580096245], [8.94275028258562, 73.02899658679962, -2.051004907116294], [10.23850031197071, 73.0224996805191, -2.0723650231957436], [-47.96694964170456, 74.7779980301857, -1.4164899475872517], [-12.972500175237656, 76.71400159597397, -1.2353550409898162], [-31.70974925160408, 77.06049829721451, -0.8532549836672843], [-11.213299818336964, 78.90850305557251, -1.7956349765881896], [-27.480199933052063, 77.96599715948105, -1.3971650041639805], [-25.654399767518044, 79.02950048446655, -0.9568550158292055], [-11.681100353598595, 80.17700165510178, -1.9142599776387215], [-29.74100038409233, 80.83099871873856, -1.0129399597644806], [-33.535998314619064, 81.48699998855591, -0.9386300225742161], [-35.53035110235214, 81.99399709701538, -0.9482749737799168], [-45.66790163516998, 82.77250081300735, -1.6596349887549877], [-47.586649656295776, 85.01449972391129, -0.9436549735255539], [-49.637749791145325, 86.77799999713898, -1.3333649840205908], [-13.671750202775002, 85.18850058317184, -1.867105020210147], [-12.943149544298649, 86.75000071525574, -1.767090056091547], [-45.92674970626831, 87.7309963107109, -1.8587149679660797], [-15.460999682545662, 86.83150261640549, -1.144660054706037], [-15.995949506759644, 88.99249881505966, -1.7051449976861477], [-41.372399777173996, 89.48300033807755, -1.6064749797806144], [-44.16834935545921, 89.23099935054779, -1.506755012087524], [-33.71790051460266, 88.79999816417694, -0.8213549735955894], [-27.629250660538673, 89.32600170373917, -0.9680549846962094], [-15.91859944164753, 92.29499846696854, -1.1925100116059184], [-31.640000641345978, 26.756299659609795, -1.0068099945783615], [33.834751695394516, 27.362849563360214, -0.8487799786962569], [-11.221200227737427, 26.90334990620613, -0.8806950063444674], [-25.867149233818054, 27.66825072467327, -0.942995015066117], [19.659999758005142, 27.674950659275055, -1.2053799582645297], [-23.74495007097721, 27.989249676465988, -0.9409150225110352], [-21.784700453281403, 28.02320010960102, -0.9948000079020858], [-19.800350069999695, 28.06979976594448, -0.9241750231012702], [-7.320050150156021, 29.648499563336372, -0.9539800230413675], [-37.943851202726364, 29.02654930949211, -1.0702749714255333], [9.81105025857687, 30.17525002360344, -1.513854949735105], [19.57070082426071, 30.569100752472878, -1.9659299869090319], [21.321900188922882, 32.225899398326874, -1.8364900024607778], [8.620800450444221, 33.35985168814659, -0.8639100124128163], [-42.51294955611229, 35.58475151658058, -0.9853299707174301], [29.54299934208393, 36.15260124206543, -1.31608999799937], [35.67644953727722, 35.68679839372635, -0.9015100076794624], [-3.119165077805519, 35.560499876737595, -1.0540350340306759], [23.665200918912888, 37.47725114226341, -0.9110000100918114], [7.791799958795309, 38.9692485332489, -1.252594985999167], [-43.434299528598785, 39.81329873204231, -0.9687949786894023], [8.79644975066185, 40.34214839339256, -1.0498149786144495], [11.645049788057804, 42.94374957680702, -1.8887149635702372], [13.119899667799473, 43.66140067577362, -1.4558000257238746], [0.25814399123191833, 44.104449450969696, -1.718914951197803], [19.096599891781807, 44.492099434137344, -1.7721649492159486], [37.67099976539612, 43.80200058221817, -1.190760056488216], [15.027450397610664, 46.22805118560791, -1.8311500316485763], [19.13524977862835, 45.94450071454048, -1.7909799935296178], [-17.812350764870644, 46.88490182161331, -0.8435400086455047], [35.62559932470322, 45.871950685977936, -1.2818799586966634], [-19.74719949066639, 47.09554836153984, -0.9717749780975282], [41.2992499768734, 48.13859984278679, -0.9494799887761474], [0.7824599742889404, 48.22494834661484, -1.1824850225821137], [34.87024828791618, 47.35274985432625, -1.5841450076550245], [19.641799852252007, 48.33399876952171, -1.667735050432384], [33.45780074596405, 47.91634902358055, -1.5061149606481194], [32.38524869084358, 47.864001244306564, -0.9203599765896797], [21.591100841760635, 50.16849935054779, -1.7995750531554222], [16.31009951233864, 49.8524010181427, -1.8129199743270874], [17.525650560855865, 50.354499369859695, -1.5193299623206258], [2.0477650687098503, 51.90400034189224, -1.6794350231066346], [23.298950865864754, 52.58699879050255, -1.6740249702706933], [40.93080013990402, 53.60950157046318, -1.0502899531275034], [-41.048549115657806, 53.766001015901566, -1.3640549732372165], [-22.748200222849846, 54.23450097441673, -0.9352799970656633], [25.061750784516335, 54.44800108671188, -1.7793900333344936], [33.25185179710388, 54.32850122451782, -0.893110001925379], [17.931150272488594, 56.25800043344498, -1.7355449963361025], [2.739259973168373, 56.39149993658066, -1.3070449931547046], [-8.184599690139294, 57.60449916124344, -1.7417649505659938], [34.357700496912, 57.92149901390076, -1.2122000334784389], [19.269999116659164, 58.37450176477432, -1.3337699929252267], [-20.35360038280487, 58.75600129365921, -1.3736350229009986], [35.75589880347252, 58.37099999189377, -0.8469200110994279], [-19.77209933102131, 60.23300066590309, -1.229734974913299], [4.3728849850595, 60.09000167250633, -1.6207799781113863], [-35.7852503657341, 60.21000072360039, -0.8637100108899176], [19.325850531458855, 60.27999892830849, -1.4180149883031845], [19.350500777363777, 62.192000448703766, -1.535719959065318], [-33.751800656318665, 62.08400055766106, -0.9703150135464966], [-4.296645056456327, 63.56149911880493, -1.7779349582269788], [-17.82985031604767, 64.19049948453903, -1.5729600563645363], [19.47619952261448, 64.23249840736389, -1.3414300046861172], [18.269749358296394, 64.74199891090393, -1.7434799810871482], [-2.866684924811125, 64.00349736213684, -1.1990000493824482], [26.848899200558662, 64.30850178003311, -1.8491250229999423], [-0.9402399882674217, 66.21000170707703, -1.3314200332388282], [11.268500238656998, 68.20549815893173, -1.739209983497858], [13.51234968751669, 68.41699779033661, -1.66229996830225], [15.384799800813198, 67.88250058889389, -1.726430025883019], [24.90909956395626, 68.26499849557877, -1.8784699495881796], [-0.5180549924261868, 67.98700243234634, -1.79410504642874], [23.29530008137226, 69.99900192022324, -1.8088100478053093], [-50.0744991004467, 70.60050219297409, -1.0557100176811218], [-17.823249101638794, 70.4289972782135, -1.4458650257438421], [-23.626500740647316, 70.02349942922592, -1.239040051586926], [-35.60110181570053, 70.83850353956223, -0.95038500148803], [4.962964914739132, 70.23750245571136, -1.6044250223785639], [-23.58650043606758, 72.2699984908104, -1.1237800354138017], [6.992849987000227, 71.74299657344818, -1.8544449703767896], [21.223250776529312, 71.51100039482117, -1.79410504642874], [21.752500906586647, 70.41800022125244, -1.6233449568971992], [8.882950060069561, 71.99150323867798, -1.7208399949595332], [11.02210022509098, 72.28449732065201, -1.7286250367760658], [17.360400408506393, 72.21350073814392, -1.5680299839004874], [17.276499420404434, 73.47550243139267, -1.9108749693259597], [13.037599623203278, 72.37549871206284, -1.6745650209486485], [15.033000148832798, 72.51150161027908, -1.6359499422833323], [13.585399836301804, 73.54699820280075, -1.8347350414842367], [15.47284983098507, 73.78300279378891, -1.9006750080734491], [-13.517400249838829, 74.61249828338623, -1.4203450409695506], [-43.668799102306366, 74.85750317573547, -0.7103349780663848], [-39.91544991731644, 75.46249777078629, -1.4322949573397636], [-11.838600039482117, 75.32700151205063, -1.8769849557429552], [-39.314448833465576, 75.71399956941605, -0.8143599843606353], [-33.5734486579895, 76.67150348424911, -0.9228250128217041], [-29.0313009172678, 77.66050100326538, -1.447114977054298], [-25.63134953379631, 80.25199919939041, -0.7210599724203348], [-13.212550431489944, 80.71299642324448, -1.374369952827692], [-13.504800386726856, 82.61299878358841, -1.7855700571089983], [-37.78170049190521, 82.59149640798569, -0.8578400011174381], [-39.53395038843155, 83.07600021362305, -1.1025499552488327], [-15.49839973449707, 83.0644965171814, -1.0453700087964535], [-43.967701494693756, 83.6154967546463, -1.8235399620607495], [-43.801501393318176, 84.60249751806259, -0.8238250156864524], [-49.48420077562332, 88.30700069665909, -0.7978350040502846], [-45.843448489904404, 88.82399648427963, -0.84479502402246], [-48.24234917759895, 88.92499655485153, -1.078544999472797], [-35.297948867082596, 88.55299651622772, -1.4504699502140284], [-29.524050652980804, 89.11100029945374, -0.7894000154919922], [-21.641500294208527, 89.08099681138992, -0.7778350263834], [-31.551949679851532, 89.23099935054779, -0.9484050096943974], [-19.575700163841248, 90.50799906253815, -1.0269200429320335], [-15.820799395442009, 91.17349982261658, -1.6693549696356058], [-17.01964996755123, 91.99149906635284, -1.100294990465045], [13.029100373387337, 26.56315080821514, -0.8532999781891704], [13.469249941408634, 26.482999324798584, -0.9738500230014324], [25.849850848317146, 27.029650285840034, -0.953859998844564], [27.73509919643402, 26.451250538229942, -1.0239549446851015], [28.98775041103363, 26.472799479961395, -0.8559650159440935], [-29.79700081050396, 26.781149208545685, -0.8989250054582953], [-12.91470043361187, 26.69765055179596, -0.8660249877721071], [11.36889960616827, 27.67370082437992, -0.89359498815611], [-33.502548933029175, 27.058949694037437, -0.8637150167487562], [-35.62450036406517, 27.68000029027462, -0.908499991055578], [-15.225949697196484, 27.22175046801567, -0.8346600225195289], [-9.09150019288063, 27.890099212527275, -0.92505500651896], [-37.02645003795624, 28.36805023252964, -0.9298999793827534], [36.90854832530022, 29.830899089574814, -1.1220650048926473], [-23.295599967241287, 28.722049668431282, -1.373445033095777], [10.533500462770462, 29.42020073533058, -0.6905950140208006], [-40.36394879221916, 31.412549316883087, -0.8753149886615574], [9.42115020006895, 31.635601073503494, -0.9502199827693403], [-40.858350694179535, 32.07619860768318, -1.287829945795238], [-4.635194782167673, 33.2937017083168, -0.6366400048136711], [-41.61515086889267, 33.52909907698631, -0.792820006608963], [-3.9277952164411545, 33.96020084619522, -1.2773500056937337], [22.873150184750557, 34.200798720121384, -1.6777149867266417], [7.719949819147587, 35.421401262283325, -1.0014149593189359], [31.634248793125153, 36.23050078749657, -0.8976800017990172], [33.597249537706375, 36.553848534822464, -0.9903250029310584], [-43.35144907236099, 37.70880028605461, -0.9913799585774541], [-1.7838949570432305, 38.0234494805336, -1.5862650470808148], [23.68295006453991, 39.410948753356934, -1.0354799451306462], [-43.73820126056671, 41.54429957270622, -0.8735100273042917], [-0.6200450006872416, 43.8092015683651, -0.6960600148886442], [39.68355059623718, 43.95335167646408, -0.8992949733510613], [-43.56979951262474, 46.05584964156151, -1.140424981713295], [17.222600057721138, 46.04465141892433, -1.5694750472903252], [40.75760021805763, 47.01894894242287, -1.3321599690243602], [-43.077848851680756, 47.31455072760582, -1.0131950257346034], [-21.579649299383163, 47.716300934553146, -0.7836250006221235], [-22.63074927031994, 48.73425140976906, -0.769464997574687], [-42.581550776958466, 48.56494814157486, -0.5501100094988942], [19.74325068295002, 50.28950050473213, -1.4262549811974168], [-23.032499477267265, 49.94960129261017, -0.9495400008745492], [-42.30155050754547, 50.158001482486725, -0.9121400071308017], [41.42585024237633, 50.3075011074543, -0.844345020595938], [21.764500066637993, 52.43400111794472, -1.3165100244805217], [-10.9095498919487, 51.99750140309334, -1.0262499563395977], [1.2085450580343604, 52.414000034332275, -0.6843400187790394], [-41.380900889635086, 52.13499814271927, -0.9605300147086382], [-10.226099751889706, 53.8100004196167, -1.5329699963331223], [23.60384911298752, 54.4155016541481, -1.334585016593337], [-22.300299257040024, 54.8115000128746, -1.368134981021285], [40.52479937672615, 54.755501449108124, -0.7610250031575561], [-40.37189856171608, 54.46549877524376, -0.8411949966102839], [-9.054250083863735, 54.36300113797188, -0.6569050019606948], [39.548199623823166, 56.35499954223633, -0.9121050243265927], [25.762800127267838, 58.24349820613861, -1.338095054961741], [-37.73580119013786, 58.116499334573746, -0.8609649958088994], [-21.12019993364811, 58.09349939227104, -0.8102899882942438], [27.158349752426147, 60.19249930977821, -1.7615349497646093], [4.876414779573679, 64.16100263595581, -1.051355036906898], [25.74470080435276, 64.25949931144714, -1.484254957176745], [6.912999786436558, 66.13949686288834, -1.3228650204837322], [-29.006600379943848, 65.57949632406235, -1.43520999699831], [9.007750079035759, 68.10449808835983, -1.452794997021556], [-26.798099279403687, 67.3765018582344, -1.5488850185647607], [23.673750460147858, 68.09700280427933, -1.4695399440824986], [-41.52679815888405, 70.07650285959244, -0.9050799999386072], [-39.57739844918251, 70.16400247812271, -0.7915599853731692], [-43.50589960813522, 70.23649662733078, -0.8706150110810995], [-51.672499626874924, 72.30900228023529, -0.6780850235372782], [-34.6251018345356, 71.19549810886383, -0.8714600116945803], [-33.567801117897034, 71.61550223827362, -0.9027799824252725], [-31.825151294469833, 72.18600064516068, -0.8819050271995366], [-29.660450294613838, 72.73949682712555, -0.8824900141917169], [-13.926650397479534, 73.06650280952454, -1.3793200487270951], [-27.74149924516678, 72.91000336408615, -0.8373750024475157], [-49.80529844760895, 74.3274986743927, -0.6118849851191044], [-37.4796986579895, 75.94200223684311, -0.8666199864819646], [-35.43740138411522, 76.32999867200851, -0.8716200245544314], [-29.67200055718422, 77.15950161218643, -0.6812550127506256], [-13.291450217366219, 78.82650196552277, -1.0988200083374977], [-27.656299993395805, 80.4940015077591, -0.9544300264678895], [-31.584199517965317, 81.10199868679047, -0.7666950114071369], [-47.00680077075958, 83.3209976553917, -1.2558699818328023], [-41.78734868764877, 83.98950099945068, -0.815759995020926], [-15.352649614214897, 84.92399752140045, -1.030470011755824], [-35.638999193906784, 86.8304967880249, -0.6617499748244882], [-39.26200047135353, 87.54049986600876, -1.4829549472779036], [-40.02929851412773, 88.78649771213531, -0.9207049733959138], [-25.32934956252575, 89.1914963722229, -0.729450024664402], [-41.66720062494278, 90.19800275564194, -0.8410249720327556], [-43.63745078444481, 90.45600146055222, -0.7387800142168999], [-17.37005077302456, 90.94350039958954, -0.8721249760128558], [-27.53020077943802, 27.497900649905205, -0.927964982111007], [17.33125001192093, 43.77155005931854, -1.2612499995157123], [15.21615032106638, 43.754249811172485, -1.0598499793559313], [17.664900049567223, 48.12759906053543, -1.492070034146309], [17.90284924209118, 52.306000143289566, -1.472419942729175], [41.2713997066021, 51.9229993224144, -0.7463599904440343], [25.360699743032455, 60.25100126862526, -1.168985036201775], [-5.03640016540885, 60.17199903726578, -0.8044100250117481], [25.30430071055889, 62.207501381635666, -1.1995249660685658], [17.440399155020714, 68.18850338459015, -1.3239550171419978], [2.966115018352866, 68.0759996175766, -1.2481550220400095], [12.810450047254562, 70.19399851560593, -1.5101799508556724], [10.89164987206459, 70.15900313854218, -1.4805849641561508], [6.8824500776827335, 70.18700242042542, -1.45496497862041], [8.868950419127941, 70.08600234985352, -1.3806050410494208], [23.545250296592712, 56.2950000166893, -1.0293900268152356], [3.1023549381643534, 60.22350117564201, -0.8236999856308103], [-32.00244903564453, 62.95450031757355, -0.5946150049567223], [19.645599648356438, 66.37100130319595, -1.1526199523359537], [4.969414789229631, 68.05650144815445, -1.1642599711194634], [6.86000008136034, 68.15849989652634, -1.2252000160515308], [15.103800222277641, 70.05850225687027, -1.4297650195658207], [21.750299260020256, 68.11200082302094, -1.1676149442791939], [19.784949719905853, 70.15500217676163, -1.2373699573799968], [17.405850812792778, 70.24949789047241, -1.2733649928122759], [-48.64700138568878, 86.61749958992004, -0.6370749906636775], [-17.74270087480545, 88.58849853277206, -1.2403699802234769], [35.90479865670204, 29.12059985101223, -0.5176650010980666], [32.7845998108387, 50.58149993419647, -0.6413999944925308], [19.80680041015148, 52.34849825501442, -1.1560650309547782], [19.659999758005142, 54.383501410484314, -1.0126499691978097], [21.526850759983063, 54.30850014090538, -1.039394992403686], [19.70520056784153, 56.31750077009201, -1.0317800333723426], [-3.1136299949139357, 62.307000160217285, -0.7413550047203898], [-0.8423199760727584, 64.37650322914124, -0.8815950131975114], [23.543599992990494, 66.19500368833542, -1.1499449610710144], [23.653799667954445, 64.23799693584442, -0.9615899762138724], [1.0854899883270264, 66.19349867105484, -0.9665049728937447], [-23.76380003988743, 68.29849630594254, -0.576850026845932], [-19.43429931998253, 70.26249915361404, -0.7599099772050977], [-51.4645017683506, 70.84649801254272, -0.772489991504699], [-21.925000473856926, 71.80900126695633, -0.6683300016447902], [-15.35714976489544, 81.04249835014343, -0.7480750209651887], [-17.620550468564034, 86.98949962854385, -0.7028250256553292], [-19.12439987063408, 88.66800367832184, -0.5566800246015191], [39.180051535367966, 41.80924966931343, -0.6837950204499066], [17.693450674414635, 42.02859848737717, -0.5993549712002277], [35.72624921798706, 43.95189881324768, -0.5628149956464767], [23.81880022585392, 58.24749916791916, -0.9313650080002844], [-19.249850884079933, 64.24400210380554, -0.5153099773451686], [4.85243508592248, 66.04749709367752, -1.0172249749302864], [-19.31069977581501, 66.14550203084946, -0.5287100211717188], [3.0373549088835716, 66.19449704885483, -0.9106299839913845], [21.815750747919083, 66.35650247335434, -0.973474991042167], [-26.06559917330742, 66.55749678611755, -0.5153099773451686], [20.017700269818306, 68.08450073003769, -1.0204750578850508], [-21.603899076581, 70.45900076627731, -0.726079975720495], [-48.822298645973206, 71.43650203943253, -0.47223849105648696], [-15.400050207972527, 74.42449778318405, -0.6831299979239702], [-15.242050401866436, 76.55899971723557, -0.60655502602458], [-28.13895046710968, 77.39400118589401, -0.49100350588560104], [27.20239944756031, 26.63169987499714, -0.568179995752871], [-8.226100355386734, 28.99329923093319, -0.4475339956115931], [-6.304699927568436, 31.015699729323387, -0.4669055051635951], [7.948700338602066, 34.64280068874359, -0.6909550284035504], [29.492700472474098, 36.974698305130005, -0.4240474954713136], [-2.271279925480485, 39.35965150594711, -0.35515849594958127], [20.215800032019615, 40.175601840019226, -0.4439075128175318], [37.62374818325043, 41.798148304224014, -0.7627399754710495], [37.55370154976845, 39.47234898805618, -0.7586299907416105], [9.426499716937542, 41.03204980492592, -0.43835651013068855], [13.063750229775906, 42.28150099515915, -0.5709499819204211], [41.033048182725906, 45.845698565244675, -0.4752720124088228], [33.58139842748642, 45.99134996533394, -0.3482509928289801], [-11.382900178432465, 50.53599923849106, -0.4297484993003309], [-9.724799543619156, 52.63249948620796, -0.46856151311658323], [1.32531498093158, 54.14950102567673, -0.39364848635159433], [21.679149940609932, 56.08149990439415, -0.8915049838833511], [-7.094900123775005, 56.24949932098389, -0.2856510109268129], [1.4173650415614247, 56.16400018334389, -0.3524665080476552], [21.55650034546852, 58.42699855566025, -0.7869700202718377], [-5.010500084608793, 58.408498764038086, -0.1840665063355118], [21.315500140190125, 60.202501714229584, -0.930839974898845], [-20.675400272011757, 59.72599983215332, -0.4312410019338131], [23.68205040693283, 60.3180006146431, -0.8510149782523513], [2.981750061735511, 62.135498970746994, -0.6534199928864837], [21.36404998600483, 62.197498977184296, -0.9009100031107664], [23.667050525546074, 62.220498919487, -0.9321449906565249], [21.369799971580505, 64.20250236988068, -0.9136850130744278], [2.955890027806163, 64.28299844264984, -0.6645200191996992], [0.9528499795123935, 64.2549991607666, -0.5900399992242455], [-19.538750872015953, 68.1765004992485, -0.6360149709507823], [-17.455050721764565, 74.44100081920624, -0.3727335133589804], [-48.354700207710266, 76.08850300312042, -0.3196930047124624], [-41.002098470926285, 75.655996799469, -0.5445550195872784], [-15.667499974370003, 78.8234993815422, -0.4726870101876557], [-45.88890075683594, 84.30299907922745, -0.4473844892345369], [-17.688749358057976, 85.02449840307236, -0.3999084874521941], [-19.64230090379715, 87.4750018119812, -0.22564550454262644], [37.931401282548904, 37.610750645399094, -0.45482348650693893], [36.0557995736599, 37.58599981665611, -0.42971898801624775], [36.17880120873451, 39.389051496982574, -0.40645498665980995], [38.94830122590065, 39.49445113539696, -0.3852935042232275], [-0.2626870118547231, 46.37559875845909, -0.3356630040798336], [-17.556799575686455, 80.85200190544128, -0.19141449593007565], [-17.635449767112732, 82.92300254106522, -0.3348469908814877], [16.89404994249344, 31.715549528598785, -0.14990799536462873], [37.43460029363632, 35.64634919166565, -0.26260848972015083], [15.352250076830387, 42.13609918951988, -0.22418350272346288], [-0.9463350288569927, 62.17750161886215, -0.38563451380468905], [-28.17610092461109, 65.04649668931961, -0.2713605063036084], [-21.72435075044632, 68.14149767160416, -0.24240500351879746], [-17.722150310873985, 78.94749939441681, -0.3335160145070404], [-34.16509926319122, 86.59400045871735, -0.18560800526756793], [-4.19899495318532, 34.808199852705, -0.1615344954188913], [26.965899392962456, 38.819048553705215, -0.18577949958853424], [36.19445115327835, 41.558001190423965, -0.18988500232808292], [38.00614923238754, 57.00850114226341, -0.21667999681085348], [1.5199650079011917, 58.28449875116348, -0.27793951448984444], [34.80985015630722, 57.080499827861786, -0.1595920039108023], [1.0862699709832668, 60.148000717163086, -0.21415100491140038], [-3.053789958357811, 60.32799929380417, -0.1937134948093444], [1.0030700359493494, 62.20950186252594, -0.3379860136192292], [-17.726149410009384, 76.5250027179718, -0.14406400441657752], [-24.06504936516285, 79.50150221586227, -0.14467400615103543], [-18.910599872469902, 80.01399785280228, -0.13133800530340523], [-18.94734986126423, 85.41549742221832, -0.167342004715465], [17.237450927495956, 27.663350105285645, 1.0998649522662163], [21.638650447130203, 29.194800183176994, 1.2559399474412203], [17.02135056257248, 31.63069859147072, 0.28601998928934336], [31.076550483703613, 36.74184903502464, -0.07380249735433608], [32.24065154790878, 45.979950577020645, -0.14204649778548628], [-0.14192500384524465, 48.22954908013344, -0.15311250172089785], [-0.9760800166986883, 60.961998999118805, -0.10828600352397189], [-24.23815056681633, 66.99249893426895, -0.10753150127129629], [-48.04230108857155, 76.73250138759613, 1.255364972166717], [13.24160024523735, 27.157699689269066, 1.125855022110045], [14.748499728739262, 26.48339979350567, 1.0260799899697304], [27.653850615024567, 26.998650282621384, 0.9309449815191329], [29.698699712753296, 26.476649567484856, 0.7197699742391706], [-13.173899613320827, 26.683000847697258, 0.6364950095303357], [15.512149780988693, 26.751400902867317, 1.026325044222176], [-31.599748879671097, 26.975400745868683, 1.0045849485322833], [-15.05540031939745, 26.717999950051308, 1.163964974693954], [-11.141800321638584, 27.50529907643795, 1.0500899516046047], [31.605150550603867, 26.930399239063263, 1.0545400436967611], [-29.608100652694702, 26.688499376177788, 0.9701550006866455], [-27.763700112700462, 26.91729925572872, 1.1814050376415253], [-33.457498997449875, 27.232149615883827, 0.9062999743036926], [-17.472799867391586, 26.994800195097923, 1.0645299917086959], [25.755349546670914, 27.536500245332718, 0.9880949510261416], [-35.35090014338493, 27.841050177812576, 0.9182100184261799], [-25.74305050075054, 27.37635001540184, 0.8882249821908772], [33.53625163435936, 27.936000376939774, 0.7187650189734995], [-23.534899577498436, 27.49045006930828, 0.8337399922311306], [-21.776599809527397, 27.64734998345375, 0.8723199716769159], [-19.514599815011024, 27.644149959087372, 0.857010018080473], [-9.717349894344807, 28.050750494003296, 0.5049050087109208], [11.914500035345554, 28.061749413609505, 0.3606454993132502], [23.40560033917427, 28.021100908517838, 0.8064649882726371], [-36.86570003628731, 28.525300323963165, 0.32997800735756755], [21.832900121808052, 28.384050354361534, 1.027515041641891], [-37.866100668907166, 29.55774962902069, 1.0708350455388427], [-9.011499583721161, 29.360249638557434, 1.2376699596643448], [11.490999720990658, 29.58814986050129, 1.0923000518232584], [17.38925091922283, 29.562799260020256, 0.08184600301319733], [35.55614873766899, 29.646949842572212, 0.8271450060419738], [-7.717799860984087, 30.140899121761322, 0.6512000109069049], [-38.78889977931976, 30.26380017399788, 0.4745580081362277], [-39.943549782037735, 31.5093994140625, 0.8454499766230583], [-6.929450202733278, 31.666401773691177, 1.0414449498057365], [10.692499577999115, 31.25470131635666, 1.1408899445086718], [36.55795007944107, 31.070200726389885, 0.9039299911819398], [9.34594962745905, 32.003749161958694, 0.981244957074523], [37.14405000209808, 32.15150162577629, 1.0389500530436635], [-5.732649937272072, 32.50344842672348, 0.3389350022189319], [-5.457600113004446, 33.57499837875366, 0.6256899796426296], [37.69094869494438, 33.593300729990005, 0.8564050076529384], [-41.34704917669296, 33.82189944386482, 1.036565052345395], [8.376900106668472, 33.00229832530022, 0.878644990734756], [7.521850056946278, 33.695101737976074, 1.2718900106847286], [-4.934865050017834, 35.654399544000626, 1.1083600111305714], [38.471098989248276, 35.63009947538376, 0.6854900275357068], [7.522699888795614, 35.57354956865311, 0.9534350247122347], [-42.1733483672142, 35.74265167117119, 0.8755350136198103], [35.065848380327225, 36.413151770830154, 0.07927999831736088], [33.46094861626625, 37.700798362493515, 0.5379149806685746], [-3.597474889829755, 37.72909939289093, 0.705829996149987], [7.652049884200096, 37.74454817175865, 0.9936849819496274], [31.617648899555206, 37.5996008515358, 0.5685000214725733], [-42.64625161886215, 37.205200642347336, 1.0187450097873807], [39.15645182132721, 37.60804980993271, 1.0002399794757366], [29.956849291920662, 37.917349487543106, 0.5855450290255249], [35.028401762247086, 37.61415183544159, 0.30318700009956956], [22.760450839996338, 37.53485158085823, 0.028706499506370164], [-43.046850711107254, 38.02505135536194, 0.9977750014513731], [28.314199298620224, 38.19635137915611, 0.16995900659821928], [-3.362024901434779, 39.58585113286972, 1.1352249421179295], [7.91229959577322, 38.96705061197281, 0.8650249801576138], [27.78870053589344, 39.92234915494919, 1.0100649669766426], [35.356950014829636, 39.68539834022522, 0.3096009895671159], [39.7305004298687, 39.62145000696182, 1.038530026562512], [-43.10955107212067, 39.31155055761337, 0.8335050079040229], [21.71025052666664, 39.24195095896721, 0.9717899956740439], [23.644300177693367, 39.19510170817375, 0.901584979146719], [25.666549801826477, 39.51049968600273, 0.9573500137776136], [19.495850428938866, 39.86779972910881, 0.9650950087234378], [8.683750405907631, 40.313348174095154, 0.9844000451266766], [-2.690389985218644, 41.6937991976738, 1.117079984396696], [-43.3136485517025, 41.4542518556118, 0.8489200263284147], [17.521750181913376, 40.09135067462921, 1.2457900447770953], [9.366899728775024, 41.03349894285202, 1.0306650074198842], [35.329051315784454, 41.53025150299072, 0.24079800641629845], [16.79830066859722, 41.058249771595, 0.5098499823361635], [11.201250366866589, 42.084548622369766, 1.1878600344061852], [15.250849537551403, 41.675448417663574, 0.7837599841877818], [-1.7548550385981798, 42.09575057029724, 0.20625200704671443], [13.137499801814556, 42.3891507089138, 1.1251949472352862], [40.29335081577301, 41.68979823589325, 0.8137000259011984], [-43.279800564050674, 43.57755184173584, 0.6851549842394888], [-1.6033999854698777, 43.51134970784187, 0.42833699262700975], [41.3532517850399, 44.08559948205948, 0.9639650234021246], [33.77804905176163, 44.03584823012352, 0.44995799544267356], [-1.2718300567939878, 45.67259922623634, 0.5979749839752913], [-43.26405003666878, 45.9522008895874, 0.4323979956097901], [32.098300755023956, 46.19130119681358, 0.8253200212493539], [33.51350128650665, 45.43749988079071, 0.0204444004339166], [41.742049157619476, 46.313248574733734, 0.85346499690786], [-19.56789940595627, 46.77315056324005, 1.1008200235664845], [-17.819099128246307, 46.56894877552986, 1.0965400142595172], [-1.1185399489477277, 48.08789864182472, 0.6642600055783987], [-20.27924917638302, 47.01244831085205, 0.47638651449233294], [-15.17034973949194, 47.12745174765587, 0.8006599964573979], [-21.83930017054081, 47.48005047440529, 1.1042150435969234], [41.87300056219101, 47.86720126867294, 0.9926899801939726], [-42.27510094642639, 48.081450164318085, 0.9161049965769053], [-13.095900416374207, 47.8801503777504, 0.9758649975992739], [32.46084973216057, 48.09600114822388, 1.057879999279976], [-22.926200181245804, 48.538848757743835, 0.8848049910739064], [0.14563900185748935, 50.35850033164024, 0.10800000018207356], [-41.60714894533157, 50.34499987959862, 0.930989976041019], [-10.94990037381649, 50.02300068736076, 0.39795698830857873], [32.93965011835098, 50.0354990363121, 0.8121500140987337], [41.78975149989128, 50.08750036358833, 0.7992549799382687], [-23.754499852657318, 50.20749941468239, 1.0377150028944016], [-41.1512516438961, 51.5265017747879, 0.46016048872843385], [-23.828299716114998, 52.13300138711929, 0.7984400144778192], [33.493299037218094, 52.50050127506256, 1.0352650424465537], [-8.967749774456024, 51.88500136137009, 0.5148450145497918], [41.285350918769836, 52.10249871015549, 0.8900599787011743], [0.2352745068492368, 52.48349905014038, 0.16072149446699768], [-8.252750150859356, 53.82499843835831, 0.16585949924774468], [34.03269872069359, 54.188501089811325, 1.028324943035841], [0.4322715103626251, 54.32499945163727, 0.1296720001846552], [40.084801614284515, 54.20849844813347, 1.0172900510951877], [-39.78180140256882, 54.188501089811325, 0.9828249458223581], [-23.661799728870392, 54.39700186252594, 1.0355249978601933], [-6.951950024813414, 54.1285015642643, 0.4517284978646785], [-6.573200225830078, 55.895499885082245, 0.13429549289867282], [39.18455168604851, 55.818501859903336, 0.31680098618380725], [-38.950249552726746, 55.773500353097916, 0.5327400285750628], [0.44396749581210315, 56.345999240875244, 0.12704900291282684], [-23.16479943692684, 56.299999356269836, 0.9466349729336798], [34.2739000916481, 55.582500994205475, 0.3919030132237822], [-38.21809962391853, 56.45649880170822, 1.0706749744713306], [35.57024896144867, 56.210000067949295, 0.9009449859149754], [37.70019859075546, 56.04049935936928, 1.0454149451106787], [-4.945269785821438, 56.302499026060104, 0.4768199869431555], [36.217100918293, 57.30399861931801, 0.14564150478690863], [-21.96729928255081, 58.447498828172684, 0.4206020093988627], [-4.6161748468875885, 57.829998433589935, 0.05821900049340911], [0.4836499865632504, 58.3450011909008, 0.10730049689300358], [36.92600131034851, 57.30900168418884, 0.16427300579380244], [-37.12495043873787, 57.87049978971481, 0.7185849826782942], [-35.92675179243088, 58.57349932193756, 1.4216250274330378], [-35.17179936170578, 59.870000928640366, 0.5733600119128823], [-21.6303002089262, 60.31300127506256, 0.5662500043399632], [-2.7383749838918447, 59.59299951791763, 0.03606509926612489], [-0.9646249818615615, 60.130998492240906, 0.07045899837976322], [0.23871799930930138, 59.735000133514404, 0.060237500292714685], [-33.751800656318665, 60.47600135207176, 1.2166800443083048], [-33.191751688718796, 61.521001160144806, 0.6235300097614527], [-21.566100418567657, 62.03150004148483, 0.631954986602068], [-20.34365013241768, 62.78599798679352, 0.05879949821974151], [-31.545300036668777, 62.13049963116646, 0.9105249773710966], [-30.783800408244133, 63.34599852561951, 0.21333550103008747], [-29.291199520230293, 63.970498740673065, 0.306716508930549], [-27.48589962720871, 64.16700035333633, 0.6632850272580981], [-20.40090039372444, 65.43850153684616, 0.05584150130744092], [-25.69199912250042, 65.54850190877914, 0.2748059923760593], [-21.83080092072487, 66.34850054979324, 0.21059249411337078], [-23.485349491238594, 66.38099998235703, 0.2888810122385621], [-20.955249667167664, 66.65600091218948, -0.03957610169891268], [-41.45380109548569, 70.20500302314758, 0.9471899829804897], [-39.567649364471436, 70.22599875926971, 0.8888450101949275], [-43.49185153841972, 70.40350139141083, 0.9804549627006054], [-37.499599158763885, 70.56649774312973, 0.9718050132505596], [-45.68219929933548, 70.89199870824814, 0.815009989310056], [-19.314350560307503, 70.90450078248978, 0.6928599905222654], [-35.61035171151161, 71.09200209379196, 0.8153599919751287], [-51.769498735666275, 71.18099927902222, 0.38573448546230793], [-50.792500376701355, 71.01850211620331, 0.031251449399860576], [-47.01225087046623, 71.29249721765518, 0.4807015066035092], [-19.462550058960915, 72.1369981765747, 0.9711500024423003], [-33.45644846558571, 71.9354972243309, 0.9625449893064797], [-50.2065010368824, 71.96349650621414, 1.131859957240522], [-48.16029965877533, 71.75250351428986, 1.0190550237894058], [-52.22950130701065, 72.42000102996826, 0.9652799926698208], [-21.794600412249565, 72.11200147867203, 1.0972149902954698], [-31.816449016332626, 72.41600006818771, 0.7515450124628842], [-17.728149890899658, 72.66899943351746, 0.14602950250264257], [-23.59969913959503, 72.33700156211853, 1.107544987462461], [-29.48259934782982, 73.03600013256073, 0.8095750235952437], [-51.74199864268303, 73.77500087022781, 1.1308899847790599], [-27.612950652837753, 73.15900176763535, 1.2597599998116493], [-25.671549141407013, 73.04450124502182, 0.9590699919499457], [-17.979450523853302, 73.88599961996078, 0.33314150641672313], [-50.439998507499695, 74.62900131940842, 0.6556300213560462], [-45.79145088791847, 75.09399950504303, 0.3259464865550399], [-46.12334817647934, 76.2849971652031, 1.1503100395202637], [-19.60024982690811, 74.3815004825592, 0.7749450160190463], [-49.417100846767426, 76.02100074291229, 1.3556600315496325], [-43.70279982686043, 75.90600103139877, 0.9580699843354523], [-41.522301733493805, 75.80649852752686, 0.9239449864253402], [-19.730649888515472, 76.65249705314636, 0.6246750126592815], [-39.444200694561005, 75.92850178480148, 0.8462899713777006], [-37.64135017991066, 76.044000685215, 0.9258849895559251], [-35.51024943590164, 76.12349838018417, 1.133474987000227], [-18.811499699950218, 76.49999856948853, -0.03238565113861114], [-29.500799253582954, 76.93099975585938, 1.0378649458289146], [-33.65755081176758, 76.10350102186203, 1.0519749484956264], [-31.732000410556793, 76.18600130081177, 1.1272350093349814], [-28.021199628710747, 77.45449990034103, 0.49058301374316216], [-27.417950332164764, 77.9855027794838, 0.894565018825233], [-25.759149342775345, 78.52400094270706, 0.9270749869756401], [-23.593299090862274, 78.86549830436707, 0.8265699725598097], [-19.732000306248665, 78.96649837493896, 0.6902349996380508], [-23.628849536180496, 80.34499734640121, 1.0118749924004078], [-19.80309933423996, 81.03299885988235, 0.5799150094389915], [-17.5292007625103, 80.93349635601044, 0.1578189985593781], [-27.58754976093769, 80.1519975066185, 1.058074994944036], [-25.74170008301735, 80.17700165510178, 0.9286950225941837], [-29.63149920105934, 80.50549775362015, 0.9216400212608278], [-31.653299927711487, 80.86150139570236, 0.8996149990707636], [-33.47339853644371, 81.2235027551651, 1.0557499481365085], [-35.585951060056686, 81.90499991178513, 0.9682850213721395], [-19.473500549793243, 82.92300254106522, 0.5942999850958586], [-37.84840181469917, 82.62600004673004, 0.7682800060138106], [-38.9411486685276, 83.19500088691711, 0.7837400189600885], [-40.24134948849678, 83.87350291013718, 0.8158899727277458], [-18.1062500923872, 84.28700268268585, 0.042029150790767744], [-41.73099994659424, 84.72950011491776, 0.9929999941959977], [-46.365100890398026, 85.12750267982483, 0.4989749868400395], [-19.83789913356304, 85.05450189113617, 0.33510051434859633], [-43.95439848303795, 85.51649749279022, 0.8664099732413888], [-35.02679988741875, 85.40499955415726, 0.960209988988936], [-33.78415107727051, 85.21950244903564, 1.191694987937808], [-47.76054993271828, 87.13550120592117, 0.3553039859980345], [-35.879600793123245, 85.9764963388443, 0.6242499803192914], [-33.30960124731064, 86.71700209379196, 0.7551650051027536], [-19.588900730013847, 86.70450001955032, 0.31099398620426655], [-37.72040084004402, 86.63850277662277, 1.0649049654603004], [-21.48579992353916, 87.00200170278549, 0.46742300037294626], [-47.9588508605957, 88.79899978637695, 1.0000199545174837], [-19.513899460434914, 89.02300149202347, 0.4270274948794395], [-23.692399263381958, 88.08249980211258, 0.15016199904493988], [-33.29885005950928, 88.38199824094772, 0.7636399823240936], [-21.467549726366997, 88.5159969329834, 0.2523614966776222], [-39.89645093679428, 88.81299942731857, 0.9815549710765481], [-29.562149196863174, 88.74949812889099, 0.8386449771933258], [-27.45174989104271, 88.45099806785583, 0.7186949951574206], [-25.817399844527245, 88.68899941444397, 0.45733549632132053], [-31.700249761343002, 88.79449963569641, 0.7850250112824142], [-45.93515023589134, 89.65949714183807, 0.3196739999111742], [-43.797049671411514, 90.65800160169601, 0.9265349945053458], [-41.78114980459213, 90.57050198316574, 0.9057500283233821], [-17.714550718665123, 90.79799801111221, 0.29032249585725367], [-19.17955093085766, 90.16600251197815, 0.4416049923747778], [-3.81884491071105, 36.118749529123306, 0.20081900584045798], [22.970600053668022, 36.49690002202988, 0.019368100765859708], [22.25870080292225, 37.13595122098923, 0.05994800085318275], [34.795600920915604, 42.92624816298485, 0.22109950077719986], [31.735550612211227, 44.00860145688057, 1.2074699625372887], [-1.1674000415951014, 50.314001739025116, 0.7895400049164891], [-40.574751794338226, 52.35299840569496, 1.168629969470203], [-0.9799499530345201, 56.30749836564064, 0.5225050263106823], [-3.0003099236637354, 58.33600088953972, 0.2680314937606454], [-0.8890599710866809, 58.27400088310242, 0.27708549168892205], [-21.30959928035736, 64.21949714422226, 0.4526750126387924], [-25.72295069694519, 64.25099819898605, 0.9966300567612052], [-44.853001832962036, 75.50700008869171, 0.41535351192578673], [-23.5431008040905, 86.91299706697464, 0.9346699807792902], [19.33090016245842, 28.098199516534805, 0.824834976810962], [-1.1578899575397372, 52.210498601198196, 0.7581450045108795], [-1.197375007905066, 54.25050109624863, 0.7765850168652833], [-21.63900062441826, 78.8784995675087, 1.0229500476270914], [5.089850164949894, 29.524799436330795, 1.2992450501769781], [7.269650232046843, 30.253350734710693, 1.324104960076511], [6.997900083661079, 31.700100749731064, 1.2004049494862556], [29.467349871993065, 39.35689851641655, 1.0243599535897374], [-9.175400249660015, 50.269000232219696, 1.1159200221300125], [-2.9295100830495358, 56.319501250982285, 0.6955250282771885], [-29.4428002089262, 62.61000037193298, 1.311114989221096], [-40.600501000881195, 89.80000019073486, 0.679530028719455], [3.626809921115637, 29.101349413394928, 1.1582949664443731], [3.88948991894722, 28.502050787210464, 1.1414800537750125], [33.52139890193939, 39.550598710775375, 1.0070049902424216], [33.633049577474594, 41.64564982056618, 1.1077950475737453], [-7.19119980931282, 52.19599977135658, 1.0774299735203385], [-5.094899795949459, 54.251499474048615, 0.9264000109396875], [-23.456349968910217, 64.2160028219223, 1.0272749932482839], [-21.198749542236328, 82.80699700117111, 1.347990008071065], [-21.944750100374222, 84.90350097417831, 1.056805020198226], [28.980400413274765, 26.646550744771957, 1.4605650212615728], [4.22697002068162, 28.52250076830387, 1.2162800412625074], [-6.264950148761272, 33.4603488445282, 1.5329449670389295], [38.952551782131195, 36.2294502556324, 1.6035550506785512], [16.121700406074524, 40.78239947557449, 1.5519700245931745], [40.93464836478233, 42.089350521564484, 1.384414965286851], [-2.773039974272251, 43.74074935913086, 1.5162850031629205], [-42.8243987262249, 44.412851333618164, 1.4781949575990438], [-15.725700184702873, 46.6374009847641, 1.602230011485517], [32.76195004582405, 48.89414831995964, 1.343984971754253], [-11.038349941372871, 48.24040085077286, 1.578285009600222], [-2.808555029332638, 54.35999855399132, 0.9879349963739514], [-23.176850751042366, 58.31500142812729, 1.5437949914485216], [-21.584799513220787, 76.55400037765503, 1.4154500095173717], [-21.38490043580532, 80.64799755811691, 1.0910100536420941], [-46.61634936928749, 86.42499893903732, 1.423330046236515], [-43.95819827914238, 85.8049988746643, 1.485120039433241], [-38.819700479507446, 87.4829962849617, 1.4548100298270583], [-25.552349165081978, 86.66899800300598, 1.525745028629899], [-47.23479971289635, 89.81700241565704, 1.2788899475708604], [-45.86485028266907, 89.85599875450134, 1.4659849693998694], [-4.5912498608231544, 37.68404945731163, 1.6955649480223656], [31.69279918074608, 39.4572988152504, 1.448209979571402], [-42.83434897661209, 39.95919972658157, 1.482730032876134], [29.70919944345951, 41.37500002980232, 1.3762949965894222], [31.802549958229065, 41.746750473976135, 1.3209900353103876], [-3.2495250925421715, 45.851949602365494, 1.7509550089016557], [-3.0199550092220306, 50.31000077724457, 1.4198949793353677], [-2.913380041718483, 52.38550156354904, 1.1741550406441092], [-5.203950218856335, 52.457500249147415, 1.306219957768917], [-23.328149691224098, 60.28499826788902, 1.63031998090446], [-23.460600525140762, 62.3444989323616, 1.3863899512216449], [-27.919849380850792, 62.49599903821945, 1.7406099941581488], [-21.312600001692772, 74.24049824476242, 1.499030040577054], [-23.62865023314953, 84.97849851846695, 1.4705349458381534], [-36.66149824857712, 28.60325016081333, 1.2562499614432454], [4.926280118525028, 31.551498919725418, 1.6201400430873036], [-2.806429984048009, 48.105448484420776, 1.5066449996083975], [35.337451845407486, 54.96950075030327, 1.8024799646809697], [-27.27070078253746, 87.53799647092819, 1.6810749657452106], [-8.174500428140163, 30.77320009469986, 1.8249700078740716], [5.466800183057785, 32.71475061774254, 1.6965599497780204], [-40.49070179462433, 32.87824988365173, 1.6595550114288926], [-9.145449846982956, 48.666998744010925, 1.815684954635799], [-6.941849831491709, 50.10100081562996, 1.6845399513840675], [-4.995489958673716, 50.05750060081482, 1.695950049906969], [-25.53590014576912, 62.20550090074539, 1.8700649961829185], [-32.39769861102104, 86.87300235033035, 1.7444499535486102], [3.7045299541205168, 30.94080090522766, 1.7179650021716952], [-4.243544768542051, 38.82269933819771, 1.795190037228167], [-31.83929994702339, 60.91950088739395, 1.8472949741408229], [-23.121999576687813, 81.94799721240997, 1.8370100297033787], [19.604749977588654, 27.66204997897148, 3.1520850025117397], [21.645549684762955, 29.801949858665466, 2.6851750444620848], [3.7070950493216515, 29.917949810624123, 2.5600700173527002], [3.8520449306815863, 31.3199982047081, 2.2817100398242474], [7.280449848622084, 33.309198915958405, 2.877800026908517], [31.192699447274208, 43.69939863681793, 2.8824799228459597], [-4.613054916262627, 48.1424517929554, 1.9311649957671762], [-23.674599826335907, 72.4714994430542, 2.6058850344270468], [-33.12055021524429, 75.70900022983551, 2.896019956097007], [-23.312000557780266, 76.61650329828262, 1.874850015155971], [-29.668599367141724, 76.7195001244545, 3.0890749767422676], [-27.464600279927254, 77.85250246524811, 2.3870549630373716], [15.415599569678307, 26.47539973258972, 2.262500114738941], [29.70764972269535, 26.79304964840412, 3.045985009521246], [-29.708899557590485, 27.12715044617653, 3.217630088329315], [-15.367399901151657, 27.090150862932205, 2.9701399616897106], [16.865849494934082, 26.4809001237154, 2.9979299288243055], [31.751450151205063, 26.67595073580742, 3.11088003218174], [-27.699999511241913, 26.77525021135807, 2.8995200991630554], [-25.74409916996956, 26.845799759030342, 3.0234549194574356], [-19.549500197172165, 26.692349463701248, 2.794790081679821], [-13.105450198054314, 27.823450043797493, 3.0198399908840656], [15.302750281989574, 27.081500738859177, 3.3232050482183695], [-21.47350087761879, 26.808850467205048, 3.156339982524514], [27.533549815416336, 27.4510495364666, 2.873634919524193], [-31.605400145053864, 27.516299858689308, 3.2631950452923775], [-23.586450144648552, 26.865750551223755, 2.9262350872159004], [-33.516451716423035, 27.71719917654991, 2.9534450732171535], [13.688400387763977, 27.904899790883064, 2.6047949213534594], [33.41514989733696, 27.823299169540405, 2.995589980855584], [-35.25305166840553, 28.359949588775635, 2.6275550480931997], [-11.22829969972372, 28.340650722384453, 2.858160063624382], [25.317849591374397, 27.70725078880787, 3.1165650580078363], [17.913250252604485, 27.038250118494034, 2.8013449627906084], [23.596450686454773, 27.77089923620224, 3.1340699642896652], [21.725349128246307, 27.753999456763268, 3.1081701163202524], [-35.964250564575195, 28.977200388908386, 3.2718100119382143], [-10.726500302553177, 28.86985056102276, 3.067529993131757], [34.56350043416023, 28.781550005078316, 1.9562500528991222], [12.946899980306625, 29.465749859809875, 3.0655849259346724], [-37.39570081233978, 29.822049662470818, 2.662984887138009], [4.950379952788353, 29.70154955983162, 2.9048449359834194], [35.483598709106445, 29.687149450182915, 3.020874923095107], [-9.172400459647179, 29.78610061109066, 2.9766999650746584], [6.901650223881006, 29.795000329613686, 3.086369950324297], [8.865299634635448, 30.211299657821655, 3.0392049811780453], [-39.43689912557602, 31.757600605487823, 2.6144750881940126], [11.226899921894073, 31.35475143790245, 2.913794945925474], [9.287649765610695, 31.293250620365143, 2.5179400108754635], [-8.302100002765656, 31.05819970369339, 2.811935031786561], [36.53459995985031, 30.91534972190857, 3.0755249317735434], [37.313248962163925, 32.14145079255104, 2.9949049931019545], [4.364245105534792, 31.88309818506241, 3.1143450178205967], [-7.200149819254875, 31.614001840353012, 3.3066601026803255], [-6.606049835681915, 33.29620137810707, 2.645459957420826], [5.133950151503086, 32.865799963474274, 2.991179935634136], [-40.16375169157982, 33.40994939208031, 3.1544400844722986], [38.174599409103394, 33.670298755168915, 3.060230053961277], [-5.887450184673071, 34.00830179452896, 3.1789098866283894], [7.993799634277821, 35.75655072927475, 2.381300088018179], [38.75099867582321, 35.09385138750076, 2.4544401094317436], [-5.506750196218491, 35.54685041308403, 3.055729903280735], [-41.29450023174286, 35.57619825005531, 2.9633298981934786], [39.22475129365921, 35.81155091524124, 3.3449800685048103], [-5.17694978043437, 37.59169951081276, 2.9600150883197784], [7.991899736225605, 36.99975088238716, 2.2844900377094746], [39.76975008845329, 37.664901465177536, 2.86257010884583], [-41.947148740291595, 37.48074918985367, 2.989724976941943], [8.46050027757883, 37.73890063166618, 3.2233200035989285], [-5.085600074380636, 39.64414820075035, 2.8144600801169872], [40.47210142016411, 39.25039991736412, 2.840995090082288], [24.152349680662155, 38.82564976811409, 2.6148150209337473], [-42.12860018014908, 39.62624818086624, 3.029430052265525], [9.009449742734432, 39.600301533937454, 3.045859979465604], [21.75075002014637, 38.869600743055344, 2.4491699878126383], [25.66324919462204, 39.15505111217499, 3.0130099039524794], [19.699400290846825, 39.12745043635368, 2.4754900950938463], [17.46015064418316, 39.59299996495247, 2.9416850302368402], [27.420800179243088, 39.9852991104126, 3.01794009283185], [17.136549577116966, 41.582200676202774, 3.3297999761998653], [41.33540019392967, 41.641898453235626, 2.9246550984680653], [9.848999790847301, 41.12650081515312, 2.9113299679011106], [-42.46934875845909, 41.57869890332222, 3.0431849882006645], [29.798200353980064, 41.885800659656525, 2.986445091664791], [11.196049861609936, 42.23819822072983, 2.995315007865429], [15.474800020456314, 42.40269958972931, 2.5502799544483423], [-3.874490037560463, 42.01744869351387, 2.082565100863576], [13.215100392699242, 43.16664859652519, 3.2992749474942684], [41.77194833755493, 43.4938482940197, 2.9377099126577377], [-42.127348482608795, 43.899450451135635, 3.1429899390786886], [-3.8005050737410784, 43.88580098748207, 2.1756149362772703], [-42.063549160957336, 46.07740044593811, 2.942960010841489], [42.006999254226685, 45.889850705862045, 2.980859950184822], [-17.42440089583397, 45.6000491976738, 3.085504984483123], [32.116301357746124, 45.97270116209984, 3.0176849104464054], [-19.744349643588066, 46.07829824090004, 2.943095052614808], [-14.854449778795242, 45.77295109629631, 2.830615034326911], [-13.328149914741516, 46.82154953479767, 2.03876500017941], [-11.150499805808067, 45.92994973063469, 2.835189923644066], [-22.14515022933483, 47.09234833717346, 2.9361199121922255], [-41.332051157951355, 48.257701098918915, 2.880479907616973], [-23.377949371933937, 47.950901091098785, 3.189519979059696], [-8.853999897837639, 47.41805046796799, 2.311500022187829], [32.85659849643707, 48.43840003013611, 2.9251249507069588], [41.90640151500702, 48.266150057315826, 3.0657199677079916], [-24.192649871110916, 49.83010143041611, 2.509854966774583], [41.4327010512352, 50.26400089263916, 2.9841200448572636], [-41.35705158114433, 49.67175051569939, 2.34096497297287], [-40.226198732852936, 50.38300156593323, 3.3774098847061396], [33.461350947618484, 50.323501229286194, 3.1399698927998543], [-39.57555070519447, 52.24499851465225, 2.8612050227820873], [-25.085749104619026, 52.083998918533325, 3.025975078344345], [41.07009992003441, 51.77700147032738, 2.380630001425743], [34.24545004963875, 51.95600166916847, 3.256320022046566], [40.16049951314926, 52.32749879360199, 3.1487150117754936], [-24.47660081088543, 53.04750055074692, 2.2100000642240047], [-39.34270143508911, 53.66399884223938, 2.30960501357913], [-24.40585009753704, 54.3614998459816, 2.3255751002579927], [39.268698543310165, 53.729500621557236, 2.6187049224972725], [35.75170040130615, 53.987499326467514, 2.8489551041275263], [37.74794936180115, 54.023001343011856, 2.9721250757575035], [-37.872299551963806, 54.16649952530861, 3.300424898043275], [-37.25000098347664, 56.10150098800659, 2.560694934800267], [-24.347050115466118, 56.28050118684769, 2.27577006444335], [-24.119850248098373, 58.255501091480255, 2.1513348910957575], [-35.29990091919899, 57.705000042915344, 2.622555010020733], [-33.4494486451149, 59.67450141906738, 2.1586299408227205], [-31.540848314762115, 59.97550114989281, 2.493770094588399], [-29.49034981429577, 61.48900091648102, 2.1311601158231497], [-25.847500190138817, 61.51850149035454, 2.112860092893243], [-41.55445098876953, 70.4675018787384, 3.014284884557128], [-39.41889852285385, 70.52549719810486, 3.010659944266081], [-43.911948800086975, 70.95649838447571, 3.096055006608367], [-37.52930089831352, 70.93100249767303, 3.109459998086095], [-36.05839982628822, 71.23599946498871, 2.7607399970293045], [-45.52444815635681, 71.31549715995789, 2.5654800701886415], [-46.36809974908829, 71.53750211000443, 2.905044937506318], [-35.02359986305237, 71.67500257492065, 2.921140054240823], [-33.53219851851463, 72.09549844264984, 2.783325035125017], [-48.07234928011894, 72.10700213909149, 3.1833499670028687], [-51.697999238967896, 72.85100221633911, 2.8195499908179045], [-50.1680001616478, 72.80249893665314, 3.097639884799719], [-25.556549429893494, 72.0914974808693, 3.112724982202053], [-31.588751822710037, 72.39449769258499, 3.0824749264866114], [-29.490049928426743, 72.4010020494461, 2.998614916577935], [-27.67910063266754, 72.11349904537201, 3.004459897056222], [-51.546499133110046, 74.10400360822678, 2.9629149939864874], [-23.099249228835106, 75.02249628305435, 1.9842199981212616], [-50.71450024843216, 74.95500147342682, 3.2280199229717255], [-50.13149976730347, 76.66599750518799, 2.9705949127674103], [-35.613950341939926, 74.99650120735168, 2.7702751103788614], [-34.263499081134796, 75.25850087404251, 3.3094799146056175], [-42.020950466394424, 75.9735032916069, 2.883075037971139], [-37.57705166935921, 75.58450102806091, 2.4392399936914444], [-43.96580159664154, 76.4480009675026, 3.0351949390023947], [-45.862000435590744, 77.12250202894211, 2.904084976762533], [-25.484150275588036, 77.97600328922272, 2.20466498285532], [-23.98419938981533, 78.0860036611557, 2.043650019913912], [-29.555700719356537, 80.12749999761581, 2.9589750338345766], [-27.6117492467165, 80.7190015912056, 3.229649970307946], [-31.658850610256195, 80.36000281572342, 3.0409700702875853], [-25.863949209451675, 80.98050206899643, 2.7630100958049297], [-24.316800758242607, 81.106998026371, 2.2243999410420656], [-33.6323007941246, 80.89549839496613, 2.9827600810676813], [-35.36774963140488, 81.40149712562561, 3.1425401102751493], [-36.40874847769737, 81.91650360822678, 2.404195023700595], [-37.664901465177536, 82.29649811983109, 3.0423500575125217], [-22.254150360822678, 83.18249881267548, 2.0620899740606546], [-23.446999490261078, 82.93049782514572, 2.3723049089312553], [-25.42649954557419, 84.61649715900421, 2.3969700559973717], [-33.47339853644371, 84.94099974632263, 2.90862494148314], [-35.59264913201332, 85.23149788379669, 3.059745067730546], [-41.681550443172455, 84.70399677753448, 3.035154892131686], [-43.79890114068985, 85.46499907970428, 3.2256999984383583], [-29.675550758838654, 84.58299934864044, 2.884645015001297], [-45.92734947800636, 86.61749958992004, 2.9072000179439783], [-29.338249936699867, 85.79400181770325, 1.932239974848926], [-43.8227504491806, 85.74900031089783, 2.492730040103197], [-31.658899039030075, 86.86549961566925, 2.273679943755269], [-29.53770011663437, 86.89799904823303, 2.508535049855709], [-27.401499450206757, 86.80350333452225, 2.2667599841952324], [-38.19974884390831, 86.24400198459625, 2.8309649787843227], [-39.64579850435257, 87.15599775314331, 3.288045059889555], [-40.35795107483864, 88.55850249528885, 2.6691548991948366], [-29.698949307203293, 88.04299682378769, 2.3085149005055428], [-31.598150730133057, 88.12999725341797, 2.2472450509667397], [-41.473448276519775, 88.88450264930725, 3.516244934871793], [-47.11874946951866, 89.51199799776077, 2.5788950733840466], [-45.889850705862045, 89.93600308895111, 3.083379939198494], [-43.77250000834465, 89.33400362730026, 3.1228449661284685], [-43.41164976358414, 90.20700305700302, 2.2319499403238297], [-41.74380004405975, 90.12600034475327, 2.335109980776906], [-17.444800585508347, 26.80410072207451, 3.0406450387090445], [34.48919951915741, 28.81545014679432, 3.084939904510975], [21.549250930547714, 31.198350712656975, 3.194809891283512], [-41.05360060930252, 34.04795005917549, 2.502074930816889], [-5.314600188285112, 46.2353490293026, 2.600365085527301], [-21.584149450063705, 46.582598239183426, 3.3834900241345167], [-10.380949825048447, 47.59715124964714, 2.160009928047657], [-5.487999878823757, 47.43940010666847, 2.422885037958622], [-6.69594993814826, 47.63295128941536, 2.6727349031716585], [-7.611500099301338, 48.58750104904175, 2.009775023907423], [-33.57435017824173, 58.32299962639809, 2.936410019174218], [-24.323999881744385, 59.78750064969063, 2.1213949657976627], [-25.516699999570847, 60.31399965286255, 2.4148051161319017], [17.94539950788021, 61.60949915647507, 3.030814928933978], [-27.617650106549263, 61.67399883270264, 2.223445102572441], [-23.65175075829029, 74.06499981880188, 2.4741198867559433], [-24.142000824213028, 76.46100223064423, 2.1494401153177023], [-39.583150297403336, 75.79000294208527, 2.7344950940459967], [-31.814251095056534, 76.26699656248093, 3.447629977017641], [-25.790799409151077, 76.37699693441391, 2.615289995446801], [-48.222798854112625, 78.04449647665024, 3.07629001326859], [-39.63160142302513, 83.10449868440628, 3.318019909784198], [-27.577649801969528, 84.60850268602371, 2.9209800995886326], [-46.698350459337234, 88.59600126743317, 3.2261100132018328], [20.40559984743595, 28.72134931385517, 2.4652150459587574], [-5.285600200295448, 41.8848991394043, 3.06990509852767], [-5.082750227302313, 43.80929842591286, 2.7711549773812294], [-25.743799284100533, 58.290500193834305, 2.8690900653600693], [17.79934950172901, 60.34399941563606, 3.267359919846058], [-29.788199812173843, 60.13299897313118, 2.881784923374653], [-37.35170140862465, 85.54399758577347, 3.2586900051683187], [-31.694501638412476, 84.85999703407288, 2.9438650235533714], [-12.989499606192112, 45.529648661613464, 3.06152505800128], [-35.49540042877197, 56.29250034689903, 3.438360057771206], [19.39365081489086, 60.18200144171715, 3.2529900781810284], [-27.49055065214634, 60.03599986433983, 2.8805648908019066], [-8.719050325453281, 45.69169878959656, 3.1276799272745848], [-25.560850277543068, 56.21949955821037, 3.1263199634850025], [19.13050003349781, 58.715999126434326, 3.249174915254116], [18.963199108839035, 61.557501554489136, 3.1847599893808365], [-37.38725185394287, 74.64049756526947, 3.183794906362891], [-25.483399629592896, 82.81350135803223, 3.201205050572753], [-38.31309825181961, 30.964599922299385, 3.323789918795228], [23.149000480771065, 38.58400136232376, 3.4960999619215727], [-6.180699914693832, 44.426798820495605, 3.377079963684082], [-7.182300090789795, 46.132899820804596, 3.5029249265789986], [-24.803200736641884, 49.89689961075783, 3.586655016988516], [34.651000052690506, 53.13749983906746, 2.8440600726753473], [-25.594599545001984, 54.13249880075455, 3.416654886677861], [-31.922750174999237, 58.143500238657, 3.4667400177568197], [-26.235099881887436, 71.41300290822983, 3.3818550873547792], [-25.665100663900375, 74.4204968214035, 3.2929799053817987], [-27.62809954583645, 76.4785036444664, 3.125069895759225], [-50.313498824834824, 78.5055011510849, 3.2730100210756063], [11.321449652314186, 30.136149376630783, 3.787419991567731], [12.527350336313248, 31.11105039715767, 3.7565650418400764], [8.724099956452847, 33.521849662065506, 3.6169150844216347], [8.543300442397594, 35.74340045452118, 3.6789351142942905], [18.150899559259415, 38.77114877104759, 3.3653751015663147], [19.118700176477432, 38.57779875397682, 3.6454100627452135], [40.96360132098198, 40.07070139050484, 3.322344971820712], [15.2235496789217, 43.304700404405594, 3.511805087327957], [-9.67315025627613, 44.08305138349533, 3.658104920759797], [35.08710116147995, 52.627500146627426, 3.737384919077158], [18.973900005221367, 56.44199997186661, 3.39548010379076], [17.84284971654415, 58.352500200271606, 3.3950048964470625], [-38.99750113487244, 75.09549707174301, 3.384235082194209], [21.485500037670135, 38.572851568460464, 3.592344932258129], [17.740849405527115, 56.09700083732605, 3.515365067869425], [-27.664249762892723, 58.2754984498024, 3.3501749858260155], [-46.79210111498833, 77.70349830389023, 3.530754940584302], [-40.62705114483833, 83.74600112438202, 3.6223100032657385], [-27.379799634218216, 82.60399848222733, 3.8375400472432375], [-14.394950121641159, 44.75940018892288, 3.621750045567751], [17.891699448227882, 54.22050133347511, 3.809570102021098], [19.070850685238838, 53.740501403808594, 3.848025109618902], [-33.62544998526573, 56.775499135255814, 3.804920008406043], [-29.409049078822136, 58.074500411748886, 3.6907049361616373], [-51.45600065588951, 78.38699966669083, 3.794125048443675], [-10.958700440824032, 43.64459961652756, 3.913590218871832], [-27.66535058617592, 56.43250048160553, 3.82775510661304], [15.432150103151798, 28.179200366139412, 4.693484865128994], [13.206150382757187, 29.05995026230812, 4.499984905123711], [-8.708000183105469, 29.228050261735916, 4.149015061557293], [-7.2997501119971275, 30.42224980890751, 3.9017898961901665], [20.986750721931458, 31.946398317813873, 5.012600217014551], [-6.810449995100498, 41.76095128059387, 5.408749915659428], [12.225099839270115, 42.94690117239952, 4.467404913157225], [-13.236450031399727, 44.17094960808754, 3.8073949981480837], [41.833650320768356, 43.772049248218536, 5.117999855428934], [-40.97545146942139, 46.337950974702835, 4.37641516327858], [32.63850137591362, 47.28090018033981, 3.7062501069158316], [-36.32289916276932, 54.892998188734055, 3.7744499277323484], [-27.595950290560722, 74.59349930286407, 3.930944949388504], [-29.01894971728325, 83.54000002145767, 3.8842549547553062], [17.225949093699455, 27.212299406528473, 5.0490000285208225], [21.438149735331535, 26.90665051341057, 4.9135698936879635], [27.623750269412994, 27.47355028986931, 4.929115064442158], [-15.58264996856451, 28.25620025396347, 4.668219946324825], [23.56790006160736, 27.3655503988266, 5.001700017601252], [33.51765125989914, 27.72424928843975, 4.945415072143078], [-33.42375159263611, 28.387200087308884, 4.277764819562435], [-11.154649779200554, 27.10055001080036, 4.935909993946552], [-8.832599967718124, 27.260050177574158, 4.905790090560913], [-35.42499989271164, 29.796449467539787, 4.798990208655596], [-6.826499942690134, 29.65960092842579, 4.394189920276403], [11.07189990580082, 29.358649626374245, 4.847859963774681], [4.966005217283964, 29.771950095891953, 5.172249861061573], [-37.47659921646118, 31.711749732494354, 5.104850046336651], [-5.967400036752224, 31.867101788520813, 4.00995509698987], [6.742499768733978, 32.849349081516266, 4.180740099400282], [9.161850437521935, 33.21145102381706, 4.377440083771944], [-4.920495208352804, 33.45499932765961, 4.903505090624094], [39.42820057272911, 35.59799864888191, 4.984245169907808], [9.486050345003605, 37.46794909238815, 5.026599857956171], [40.32585024833679, 37.68004849553108, 5.008149892091751], [-5.76404994353652, 39.42330181598663, 4.938735160976648], [27.66069956123829, 40.02169892191887, 4.927179776132107], [-41.458748281002045, 41.82010143995285, 4.6292198821902275], [41.57175123691559, 41.756950318813324, 5.4743001237511635], [29.91040050983429, 41.959598660469055, 5.164800211787224], [17.261099070310593, 43.91314834356308, 5.143050104379654], [-17.52915047109127, 43.99130120873451, 4.744779784232378], [-19.904449582099915, 45.15425115823746, 4.38365014269948], [32.16870129108429, 45.64389958977699, 4.875999875366688], [-7.611299864947796, 45.64395174384117, 4.1790250688791275], [-21.5620007365942, 45.63489928841591, 4.98044490814209], [-40.60870036482811, 48.32195118069649, 3.983614966273308], [-25.84715001285076, 50.23200064897537, 4.5759351924061775], [-37.7376489341259, 52.02300101518631, 4.555314779281616], [35.73400154709816, 51.69700086116791, 4.806914832442999], [37.772901356220245, 52.06650123000145, 4.821904934942722], [-27.180049568414688, 54.78399991989136, 3.946519922465086], [17.379499971866608, 54.117001593112946, 5.211350042372942], [17.619650810956955, 56.27249926328659, 5.123550072312355], [19.617799669504166, 58.60250070691109, 5.204500164836645], [18.82600039243698, 61.3815002143383, 4.092310089617968], [-41.69854894280434, 70.96250355243683, 5.2466499619185925], [-26.27749927341938, 72.47299700975418, 4.221574869006872], [-51.23399943113327, 74.22050088644028, 4.311915021389723], [-27.678249403834343, 73.6050009727478, 4.34513995423913], [-41.662249714136124, 75.08250325918198, 4.929365124553442], [-30.226200819015503, 75.33799856901169, 4.0580350905656815], [-43.980348855257034, 76.01399719715118, 4.948885180056095], [-50.11050030589104, 76.59050077199936, 5.0650998018682], [-52.27949842810631, 78.65700125694275, 4.9331397749483585], [-50.15350133180618, 79.10650223493576, 5.02335000783205], [-31.709298491477966, 80.92399686574936, 5.041900090873241], [-29.63864989578724, 81.08749985694885, 4.522955045104027], [-39.5655483007431, 81.02049678564072, 5.230099894106388], [-37.636898458004, 81.68549835681915, 4.417350050061941], [-27.83234976232052, 82.7149972319603, 4.239249974489212], [-29.80794943869114, 82.64350146055222, 4.907680209726095], [-31.775351613759995, 84.02500301599503, 4.612455144524574], [-37.40815073251724, 85.18899977207184, 5.097549874335527], [-44.05120015144348, 84.83350276947021, 5.009000189602375], [-41.65320098400116, 87.20450103282928, 5.206999834626913], [-43.794699013233185, 88.85049819946289, 4.8614852130413055], [29.91425059735775, 26.88639983534813, 4.9110399559140205], [31.617101281881332, 26.680899783968925, 4.942834842950106], [-19.724000245332718, 27.78954990208149, 4.865239840000868], [-27.60379947721958, 27.83004939556122, 4.910754971206188], [-17.75760017335415, 27.957599610090256, 4.704955033957958], [-13.173749670386314, 27.759699150919914, 5.078999791294336], [-36.82884946465492, 30.343350023031235, 4.143354948610067], [6.992400158196688, 29.67110089957714, 4.871075041592121], [4.706354811787605, 31.924650073051453, 4.904919769614935], [-5.217450205236673, 31.780801713466644, 5.082449875771999], [5.0178999081254005, 32.68684819340706, 5.040000192821026], [-39.29080069065094, 33.74135121703148, 4.750589840114117], [-40.60174897313118, 35.24374961853027, 4.044179804623127], [-39.637599140405655, 35.62914952635765, 5.316350143402815], [-4.8215351998806, 35.754650831222534, 4.794064909219742], [-5.258449818938971, 37.58944943547249, 5.00435009598732], [19.211500883102417, 37.974100559949875, 5.322400014847517], [21.801600232720375, 38.163501769304276, 4.930494818836451], [9.809100069105625, 39.44329917430878, 4.641234874725342], [11.266149580478668, 41.816048324108124, 5.070750135928392], [-11.890499852597713, 43.26954856514931, 4.211355000734329], [31.085850670933723, 43.481599539518356, 4.964699968695641], [-8.80844984203577, 43.69734972715378, 4.861279856413603], [-15.492299571633339, 43.38369891047478, 4.662239924073219], [-13.24899960309267, 43.2671494781971, 4.269740078598261], [-7.085899822413921, 43.76155138015747, 4.675880074501038], [33.113401383161545, 48.08640107512474, 4.887320101261139], [-25.216149166226387, 48.34344983100891, 5.039250012487173], [34.0052992105484, 49.90905150771141, 4.8768650740385056], [-39.228398352861404, 49.91234838962555, 4.646845161914825], [39.856649935245514, 50.263501703739166, 5.319999996572733], [39.497051388025284, 51.7595000565052, 4.408789798617363], [-26.273300871253014, 52.384499460458755, 4.200494848191738], [19.448550418019295, 52.25300043821335, 4.857160151004791], [17.77149923145771, 52.62349918484688, 5.163449794054031], [-36.93785145878792, 53.75500023365021, 4.15609497576952], [20.192600786685944, 54.33899909257889, 4.534175153821707], [-35.382501780986786, 54.10800129175186, 4.479669965803623], [-27.723899111151695, 54.20650169253349, 4.326355177909136], [-28.149399906396866, 55.73999881744385, 4.126625135540962], [-33.368248492479324, 56.024499237537384, 4.221950192004442], [-29.631199315190315, 56.291498243808746, 4.2570848017930984], [-31.66845068335533, 56.28599971532822, 4.36459481716156], [17.896000295877457, 58.173999190330505, 4.753245040774345], [18.278950825333595, 60.22699922323227, 4.355330020189285], [-39.36760127544403, 70.9884986281395, 5.013099871575832], [-43.45174878835678, 71.08250260353088, 4.678665194660425], [-37.68309950828552, 71.24900072813034, 4.8453048802912235], [-29.847849160432816, 71.25700265169144, 4.528365097939968], [-27.68540009856224, 72.11100310087204, 4.6994551084935665], [-46.06039822101593, 71.9354972243309, 5.021799821406603], [-31.912699341773987, 72.02000170946121, 5.403249990195036], [-33.19625183939934, 72.45899736881256, 5.363500211387873], [-48.189349472522736, 72.70249724388123, 5.080750212073326], [-50.69800093770027, 74.50450211763382, 5.01195015385747], [-39.70760107040405, 75.25549829006195, 4.998680204153061], [-37.769898772239685, 74.65700060129166, 5.022500175982714], [-35.60329973697662, 74.53799992799759, 5.253199953585863], [-29.62310053408146, 74.13499802350998, 4.681630060076714], [-31.66314959526062, 75.62349736690521, 4.267424810677767], [-47.985151410102844, 78.30899953842163, 5.229350179433823], [-33.72415155172348, 81.02700114250183, 5.216049961745739], [-40.35079851746559, 82.01000094413757, 4.548780154436827], [-41.7216494679451, 82.846499979496, 5.042199976742268], [-42.32550039887428, 84.0035006403923, 4.619610030204058], [-35.64475104212761, 84.76649969816208, 4.80171013623476], [-45.49089819192886, 86.8690013885498, 4.942660219967365], [-39.39775004982948, 86.22299879789352, 5.0663999281823635], [18.074149265885353, 26.513900607824326, 4.558530170470476], [19.0443005412817, 26.517799124121666, 4.517844878137112], [19.605550915002823, 26.603300124406815, 5.084400065243244], [-23.600250482559204, 27.853500097990036, 5.2535999566316605], [-25.712300091981888, 27.949800714850426, 5.324949976056814], [-21.761350333690643, 27.760950848460197, 4.979595076292753], [-29.448499903082848, 27.931099757552147, 4.892319906502962], [-31.726449728012085, 28.243349865078926, 4.862375091761351], [25.771450251340866, 27.51374989748001, 5.127950105816126], [-33.67545083165169, 29.405150562524796, 5.410199984908104], [35.60350090265274, 29.78760004043579, 5.004949867725372], [9.08220000565052, 29.495950788259506, 5.054099950939417], [36.517150700092316, 30.877750366926193, 4.449999891221523], [37.198200821876526, 31.853601336479187, 5.167200230062008], [-38.77570107579231, 32.32390061020851, 4.339700099080801], [38.386449217796326, 33.686649054288864, 5.011450033634901], [9.593700058758259, 35.650551319122314, 5.063400138169527], [-41.123151779174805, 37.45725005865097, 4.46606520563364], [18.356099724769592, 38.28360140323639, 4.604124929755926], [23.66740070283413, 38.41039910912514, 5.017300136387348], [18.21414940059185, 39.271801710128784, 4.845209885388613], [25.906799361109734, 39.017099887132645, 4.813964944332838], [-41.125550866127014, 39.46999832987785, 4.601425025612116], [41.26309975981712, 40.418051183223724, 4.962204955518246], [18.15659925341606, 41.95794835686684, 4.6349200420081615], [-11.211900040507317, 41.59950092434883, 4.545609932392836], [30.613450333476067, 42.76049882173538, 4.307284951210022], [-41.13880172371864, 43.98145154118538, 4.59246477112174], [13.078750111162663, 43.389901518821716, 4.995389841496944], [15.173399820923805, 44.18184980750084, 5.103600211441517], [41.626349091529846, 45.91275006532669, 5.387249868363142], [-23.138750344514847, 46.60404846072197, 5.125999916344881], [41.34200140833855, 48.07104915380478, 4.8506599850952625], [-39.667848497629166, 47.998301684856415, 4.909984767436981], [-23.990249261260033, 47.362301498651505, 4.890750162303448], [40.82769900560379, 49.74659904837608, 4.611094947904348], [20.24790085852146, 56.12049996852875, 4.522370174527168], [19.622299820184708, 60.05449965596199, 4.787929821759462], [-44.400401413440704, 71.50749862194061, 4.935049917548895], [-35.63909977674484, 71.63599878549576, 4.4792150147259235], [-49.633100628852844, 73.22649657726288, 5.143600050359964], [-33.729299902915955, 74.692003428936, 4.985334817320108], [-33.01050141453743, 75.55299997329712, 4.478625021874905], [-45.60194909572601, 76.97299867868423, 5.229999776929617], [-46.83090001344681, 77.78199762105942, 4.9940901808440685], [-35.57074815034866, 81.2619999051094, 5.018049851059914], [-33.52845087647438, 84.37500149011612, 5.021700169891119], [-42.00815036892891, 88.40849995613098, 4.2030951008200645], [-46.043701469898224, 89.1529992222786, 5.019050091505051], [-45.44924944639206, 89.93449807167053, 4.686249885708094], [20.898550748825073, 33.2489013671875, 5.3872000426054], [40.77395051717758, 38.914501667022705, 5.033350083976984], [-6.053300108760595, 41.13835096359253, 4.598794970661402], [-27.773749083280563, 52.30199918150902, 4.802050068974495], [-29.540499672293663, 54.09400165081024, 4.754825029522181], [-33.40829908847809, 54.25399914383888, 4.748644772917032], [-31.666100025177002, 74.18549805879593, 5.0221998244524], [-6.888499949127436, 27.869800105690956, 5.228249821811914], [-5.7508498430252075, 29.54214997589588, 5.242350045591593], [3.784209955483675, 31.833000481128693, 5.303650163114071], [6.869299802929163, 32.32885152101517, 5.094400141388178], [8.782650344073772, 32.327800989151, 5.218449980020523], [11.03460043668747, 33.42939913272858, 5.090199876576662], [-12.94384989887476, 41.42419993877411, 4.95315995067358], [-42.90580004453659, 87.72599697113037, 4.826834890991449], [-27.496550232172012, 50.13899877667427, 5.507050082087517], [-35.82580015063286, 52.443500608205795, 5.1574502140283585], [-31.798798590898514, 54.19500172138214, 4.925264976918697], [15.39320033043623, 28.780100867152214, 5.527600180357695], [-11.034299619495869, 39.74359855055809, 5.154449958354235], [18.780050799250603, 41.60090163350105, 5.313150119036436], [-9.418799541890621, 41.748300194740295, 5.501599982380867], [-15.118050388991833, 41.661448776721954, 5.393149796873331], [-19.164299592375755, 44.06680166721344, 5.287449806928635], [-39.83030095696449, 45.896001160144806, 5.413599777966738], [-37.4237485229969, 50.0359982252121, 5.455099977552891], [21.069299429655075, 52.03849822282791, 5.566350184381008], [-42.9111011326313, 75.21750032901764, 5.47245005145669], [-39.60774838924408, 76.1369988322258, 5.626999773085117], [-53.71750146150589, 79.00600135326385, 5.446250084787607], [-37.497200071811676, 81.52049779891968, 5.468199960887432], [-15.460100024938583, 28.739849105477333, 5.509399808943272], [13.330250047147274, 28.467699885368347, 5.488649941980839], [-35.99284961819649, 31.0379508882761, 5.574299953877926], [11.333550326526165, 32.41024911403656, 5.437150131911039], [-38.08329999446869, 33.59150141477585, 5.702800117433071], [10.778450407087803, 35.30459851026535, 5.861199926584959], [-40.08080065250397, 37.693701684474945, 5.588950123637915], [-11.117850430309772, 37.46579959988594, 5.281850229948759], [-12.745399959385395, 38.01824897527695, 5.48115000128746], [-40.20245000720024, 39.33585062623024, 5.734450183808804], [25.175800547003746, 38.67284953594208, 5.4941498674452305], [10.592049919068813, 39.76774960756302, 5.70000009611249], [19.307050853967667, 39.69449922442436, 5.567450076341629], [-40.02914950251579, 41.39145091176033, 5.738249979913235], [-40.06759822368622, 43.692201375961304, 5.63920009881258], [-20.442049950361252, 44.770050793886185, 5.442399997264147], [32.78139978647232, 46.919599175453186, 5.51265012472868], [34.947749227285385, 50.50399899482727, 5.510999821126461], [-29.59664911031723, 52.269499748945236, 5.361349787563086], [-33.494699746370316, 52.14349925518036, 5.507550202310085], [20.8468995988369, 54.13400009274483, 5.243849940598011], [-31.705550849437714, 52.01449990272522, 5.620049778372049], [20.835749804973602, 56.385498493909836, 5.293849855661392], [20.66349983215332, 57.757001370191574, 5.50934998318553], [-31.77184984087944, 71.21600210666656, 5.417199805378914], [-29.5951496809721, 72.28600233793259, 5.18900016322732], [-33.32924842834473, 71.17550075054169, 5.429349839687347], [-35.506948828697205, 71.42099738121033, 5.3936499170959], [-40.8313013613224, 81.48399740457535, 5.344899836927652], [-42.945001274347305, 83.52649956941605, 5.319749936461449], [-31.569648534059525, 82.74450153112411, 5.677199922502041], [2.535345032811165, 27.873100712895393, 5.633799824863672], [13.087100349366665, 32.51494839787483, 5.507899913936853], [12.730750255286694, 33.66880118846893, 5.80149982124567], [-13.258200138807297, 39.294350892305374, 5.4352497681975365], [-37.85324841737747, 48.345550894737244, 5.898050032556057], [-8.936800062656403, 26.51984989643097, 5.840550176799297], [1.550175016745925, 28.24385091662407, 5.781250074505806], [-31.703751534223557, 28.85645069181919, 5.6986999697983265], [-29.969150200486183, 28.690699487924576, 5.708449985831976], [-19.333399832248688, 28.990749269723892, 5.803000181913376], [3.051884938031435, 29.74564954638481, 5.757850129157305], [-17.265649512410164, 28.91015075147152, 5.596249829977751], [3.7375150714069605, 32.69084915518761, 5.730399861931801], [-10.900800116360188, 36.518748849630356, 5.631150212138891], [20.475050434470177, 39.572250097990036, 5.744149908423424], [-14.340300112962723, 39.9601012468338, 5.62505004927516], [-29.33109924197197, 50.648998469114304, 5.8304001577198505], [19.682200625538826, 50.48450082540512, 5.936900153756142], [37.96349838376045, 50.62349885702133, 5.9599000960588455], [20.903799682855606, 50.74299871921539, 5.862699821591377], [1.7321950290352106, 28.687499463558197, 5.72599982842803], [-9.869449771940708, 37.6426987349987, 5.7496498338878155], [-16.87154918909073, 42.31664910912514, 5.697350017726421], [-35.77934950590134, 50.35949870944023, 5.797199904918671], [1.745410030707717, 28.08310091495514, 6.239850074052811], [-21.27465046942234, 28.963150456547737, 5.922549869865179], [15.654649585485458, 29.10415083169937, 7.149550132453442], [1.881869975477457, 29.22705002129078, 6.468900013715029], [13.801650144159794, 33.48295018076897, 6.800150033086538], [-4.329024814069271, 33.55704993009567, 6.819350179284811], [20.252499729394913, 34.25534814596176, 6.823750212788582], [20.7614004611969, 33.55395048856735, 6.683600135147572], [19.301600754261017, 37.594400346279144, 6.822950206696987], [19.930750131607056, 39.43534940481186, 6.7992000840604305], [19.855350255966187, 41.76409915089607, 6.782250013202429], [18.587950617074966, 43.48424822092056, 5.8292001485824585], [17.56184920668602, 45.02924904227257, 5.9427497908473015], [17.29230023920536, 46.2287999689579, 6.922650150954723], [-33.8331013917923, 50.42500048875809, 5.954950116574764], [17.8095493465662, 52.27699875831604, 7.005949970334768], [-41.405901312828064, 74.85199719667435, 7.289149798452854], [-42.0912504196167, 75.59999823570251, 6.256400141865015], [-43.53699833154678, 75.872503221035, 6.860049907118082], [-41.68039932847023, 82.97950029373169, 6.701800040900707], [-10.977399535477161, 26.52519941329956, 6.5218498930335045], [19.745400175452232, 27.40035019814968, 6.8826498463749886], [21.647650748491287, 26.79404988884926, 7.116950117051601], [-13.368899933993816, 26.723049581050873, 6.816999986767769], [-6.991149857640266, 26.982950046658516, 6.786399986594915], [29.761100187897682, 26.778100058436394, 6.688999943435192], [31.771499663591385, 27.082649990916252, 6.965999957174063], [23.573249578475952, 26.6634002327919, 7.120450027287006], [18.037600442767143, 28.03890034556389, 6.5032001584768295], [33.42289850115776, 28.013400733470917, 6.754800211638212], [25.642650201916695, 26.888299733400345, 6.950450129806995], [27.52939984202385, 26.913000270724297, 7.087800186127424], [-14.878050424158573, 27.8657004237175, 6.983499974012375], [2.888190094381571, 28.191449120640755, 6.519000045955181], [12.87319976836443, 28.194550424814224, 6.9250501692295074], [14.717900194227695, 28.197849169373512, 6.919149775058031], [-5.855500232428312, 28.166400268673897, 7.00390012934804], [-27.5494996458292, 28.936050832271576, 7.278149947524071], [-23.626599460840225, 29.825499281287193, 6.7241499200463295], [-15.781650319695473, 28.960250318050385, 6.524149794131517], [4.879864864051342, 28.815999627113342, 6.8350001238286495], [17.260849475860596, 29.640449211001396, 7.267999928444624], [34.32239964604378, 28.794899582862854, 6.944499909877777], [-29.656900092959404, 28.99554930627346, 7.232599891722202], [-21.992800757288933, 29.97715026140213, 6.6040498204529285], [-5.109699908643961, 29.678549617528915, 7.058599963784218], [35.47209873795509, 29.759149998426437, 6.932499818503857], [-31.523101031780243, 29.778599739074707, 7.032699882984161], [-17.51524955034256, 29.751000925898552, 6.767650134861469], [10.857299901545048, 28.839899227023125, 6.861649919301271], [9.0658999979496, 29.142700135707855, 7.098599802702665], [2.9511749744415283, 29.52679991722107, 7.125049829483032], [6.73185009509325, 29.204750433564186, 6.854699924588203], [-33.51069986820221, 30.209749937057495, 6.227599922567606], [-35.48489883542061, 31.793948262929916, 6.398600060492754], [3.0957600101828575, 31.641598790884018, 7.006150204688311], [37.237249314785004, 31.86044842004776, 6.883449852466583], [-4.656584933400154, 31.472600996494293, 6.79050013422966], [6.8025002256035805, 32.37085044384003, 6.9055999629199505], [8.883800357580185, 32.10959956049919, 6.935149896889925], [11.146049946546555, 31.98704868555069, 6.779000163078308], [12.764300219714642, 32.378699630498886, 6.903599947690964], [-37.04399988055229, 33.9214988052845, 6.440749857574701], [3.6790301091969013, 32.778650522232056, 6.7715998739004135], [4.926284775137901, 32.82739967107773, 6.896500010043383], [38.443099707365036, 33.64714980125427, 6.739300210028887], [-37.347301840782166, 35.70275008678436, 6.7564500495791435], [39.57350179553032, 35.734500735998154, 7.131250109523535], [-4.84506506472826, 35.58975085616112, 7.061449810862541], [-10.903749614953995, 36.34029999375343, 6.883800029754639], [-12.976749800145626, 37.72934898734093, 6.90620020031929], [-9.937799535691738, 36.43079847097397, 7.315449882298708], [11.2636499106884, 37.602998316287994, 6.8120998330414295], [-38.96240144968033, 37.55655139684677, 6.238900125026703], [-8.906450122594833, 37.56434842944145, 7.021049968898296], [40.39280116558075, 37.72765025496483, 7.02620018273592], [-5.706800147891045, 37.826549261808395, 6.6141001880168915], [21.359499543905258, 37.64164820313454, 7.010149769484997], [23.31545017659664, 37.77080029249191, 7.239399943500757], [-8.833900094032288, 39.564549922943115, 6.799300201237202], [25.227950885891914, 38.5066494345665, 6.846799980849028], [26.215750724077225, 38.93420100212097, 6.842750124633312], [41.001349687576294, 39.65485095977783, 6.7413002252578735], [-14.184899628162384, 39.19554874300957, 6.330150179564953], [11.397600173950195, 39.2630510032177, 6.809200160205364], [-14.974700286984444, 39.97210040688515, 6.8916999734938145], [-6.808800157159567, 39.437249302864075, 6.832300219684839], [27.499400079250336, 39.744749665260315, 6.884950213134289], [20.878849551081657, 39.709750562906265, 7.248200010508299], [-8.935750462114811, 41.229698807001114, 6.349849980324507], [41.18970036506653, 41.3024015724659, 7.085599936544895], [11.95515040308237, 41.33389890193939, 6.708600092679262], [-7.2686998173594475, 41.04755073785782, 6.279199849814177], [29.59365025162697, 41.543148458004, 6.789450068026781], [-16.145149245858192, 41.17650166153908, 6.904100067913532], [-17.130950465798378, 42.09375008940697, 6.767400074750185], [12.786050327122211, 42.06389933824539, 7.311999797821045], [41.26444831490517, 43.67375001311302, 6.85185007750988], [-18.251849338412285, 42.98600181937218, 6.927050184458494], [19.62379924952984, 43.68184879422188, 6.792100146412849], [31.528398394584656, 43.928198516368866, 7.249999791383743], [13.583149760961533, 43.54989901185036, 6.968049798160791], [-19.536999985575676, 43.8600517809391, 7.034100126475096], [14.873550273478031, 44.495098292827606, 6.8939500488340855], [32.30920061469078, 45.45990005135536, 6.617450155317783], [-20.593149587512016, 44.607751071453094, 6.857799831777811], [19.72764916718006, 45.916598290205, 6.9205001927912235], [15.931399539113045, 45.3682504594326, 7.104299962520599], [-38.95924985408783, 43.94204914569855, 6.318000145256519], [-21.889450028538704, 45.47559842467308, 7.112099789083004], [-38.63925114274025, 46.43639922142029, 5.990399979054928], [41.113950312137604, 45.82975059747696, 6.469099782407284], [-23.500099778175354, 46.50714993476868, 7.0604500360786915], [40.85329920053482, 47.04369977116585, 6.252950057387352], [-24.184450507164, 47.054801136255264, 6.459800060838461], [33.18440169095993, 46.58835008740425, 7.306599989533424], [-25.621650740504265, 47.66710102558136, 6.964100059121847], [33.85600075125694, 47.95604944229126, 6.842049770057201], [39.76539894938469, 47.81404882669449, 6.985050160437822], [-27.55269967019558, 48.230499029159546, 7.043700199574232], [-35.600099712610245, 47.87309840321541, 6.575900129973888], [21.661149337887764, 49.89660158753395, 6.452600006014109], [35.61760112643242, 49.598049372434616, 6.582549773156643], [-35.13620048761368, 49.324098974466324, 6.248100195080042], [38.95045071840286, 49.438949674367905, 6.511699873954058], [-29.608149081468582, 49.83099922537804, 6.204300094395876], [-31.588051468133926, 50.627999007701874, 6.062950007617474], [17.56029948592186, 50.406500697135925, 7.2200000286102295], [21.902499720454216, 52.67700180411339, 6.635800004005432], [21.649999544024467, 54.32000011205673, 6.8696001544594765], [18.01305077970028, 54.21049892902374, 6.66389986872673], [21.00439928472042, 55.97599968314171, 6.624250207096338], [18.207749351859093, 55.748000741004944, 6.364449858665466], [19.58180032670498, 56.1784990131855, 7.289750035852194], [19.37139965593815, 57.509999722242355, 6.576899904757738], [-39.54875096678734, 71.0344985127449, 7.073749788105488], [-35.5505496263504, 71.14800065755844, 6.425850093364716], [-33.87970104813576, 72.23200052976608, 6.2823002226650715], [-43.04169863462448, 71.35900110006332, 6.364849861711264], [-41.58715158700943, 71.19449973106384, 7.230199873447418], [-37.804849445819855, 71.07950001955032, 6.723349913954735], [-44.12059858441353, 71.73199951648712, 6.928150076419115], [-45.776501297950745, 72.1369981765747, 6.827349774539471], [-47.962699085474014, 72.7899968624115, 7.081099785864353], [-49.993451684713364, 74.43950325250626, 6.7091998644173145], [-35.61455011367798, 72.3785012960434, 6.856299936771393], [-36.100998520851135, 73.58449697494507, 6.2315501272678375], [-37.80049830675125, 73.94099980592728, 6.515650078654289], [-39.86860066652298, 74.29700344800949, 7.115750107914209], [-49.01890084147453, 75.80649852752686, 6.531749852001667], [-39.98905047774315, 75.70350170135498, 6.418250035494566], [-45.92235013842583, 76.69900357723236, 7.089150138199329], [-48.05760085582733, 76.48850232362747, 6.862250156700611], [-50.076499581336975, 78.16550135612488, 6.28589978441596], [-48.855751752853394, 77.57149636745453, 6.288500037044287], [-52.3810014128685, 78.90050113201141, 6.386950146406889], [-53.792499005794525, 78.95849645137787, 6.273999810218811], [-40.052201598882675, 81.21850341558456, 6.251949816942215], [-35.64419969916344, 81.56750351190567, 6.298250053077936], [-37.62215003371239, 82.46450126171112, 6.982800085097551], [-33.030249178409576, 81.79400116205215, 5.948999896645546], [-32.23314881324768, 82.75700360536575, 6.203149911016226], [-43.00675168633461, 83.55449885129929, 6.367249879986048], [-33.67929905653, 82.99600332975388, 6.595099810510874], [-43.77425089478493, 84.91049706935883, 6.700200028717518], [-35.49814969301224, 84.12300050258636, 6.768399849534035], [-37.59165108203888, 84.81550216674805, 7.278500124812126], [-39.587050676345825, 86.01000159978867, 7.075800094753504], [-44.09375041723251, 86.67799830436707, 7.3091997765004635], [-41.722748428583145, 86.59300208091736, 7.002899888902903], [-45.451998710632324, 87.38649636507034, 6.89420010894537], [-45.60549929738045, 88.68400007486343, 6.930550094693899], [-44.16229948401451, 88.5000005364418, 6.868700031191111], [-9.026950225234032, 26.500549167394638, 6.879149936139584], [-25.71910060942173, 29.455050826072693, 7.033550180494785], [4.210724961012602, 28.522299602627754, 6.486800033599138], [-19.808700308203697, 30.10530024766922, 6.469099782407284], [13.134749606251717, 35.61355173587799, 7.100900169461966], [-38.97655010223389, 41.5274016559124, 6.393199786543846], [-37.396349012851715, 46.20220139622688, 6.620599888265133], [-37.015151232481, 47.95685037970543, 6.364449858665466], [19.365999847650528, 48.090800642967224, 6.909599993377924], [19.75874975323677, 49.41524937748909, 6.314700003713369], [-31.703948974609375, 49.79125037789345, 6.401849910616875], [-49.26149919629097, 73.27800244092941, 6.3749998807907104], [-33.746350556612015, 31.565051525831223, 7.126899901777506], [-35.74435040354729, 33.62119942903519, 7.043099962174892], [11.76880020648241, 35.907648503780365, 6.674000062048435], [-38.892749696969986, 39.351850748062134, 6.342200096696615], [21.004950627684593, 41.26419872045517, 7.470049895346165], [17.90820062160492, 48.22869971394539, 7.060249801725149], [-29.632849618792534, 48.05200174450874, 7.257599849253893], [-33.525899052619934, 49.32139813899994, 6.412100046873093], [37.61965036392212, 49.539949744939804, 6.898900028318167], [-37.654150277376175, 43.837349861860275, 6.979350000619888], [-33.33434835076332, 47.940999269485474, 6.781450007110834], [-39.40499946475029, 82.8310027718544, 7.129149977117777], [-35.544250160455704, 82.7689990401268, 7.049050182104111], [20.917950198054314, 35.75354814529419, 7.67565006390214], [-37.64975070953369, 37.705451250076294, 6.97400001809001], [-37.64199838042259, 39.409950375556946, 7.044749800115824], [28.61350029706955, 40.613751858472824, 6.681249942630529], [-35.78434884548187, 45.776400715112686, 7.119750138372183], [-31.775299459695816, 48.09984937310219, 6.91650016233325], [-19.524449482560158, 31.21810033917427, 7.287399843335152], [-21.55029959976673, 31.57994896173477, 7.332350127398968], [14.473550021648407, 34.11899879574776, 7.375999819487333], [14.602500014007092, 35.60969978570938, 7.680749986320734], [-6.839000154286623, 37.702351808547974, 7.59855005890131], [40.68335145711899, 39.027951657772064, 7.640049792826176], [-37.71615028381348, 41.48640111088753, 7.05979997292161], [40.59330001473427, 44.175051152706146, 7.837249897420406], [40.18649831414223, 46.02684825658798, 7.538599893450737], [21.215349435806274, 46.34235054254532, 7.565599866211414], [21.631449460983276, 48.21759834885597, 7.264200132340193], [35.357799381017685, 48.02649840712547, 7.754149846732616], [22.73714914917946, 50.18499866127968, 7.280400022864342], [18.637800589203835, 54.515499621629715, 7.5079998932778835], [-37.7376489341259, 72.30249792337418, 7.374349981546402], [-41.80305078625679, 84.52200144529343, 7.632299792021513], [-10.96665021032095, 26.558799669146538, 7.3211002163589], [13.045400381088257, 37.4472513794899, 7.831599563360214], [-33.64219889044762, 46.19764909148216, 7.323550060391426], [11.521849781274796, 28.49549986422062, 7.381250150501728], [36.397550255060196, 30.798550695180893, 7.337300106883049], [-23.347700014710426, 31.37819841504097, 7.590699940919876], [-35.66195070743561, 35.581450909376144, 7.525850087404251], [20.19990049302578, 36.2742505967617, 7.917899638414383], [20.60900069773197, 43.55045035481453, 7.65935005620122], [22.97629974782467, 48.40419813990593, 7.677549961954355], [-32.28364884853363, 30.87580017745495, 7.597050163894892], [12.635800056159496, 39.78709876537323, 7.953199557960033], [-35.496048629283905, 41.64715111255646, 7.703199982643127], [-35.561349242925644, 43.392449617385864, 7.551149930804968], [-31.555548310279846, 45.93135043978691, 7.770299911499023], [37.52335160970688, 48.204001039266586, 7.791650015860796], [22.638149559497833, 51.8605001270771, 7.739949971437454], [-39.50599953532219, 72.81699776649475, 7.858250290155411], [17.563549801707268, 31.683098524808884, 7.803000044077635], [17.068849876523018, 31.46965056657791, 8.839449845254421], [-34.031301736831665, 33.32814946770668, 7.794199977070093], [5.863499827682972, 32.565049827098846, 7.556249853223562], [17.63085089623928, 35.65584868192673, 7.673799991607666], [-35.388801246881485, 37.48214989900589, 7.816099561750889], [-35.45685112476349, 39.353400468826294, 7.696149870753288], [-33.50365161895752, 43.68855059146881, 7.8140003606677055], [-13.156900182366371, 26.619600132107735, 9.175949729979038], [-7.116400171071291, 26.877349242568016, 8.854550309479237], [25.583399459719658, 27.101749554276466, 9.060599841177464], [27.65429951250553, 26.84039995074272, 8.781050331890583], [29.76834960281849, 27.42060087621212, 9.212849661707878], [-15.349600464105606, 27.81910076737404, 9.049950167536736], [21.621650084853172, 27.947500348091125, 8.54714959859848], [31.46209940314293, 27.934549376368523, 9.085950441658497], [15.526900067925453, 27.983849868178368, 8.843149989843369], [-5.82109997048974, 28.028549626469612, 8.89815017580986], [11.117749847471714, 28.269749134778976, 8.84309969842434], [18.979649990797043, 29.433200135827065, 7.9576000571250916], [-17.294349148869514, 29.582049697637558, 8.921699598431587], [33.793751150369644, 29.461700469255447, 9.427799843251705], [3.7890200037509203, 29.845649376511574, 8.826450444757938], [4.911584779620171, 29.06624972820282, 8.921049535274506], [-25.172550231218338, 29.59885075688362, 8.688299916684628], [35.214949399232864, 30.002299696207047, 8.614299818873405], [16.10255055129528, 29.588250443339348, 8.38869996368885], [-4.886224865913391, 29.83424998819828, 9.37584973871708], [-31.743798404932022, 29.505949467420578, 9.010300040245056], [-24.707650765776634, 30.635399743914604, 7.873550057411194], [-19.35954950749874, 31.442198902368546, 8.872649632394314], [-32.44839981198311, 30.99285066127777, 8.77045001834631], [3.650845028460026, 31.065599992871284, 8.356500416994095], [-32.9461507499218, 31.738050282001495, 8.976549841463566], [-23.559950292110443, 31.542550772428513, 9.008600376546383], [11.008749715983868, 31.66225180029869, 9.07790008932352], [8.907300420105457, 31.800951808691025, 8.950400166213512], [12.480850331485271, 32.03925117850304, 9.326200000941753], [6.819500122219324, 31.842049211263657, 8.861400187015533], [4.745809826999903, 31.731300055980682, 8.971650153398514], [13.630550354719162, 33.79720076918602, 8.891800418496132], [-4.956029821187258, 33.44609960913658, 9.131849743425846], [18.026800826191902, 33.170100301504135, 8.023000322282314], [37.87694871425629, 33.6063988506794, 9.204450063407421], [17.790449783205986, 33.56029838323593, 8.881350047886372], [39.16795179247856, 35.72164848446846, 8.797699585556984], [14.757850207388401, 36.00820153951645, 8.8061997666955], [19.42799985408783, 35.48604995012283, 9.081950411200523], [18.366750329732895, 34.97985005378723, 8.425899781286716], [-5.698000080883503, 35.86465120315552, 8.58165044337511], [-11.416849680244923, 35.49814969301224, 8.843200281262398], [-9.14124958217144, 36.038950085639954, 9.140550158917904], [-6.94249989464879, 37.06229850649834, 8.823949843645096], [21.0354495793581, 37.84390166401863, 8.797800168395042], [-8.302849717438221, 36.97429969906807, 8.98864958435297], [19.533850252628326, 37.61490061879158, 8.525799959897995], [-13.345349580049515, 37.50764951109886, 8.707149885594845], [23.889800533652306, 37.14755177497864, 9.086750447750092], [39.68590125441551, 37.51260042190552, 9.054450318217278], [25.655750185251236, 38.01894932985306, 9.285599924623966], [21.28645032644272, 39.56890106201172, 9.208249859511852], [27.80899964272976, 39.46080058813095, 9.22504998743534], [-15.32949972897768, 39.38550129532814, 8.89655016362667], [-16.943449154496193, 40.28080031275749, 9.580249898135662], [29.85209971666336, 41.4297990500927, 8.791900239884853], [-17.7108496427536, 41.51944816112518, 9.028050117194653], [13.765649870038033, 42.374398559331894, 8.436749689280987], [21.891549229621887, 43.69769990444183, 8.75415001064539], [-19.881300628185272, 43.36899891495705, 8.82364995777607], [15.17335046082735, 43.936800211668015, 9.122000075876713], [31.948000192642212, 43.396349996328354, 9.202299639582634], [-21.456200629472733, 43.93085092306137, 9.475650265812874], [39.58920016884804, 43.80735009908676, 8.992699906229973], [-22.086750715970993, 45.27534916996956, 8.422699756920338], [16.116399317979813, 45.37155106663704, 8.977700024843216], [33.71734917163849, 45.875150710344315, 8.677699603140354], [-23.666150867938995, 45.626699924468994, 9.098400361835957], [16.924500465393066, 47.805048525333405, 9.038800373673439], [-29.647499322891235, 46.002600342035294, 8.760949596762657], [23.72414991259575, 48.149701207876205, 8.96450038999319], [16.74794964492321, 49.78474974632263, 9.03335027396679], [23.653799667954445, 50.12749880552292, 8.843399584293365], [23.111149668693542, 51.591500639915466, 9.065049700438976], [17.639949917793274, 52.351001650094986, 9.105649776756763], [22.31759950518608, 52.87550017237663, 9.047149680554867], [21.450549364089966, 53.88199910521507, 8.871899917721748], [-41.61100089550018, 70.41800022125244, 9.365200065076351], [-40.171850472688675, 70.81150263547897, 8.368049748241901], [-43.706201016902924, 70.98750025033951, 9.249449707567692], [-43.755900114774704, 72.57650047540665, 9.152599610388279], [-45.99149897694588, 72.24900275468826, 9.090550243854523], [-48.29540103673935, 72.42249697446823, 9.400499984622002], [-49.34785142540932, 74.24650341272354, 8.349699899554253], [-43.25005039572716, 75.40950179100037, 7.969049736857414], [-41.534651070833206, 85.00249683856964, 8.249499835073948], [-43.05624961853027, 85.54449677467346, 8.177150040864944], [-39.496049284935, 84.66050028800964, 7.990350015461445], [-43.494198471307755, 86.86549961566925, 8.2225501537323], [23.820599541068077, 27.620749548077583, 9.176449850201607], [13.274949975311756, 27.82749943435192, 9.282249957323074], [6.863350048661232, 28.99714931845665, 8.69510043412447], [9.069100022315979, 28.797149658203125, 8.763199672102928], [19.848499447107315, 29.792549088597298, 8.7117999792099], [-4.593254998326302, 31.731199473142624, 9.422799572348595], [36.285001784563065, 31.30270168185234, 8.995450101792812], [36.959998309612274, 32.08855167031288, 8.87375045567751], [19.531449303030968, 31.62579983472824, 8.90239980071783], [-33.661048859357834, 33.422548323869705, 9.068449959158897], [-34.063298255205154, 35.61009839177132, 9.349750354886055], [-34.60105136036873, 35.6036014854908, 7.9597001895308495], [-34.14205089211464, 40.33524915575981, 8.023950271308422], [-33.698901534080505, 41.537050157785416, 8.009900338947773], [40.19474983215332, 41.65010154247284, 8.903499692678452], [21.79175056517124, 41.66325181722641, 8.79605021327734], [-18.56200024485588, 42.81099885702133, 8.104500360786915], [-32.06915035843849, 44.8327511548996, 7.966199889779091], [22.250499576330185, 45.49665004014969, 8.488199673593044], [16.66560024023056, 46.16525024175644, 9.396799840033054], [-25.637449696660042, 45.91770097613335, 9.391349740326405], [22.936450317502022, 46.448398381471634, 8.911349810659885], [19.735800102353096, 53.881000727415085, 8.978749625384808], [-39.872050285339355, 71.89849764108658, 8.452200330793858], [-41.856348514556885, 73.78199696540833, 8.594449609518051], [-43.983299285173416, 74.41850006580353, 9.182949550449848], [-48.26749861240387, 74.42200183868408, 9.337550029158592], [-44.372450560331345, 75.59149712324142, 8.334999904036522], [-8.988150395452976, 26.590250432491302, 9.124400094151497], [-21.542450413107872, 32.80794993042946, 8.84804967790842], [14.819599688053131, 37.449199706315994, 8.960950188338757], [-33.396098762750626, 39.19535130262375, 8.847950026392937], [19.957000389695168, 39.276301860809326, 8.188899606466293], [-31.426798552274704, 43.67804899811745, 8.565150201320648], [39.1213484108448, 45.84129899740219, 8.481849916279316], [-27.4788998067379, 47.272149473428726, 8.492650464177132], [37.358950823545456, 47.25734889507294, 8.432700298726559], [-47.460898756980896, 75.62199980020523, 8.48584994673729], [-45.84505036473274, 75.97850263118744, 8.379950188100338], [-29.68055009841919, 27.76999957859516, 9.063949808478355], [-27.61485055088997, 27.705499902367592, 8.967599831521511], [33.08524936437607, 28.48385088145733, 8.532400242984295], [19.72305029630661, 33.42530131340027, 8.794150315225124], [21.77949994802475, 35.59330105781555, 9.159499779343605], [-33.93609821796417, 37.70200163125992, 9.453699924051762], [13.611500151455402, 39.69670087099075, 8.611000142991543], [40.08699953556061, 39.7551991045475, 9.084549732506275], [-31.83244913816452, 39.51609879732132, 8.879450149834156], [-31.228849664330482, 41.441600769758224, 8.717549964785576], [-32.44204819202423, 41.830550879240036, 8.156250230967999], [14.166849665343761, 42.975399643182755, 8.633649908006191], [-29.084300622344017, 46.97540029883385, 8.453349582850933], [35.499900579452515, 47.040101140737534, 8.50555021315813], [-26.225650683045387, 47.03599959611893, 8.611699566245079], [-10.954000055789948, 26.61599963903427, 9.253749623894691], [-26.06699988245964, 28.058450669050217, 9.323449805378914], [-22.794049233198166, 32.74739906191826, 9.15130041539669], [29.04059924185276, 40.50024971365929, 9.222550317645073], [-41.55129939317703, 72.25149869918823, 9.283900260925293], [21.502800285816193, 29.5438002794981, 9.52105037868023], [14.11375030875206, 35.05155071616173, 9.466799907386303], [-12.926699593663216, 35.69075092673302, 9.807550348341465], [-6.9044497795403, 35.57464852929115, 9.771049953997135], [15.083099715411663, 41.55005142092705, 9.674199856817722], [-29.724549502134323, 44.11355033516884, 9.282300248742104], [33.321548253297806, 44.35094818472862, 9.664700366556644], [37.45625168085098, 45.86679860949516, 9.179550223052502], [-27.559049427509308, 46.06825113296509, 9.370599873363972], [-31.327001750469208, 27.967700734734535, 9.806600399315357], [16.74959994852543, 29.629550874233246, 9.525800123810768], [-23.97499978542328, 30.04789911210537, 9.845550172030926], [21.400300785899162, 33.8113009929657, 9.749299846589565], [-10.742750018835068, 33.78995135426521, 9.698400273919106], [14.937150292098522, 39.504650980234146, 9.260349906980991], [-29.725799337029457, 39.76760059595108, 9.458550252020359], [-29.58514913916588, 41.81569814682007, 9.453900158405304], [31.132999807596207, 42.47970134019852, 9.425950236618519], [35.57629883289337, 45.63165083527565, 9.419200010597706], [-45.88095098733902, 74.93750005960464, 9.368949569761753], [23.255499079823494, 36.086250096559525, 9.872550144791603], [-14.84024990350008, 37.87184879183769, 9.877399541437626], [26.642050594091415, 38.54160010814667, 9.516250342130661], [-19.374649971723557, 42.265549302101135, 9.72955022007227], [37.73915022611618, 44.04300078749657, 9.93650034070015], [-44.94430124759674, 71.3609978556633, 9.39824990928173], [-8.973900228738785, 33.60245004296303, 9.86110046505928], [-6.93164998665452, 33.500999212265015, 9.921000339090824], [38.54304924607277, 35.388801246881485, 9.7893001511693], [-27.710000053048134, 43.934401124715805, 9.895600378513336], [22.841550409793854, 43.89600083231926, 9.841550141572952], [9.392050094902515, 28.56604941189289, 9.721750393509865], [23.036250844597816, 28.73319946229458, 9.785549715161324], [32.173749059438705, 28.74154970049858, 9.786950424313545], [21.34780026972294, 31.502198427915573, 9.881850332021713], [21.816149353981018, 39.48254883289337, 11.346999555826187], [17.366699874401093, 29.541049152612686, 11.26255001872778], [5.093949846923351, 28.75645086169243, 10.944750159978867], [-20.911499857902527, 32.548051327466965, 10.006249882280827], [18.695350736379623, 34.377049654722214, 10.745950043201447], [19.519299268722534, 35.71435064077377, 11.128599755465984], [-29.04535084962845, 39.08564895391464, 10.77979989349842], [-27.87424996495247, 40.57155176997185, 9.974350221455097], [-27.978049591183662, 41.96904972195625, 9.944849647581577], [17.536500468850136, 50.0665009021759, 10.819200426340103], [-13.144800439476967, 27.173899114131927, 11.234999634325504], [-8.847599849104881, 26.67834982275963, 11.095499619841576], [-6.992400158196688, 27.562599629163742, 11.122649535536766], [-29.76370044052601, 26.838650926947594, 11.045199818909168], [-27.623450383543968, 26.74565091729164, 11.323349550366402], [-25.431599467992783, 27.47569978237152, 10.82765031605959], [-31.86659887433052, 27.652500197291374, 11.151749640703201], [-14.962700195610523, 28.09225022792816, 10.88894996792078], [13.369900174438953, 28.12045067548752, 10.738350450992584], [15.23439958691597, 27.92385034263134, 11.161849834024906], [17.168300226330757, 27.951449155807495, 11.168000288307667], [27.617499232292175, 28.157999739050865, 10.32250002026558], [11.29355002194643, 28.244899585843086, 10.713299736380577], [29.20529991388321, 28.263799846172333, 10.37134975194931], [-5.77550008893013, 28.419649228453636, 10.626750066876411], [25.06365068256855, 28.443949297070503, 10.229350067675114], [9.388349950313568, 28.468450531363487, 10.703650303184986], [23.6371997743845, 29.778750613331795, 10.673049837350845], [31.699951738119125, 29.630450531840324, 10.80115046352148], [-17.082849517464638, 29.94300052523613, 10.887700133025646], [8.761749602854252, 29.097849503159523, 11.351999826729298], [-5.401600152254105, 29.59899976849556, 10.821250267326832], [-23.735249415040016, 29.479000717401505, 11.117399670183659], [2.9597249813377857, 29.67960014939308, 11.11149974167347], [-32.513149082660675, 29.102599248290062, 10.306649841368198], [-33.06565061211586, 29.660899192094803, 11.123600415885448], [16.89149998128414, 31.494751572608948, 10.830650106072426], [35.345401614904404, 31.814999878406525, 10.860949754714966], [-22.968050092458725, 31.8247489631176, 11.159149929881096], [-19.41009983420372, 31.78749978542328, 10.944349691271782], [-33.559199422597885, 31.66244924068451, 11.008399538695812], [4.814565181732178, 32.259501516819, 10.90485043823719], [10.744200088083744, 31.274501234292984, 10.710449889302254], [13.246900402009487, 31.555648893117905, 10.727999731898308], [8.876600302755833, 31.63135051727295, 11.178599670529366], [-5.47999981790781, 31.529050320386887, 10.618150234222412], [6.808650214225054, 31.9472998380661, 11.401049792766571], [-8.974149823188782, 31.89690038561821, 11.271649971604347], [-21.74909971654415, 32.954249531030655, 11.355600319802761], [-6.923200096935034, 31.74145147204399, 11.196999810636044], [17.413750290870667, 33.56274962425232, 11.394600383937359], [-33.61884877085686, 33.609598875045776, 11.196999810636044], [36.97475045919418, 33.65259990096092, 10.644550435245037], [13.767000287771225, 33.554598689079285, 10.406900197267532], [-11.624850332736969, 33.13789889216423, 10.698550380766392], [-13.08939978480339, 33.76865014433861, 11.25164981931448], [-8.330750279128551, 35.000499337911606, 10.288150049746037], [37.619151175022125, 35.6159508228302, 10.979849845170975], [14.20115027576685, 35.00320017337799, 10.402549989521503], [-13.234050013124943, 34.91529822349548, 10.204100050032139], [23.931900039315224, 35.34094989299774, 10.589100420475006], [14.685849659144878, 35.83785146474838, 11.154400184750557], [20.817549899220467, 37.60455176234245, 11.00040040910244], [38.87984901666641, 37.62714937329292, 10.379649698734283], [15.017000027000904, 37.42609918117523, 10.995299555361271], [25.881750509142876, 37.0899997651577, 10.603399947285652], [27.610650286078453, 37.800900638103485, 11.088499799370766], [15.665050595998764, 39.45919871330261, 11.071249842643738], [-31.74934908747673, 38.626499474048615, 10.066050104796886], [-30.020400881767273, 37.953950464725494, 11.240250431001186], [28.205350041389465, 38.895800709724426, 10.668599978089333], [39.01224955916405, 39.351899176836014, 10.402999818325043], [-17.467500641942024, 39.31745141744614, 10.39975043386221], [29.56084907054901, 39.44170102477074, 11.089500039815903], [-27.68789976835251, 39.49404880404472, 11.203000321984291], [16.149800270795822, 41.235048323869705, 10.784950107336044], [30.1572997123003, 40.89440032839775, 10.347049683332443], [39.011601358652115, 41.05044901371002, 10.333149693906307], [22.773049771785736, 41.908349841833115, 11.173250153660774], [31.648650765419006, 41.457999497652054, 10.816199705004692], [-20.675500854849815, 42.72665083408356, 10.017000138759613], [15.997199341654778, 43.36944967508316, 10.814400389790535], [37.51569986343384, 42.98520088195801, 10.415449738502502], [23.510849103331566, 43.75309869647026, 11.13935001194477], [-23.624049499630928, 44.27560046315193, 10.079549625515938], [35.516250878572464, 44.60395127534866, 10.04990004003048], [16.59795083105564, 44.57734897732735, 11.241000145673752], [23.9741001278162, 45.726750046014786, 10.80590020865202], [17.41180010139942, 45.83119973540306, 11.195500381290913], [17.606599256396294, 48.11820015311241, 10.956049896776676], [24.246100336313248, 48.12680184841156, 10.746450163424015], [23.623650893568993, 50.17700046300888, 11.255700141191483], [22.873999550938606, 51.52599886059761, 10.74109971523285], [18.052199855446815, 51.913999021053314, 10.549400001764297], [21.504050120711327, 52.26150155067444, 11.103950440883636], [19.25080083310604, 53.091999143362045, 10.417849756777287], [19.53204907476902, 52.43900045752525, 11.381950229406357], [-43.890148401260376, 70.75800001621246, 10.770649649202824], [-42.126599699258804, 70.60550153255463, 10.358350351452827], [-42.075298726558685, 71.48600369691849, 10.314449667930603], [-45.68810015916824, 71.05500251054764, 10.6137003749609], [-46.397700905799866, 71.9899982213974, 10.97320020198822], [-47.4899485707283, 72.71450012922287, 10.660500265657902], [-43.978650122880936, 72.15899974107742, 10.859699919819832], [-46.23369872570038, 73.60850274562836, 10.32514963299036], [-47.9903481900692, 73.53699952363968, 10.36909967660904], [6.849899888038635, 28.851550072431564, 10.889600031077862], [33.42460095882416, 30.223049223423004, 10.772350244224072], [3.565100021660328, 31.124049797654152, 11.392449960112572], [22.200750187039375, 31.672198325395584, 10.427850298583508], [22.192100062966347, 33.06810185313225, 10.387849994003773], [-15.231600031256676, 35.491250455379486, 10.933750309050083], [-15.818299725651741, 37.58670017123222, 10.376700200140476], [-33.052798360586166, 37.57869824767113, 10.436699725687504], [-19.984500482678413, 41.3411483168602, 10.412599891424179], [37.7373993396759, 41.659899055957794, 10.765199549496174], [-22.145850583910942, 42.97855123877525, 10.371849872171879], [33.727049827575684, 43.36410015821457, 10.495349764823914], [-26.317249983549118, 43.84180158376694, 10.19969955086708], [-23.786699399352074, 43.37120056152344, 10.382150299847126], [-25.59575065970421, 43.32264885306358, 10.302900336682796], [35.585299134254456, 43.474700301885605, 10.647949762642384], [-10.85629966109991, 26.646599173545837, 11.238549835979939], [25.686349719762802, 29.413100332021713, 11.044450104236603], [-10.79500000923872, 32.075848430395126, 11.486000381410122], [23.513099178671837, 33.50840136408806, 10.945250280201435], [-33.02524983882904, 35.35924851894379, 11.133099906146526], [-31.689651310443878, 37.49625012278557, 10.830800049006939], [-25.77825076878071, 41.53285175561905, 10.377899743616581], [22.35184982419014, 41.032999753952026, 10.545849800109863], [-21.73049934208393, 41.49625077843666, 10.581700131297112], [-24.268750101327896, 28.262650594115257, 11.408699676394463], [29.568549245595932, 29.61600013077259, 11.309499852359295], [35.741351544857025, 33.6184985935688, 11.624550446867943], [25.624999776482582, 35.7016995549202, 11.250750161707401], [-17.57040061056614, 37.41789981722832, 10.750150308012962], [-25.830300524830818, 39.86325114965439, 11.127149686217308], [-23.448999971151352, 39.71315175294876, 11.196250095963478], [-19.746700301766396, 39.45145010948181, 10.69945003837347], [-23.61690066754818, 41.482001543045044, 10.546100325882435], [23.47555011510849, 31.65154904127121, 11.020299978554249], [-32.07385167479515, 36.271948367357254, 11.32120005786419], [-17.132800072431564, 36.29095107316971, 11.33320014923811], [37.637751549482346, 37.5976487994194, 11.417699977755547], [-19.49935033917427, 37.99809888005257, 11.016850359737873], [-21.703200414776802, 39.421550929546356, 10.879050008952618], [33.47019851207733, 41.82254895567894, 11.191049590706825], [-15.762200579047203, 29.415499418973923, 11.691349558532238], [2.6125051081180573, 27.999799698591232, 11.595649644732475], [4.525864962488413, 28.47214974462986, 11.317649856209755], [12.888049706816673, 29.65415082871914, 10.983300395309925], [27.605699375271797, 29.868299141526222, 11.530599556863308], [-17.685800790786743, 31.161349266767502, 11.799849569797516], [10.906550101935863, 29.584599658846855, 11.196400038897991], [33.676598221063614, 31.560849398374557, 11.719699949026108], [15.138199552893639, 31.78124874830246, 11.275799944996834], [14.870749786496162, 33.539701253175735, 11.575000360608101], [-20.655399188399315, 38.62705081701279, 11.00664958357811], [37.867750972509384, 39.454199373722076, 11.194249615073204], [16.52894914150238, 41.69154912233353, 11.790250428020954], [35.69389879703522, 41.72369837760925, 11.253399774432182], [18.471650779247284, 50.84399878978729, 11.258600279688835], [-32.67564997076988, 28.28509919345379, 11.509899981319904], [15.211050398647785, 29.66335043311119, 11.770550161600113], [29.401250183582306, 37.67390176653862, 11.937799863517284], [31.656350940465927, 39.548251777887344, 11.826200410723686], [1.549944980069995, 27.759749442338943, 11.814000084996223], [-6.711150053888559, 29.71399948000908, 11.91094983369112], [1.813409966416657, 28.922950848937035, 11.805850081145763], [-20.3660000115633, 32.71085023880005, 11.686650104820728], [25.82719922065735, 33.73654931783676, 11.849399656057358], [35.41044890880585, 39.46154937148094, 11.805149726569653], [25.68650059401989, 31.5590500831604, 11.866950429975986], [27.264650911092758, 35.81659868359566, 11.907549574971199], [31.642399728298187, 31.02869912981987, 11.961800046265125], [-10.937349870800972, 27.576399967074394, 12.697749771177769], [-31.707100570201874, 27.09849923849106, 13.131000101566315], [-25.612149387598038, 26.893800124526024, 13.041299767792225], [-9.100150316953659, 27.576550841331482, 12.736950069665909], [-12.879200279712677, 28.128400444984436, 12.460749596357346], [16.235850751399994, 28.050949797034264, 12.41500023752451], [17.610250040888786, 27.86255069077015, 13.181050308048725], [-7.6939500868320465, 28.17239984869957, 12.492399662733078], [-32.918449491262436, 28.15534919500351, 12.825150042772293], [3.5807699896395206, 28.362000361084938, 12.265150435268879], [-14.651150442659855, 29.89809960126877, 12.570199556648731], [17.373450100421906, 28.981899842619896, 12.856650166213512], [6.701500155031681, 29.541000723838806, 12.660300359129906], [-33.51619839668274, 29.648950323462486, 12.87390012294054], [-23.23709987103939, 29.291599988937378, 13.003449887037277], [3.342630108818412, 29.5004490762949, 12.501150369644165], [29.56395037472248, 31.21880069375038, 12.189200147986412], [27.525700628757477, 31.065650284290314, 12.054850347340107], [-17.088400200009346, 31.944449990987778, 12.650299817323685], [5.0999498926103115, 31.43249824643135, 12.73105014115572], [-22.801849991083145, 31.49370104074478, 12.599550187587738], [-13.300999999046326, 31.635049730539322, 12.764650397002697], [-19.421599805355072, 33.5380993783474, 12.831750325858593], [-13.419250026345253, 33.08055177330971, 12.279699556529522], [-33.60695019364357, 33.55570137500763, 13.280300423502922], [-14.50629997998476, 34.05994921922684, 12.211100198328495], [15.870800241827965, 35.65710037946701, 12.608549557626247], [36.03535145521164, 35.69624945521355, 12.090199626982212], [17.632149159908295, 35.58905050158501, 12.778449803590775], [-16.20654948055744, 35.146549344062805, 12.418350204825401], [-31.685151159763336, 36.263901740312576, 13.257450424134731], [19.04514990746975, 36.23965010046959, 12.647300027310848], [-17.500149086117744, 35.53225100040436, 12.925799936056137], [-19.42959986627102, 37.38820180296898, 12.908799573779106], [15.844149515032768, 37.3789481818676, 12.758499942719936], [20.27050033211708, 37.21015155315399, 12.217950075864792], [-29.441699385643005, 37.44170069694519, 12.82070018351078], [-20.885199308395386, 38.15995156764984, 13.515099883079529], [35.878900438547134, 37.9147008061409, 12.09929957985878], [21.27154916524887, 39.64649885892868, 13.268150389194489], [-21.938350051641464, 39.09220173954964, 12.673900462687016], [-27.13165059685707, 39.09344971179962, 12.291950173676014], [-25.72380006313324, 39.33269903063774, 12.765450403094292], [-23.608649149537086, 39.46070000529289, 13.194450177252293], [16.05604961514473, 39.49195146560669, 12.447649613022804], [33.77484902739525, 39.92345184087753, 11.96265034377575], [22.737199440598488, 41.48295149207115, 12.65565026551485], [17.25585013628006, 43.61509904265404, 13.2788997143507], [23.503100499510765, 43.81579905748367, 13.084550388157368], [17.642449587583542, 45.69635167717934, 12.950349599123001], [23.539949208498, 45.84775120019913, 13.528900220990181], [18.32914911210537, 47.06655070185661, 12.333150021731853], [23.492850363254547, 48.06619882583618, 13.065500184893608], [18.841100856661797, 48.45989868044853, 13.162749819457531], [18.799850717186928, 48.97645115852356, 12.167350389063358], [19.547199830412865, 50.344500690698624, 13.238750398159027], [22.97765016555786, 49.925848841667175, 12.677700258791447], [21.72189950942993, 50.29600113630295, 13.318650424480438], [19.800549373030663, 51.616501063108444, 12.78155017644167], [21.065449342131615, 51.62449926137924, 12.567349709570408], [4.515084903687239, 28.50000001490116, 12.345249764621258], [-9.508250281214714, 31.111599877476692, 12.375649996101856], [27.43469923734665, 32.11599960923195, 12.320799753069878], [33.057551831007004, 32.19529986381531, 12.273349799215794], [-33.859848976135254, 31.80449828505516, 12.954900041222572], [35.03134846687317, 35.482801496982574, 12.437200173735619], [30.017200857400894, 37.087298929691315, 12.266700156033039], [20.60849964618683, 37.922948598861694, 12.535599991679192], [34.09985080361366, 37.9238985478878, 12.20215018838644], [17.13315024971962, 41.89525172114372, 13.020150363445282], [4.903994966298342, 29.266150668263435, 13.005300424993038], [-7.387950085103512, 29.048899188637733, 12.417900376021862], [16.167299821972847, 29.242200776934624, 12.570150196552277], [-11.319049634039402, 31.084099784493446, 12.536000460386276], [6.520349998027086, 31.0737993568182, 12.576700188219547], [31.74544870853424, 32.120801508426666, 12.512749992311], [27.556899935007095, 33.550649881362915, 12.456449680030346], [33.556099981069565, 33.59004855155945, 12.542850337922573], [-15.410000458359718, 33.43785181641579, 12.9015501588583], [28.051000088453293, 35.033199936151505, 12.411399744451046], [29.5647494494915, 35.5152003467083, 12.60245032608509], [33.393800258636475, 37.40755096077919, 12.408250011503696], [35.093650221824646, 37.12014853954315, 12.356899678707123], [31.665001064538956, 37.59504854679108, 12.474450282752514], [-27.835549786686897, 38.12975063920021, 13.333650305867195], [33.10929983854294, 38.94584998488426, 12.263149954378605], [-29.573999345302582, 26.656949892640114, 13.024999760091305], [-8.950349874794483, 29.346000403165817, 12.769949622452259], [29.589949175715446, 32.05300122499466, 12.488549575209618], [-21.28555066883564, 33.62970054149628, 13.231749646365643], [19.348150119185448, 37.57144883275032, 13.285799883306026], [33.473748713731766, 35.579849034547806, 12.597950175404549], [-12.993499636650085, 29.4367503374815, 12.817099690437317], [-17.756300047039986, 33.472251147031784, 13.085500337183475], [29.620299115777016, 33.59305113554001, 12.700200080871582], [31.736601144075394, 33.55659916996956, 12.661599554121494], [31.700100749731064, 35.52054986357689, 12.703750282526016], [-24.001799523830414, 27.918849140405655, 13.500549830496311], [-11.17394957691431, 29.639149084687233, 12.823649682104588], [-15.357100404798985, 31.769998371601105, 12.904349714517593], [-22.302549332380295, 31.722400337457657, 13.362349942326546], [-32.98730030655861, 35.04065051674843, 13.268900103867054], [17.27999933063984, 37.869200110435486, 13.743449933826923], [17.05924980342388, 39.35224935412407, 13.782699592411518], [21.99755050241947, 41.463349014520645, 13.830049894750118], [-27.624299749732018, 26.685550808906555, 13.472500257194042], [-19.757350906729698, 35.675499588251114, 13.73239979147911], [-30.98195046186447, 36.75445169210434, 13.523650355637074], [-22.267799824476242, 29.365599155426025, 13.830849900841713], [-32.855648547410965, 27.823850512504578, 14.807149767875671], [-23.68899993598461, 27.652699500322342, 15.377599745988846], [-33.29269960522652, 29.62544932961464, 15.163999982178211], [-33.59375149011612, 31.653448939323425, 14.989599585533142], [-21.693849936127663, 33.52399915456772, 15.673749148845673], [-20.811699330806732, 35.11429950594902, 13.841049745678902], [-21.726850420236588, 35.47929972410202, 15.165899880230427], [-29.49419990181923, 37.14204952120781, 15.102200210094452], [-27.36560069024563, 38.20804879069328, 15.29925037175417], [-21.7531006783247, 37.50229999423027, 14.762749895453453], [-25.243550539016724, 39.00665044784546, 14.30600043386221], [19.858049228787422, 39.3713004887104, 14.124250039458275], [17.86714978516102, 41.4666011929512, 14.842449687421322], [18.22975091636181, 45.0003482401371, 14.382200315594673], [19.73564922809601, 47.58309945464134, 14.909200370311737], [22.06280082464218, 48.768799751996994, 13.975599780678749], [-29.639700427651405, 26.903999969363213, 15.132100321352482], [-20.973749458789825, 31.478401273489, 15.227200463414192], [-26.202650740742683, 38.72520104050636, 14.225100167095661], [-23.72319996356964, 39.007849991321564, 14.77145031094551], [-27.71889977157116, 26.990700513124466, 15.528449788689613], [-31.937148422002792, 27.597250416874886, 15.615650452673435], [-20.78630030155182, 29.383499175310135, 15.147649683058262], [-22.082500159740448, 38.89574855566025, 14.35954961925745], [21.691499277949333, 43.88070106506348, 14.925099909305573], [21.658899262547493, 47.963451594114304, 14.54865001142025], [-33.11324864625931, 33.59460085630417, 15.395550057291985], [-32.83974900841713, 34.81154888868332, 14.74430039525032], [-31.738299876451492, 35.6503501534462, 15.40450006723404], [17.95784942805767, 39.82369974255562, 14.519150368869305], [18.093600869178772, 43.3526486158371, 14.746850356459618], [19.477449357509613, 45.72505131363869, 15.083099715411663], [20.210599526762962, 49.41390082240105, 14.5474998280406], [19.38435062766075, 39.927348494529724, 14.521749690175056], [21.369799971580505, 42.32440143823624, 14.749599620699883], [22.497400641441345, 43.859999626874924, 14.486050233244896], [-21.704599261283875, 28.11945043504238, 15.491100028157234], [19.89939995110035, 41.69460013508797, 15.003199689090252], [22.485749796032906, 45.429348945617676, 14.638449996709824], [-25.600450113415718, 27.4097491055727, 15.904400497674942], [-23.50115031003952, 37.80265152454376, 15.577149577438831], [-25.425000116229057, 38.33030164241791, 15.617149882018566], [19.200049340724945, 44.05039921402931, 15.371249988675117], [21.50925062596798, 46.29484936594963, 15.062999911606312], [-30.54329939186573, 36.45525127649307, 15.979349613189697], [-23.152999579906464, 35.847701132297516, 16.02949947118759], [-29.934650287032127, 27.892300859093666, 16.89774915575981], [-20.35689912736416, 30.065299943089485, 16.3317508995533], [-21.800050511956215, 31.307749450206757, 16.680650413036346], [-32.304998487234116, 33.51230174303055, 17.32725091278553], [-30.111100524663925, 36.699648946523666, 16.366049647331238], [-27.596749365329742, 37.6182496547699, 17.613649368286133], [-25.82710050046444, 37.50165179371834, 16.83804951608181], [-32.82960131764412, 31.769901514053345, 16.658799722790718], [-31.199950724840164, 28.184799477458, 16.7386494576931], [-23.00715073943138, 28.23909930884838, 16.626499593257904], [-21.89360000193119, 28.133399784564972, 16.84975065290928], [-31.681399792432785, 29.6439491212368, 17.34350062906742], [-23.538649082183838, 29.418399557471275, 16.85974933207035], [-23.64405058324337, 31.61894902586937, 16.76120050251484], [-23.724300786852837, 33.699050545692444, 16.363700851798058], [-23.190150037407875, 33.038001507520676, 16.31684973835945], [-23.98969978094101, 35.02510115504265, 16.334200277924538], [-31.76869824528694, 35.67875176668167, 17.450349405407906], [-25.848399847745895, 28.095100075006485, 16.909200698137283], [-25.578200817108154, 35.523299127817154, 16.923049464821815], [-25.604700669646263, 33.65970030426979, 17.452050000429153], [-27.552999556064606, 28.13754975795746, 17.426349222660065], [-25.721849873661995, 29.57024984061718, 17.726950347423553], [-21.37329988181591, 29.50740046799183, 17.157400026917458], [-32.14164823293686, 31.504951417446136, 17.74965040385723], [-29.45614978671074, 37.30374947190285, 17.62544922530651], [-31.11100010573864, 36.9565486907959, 17.745450139045715], [-25.450449436903, 31.813248991966248, 17.91970059275627], [-27.285749092698097, 35.42134910821915, 17.913199961185455], [-29.54079955816269, 29.141299426555634, 18.106399103999138], [-27.482949197292328, 28.881000354886055, 18.02385039627552], [-27.265800163149834, 34.023549407720566, 18.1791502982378], [-29.636399820446968, 30.118349939584732, 18.52164976298809], [-26.187200099229813, 31.107550486922264, 18.37324909865856], [-27.75520086288452, 33.35845097899437, 18.514899536967278], [-28.05590070784092, 35.98380088806152, 18.5100007802248], [-27.632199227809906, 30.123800039291382, 18.55980046093464], [-29.61055003106594, 31.546801328659058, 18.74914951622486], [-27.69709937274456, 31.660500913858414, 18.737349659204483], [-31.35579824447632, 32.275550067424774, 18.66910047829151], [-31.591400504112244, 33.663149923086166, 19.408099353313446], [-29.57965061068535, 33.601898699998856, 19.09469999372959], [-31.22889995574951, 36.909300833940506, 19.63149942457676], [-29.99899908900261, 36.92544996738434, 19.509749487042427], [-29.56094965338707, 35.58560088276863, 19.806750118732452], [-31.78989887237549, 35.649850964546204, 19.6773000061512], [-31.335800886154175, 36.05709969997406, 20.413100719451904]],
};

function makeTriangleIndicesFn(triangles) {
    let triNdx = 0;
    let vNdx = 0;
    const fn = function () {
        const ndx = triangles[triNdx][vNdx++];
        if (vNdx === 3) {
            vNdx = 0;
            ++triNdx;
        }
        return ndx;
    };
    fn.reset = function () {
        triNdx = 0;
        vNdx = 0;
    };
    fn.numElements = triangles.length * 3;
    return fn;
}
// adapted from: https://webglfundamentals.org/webgl/lessons/webgl-3d-geometry-lathe.htmls
function generateNormals(maxAngle, positions, triangles) {
    // first compute the normal of each face
    const getNextIndex = makeTriangleIndicesFn(triangles);
    const numFaceVerts = getNextIndex.numElements;
    const numVerts = positions.length;
    const numFaces = numFaceVerts / 3;
    const faceNormals = [];
    // Compute the normal for every face.
    // While doing that, create a new vertex for every face vertex
    for (let i = 0; i < numFaces; ++i) {
        const n1 = getNextIndex();
        const n2 = getNextIndex();
        const n3 = getNextIndex();
        const v1 = positions[n1];
        const v2 = positions[n2];
        const v3 = positions[n3];
        faceNormals.push(vec3.normalize(vec3.cross(vec3.subtract(v2, v1), vec3.subtract(v3, v1))));
    }
    let tempVerts = {};
    let tempVertNdx = 0;
    // this assumes vertex positions are an exact match
    function getVertIndex(vert) {
        const vertId = JSON.stringify(vert);
        const ndx = tempVerts[vertId];
        if (ndx !== undefined) {
            return ndx;
        }
        const newNdx = tempVertNdx++;
        tempVerts[vertId] = newNdx;
        return newNdx;
    }
    // We need to figure out the shared vertices.
    // It's not as simple as looking at the faces (triangles)
    // because for example if we have a standard cylinder
    //
    //
    //      3-4
    //     /   \
    //    2     5   Looking down a cylinder starting at S
    //    |     |   and going around to E, E and S are not
    //    1     6   the same vertex in the data we have
    //     \   /    as they don't share UV coords.
    //      S/E
    //
    // the vertices at the start and end do not share vertices
    // since they have different UVs but if you don't consider
    // them to share vertices they will get the wrong normals
    const vertIndices = [];
    for (let i = 0; i < numVerts; ++i) {
        const vert = positions[i];
        vertIndices.push(getVertIndex(vert));
    }
    // go through every vertex and record which faces it's on
    const vertFaces = [];
    getNextIndex.reset();
    for (let i = 0; i < numFaces; ++i) {
        for (let j = 0; j < 3; ++j) {
            const ndx = getNextIndex();
            const sharedNdx = vertIndices[ndx];
            let faces = vertFaces[sharedNdx];
            if (!faces) {
                faces = [];
                vertFaces[sharedNdx] = faces;
            }
            faces.push(i);
        }
    }
    // now go through every face and compute the normals for each
    // vertex of the face. Only include faces that aren't more than
    // maxAngle different. Add the result to arrays of newPositions,
    // newTexcoords and newNormals, discarding any vertices that
    // are the same.
    tempVerts = {};
    tempVertNdx = 0;
    const newPositions = [];
    const newNormals = [];
    function getNewVertIndex(position, normal) {
        const vertId = JSON.stringify({ position, normal });
        const ndx = tempVerts[vertId];
        if (ndx !== undefined) {
            return ndx;
        }
        const newNdx = tempVertNdx++;
        tempVerts[vertId] = newNdx;
        newPositions.push(position);
        newNormals.push(normal);
        return newNdx;
    }
    const newTriangles = [];
    getNextIndex.reset();
    const maxAngleCos = Math.cos(maxAngle);
    // for each face
    for (let i = 0; i < numFaces; ++i) {
        // get the normal for this face
        const thisFaceNormal = faceNormals[i];
        // for each vertex on the face
        const newTriangle = [];
        for (let j = 0; j < 3; ++j) {
            const ndx = getNextIndex();
            const sharedNdx = vertIndices[ndx];
            const faces = vertFaces[sharedNdx];
            const norm = [0, 0, 0];
            faces.forEach((faceNdx) => {
                // is this face facing the same way
                const otherFaceNormal = faceNormals[faceNdx];
                const dot = vec3.dot(thisFaceNormal, otherFaceNormal);
                if (dot > maxAngleCos) {
                    vec3.add(norm, otherFaceNormal, norm);
                }
            });
            vec3.normalize(norm, norm);
            newTriangle.push(getNewVertIndex(positions[ndx], norm));
        }
        newTriangles.push(newTriangle);
    }
    return {
        positions: newPositions,
        normals: newNormals,
        triangles: newTriangles,
    };
}
const projectedPlane2Ids = {
    xy: [0, 1],
    xz: [0, 2],
    yz: [1, 2],
};
function computeProjectedPlaneUVs(positions, projectedPlane = 'xy') {
    const idxs = projectedPlane2Ids[projectedPlane];
    const uvs = positions.map(() => {
        // Initialize to zero.
        return [0, 0];
    });
    const extentMin = [Infinity, Infinity];
    const extentMax = [-Infinity, -Infinity];
    positions.forEach((pos, i) => {
        // Simply project to the selected plane
        uvs[i][0] = pos[idxs[0]];
        uvs[i][1] = pos[idxs[1]];
        extentMin[0] = Math.min(pos[idxs[0]], extentMin[0]);
        extentMin[1] = Math.min(pos[idxs[1]], extentMin[1]);
        extentMax[0] = Math.max(pos[idxs[0]], extentMax[0]);
        extentMax[1] = Math.max(pos[idxs[1]], extentMax[1]);
    });
    uvs.forEach((uv) => {
        uv[0] = (uv[0] - extentMin[0]) / (extentMax[0] - extentMin[0]);
        uv[1] = (uv[1] - extentMin[1]) / (extentMax[1] - extentMin[1]);
    });
    return uvs;
}

const { positions, normals, triangles } = generateNormals(Math.PI, dragonRawData.positions, dragonRawData.cells);
const uvs = computeProjectedPlaneUVs(positions, 'xy');
// Push indices for an additional ground plane
triangles.push([positions.length, positions.length + 2, positions.length + 1], [positions.length, positions.length + 1, positions.length + 3]);
// Push vertex attributes for an additional ground plane
// prettier-ignore
positions.push([-100, 20, -100], //
[100, 20, 100], //
[-100, 20, 100], //
[100, 20, -100]);
normals.push([0, 1, 0], //
[0, 1, 0], //
[0, 1, 0], //
[0, 1, 0]);
uvs.push([0, 0], //
[1, 1], //
[0, 1], //
[1, 0]);
const mesh = {
    positions,
    triangles,
    normals,
    uvs,
};

var lightUpdate = `struct LightData {
  position : vec4f,
  color : vec3f,
  radius : f32,
}
struct LightsBuffer {
  lights: array<LightData>,
}
@group(0) @binding(0) var<storage, read_write> lightsBuffer: LightsBuffer;

struct Config {
  numLights : u32,
}
@group(0) @binding(1) var<uniform> config: Config;

struct LightExtent {
  min : vec4f,
  max : vec4f,
}
@group(0) @binding(2) var<uniform> lightExtent: LightExtent;

@compute @workgroup_size(64, 1, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3u) {
  var index = GlobalInvocationID.x;
  if (index >= config.numLights) {
    return;
  }

  lightsBuffer.lights[index].position.y = lightsBuffer.lights[index].position.y - 0.5 - 0.003 * (f32(index) - 64.0 * floor(f32(index) / 64.0));

  if (lightsBuffer.lights[index].position.y < lightExtent.min.y) {
    lightsBuffer.lights[index].position.y = lightExtent.max.y;
  }
}
`;

var vertexWriteGBuffers = `struct Uniforms {
  modelMatrix : mat4x4f,
  normalModelMatrix : mat4x4f,
}
struct Camera {
  viewProjectionMatrix : mat4x4f,
  invViewProjectionMatrix : mat4x4f,
}
@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(0) @binding(1) var<uniform> camera : Camera;

struct VertexOutput {
  @builtin(position) Position : vec4f,
  @location(0) fragNormal: vec3f,    // normal in world space
  @location(1) fragUV: vec2f,
}

@vertex
fn main(
  @location(0) position : vec3f,
  @location(1) normal : vec3f,
  @location(2) uv : vec2f
) -> VertexOutput {
  var output : VertexOutput;
  let worldPosition = (uniforms.modelMatrix * vec4(position, 1.0)).xyz;
  output.Position = camera.viewProjectionMatrix * vec4(worldPosition, 1.0);
  output.fragNormal = normalize((uniforms.normalModelMatrix * vec4(normal, 1.0)).xyz);
  output.fragUV = uv;
  return output;
}
`;

var fragmentWriteGBuffers = `struct GBufferOutput {
  @location(0) normal : vec4f,

  // Textures: diffuse color, specular color, smoothness, emissive etc. could go here
  @location(1) albedo : vec4f,
}

@fragment
fn main(
  @location(0) fragNormal: vec3f,
  @location(1) fragUV : vec2f
) -> GBufferOutput {
  // faking some kind of checkerboard texture
  let uv = floor(30.0 * fragUV);
  let c = 0.2 + 0.5 * ((uv.x + uv.y) - 2.0 * floor((uv.x + uv.y) / 2.0));

  var output : GBufferOutput;
  output.normal = vec4(normalize(fragNormal), 1.0);
  output.albedo = vec4(c, c, c, 1.0);

  return output;
}
`;

var vertexTextureQuad = `@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4f {
  const pos = array(
    vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
    vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
  );

  return vec4f(pos[VertexIndex], 0.0, 1.0);
}
`;

var fragmentGBuffersDebugView = `@group(0) @binding(0) var gBufferNormal: texture_2d<f32>;
@group(0) @binding(1) var gBufferAlbedo: texture_2d<f32>;
@group(0) @binding(2) var gBufferDepth: texture_depth_2d;

override canvasSizeWidth: f32;
override canvasSizeHeight: f32;

@fragment
fn main(
  @builtin(position) coord : vec4f
) -> @location(0) vec4f {
  var result : vec4f;
  let c = coord.xy / vec2f(canvasSizeWidth, canvasSizeHeight);
  if (c.x < 0.33333) {
    let rawDepth = textureLoad(
      gBufferDepth,
      vec2i(floor(coord.xy)),
      0
    );
    // remap depth into something a bit more visible
    let depth = (1.0 - rawDepth) * 50.0;
    result = vec4(depth);
  } else if (c.x < 0.66667) {
    result = textureLoad(
      gBufferNormal,
      vec2i(floor(coord.xy)),
      0
    );
    result.x = (result.x + 1.0) * 0.5;
    result.y = (result.y + 1.0) * 0.5;
    result.z = (result.z + 1.0) * 0.5;
  } else {
    result = textureLoad(
      gBufferAlbedo,
      vec2i(floor(coord.xy)),
      0
    );
  }
  return result;
}
`;

var fragmentDeferredRendering = `@group(0) @binding(0) var gBufferNormal: texture_2d<f32>;
@group(0) @binding(1) var gBufferAlbedo: texture_2d<f32>;
@group(0) @binding(2) var gBufferDepth: texture_depth_2d;

struct LightData {
  position : vec4f,
  color : vec3f,
  radius : f32,
}
struct LightsBuffer {
  lights: array<LightData>,
}
@group(1) @binding(0) var<storage, read> lightsBuffer: LightsBuffer;

struct Config {
  numLights : u32,
}
struct Camera {
  viewProjectionMatrix : mat4x4f,
  invViewProjectionMatrix : mat4x4f,
}
@group(1) @binding(1) var<uniform> config: Config;
@group(1) @binding(2) var<uniform> camera: Camera;

fn world_from_screen_coord(coord : vec2f, depth_sample: f32) -> vec3f {
  // reconstruct world-space position from the screen coordinate.
  let posClip = vec4(coord.x * 2.0 - 1.0, (1.0 - coord.y) * 2.0 - 1.0, depth_sample, 1.0);
  let posWorldW = camera.invViewProjectionMatrix * posClip;
  let posWorld = posWorldW.xyz / posWorldW.www;
  return posWorld;
}

@fragment
fn main(
  @builtin(position) coord : vec4f
) -> @location(0) vec4f {
  var result : vec3f;

  let depth = textureLoad(
    gBufferDepth,
    vec2i(floor(coord.xy)),
    0
  );

  // Don't light the sky.
  if (depth >= 1.0) {
    discard;
  }

  let bufferSize = textureDimensions(gBufferDepth);
  let coordUV = coord.xy / vec2f(bufferSize);
  let position = world_from_screen_coord(coordUV, depth);

  let normal = textureLoad(
    gBufferNormal,
    vec2i(floor(coord.xy)),
    0
  ).xyz;

  let albedo = textureLoad(
    gBufferAlbedo,
    vec2i(floor(coord.xy)),
    0
  ).rgb;

  for (var i = 0u; i < config.numLights; i++) {
    let L = lightsBuffer.lights[i].position.xyz - position;
    let distance = length(L);
    if (distance > lightsBuffer.lights[i].radius) {
      continue;
    }
    let lambert = max(dot(normal, normalize(L)), 0.0);
    result += vec3f(
      lambert * pow(1.0 - distance / lightsBuffer.lights[i].radius, 2.0) * lightsBuffer.lights[i].color * albedo
    );
  }

  // some manual ambient
  result += vec3(0.2);

  return vec4(result, 1.0);
}
`;

/** Shows an error dialog if getting an adapter wasn't successful. */
function quitIfAdapterNotAvailable(adapter) {
    if (!('gpu' in navigator)) {
        fail('navigator.gpu is not defined - WebGPU not available in this browser');
    }
    if (!adapter) {
        fail("requestAdapter returned null - this sample can't run on this system");
    }
}
/**
 * Shows an error dialog if getting a adapter or device wasn't successful,
 * or if/when the device is lost or has an uncaptured error.
 */
function quitIfWebGPUNotAvailable(adapter, device) {
    if (!device) {
        quitIfAdapterNotAvailable(adapter);
        fail('Unable to get a device for an unknown reason');
    }
    device.lost.then((reason) => {
        fail(`Device lost ("${reason.reason}"):\n${reason.message}`);
    });
    device.onuncapturederror = (ev) => {
        fail(`Uncaptured error:\n${ev.error.message}`);
    };
}
/** Fail by showing a console error, and dialog box if possible. */
const fail = (() => {
    function createErrorOutput() {
        if (typeof document === 'undefined') {
            // Not implemented in workers.
            return {
                show(msg) {
                    console.error(msg);
                },
            };
        }
        const dialogBox = document.createElement('dialog');
        dialogBox.close();
        document.body.append(dialogBox);
        const dialogText = document.createElement('pre');
        dialogText.style.whiteSpace = 'pre-wrap';
        dialogBox.append(dialogText);
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'OK';
        closeBtn.onclick = () => dialogBox.close();
        dialogBox.append(closeBtn);
        return {
            show(msg) {
                // Don't overwrite the dialog message while it's still open
                // (show the first error, not the most recent error).
                if (!dialogBox.open) {
                    dialogText.textContent = msg;
                    dialogBox.showModal();
                }
            },
        };
    }
    let output;
    return (message) => {
        if (!output)
            output = createErrorOutput();
        output.show(message);
        throw new Error(message);
    };
})();

const kMaxNumLights = 1024;
const lightExtentMin = vec3.fromValues(-50, -30, -50);
const lightExtentMax = vec3.fromValues(50, 50, 50);
const canvas = document.querySelector('canvas');
const adapter = await navigator.gpu?.requestAdapter();
const device = await adapter?.requestDevice();
quitIfWebGPUNotAvailable(adapter, device);
const context = canvas.getContext('webgpu');
const devicePixelRatio = window.devicePixelRatio;
canvas.width = canvas.clientWidth * devicePixelRatio;
canvas.height = canvas.clientHeight * devicePixelRatio;
const aspect = canvas.width / canvas.height;
const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
context.configure({
    device,
    format: presentationFormat,
    alphaMode: 'premultiplied',
});
// Create the model vertex buffer.
const kVertexStride = 8;
const vertexBuffer = device.createBuffer({
    // position: vec3, normal: vec3, uv: vec2
    size: mesh.positions.length * kVertexStride * Float32Array.BYTES_PER_ELEMENT,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
});
{
    const mapping = new Float32Array(vertexBuffer.getMappedRange());
    for (let i = 0; i < mesh.positions.length; ++i) {
        mapping.set(mesh.positions[i], kVertexStride * i);
        mapping.set(mesh.normals[i], kVertexStride * i + 3);
        mapping.set(mesh.uvs[i], kVertexStride * i + 6);
    }
    vertexBuffer.unmap();
}
// Create the model index buffer.
const indexCount = mesh.triangles.length * 3;
const indexBuffer = device.createBuffer({
    size: indexCount * Uint16Array.BYTES_PER_ELEMENT,
    usage: GPUBufferUsage.INDEX,
    mappedAtCreation: true,
});
{
    const mapping = new Uint16Array(indexBuffer.getMappedRange());
    for (let i = 0; i < mesh.triangles.length; ++i) {
        mapping.set(mesh.triangles[i], 3 * i);
    }
    indexBuffer.unmap();
}
// GBuffer texture render targets
const gBufferTexture2DFloat16 = device.createTexture({
    size: [canvas.width, canvas.height],
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    format: 'rgba16float',
});
const gBufferTextureAlbedo = device.createTexture({
    size: [canvas.width, canvas.height],
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    format: 'bgra8unorm',
});
const depthTexture = device.createTexture({
    size: [canvas.width, canvas.height],
    format: 'depth24plus',
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
});
const gBufferTextureViews = [
    gBufferTexture2DFloat16.createView(),
    gBufferTextureAlbedo.createView(),
    depthTexture.createView(),
];
const vertexBuffers = [
    {
        arrayStride: Float32Array.BYTES_PER_ELEMENT * 8,
        attributes: [
            {
                // position
                shaderLocation: 0,
                offset: 0,
                format: 'float32x3',
            },
            {
                // normal
                shaderLocation: 1,
                offset: Float32Array.BYTES_PER_ELEMENT * 3,
                format: 'float32x3',
            },
            {
                // uv
                shaderLocation: 2,
                offset: Float32Array.BYTES_PER_ELEMENT * 6,
                format: 'float32x2',
            },
        ],
    },
];
const primitive = {
    topology: 'triangle-list',
    cullMode: 'back',
};
const writeGBuffersPipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({
            code: vertexWriteGBuffers,
        }),
        buffers: vertexBuffers,
    },
    fragment: {
        module: device.createShaderModule({
            code: fragmentWriteGBuffers,
        }),
        targets: [
            // normal
            { format: 'rgba16float' },
            // albedo
            { format: 'bgra8unorm' },
        ],
    },
    depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus',
    },
    primitive,
});
const gBufferTexturesBindGroupLayout = device.createBindGroupLayout({
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
                sampleType: 'unfilterable-float',
            },
        },
        {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
                sampleType: 'unfilterable-float',
            },
        },
        {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
                sampleType: 'depth',
            },
        },
    ],
});
const lightsBufferBindGroupLayout = device.createBindGroupLayout({
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
            buffer: {
                type: 'read-only-storage',
            },
        },
        {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
            buffer: {
                type: 'uniform',
            },
        },
        {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
                type: 'uniform',
            },
        },
    ],
});
const gBuffersDebugViewPipeline = device.createRenderPipeline({
    layout: device.createPipelineLayout({
        bindGroupLayouts: [gBufferTexturesBindGroupLayout],
    }),
    vertex: {
        module: device.createShaderModule({
            code: vertexTextureQuad,
        }),
    },
    fragment: {
        module: device.createShaderModule({
            code: fragmentGBuffersDebugView,
        }),
        targets: [
            {
                format: presentationFormat,
            },
        ],
        constants: {
            canvasSizeWidth: canvas.width,
            canvasSizeHeight: canvas.height,
        },
    },
    primitive,
});
const deferredRenderPipeline = device.createRenderPipeline({
    layout: device.createPipelineLayout({
        bindGroupLayouts: [
            gBufferTexturesBindGroupLayout,
            lightsBufferBindGroupLayout,
        ],
    }),
    vertex: {
        module: device.createShaderModule({
            code: vertexTextureQuad,
        }),
    },
    fragment: {
        module: device.createShaderModule({
            code: fragmentDeferredRendering,
        }),
        targets: [
            {
                format: presentationFormat,
            },
        ],
    },
    primitive,
});
const writeGBufferPassDescriptor = {
    colorAttachments: [
        {
            view: gBufferTextureViews[0],
            clearValue: [0.0, 0.0, 1.0, 1.0],
            loadOp: 'clear',
            storeOp: 'store',
        },
        {
            view: gBufferTextureViews[1],
            clearValue: [0, 0, 0, 1],
            loadOp: 'clear',
            storeOp: 'store',
        },
    ],
    depthStencilAttachment: {
        view: depthTexture.createView(),
        depthClearValue: 1.0,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
    },
};
const textureQuadPassDescriptor = {
    colorAttachments: [
        {
            // view is acquired and set in render loop.
            view: undefined,
            clearValue: [0, 0, 0, 1],
            loadOp: 'clear',
            storeOp: 'store',
        },
    ],
};
const settings = {
    mode: 'rendering',
    numLights: 128,
};
const configUniformBuffer = (() => {
    const buffer = device.createBuffer({
        size: Uint32Array.BYTES_PER_ELEMENT,
        mappedAtCreation: true,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    new Uint32Array(buffer.getMappedRange())[0] = settings.numLights;
    buffer.unmap();
    return buffer;
})();
const gui = new GUI$1();
gui.add(settings, 'mode', ['rendering', 'gBuffers view']);
gui
    .add(settings, 'numLights', 1, kMaxNumLights)
    .step(1)
    .onChange(() => {
    device.queue.writeBuffer(configUniformBuffer, 0, new Uint32Array([settings.numLights]));
});
const modelUniformBuffer = device.createBuffer({
    size: 4 * 16 * 2, // two 4x4 matrix
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});
const cameraUniformBuffer = device.createBuffer({
    size: 4 * 16 * 2, // two 4x4 matrix
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});
const sceneUniformBindGroup = device.createBindGroup({
    layout: writeGBuffersPipeline.getBindGroupLayout(0),
    entries: [
        {
            binding: 0,
            resource: {
                buffer: modelUniformBuffer,
            },
        },
        {
            binding: 1,
            resource: {
                buffer: cameraUniformBuffer,
            },
        },
    ],
});
const gBufferTexturesBindGroup = device.createBindGroup({
    layout: gBufferTexturesBindGroupLayout,
    entries: [
        {
            binding: 0,
            resource: gBufferTextureViews[0],
        },
        {
            binding: 1,
            resource: gBufferTextureViews[1],
        },
        {
            binding: 2,
            resource: gBufferTextureViews[2],
        },
    ],
});
// Lights data are uploaded in a storage buffer
// which could be updated/culled/etc. with a compute shader
const extent = vec3.sub(lightExtentMax, lightExtentMin);
const lightDataStride = 8;
const bufferSizeInByte = Float32Array.BYTES_PER_ELEMENT * lightDataStride * kMaxNumLights;
const lightsBuffer = device.createBuffer({
    size: bufferSizeInByte,
    usage: GPUBufferUsage.STORAGE,
    mappedAtCreation: true,
});
// We randomaly populate lights randomly in a box range
// And simply move them along y-axis per frame to show they are
// dynamic lightings
const lightData = new Float32Array(lightsBuffer.getMappedRange());
const tmpVec4 = vec4.create();
let offset = 0;
for (let i = 0; i < kMaxNumLights; i++) {
    offset = lightDataStride * i;
    // position
    for (let i = 0; i < 3; i++) {
        tmpVec4[i] = Math.random() * extent[i] + lightExtentMin[i];
    }
    tmpVec4[3] = 1;
    lightData.set(tmpVec4, offset);
    // color
    tmpVec4[0] = Math.random() * 2;
    tmpVec4[1] = Math.random() * 2;
    tmpVec4[2] = Math.random() * 2;
    // radius
    tmpVec4[3] = 20.0;
    lightData.set(tmpVec4, offset + 4);
}
lightsBuffer.unmap();
const lightExtentBuffer = device.createBuffer({
    size: 4 * 8,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});
const lightExtentData = new Float32Array(8);
lightExtentData.set(lightExtentMin, 0);
lightExtentData.set(lightExtentMax, 4);
device.queue.writeBuffer(lightExtentBuffer, 0, lightExtentData.buffer, lightExtentData.byteOffset, lightExtentData.byteLength);
const lightUpdateComputePipeline = device.createComputePipeline({
    layout: 'auto',
    compute: {
        module: device.createShaderModule({
            code: lightUpdate,
        }),
    },
});
const lightsBufferBindGroup = device.createBindGroup({
    layout: lightsBufferBindGroupLayout,
    entries: [
        {
            binding: 0,
            resource: {
                buffer: lightsBuffer,
            },
        },
        {
            binding: 1,
            resource: {
                buffer: configUniformBuffer,
            },
        },
        {
            binding: 2,
            resource: {
                buffer: cameraUniformBuffer,
            },
        },
    ],
});
const lightsBufferComputeBindGroup = device.createBindGroup({
    layout: lightUpdateComputePipeline.getBindGroupLayout(0),
    entries: [
        {
            binding: 0,
            resource: {
                buffer: lightsBuffer,
            },
        },
        {
            binding: 1,
            resource: {
                buffer: configUniformBuffer,
            },
        },
        {
            binding: 2,
            resource: {
                buffer: lightExtentBuffer,
            },
        },
    ],
});
//--------------------
// Scene matrices
const eyePosition = vec3.fromValues(0, 50, -100);
const upVector = vec3.fromValues(0, 1, 0);
const origin = vec3.fromValues(0, 0, 0);
const projectionMatrix = mat4.perspective((2 * Math.PI) / 5, aspect, 1, 2000.0);
// Move the model so it's centered.
const modelMatrix = mat4.translation([0, -45, 0]);
device.queue.writeBuffer(modelUniformBuffer, 0, modelMatrix);
const invertTransposeModelMatrix = mat4.invert(modelMatrix);
mat4.transpose(invertTransposeModelMatrix, invertTransposeModelMatrix);
const normalModelData = invertTransposeModelMatrix;
device.queue.writeBuffer(modelUniformBuffer, 64, normalModelData.buffer, normalModelData.byteOffset, normalModelData.byteLength);
// Rotates the camera around the origin based on time.
function getCameraViewProjMatrix() {
    const rad = Math.PI * (Date.now() / 5000);
    const rotation = mat4.rotateY(mat4.translation(origin), rad);
    const rotatedEyePosition = vec3.transformMat4(eyePosition, rotation);
    const viewMatrix = mat4.lookAt(rotatedEyePosition, origin, upVector);
    return mat4.multiply(projectionMatrix, viewMatrix);
}
function frame() {
    const cameraViewProj = getCameraViewProjMatrix();
    device.queue.writeBuffer(cameraUniformBuffer, 0, cameraViewProj.buffer, cameraViewProj.byteOffset, cameraViewProj.byteLength);
    const cameraInvViewProj = mat4.invert(cameraViewProj);
    device.queue.writeBuffer(cameraUniformBuffer, 64, cameraInvViewProj.buffer, cameraInvViewProj.byteOffset, cameraInvViewProj.byteLength);
    const commandEncoder = device.createCommandEncoder();
    {
        // Write position, normal, albedo etc. data to gBuffers
        const gBufferPass = commandEncoder.beginRenderPass(writeGBufferPassDescriptor);
        gBufferPass.setPipeline(writeGBuffersPipeline);
        gBufferPass.setBindGroup(0, sceneUniformBindGroup);
        gBufferPass.setVertexBuffer(0, vertexBuffer);
        gBufferPass.setIndexBuffer(indexBuffer, 'uint16');
        gBufferPass.drawIndexed(indexCount);
        gBufferPass.end();
    }
    {
        // Update lights position
        const lightPass = commandEncoder.beginComputePass();
        lightPass.setPipeline(lightUpdateComputePipeline);
        lightPass.setBindGroup(0, lightsBufferComputeBindGroup);
        lightPass.dispatchWorkgroups(Math.ceil(kMaxNumLights / 64));
        lightPass.end();
    }
    {
        if (settings.mode === 'gBuffers view') {
            // GBuffers debug view
            // Left: depth
            // Middle: normal
            // Right: albedo (use uv to mimic a checkerboard texture)
            textureQuadPassDescriptor.colorAttachments[0].view = context
                .getCurrentTexture()
                .createView();
            const debugViewPass = commandEncoder.beginRenderPass(textureQuadPassDescriptor);
            debugViewPass.setPipeline(gBuffersDebugViewPipeline);
            debugViewPass.setBindGroup(0, gBufferTexturesBindGroup);
            debugViewPass.draw(6);
            debugViewPass.end();
        }
        else {
            // Deferred rendering
            textureQuadPassDescriptor.colorAttachments[0].view = context
                .getCurrentTexture()
                .createView();
            const deferredRenderingPass = commandEncoder.beginRenderPass(textureQuadPassDescriptor);
            deferredRenderingPass.setPipeline(deferredRenderPipeline);
            deferredRenderingPass.setBindGroup(0, gBufferTexturesBindGroup);
            deferredRenderingPass.setBindGroup(1, lightsBufferBindGroup);
            deferredRenderingPass.draw(6);
            deferredRenderingPass.end();
        }
    }
    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
//# sourceMappingURL=main.js.map