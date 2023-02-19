import { CommentCard } from '../cards';

const CommentLists = ({ comments }) => {
  return (
    <section className='mt-4'>
      <h3 className='font-bold'>Komentar</h3>
      <div className='mt-1 flex flex-col gap-2'>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentLists;