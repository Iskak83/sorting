describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([[], 0]);
  });

  it('handles sorting', function () {
    expect(bubbleSort([34, 2, 21, 67, 8, 1])).toEqual([
      [1, 2, 8, 21, 34, 67],
      36,
    ]);
  });

  it('handles same numbers sorting', function () {
    expect(bubbleSort([3, 3, 6, 20, -1])).toEqual([[-1, 3, 3, 6, 20], 25]);
  });

  it('handles negative sorting', function () {
    expect(bubbleSort([34, -23, 2, 21, 67, -5, 8, 1])).toEqual([
      [-23, -5, 1, 2, 8, 21, 34, 67],
      64,
    ]);
  });

  it('handles letter sorting', function () {
    expect(bubbleSort(['Z', 'G', 'Y', 'A'])).toEqual([
      ['A', 'G', 'Y', 'Z'],
      16,
    ]);
  });

  it('stops passing through once the array is sorted', function () {
    expect(bubbleSort([1, 2, 4, 3, 5, 6])).toBe(5);
    expect(bubbleSort([1, 2, 4, 3])).toBe(5);
  });
});
