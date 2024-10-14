import { EmployeesTable, useEmployees } from 'entities/employee';
import { Pagination, ToolbarWithSearch } from 'shared';

export const EmployeesPage = () => {
    const {
        employees,
        meta,
        search: { query, setQuery },
        loadingStatus,
    } = useEmployees();

    return (
        <>
            <ToolbarWithSearch
                title={'Сотрудники'}
                inputPlaceHolder={'Поиск'}
                buttonLink={'/employees/create'}
                buttonText={'Добавить нового сотрудника'}
                searchQuery={query}
                setSearchQuery={setQuery}
            />
            {/* <Tabs value={tabIndex} onChange={handleTabChange} centered>
                <Tab label='Активные сотрудники' />
                <Tab label='Архивные сотрудники' />
            </Tabs> */}

            <EmployeesTable
                employees={employees}
                meta={meta as Pagination}
                loadingStatus={loadingStatus}
            />
        </>
    );
};
