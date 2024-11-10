// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { getPosts, createPost } from '@/lib/mongodb/actions/posts';

export async function GET() {
  const { posts, error } = await getPosts();
  
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { post, error } = await createPost(body);
  
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  return NextResponse.json({ post }, { status: 201 });
}