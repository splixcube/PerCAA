import './App.css'
import { Routes, Route } from 'react-router-dom'
import Registration from './components/Registration/Registration'
import Contact from './components/Contact/Contact'
import Home from './components/HomeContent/Home'
import Navbar from './components/Navbar/Navbar'
import CallForPapers from './components/CallForPapers/CallForPapers'
import TopComp from './components/topComp/TopComp'
import LocalAttractions from './components/LocalAttractions/LocalAttractions'
import Venue from './components/Venue/Venue'
import Speakers from './components/Speakers/Speakers'
import AuthorGuidelines from './components/AuthorGuidelines/AuthorGuidelines'
import ImportantDates from './components/ImportantDates/ImportantDates'
import TechnicalCommittee from './components/TechnicalCommittee/TechnicalCommittee'
import LocalOrganizingCommittee from './components/LocalOrganizingCommittee/LocalOrganizingCommittee'
import OrganizingCommittee from './components/OrganizingCommittee/OrganizingCommittee'
import Publication from './components/Publication/Publication'
import PerCAA_2020 from './components/PerCAA-2020/PerCAA-2020'
import PerCAA_2024 from './components/PerCAA-2024/PerCAA-2024'

function App() {
  return (
    
    <>
      <Navbar />
      <TopComp />
      
      
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/local-attractions' element={<LocalAttractions />} />
          <Route path='/venue' element={<Venue />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/callForPaper' element={<CallForPapers />} />
          <Route path='/author-guidelines' element={<AuthorGuidelines />} />
          <Route path='/important-dates' element={<ImportantDates />} />
          <Route path='/technical-committee' element={<TechnicalCommittee />} />
          <Route path='/local-organizing-comittee' element={<LocalOrganizingCommittee />} />
          <Route path='/organizing-committee' element={<OrganizingCommittee />} />
          <Route path='/publication' element={<Publication />} />
          <Route path='/PerCAA-2020' element={<PerCAA_2020 />} />
          <Route path='/PerCAA-2024' element={<PerCAA_2024 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
