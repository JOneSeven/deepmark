<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function dashboardAction()
    {
        return $this->render('AppBundle:Default:dashboard.html.twig', array(
            // ...
        ));
    }

}
