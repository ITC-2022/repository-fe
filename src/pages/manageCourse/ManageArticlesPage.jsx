import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteArticle, getAllArticles } from '../../utils/article';

// Components
import Button from '../../components/buttons/Button';
import { SearchBar } from '../../components/forms';
import { ManageCourseCard } from '../../components/cards';
import { ModalDelete } from '../../components/modal';
import OverlayLoading from '../../components/overlay/OverlayLoading';

const ManageArticlesPage = () => {
  const navigate = useNavigate();
  const { id_materi, id_bab } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const toAddArtikel = () => navigate('add/');
  const openModalDelete = () => setIsModalDeleteOpen(true);
  const closeModalDelete = () => setIsModalDeleteOpen(false);

  const onClickDeleteHandler = (e, article) => {
    e.preventDefault();
    setSelectedArticle(article);
    openModalDelete();
  };

  const getAllArticleHandler = () => {
    getAllArticles(id_materi, id_bab)
      .then(setArticles)
      .catch(({ data }) => console.log(data.message))
      .finally(() => setIsLoading(false));
  };

  const deleteArticleHandler = () => {
    closeModalDelete(); // Close modal
    setIsLoading(true);

    deleteArticle(id_materi, id_bab, selectedArticle.id)
      .then(() => setSelectedArticle({}))
      .catch(({ data }) => console.log(data.message))
      .finally(() => getAllArticleHandler());
  };

  useEffect(() => {
    getAllArticleHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
        <div>
          <h1 className='text-xl'>Artikel</h1>
          <p className='text-gray-dark text-sm'>{articles.length} Artikel</p>
        </div>
        <Button
          onClick={toAddArtikel}
          variant='icon-right'
          icon='akar-icons:plus'
        >
          Tambah Artikel
        </Button>
      </div>

      {/* Search Bar */}
      <div className='mt-4 sm:mt-3'>
        <SearchBar />
      </div>

      {/* Card List */}
      <section className='mt-4 flex flex-col gap-4'>
        {articles?.map(({ id, title }) => (
          <Link key={id} to={`${id}`}>
            <ManageCourseCard
              type='artikel'
              onClickDelete={(e) => onClickDeleteHandler(e, { id, title })}
            >
              <p>{title}</p>
            </ManageCourseCard>
          </Link>
        ))}
      </section>

      {/* Delete bab dialog (modal) */}
      <ModalDelete
        show={isModalDeleteOpen}
        onClose={closeModalDelete}
        onClickDelete={deleteArticleHandler}
        title='Hapus Artikel'
      >
        <p className='text-sm text-gray-500'>
          Apakah anda yakin ingin menghapus Artikel:
        </p>
        <p className='mt-1 font-bold text-base text-black'>
          {selectedArticle.title}
        </p>
      </ModalDelete>

      {/* Loading screen */}
      <OverlayLoading
        loadingState={isLoading}
        onClose={() => setIsLoading(true)}
      />
    </>
  );
};

export default ManageArticlesPage;