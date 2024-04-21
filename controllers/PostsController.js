import prisma from "../config/prisma.js";

class PostsController {
  async index(req, res) {
    const posts = await prisma.post.findMany();
    return res.status(200).send(posts);
  }

  async store(req, res) {
    try {
      const body = req.body;
      const post = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          published: true,
          author: {
            connect: {
              id: parseInt(body.authorId),
            },
          },
        },
      });
      return res.status(201).send(post);
    } catch (e) {
      res.status(409).send(`Erreur : ${e}`);
    }
  }

  async show(req, res) {
    const title = req.params.title;
    const post = await prisma.post.findMany({
      where: {
        title: {
          startsWith: title,
        },
      },
      orderBy: {
        title: "asc",
      },
    });

    if (!post) {
      return res.status(404).send("Post pas trouvé");
    }
    return res.status(200).send(post);
  }

  async update(req, res) {
    const body = req.body;
    const id = req.params.id;
    let post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!post) {
      return res.status(404).send("Post pas trouvé");
    }

    post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        content: body.content,
        published: true,
        author: body.author,
      },
    });
    return res.status(200).send(post);
  }

  async destroy(req, res) {
    const id = req.params.id;
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!post) {
      return res.status(404).send("Post pas trouvé");
    }

    await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    return res.status(200);
  }
}

export default new PostsController();
