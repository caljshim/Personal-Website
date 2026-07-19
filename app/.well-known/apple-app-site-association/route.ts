const association = {
  applinks: {
    details: [
      {
        appIDs: ["43Z2N5D3UT.calebshim.goals-app"],
        components: [
          {
            "/": "/plaid/*",
            comment: "Plaid OAuth return",
          },
        ],
      },
    ],
  },
};

export const dynamic = "force-static";

export function GET() {
  return Response.json(association);
}
