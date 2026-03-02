---
algolia_search:
  indices:
    - name: posts
      class: App\Entity\Post
    - name: comments
      class: App\Entity\Comment
#$searchService->index($entityManager, $postsAndComments);
#$em = $this->getDoctrine()->getManagerForClass(Post::class);
#$posts = $this->searchService->search($em, Post::class, 'query');
---
