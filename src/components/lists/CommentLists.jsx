import { CommentCard } from '../cards';

const CommentLists = ({ comments, ...props }) => {
  return (
    <section className='mt-4'>
      <h3 className='font-bold'>Komentar</h3>
      <div className='mt-1 flex flex-col gap-2'>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} {...props} />
          ))
        ) : (
          <div>Belum ada komentar.</div>
        )}
      </div>
    </section>
  );
};

export default CommentLists;
