import React, {Component} from 'react';
import {Grid, Cell,Tooltip,Icon} from 'react-mdl';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import Publications from './publications';
import Awards from './awards';
import References from './references';
import './resume.scss';

class Resume extends Component {
    render() {
        return(
                <Grid className="resume-grid">
                    <Cell className="resume-col resume-left-col" col={4}> 
                        <h1>A designer who codes</h1>
                        <h2>
                            {/* I create evocative websites with catchy copy, that center around intuitive, responsive designs and inspire users.  <hr/> */}
                            I have a background in Data Science, where I specialised in genetics research, particularly Big Data Analytics.<hr/>
                            I now combine my analytical skills and strong attention to detail with modern development tools and an understanding of UX Design, to build effective, pixel perfect web solutions from start to finish. 
                           {/* <hr/>
                            I'm passionate about photography, travel and inspiring others.<hr/> */}

                        </h2>
                    </Cell>
                    <Cell className="resume-col resume-right-col" col={8}>
                            <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                                <Icon name="arrow_downward" />
                            </Tooltip>
                        <h2>Skills</h2>
                        {/* <div className="scale">
                            {/* <p>Scale</p> */}
                            {/* <hr/> */}
                        {/* </div>  */}

                        <Skills
                            skill="HTML / CSS (SASS)"
                            progress={80}
                        />
                        <Skills
                            skill="JavaScript / TypeScript"
                            progress={50}
                        />
                         <Skills
                            skill="React"
                            progress={50}
                        />
                         <Skills
                            skill="Wordpress & WooCommerce"
                            progress={80}
                        />
                         <Skills
                            skill="Git & Github"
                            progress={70}
                        />
                        
                         <Skills
                            skill="Visual Studio Code, Sublime Text, Vim"
                            progress={70}
                        />
                         <Skills
                            skill="Adobe Suite: Ps, Lr, Ai, Id, Xd"
                            progress={60}
                        />
                         <Skills
                            skill="Photography & Editing"
                            progress={60}
                        />
                        <Skills
                            skill="Unix-based tools"
                            progress={60}
                        />
                        <Skills
                            skill="Big Data Analysis"
                            progress={85}
                        />
                        <Skills
                            skill="R"
                            progress={85}
                        />
                        <Skills
                            skill="Python"
                            progress={20}
                        />
                        <Skills
                            skill="Machine Learning"
                            progress={20}
                        />
                        <Skills
                            skill="Statistics"
                            progress={85}
                        />
                        <Skills
                            skill="Project Management"
                            progress={85}
                        />
                        <Skills
                            skill="Molecular Biology"
                            progress={100}
                        />
                        <hr/>
                         <h2>Experience</h2>
                        <Experience
                            startYear={2020}
                            jobName="Freelance Web Developer"
                            project="Brands on Parade Bottle Shop"
                            jobDescription="A modern e-commerce site built with WooCommerce. For details of this work please see the projects tab."
                            url="https://brandsonparade.com"
                            site="Visit site"
                            // project2="Cazalye Travel Blog"
                            // jobDescription2="A travel website focused on adventure inspiration & photography"
                            // url2="www.cazalye.com"
                        />
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName="Post-doctoral Researcher: Institute for Molecular Medicine Finland"
                            jobDescription="I processed and analysed big data (biological & survey data) from over 2,000 individuals to determine the various
                            contributions of inherited and environmental factors in complex disease
                            aetiology. I co-supervised 5 post-graduate students, wrote and reviewed grant applications and was the 1st author on a cross-disciplinary article examining data integration approaches in epigenetics."
                        />
                        <Experience
                            startYear={2016}
                            endYear={2017}
                            jobName="Research Assistant: Menzies Institute for Medical Research"
                            jobDescription="I investigated the key barriers and enablers to the undergraduate research experience, in over 300 students, across 4 medical science degrees. I managed online surveys, collated and de-identified responses, analysed data in NVivo and prepared results for publication."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="PhD Candiate: Menzies Institue for Medical Research"
                            jobDescription="Through a cross-disciplinary PhD, I developed a range of wet-lab molecular biology and data analysis skills. I combined this expertise to examine genetic and epigenetic predisposition to familial prostate cancer, resulting in the publication of 2 first author articles, 7 national & international conference
                            presentations and 3 awards, valued at over 120,000 AUD." 
                        />
                        <Experience
                            startYear={2016}
                            endYear={2016}
                            jobName="Marketing Assistant: University of Tasmania"
                            jobDescription="I was the sole marketing support officer responsible for 'Research Week', the University's flagship research event with 44 events delivered state-
                            wide, attracting over 1500 participants from the University and wider
                            community."
                        />
                        <Experience
                            startYear={2013}
                            endYear={2016}
                            jobName="Tertiary Level Teaching: University of Tasmania"
                            jobDescription="Throughout my PhD candidature I engaged in casual teaching roles
                            including tutoring, laboratory demonstrating and marking to Medicine, Science and Pharmacy students. I communicated
                            complex scientific ideas, and facilitated student discussion and learning."
                        />
                        <Experience
                            startYear={2009}
                            endYear={2011}
                            jobName="Assistant Manager: Flight Centre Ulverstone"
                            jobDescription="I tailored leisure and business travel for a range of
                            clients, which required exceptional customer service, sales, and product and destination
                            knowledge. I consistently achieved excellent results though daily KPIs, mystery shopping, and monthly and annual targets. As assistant manager I was also responsible for
                            finances, planning, staff development, conflict resolution and customer
                            care."
                        />

                        <hr/>
                        <h2>Education</h2>  
                        <Education
                            startYear={2012} 
                            endYear={2016}
                            schoolName="Menzies Institue for Medical Research & University of Tasmania"
                            schoolDescription="PhD in Medical Research, School of Medicine"
                            certificate="PhD Award"
                            certificateUrl="https://drive.google.com/file/d/1upF1VnBDNp6Wo6rjOyexVrGTj16JxDmt/view?usp=sharing"
                        />
                        <Education 
                            startYear={2004} 
                            endYear={2008}
                            schoolName="University of Tasmania"
                            schoolDescription="Bachelor of Medical Research with First Class Honours"
                            certificate="Academic Transcript"
                            certificateUrl="https://drive.google.com/file/d/1iOuJ_ZhvyLSf-gmL-uoLpe24KwdGikNF/view?usp=sharing"
                        />
                        <hr/>
                         <h2>First author Publications</h2>
                        <Publications
                            publicationYear={2020}
                            publicationTitle="Associations of alcohol consumption with epigenome-wide DNA methylation and epigenetic age acceleration: Individual-level and co-twin comparison analyses (Under Review)"
                            publicationJournal="Alcoholism: Clinical and Experimental Research"
                        />
                        <Publications
                            publicationYear={2019}
                            publicationTitle="Making Sense of the Epigenome Using Data Integration Approaches"
                            publicationLink="https://doi.org/10.3389/fphar.2019.00126"
                            publicationJournal="Frontiers in Pharmacology"
                        />
                        <Publications
                            publicationYear={2016}
                            publicationTitle="Comparison of pre-processing methodologies for Illumina 450k methylation array data in familial analyses"
                            publicationLink="https://doi.org/10.1186/s13148-016-0241-2"
                            publicationJournal="Clinical Epigenetics"
                        />
                        <Publications
                            publicationYear={2015}
                            publicationTitle="Genetic Determinants of Epigenetic Patterns: Providing Insight into Disease"
                            publicationLink="https://doi.org/10.2119%2Fmolmed.2015.00001"
                            publicationJournal="Molecular Medicine"
                        />

                        <hr/>
                        <h2>Awards</h2>
                        <Awards
                            year="2014 - 2016" 
                            awardTitle="Cancer Auxiliary
                            PhD Scholarship"
                            awardAmount="15,000 AUD"
                        />
                        <Awards
                            year="2012 - 2016"
                            awardTitle="Australian Post
                            Graduate Award"
                            awardAmount="100,000 AUD"
                        />
                        <Awards
                            year="2008"
                            awardTitle="Menzies Institute
                            Honours Scholarship"
                            awardAmount="5,000 AUD"
                        />
                        <Awards
                            year="2004"
                            awardTitle="Dean's Roll of Excellence"
                            awardAmount=""
                        />
                        <Awards
                            year="2004"
                            awardTitle="Golden Key International Honour Society"
                            awardAmount=""
                        />

                        <hr/>
                        <h2>References</h2>
                        <References
                            Name="Professor Jaakko Kaprio"
                            Description="Laboratory Head, Previous Institute Director"
                            Company="Institute for Molecular Medicine Finland"
                            Email="jaako.kaprio@helsinki.fi"
                            Phone="+358 294 127 595"
                        />
                        <References
                            Name="Associate Professor Jing Tang"
                            Description="Collaborator, co-author of 2019 publication"
                            Company="Institute for Molecular Medicine Finland"
                            Email="jing.tang@fimm.fi"
                            Phone="NA"
                        />
                        <References
                            Name="Associate Professor Adele Holloway"
                            Description="PhD Supervisor & Mentor"
                            Company="Menzies Institue for Medical Research"
                            Email="a.f.holloway@utas.edu.au"
                            Phone='+61 3 6226 2670'
                        />
                        <References
                            Name="Mr. Bentley Deegan"
                            Description="Business Director"
                            Company="Brands on Parade"
                            Email="bentley@brandsonparade.com"
                            Phone='+61 467 633 815'
                        />
                    </Cell>
                </Grid>
        )
    }
}

export default Resume;

