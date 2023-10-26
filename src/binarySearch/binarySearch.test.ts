import BinarySearch from "./binarySearch";

import {test, expect} from '@jest/globals';

//not testing with wrong types and empty arrays because TypeScript solves this cases

test('success search a string in a sorted array of strings', () => {
    let arr = ['anything', 'something', 'str', 'test'];
    expect(BinarySearch(arr, 'str')).toBe(2);
});

test('success search a number in a sorted array of numbers', () => {
    let arr = [3, 19, 45, 90, 896];
    expect(BinarySearch(arr, 90)).toBe(3);
});

test('fail search a string in a sorted array of strings', () => {
    let arr = ['anything', 'something', 'str', 'test'];
    expect(BinarySearch(arr, 'teststr')).toBe(undefined);
});

test('fail search a number in a sorted array of numbers', () => {
    let arr = [3, 19, 45, 90, 896];
    expect(BinarySearch(arr, 15)).toBe(undefined);
});

test('fail search a string in a sorted array of numbers', () => {
    let arr = [3, 19, 45, 90, 896];
    expect(BinarySearch(arr, '3')).toBe(undefined);
});

test('fail search a number in a sorted array of strings', () => {
    let arr = ['anything', 'something', 'str', 'test'];
    expect(BinarySearch(arr, 3)).toBe(undefined);
});