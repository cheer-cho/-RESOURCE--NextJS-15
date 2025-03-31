import { users } from '../route';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === Number(id));

  return Response.json(user);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return new Response('User not found', { status: 404 });
  }

  const updatedUser = await request.json();
  Object.assign(user, updatedUser);

  return new Response(JSON.stringify(user), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return new Response('User not found', { status: 404 });
  }

  users.splice(userIndex, 1);

  return new Response(null, {
    status: 204,
  });
}
