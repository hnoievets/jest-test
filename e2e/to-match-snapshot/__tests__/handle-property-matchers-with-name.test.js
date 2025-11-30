test('handles property matchers with deep properties', () => {
  expect({ user: { createdAt: new Date(), name: "Jest" }}).toMatchSnapshot({ user: { createdAt: expect.any(Date), name: "Jest" }});
});