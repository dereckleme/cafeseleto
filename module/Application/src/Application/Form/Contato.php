<?php 

namespace Application\Form;

use Zend\Form\Form;

class Contato extends Form{
	
	public function __construct($name = null){
		parent::__construct('contato');
		
		$this->setAttribute('method', 'post')
			 ->setAttribute('id', 'form_contato');
		$this->setInputFilter(new ContatoFilter);
		
		$this->add(array(
           'name' => 'nome',
            'options' => array(
                'type' => 'text',                
            ),
            'attributes' => array(
                'placeholder' => 'NOME',
            	'class' => 'statusNome'
            )
        ));
		
		$this->add(array(
           'name' => 'email',
            'options' => array(
                'type' => 'email',                
            ),
            'attributes' => array(
                'placeholder' => 'E-MAIL',
            	'class' => 'statusEmail'
            )
        ));
		
		$this->add(array(
           'name' => 'phone',
            'options' => array(
                'type' => 'tel',                
            ),
            'attributes' => array(
                'placeholder' => 'TELEFONE',
            	'class' => 'statusTelefone'
            )
        ));
		
		$this->add(array(
			'type' => 'Zend\Form\Element\Select',
			'name' => 'destinatario',
			'options' => array(						
				'value_options' => array(
						'' => 'DESTINATÁRIO',
						'1' => 'ADM',
						'2' => 'MKT',
						'3' => 'SAC',
						'4' => 'TRABALHE CONOSCO',
				),
			),
			'attributes' => array(
				'class' => 'select'
			)
		));
		
		$this->add(array(
           'name' => 'mensagem',
			'type' => 'Zend\Form\Element\Textarea',
            'attributes' => array(
                'placeholder' => 'MENSAGEM',
            	'class' => 'statusMensagem',
            	'id' => 'mensagem'
            )
        ));
		
		$this->add(array(
           'name' => 'submit',
            'type' => 'Zend\Form\Element\Submit',
            'attributes' => array(
                'value' => 'Enviar',
                'class' => 'enviar',
            	'id' => 'btnEnviar'
            )
        ));
		
	}
	
	
}